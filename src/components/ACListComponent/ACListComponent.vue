<script type="text/jsx">
    const componentsList = {};
    export default {
        name: "ACListComponent",
        components: componentsList,
        props:{
            conferenceList: {
                type: Array,
                default: () => ([])
            }
        },
        watch:{
            conferenceList(newVal){
                this.localConferenceList = newVal;
            }
        },
        data() {
            return {
                localConferenceList: this.conferenceList,
                reversed: false,
                timeLeft: 210,
                random: null,
                userAudio: true,
                minutesAdded: 0,
                timeAdded: false
            }
        },
        computed: {
            sortedList() {
                if(this.reversed) {
                    return this.localConferenceList?.sort(this.compareFunc).reverse();
                } else {
                    return this.localConferenceList?.sort(this.compareFunc);
                }
            }
        },
        mounted() {
            this.random = Math.random();
        },
        created() {},
        methods: {
            toggleOpen($event){
                $event.target.closest('.conference-list__item').classList.toggle('conference-list__item--active');
            },
            invite(item) {
                this.$emit('set-chosen', item)
            },
            fixVisibility($event){
                $event.target.closest('.calendar-input').classList.remove('calendar-input--hidden');
            },
            filter(){
                console.log(this.$refs.filterSince.localValue)
                console.log(this.$refs.filterTill.localValue)
                if(!!this.$refs.filterSince.localValue && !!this.$refs.filterTill.localValue) {
                    this.localConferenceList = this.filterFunc(this.$refs.filterSince.localValue, new Date(this.$refs.filterTill.localValue).setDate(new Date(this.$refs.filterTill.localValue).getDate() + 1))
                } else if(!!this.$refs.filterSince.localValue) {
                    this.localConferenceList = this.filterFunc(this.$refs.filterSince.localValue, null)
                }else if(!!this.$refs.filterTill.localValue) {
                    this.localConferenceList = this.filterFunc(null, new Date(this.$refs.filterTill.localValue).setDate(new Date(this.$refs.filterTill.localValue).getDate() + 1))
                }
            },
            filterFunc(cond1,cond2){
                let filteredList = [];
                console.log(this.conferenceList);
                if(cond1 && cond2) {
                    filteredList = this.conferenceList.filter(item =>
                        new Date(item.date) > new Date(cond1) && new Date(item.date) < new Date(cond2)
                    )
                } else if(cond1) {
                    filteredList = this.conferenceList.filter(item => new Date(item.date) > new Date(cond1))
                } else if(cond2) {
                    filteredList = this.conferenceList.filter(item => new Date(item.date) < new Date(cond2))
                }
                return filteredList
            },
            deleteItem(item) {
                this.$emit('set-deletion', item)
            },
            compareFunc(a, b) {
                if(a.date > b.date){
                    return 1
                } else if(a.date < b.date){
                    return -1
                } else {
                    if(a.startHour < b.startHour){
                        return -1
                    } else if(a.startHour > b.startHour){
                        return 1
                    } else {
                        if(a.startMinute > b.startMinute) {
                            return 1
                        } else {
                            return -1
                        }
                    }
                }
            },
            toggleSort() {
                this.reversed = !this.reversed;
            },
            toggleSettings($event) {
                $event.target.closest('.conference-list__item').classList.toggle('conference-list__item--active');
            },
            addTime($event) {
                $event.stopPropagation();
                this.timeAdded = true;
                this.minutesAdded = this.minutesAdded + 10;
                this.timeLeft += 600;
                setTimeout(() => {
                    this.minutesAdded = 0;
                    this.timeAdded = false;
                },3000)
            },
            openPopup(item) {
                item.isActive ? this.$emit('manage-conf', item) : this.$emit('lookup-conf', item);
            }
        },
        render(h) {
            const conferenceBody = () => {
                return this.sortedList?.map((item, index) => {
                    if(index == 0) {
                        item.isActive = true;
                    } else {
                        item.isActive = false;
                    }
                    let localDate = item.date?.split('-').reverse().join('.');
                    const invite = ($event) => {
                        $event.stopPropagation();
                        this.invite(item);
                    };
                    const deleteItem = ($event) => {
                        $event.stopPropagation();
                        this.deleteItem(item);
                    };
                    const activeConference = () => {
                        item.timeLeft = this.timeLeft;
                        let hours = Math.floor(item.timeLeft / 3600);
                        let minutes = Math.floor((item.timeLeft % 3600) / 60);
                        let seconds = item.timeLeft - (hours * 3600 + minutes * 60);
                        let presence = Math.floor(item.quantity * this.random);
                        if(item.isActive) {
                            return <div class="conference-list__item-bottom-part d-flex">
                                <div class={"bottom-part-item countdown-timer " + (item.timeLeft <= 300 ? 'color-orange': 'color-main05') + (this.timeAdded ? ' countdown-timer--added' : null)}>Закончится через
                                    <span class="time-left"> {hours.toString().length < 2 ? ('0' + hours) : hours} : {minutes.toString().length < 2 ? ('0' + minutes) : minutes} : {seconds.toString().length < 2 ? ('0' + seconds) : seconds}</span>
                                    <div class="countdown-timer__disclaimer">Вы добавили {this.minutesAdded} минут</div>
                                </div>
                                <div class="bottom-part-item">{item.leaderPIN ? item.leaderPIN : item.noPIN ? 'без PIN' : '0000'} / {item.leaderPIN ? item.leaderPIN : 'без лидера'}</div>
                                <div class="bottom-part-item">{presence} подкл.</div>
                                <div class="bottom-part-item">
                                    <rt-button class="rt-button-orange-border color-orange" small={true} onClick={this.addTime}>+ 10 мин</rt-button>
                                </div>
                            </div>
                        }
                    };
                    const conferenceIcon = () => {
                        if(item.isActive) {
                            return <svg width="22px" height="19px" viewBox="0 0 22 19" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-171.000000, -353.000000)">
                                        <g transform="translate(150.000000, 331.000000)">
                                            <g transform="translate(20.000000, 20.000000)">
                                                <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                <path d="M9,13 C11.21,13 13,11.21 13,9 C13,6.79 11.21,5 9,5 C6.79,5 5,6.79 5,9 C5,11.21 6.79,13 9,13 Z M9,7 C10.1,7 11,7.9 11,9 C11,10.1 10.1,11 9,11 C7.9,11 7,10.1 7,9 C7,7.9 7.9,7 9,7 Z M9,15 C6.33,15 1,16.34 1,19 L1,21 L17,21 L17,19 C17,16.34 11.67,15 9,15 Z M3,19 C3.22,18.28 6.31,17 9,17 C11.7,17 14.8,18.29 15,19 L3,19 Z M15.08,7.05 C15.92,8.23 15.92,9.76 15.08,10.94 L16.76,12.63 C18.78,10.61 18.78,7.56 16.76,5.36 L15.08,7.05 L15.08,7.05 Z M20.07,2 L18.44,3.63 C21.21,6.65 21.21,11.19 18.44,14.37 L20.07,16 C23.97,12.11 23.98,6.05 20.07,2 Z" fill="#57D9B7" fill-rule="nonzero"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        } else {
                            return <svg width="18px" height="20px" viewBox="0 0 18 20" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-3.000000, -1.000000)" fill="#101828"
                                       fill-rule="nonzero">
                                        <path
                                            d="M19,3 L18,3 L18,1 L16,1 L16,3 L8,3 L8,1 L6,1 L6,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 Z M19,19 L5,19 L5,9 L19,9 L19,19 Z M19,7 L5,7 L5,5 L19,5 L19,7 Z M7,11 L12,11 L12,16 L7,16 L7,11 Z"></path>
                                    </g>
                                </g>
                            </svg>
                        }
                    };
                    const openPopup = () => {
                        this.openPopup(item);
                    };
                    const closedListIcon = () => {
                        if(item.closedList) {
                            return <div class="closed-list-icon sp-l-0-1">
                                <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-1039.000000, -349.000000)">
                                            <g transform="translate(1039.000000, 349.000000)">
                                                <polygon points="0 0 20 0 20 20 0 20"></polygon>
                                                <path d="M13.75,7.375 L13.125,7.375 L13.125,6.125 C13.125,4.4 11.725,3 10,3 C8.275,3 6.875,4.4 6.875,6.125 L6.875,7.375 L6.25,7.375 C5.5625,7.375 5,7.9375 5,8.625 L5,14.875 C5,15.5625 5.5625,16.125 6.25,16.125 L13.75,16.125 C14.4375,16.125 15,15.5625 15,14.875 L15,8.625 C15,7.9375 14.4375,7.375 13.75,7.375 Z M8.125,6.125 C8.125,5.0875 8.9625,4.25 10,4.25 C11.0375,4.25 11.875,5.0875 11.875,6.125 L11.875,7.375 L8.125,7.375 L8.125,6.125 Z M13.75,14.875 L6.25,14.875 L6.25,8.625 L13.75,8.625 L13.75,14.875 Z M10,13 C10.6875,13 11.25,12.4375 11.25,11.75 C11.25,11.0625 10.6875,10.5 10,10.5 C9.3125,10.5 8.75,11.0625 8.75,11.75 C8.75,12.4375 9.3125,13 10,13 Z" fill="#101828" fill-rule="nonzero"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <div class="closed-list-icon__hint">Закрытый список участников</div>
                            </div>
                        } else {
                            return null
                        }
                    };
                    return <div class={"conference-list__item rt-font-control " + (item.isActive ? ' conference-list__item--active' : null)} onClick={openPopup}>
                        <div class="conference-list__item-top-part d-flex">
                            <div class="conference-list__item-field">
                                <div class="conference-list__item__icon active-conference-icon">
                                    {conferenceIcon()}
                                </div>
                                <div class="conference-list__item__date">
                                    <p class={item.isActive ? 'color-green' : "color-main"}>{item.date ? localDate : '??.??.????'}</p>
                                    <p class={item.isActive ? 'color-green' : "color-main"}>
                                        {item.startHour ? item.startHour.toString().length < 2 ? ('0' + item.startHour) : item.startHour : '??'} : {item.startMinute ? item.startMinute.toString().length < 2 ? ('0' + item.startMinute) : item.startMinute : '??'}
                                    </p>
                                </div>
                            </div>
                            <div class="conference-list__item-field">{item.durationHour ? item.durationHour : '0'} ч {item.durationMinute ? item.durationMinute.toString().length < 2 ? ('0' + item.durationMinute) : item.durationMinute : '00'} мин</div>
                            <div class="conference-list__item-field">
                                <p class="ovh">{item.theme}</p>
                                <div class="conference-list__item-field__hint">{item.theme}</div>
                            </div>
                            <div class="conference-list__item-field">
                                <p class="ovh">{item.leader}</p>
                                <div class="conference-list__item-field__hint">{item.leader}</div>
                            </div>
                            <div class="conference-list__item-field">{item.leaderPIN ? item.leaderPIN : item.noPIN ? 'без PIN' : '0000'} / {item.leaderPIN ? item.leaderPIN : 'без лидера'}</div>
                            <div class="conference-list__item-field flex-start-center">
                                <div>{item.quantity ? item.quantity : 0}</div>
                                {closedListIcon()}
                            </div>
                            <div class="conference-list__item-field">{this.userAudio ? item.audio ? 'есть' : 'нет' : ''}</div>
                            <div class="conference-list__item-field">
                                <div class="conference-list__item__icon" onClick={openPopup}>
                                    <svg width="25px" height="24px" viewBox="0 0 25 24" version="1.1"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g transform="translate(1.000000, 0.000000)">
                                                <g transform="translate(11.000000, 12.000000) scale(-1, 1) translate(-11.000000, -12.000000) translate(-1.000000, 0.000000)">
                                                    <polygon points="-1 0 23 0 23 24 -1 24"></polygon>
                                                    <line x1="1" y1="6.5" x2="15" y2="6.5" stroke="#575D68"
                                                          stroke-width="2" stroke-linecap="square"></line>
                                                    <line x1="1" y1="18.5" x2="15" y2="18.5" stroke="#575D68"
                                                          stroke-width="2" stroke-linecap="square"></line>
                                                    <line x1="15" y1="8.5" x2="15" y2="4.5" stroke="#575D68"
                                                          stroke-width="2" stroke-linecap="square"></line>
                                                    <line x1="1" y1="12.5" x2="3" y2="12.5" stroke="#575D68"
                                                          stroke-width="2" stroke-linecap="square"></line>
                                                    <line x1="15" y1="20.5" x2="15" y2="16.5" stroke="#575D68"
                                                          stroke-width="2" stroke-linecap="square"></line>
                                                    <line x1="19" y1="6.5" x2="21" y2="6.5" stroke="#575D68"
                                                          stroke-width="2" stroke-linecap="square"></line>
                                                    <line x1="19" y1="18.5" x2="21" y2="18.5" stroke="#575D68"
                                                          stroke-width="2" stroke-linecap="square"></line>
                                                    <line x1="7" y1="14.5" x2="7" y2="10.5" stroke="#575D68"
                                                          stroke-width="2" stroke-linecap="square"></line>
                                                    <line x1="9" y1="12.5" x2="21" y2="12.5" stroke="#575D68"
                                                          stroke-width="2" stroke-linecap="square"></line>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div class="conference-list__item__icon" >
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g>
                                                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                                <path
                                                    d="M6,10 C4.9,10 4,10.9 4,12 C4,13.1 4.9,14 6,14 C7.1,14 8,13.1 8,12 C8,10.9 7.1,10 6,10 Z M18,10 C16.9,10 16,10.9 16,12 C16,13.1 16.9,14 18,14 C19.1,14 20,13.1 20,12 C20,10.9 19.1,10 18,10 Z M12,10 C10.9,10 10,10.9 10,12 C10,13.1 10.9,14 12,14 C13.1,14 14,13.1 14,12 C14,10.9 13.1,10 12,10 Z"
                                                    fill="#575D68" fill-rule="nonzero"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <div class="conference-list__item-field__sub-menu">
                                        <p class="conference-list__item-field__sub-menu-item invitation-button"
                                           onClick={invite}>
                                            <svg class="conference-list__item-field__sub-menu-item__icon"
                                                 width="20px" height="16px" viewBox="0 0 20 16" version="1.1"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g transform="translate(-418.000000, -281.000000)">
                                                        <g transform="translate(406.000000, 272.000000)">
                                                            <g transform="translate(10.000000, 5.000000)">
                                                                <polygon id="Path"
                                                                         points="0 0 24 0 24 24 0 24"></polygon>
                                                                <path
                                                                    d="M22,6 C22,4.9 21.1,4 20,4 L4,4 C2.9,4 2,4.9 2,6 L2,18 C2,19.1 2.9,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,6 Z M20,6 L12,11 L4,6 L20,6 Z M20,18 L4,18 L4,8 L12,13 L20,8 L20,18 Z"
                                                                    fill="#575D68" fill-rule="nonzero"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            Отправить приглашения
                                        </p>
                                        {item.withPresentation ? <p class="conference-list__item-field__sub-menu-item">
                                            <a href={item.presentationLink}>
                                                <svg class="conference-list__item-field__sub-menu-item__icon"
                                                 width="22px" height="18px" viewBox="0 0 22 18" version="1.1"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(-21.000000, -72.000000)">
                                                            <g transform="translate(20.000000, 69.000000)">
                                                                <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                                <path
                                                                    d="M21,3 L3,3 C2,3 1,4 1,5 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22,21 23,20 23,19 L23,5 C23,4 22,3 21,3 Z M21,18.92 C20.98,18.95 20.94,18.98 20.92,19 L3,19 L3,5.08 L3.08,5 L20.91,5 C20.94,5.02 20.97,5.06 20.99,5.08 L20.99,18.92 L21,18.92 Z M11,15.51 L8.5,12.5 L5,17 L19,17 L14.5,11 L11,15.51 Z"
                                                                    fill="#575D68" fill-rule="nonzero"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                Открыть презентацию</a>
                                        </p> : null}
                                        {!item.isActive ? <p class="conference-list__item-field__sub-menu-item" onClick={deleteItem}>
                                            <svg class="conference-list__item-field__sub-menu-item__icon"
                                                 width="14px" height="18px" viewBox="0 0 14 18" version="1.1"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g transform="translate(-927.000000, -280.000000)">
                                                        <g transform="translate(912.000000, 272.000000)">
                                                            <g transform="translate(10.000000, 5.000000)">
                                                                <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                                <path
                                                                    d="M16,9 L16,19 L8,19 L8,9 L16,9 M14.5,3 L9.5,3 L8.5,4 L5,4 L5,6 L19,6 L19,4 L15.5,4 L14.5,3 Z M18,7 L6,7 L6,19 C6,20.1 6.9,21 8,21 L16,21 C17.1,21 18,20.1 18,19 L18,7 Z"
                                                                    fill="#575D68" fill-rule="nonzero"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            Удалить конференцию
                                        </p> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {activeConference()}
                    </div>
                })
            }
            if(this.conferenceList?.length < 1) {
                return <div class="conference__list conference__list--empty">
                    <svg class="conference__list-icon" width="50px" height="60px" viewBox="0 0 50 60" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-555.000000, -90.000000)">
                                <g transform="translate(540.000000, 80.000000)">
                                    <path
                                        d="M22.5,32.475 L22.5,47.475 L20,47.475 C18.65,47.475 17.5,46.575 17.5,45.525 L17.5,34.425 C17.5,33.375 18.65,32.475 20.025,32.475 L22.5,32.475 L22.5,32.475 Z M25,29.975 L20.025,29.975 C17.25,29.975 15,31.975 15,34.425 L15,45.525 C15,47.975 17.225,49.975 20,49.975 L25,49.975 L25,29.975 L25,29.975 Z"
                                        fill="#101828" fill-rule="nonzero"></path>
                                    <path
                                        d="M46.925,69.95 L41.825,69.95 L41.825,67.45 L46.925,67.45 C53.875,67.45 57.5,58.65 57.5,49.975 L57.5,48.725 L60,48.725 L60,49.975 C60,59.9 55.525,69.95 46.925,69.95 Z"
                                        fill="#101828" fill-rule="nonzero"></path>
                                    <path
                                        d="M60,31.225 L57.5,31.225 L57.5,29.975 C57.5,27.3 56.575,24.45 54.75,21.525 C51.225,15.8 45.825,12.525 40,12.525 C34.175,12.525 28.8,15.8 25.25,21.5 C23.425,24.45 22.5,27.3 22.5,29.95 L22.5,31.2 L20,31.2 L20,29.95 C20,26.8 21.05,23.525 23.125,20.175 C27.125,13.725 33.275,10.025 40,10.025 L40,10.025 C46.725,10.025 52.875,13.725 56.9,20.2 C58.95,23.55 60,26.825 60,29.975 L60,31.225 Z"
                                        fill="#101828" fill-rule="nonzero"></path>
                                    <path
                                        d="M46.875,64.975 C47.05,64.975 47.5,65.4 47.5,66.225 C47.5,67.025 47.05,67.475 46.875,67.475 L40.625,67.45 C40.45,67.45 40,67.025 40,66.2 C40,65.4 40.45,64.95 40.625,64.95 L46.875,64.95 L46.875,64.975 Z M46.875,62.475 L40.625,62.475 C38.9,62.475 37.5,64.15 37.5,66.225 C37.5,68.275 38.9,69.95 40.625,69.975 L46.875,70 C46.875,70 46.875,70 46.875,70 C48.6,70 50,68.325 50,66.25 L50,66.225 C50,64.15 48.6,62.475 46.875,62.475 L46.875,62.475 Z"
                                        fill="#101828" fill-rule="nonzero"></path>
                                    <path
                                        d="M60,32.475 C61.35,32.475 62.5,33.375 62.5,34.425 L62.5,45.525 C62.5,46.575 61.35,47.475 59.975,47.475 L57.5,47.475 L57.5,32.475 L60,32.475 L60,32.475 Z M60,29.975 L55,29.975 L55,49.975 L59.975,49.975 C62.75,49.975 65,47.975 65,45.525 L65,34.425 C65,31.975 62.775,29.975 60,29.975 L60,29.975 Z"
                                        fill="#101828" fill-rule="nonzero"></path>
                                    <rect x="0" y="0" width="80" height="80"></rect>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <h3 class="rt-font-h4 sp-b-1">У вас нет запланированных конференций</h3>
                    <p class="rt-font-control sp-b-1-3">Вы можете создать новую конференцию и пригласить участников,
                        воспользовавшись кнопкой ниже</p>
                    <rt-button class="rt-button-orange create-button" target-popup="create-popup" popup-button={true}>Создать аудиконференцию</rt-button>
                </div>
            } else {
                return <div class="conference__list">
                    <div class="row">
                        <div class="rt-col d-flex d-space-between">
                            <div class="flex-start-center">
                                <rt-button class="rt-button-orange create-button" target-popup="create-popup" popup-button={true}>Создать новую конференцию</rt-button>
                            </div>
                            <div class="">
                                <div class="flex-center-center">
                                    <div class="conference__input-wrapper">
                                        <a-c-date-picker placeholder="От" ref="filterSince"/>
                                    </div>
                                    <div class="conference__input-wrapper">
                                        <a-c-date-picker placeholder="До" ref="filterTill"/>
                                    </div>
                                    <rt-button class="rt-button-orange-border fs0 color-orange" onClick={this.filter}>Показать за период</rt-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="conference-list__title sp-t-1-4 rt-font-label color-main05">
                        <div class="conference-list__title-field c-p" onClick={this.toggleSort}>Дата и время начала
                            <div class="conference-list__filter-icon">
                                <svg width="8px" height="14px" viewBox="0 0 8 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-291.000000, -306.000000)">
                                            <g transform="translate(285.000000, 303.000000)">
                                                <polygon points="0 0 20 0 20 20 0 20"></polygon>
                                                <polygon fill="#868B95" fill-rule="nonzero" points="6.66666667 6.66666667 10 3.33333333 13.3333333 6.66666667"></polygon>
                                                <polygon fill="#868B95" fill-rule="nonzero" transform="translate(10.000000, 15.000000) scale(1, -1) translate(-10.000000, -15.000000) " points="6.66666667 16.6666667 10 13.3333333 13.3333333 16.6666667"></polygon>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div class="conference-list__title-field">Продолжительность</div>
                        <div class="conference-list__title-field">Тема конференции</div>
                        <div class="conference-list__title-field">Ответственный</div>
                        <div class="conference-list__title-field">PIN конф. / лидера</div>
                        <div class="conference-list__title-field">Участники</div>
                        <div class="conference-list__title-field">{this.userAudio ? 'Аудиозапись' : ''}</div>
                        <div class="conference-list__title-field">Управление</div>
                    </div>
                    <div class="conference-list__body">
                        {conferenceBody()}
                    </div>
                    <a-c-paginator conference-list={this.localConferenceList}/>
                </div>
            }
        }
    };
</script>
