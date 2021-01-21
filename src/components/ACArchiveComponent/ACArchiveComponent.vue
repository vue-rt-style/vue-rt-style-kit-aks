<script type="text/jsx">
    const componentsList = {};
    export default {
        name: "ACArchiveComponent",
        components: componentsList,
        props:{
            conferenceList: {
                type: Array,
                default: () => ([])
            }
        },
        data() {
            return {
                localConferenceList: this.conferenceList,
                since: null,
                till: null
            }
        },
        watch: {
            conferenceList(newVal) {
                if(this.since && this.till) {
                    this.localConferenceList = this.filterFunc(newVal, new Date(this.since).setDate(new Date(this.since).getDate() - 1), new Date(this.till).setDate(new Date(this.till).getDate() + 1))
                } else if(this.since){
                    this.localConferenceList = this.filterFunc(newVal, new Date(this.since).setDate(new Date(this.since).getDate() - 1), null)
                } else if(this.till) {
                    this.localConferenceList = this.filterFunc(newVal, null, new Date(this.till).setDate(new Date(this.till).getDate() + 1))
                } else {
                    this.localConferenceList = newVal;
                }
            }
        },
        mounted() {

        },
        created() {},
        methods: {
            toggleOpen($event){
                $event.target.closest('.conference-archive__item').classList.toggle('conference-archive__item--opened');
                $event.target.closest('.conference-archive__item-field').querySelector('.conference-archive__item-field-icon').classList.toggle('conference-archive__item-field-icon--reversed');
            },
            getReport() {
                this.since = this.$refs.since.localValue;
                this.till = this.$refs.till.localValue;
                this.$emit('get-filtered-list');
            },
            fixVisibility($event) {
                $event.target.closest('.calendar-input').classList.remove('calendar-input--hidden');
            },
            filterFunc(list, cond1,cond2){
                let filteredList = [];
                if(cond1 && cond2) {
                    filteredList = list.filter(item =>
                        new Date(item.date) > new Date(cond1) && new Date(item.date) < new Date(cond2)
                    )
                } else if(cond1) {
                    filteredList = list.filter(item => new Date(item.date) > new Date(cond1))
                } else if(cond2) {
                    filteredList = list.filter(item => new Date(item.date) < new Date(cond2))
                }
                return filteredList
            },
            countTotalTime(count) {
                let initialValue = 0;
                return count.reduce((accumulator, currentValue) => accumulator + (+currentValue.duration),
                    initialValue)
            },
            togglePlayer($event){
                $event.target.closest('.aa-bottom-part__record').querySelector('.record-body').classList.toggle('record-body--opened');
                $event.target.closest('.flex-start-center').querySelector('.download-icon').classList.toggle('d-none');
            }
        },
        render(h) {
            if(this.localConferenceList == null) {
                return <div class="archive-wrapper">
                    <div class="rt-container">
                        <div class="rt-col">
                            <div class="row">
                                <div class="rt-col">
                                    <h1 class="rt-font-h2 sp-t-3 sp-b-1-2">Архив конференций</h1>
                                </div>
                                <div class="rt-col sp-b-3">
                                    <div class="conference__archive conference__archive--start">
                                        <svg class="conference__archive-icon" width="53px" height="60px" viewBox="0 0 53 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-554.000000, -90.000000)" fill="#101828">
                                                    <g transform="translate(540.000000, 80.000000)">
                                                        <g transform="translate(10.000000, 10.000000)">
                                                            <path d="M6.5,12.5 L6.5,57.5 L46.4,57.5 L46.4,38.475 L48.9,35.975 L48.9,57.5 C48.9,58.875 47.775,60 46.4,60 L46.4,60 L6.5,60 C5.125,60 4,58.875 4,57.5 L4,57.5 L4,10.45 C4,9.775 4.275,9.15 4.75,8.675 L4.75,8.675 L12.825,0.725 C13.3,0.25 13.925,0 14.575,0 L14.575,0 L46.375,0 C47.75,0 48.875,1.125 48.875,2.5 L48.875,2.5 L48.875,18.975 L46.375,21.475 L46.375,2.5 L16.5,2.5 L16.5,10 C16.5,11.32 15.4632,12.4096 14.163744,12.494656 L14,12.5 L6.5,12.5 Z M52.625,20 C53.275,20 53.925,20.25 54.425,20.775 L54.425,20.775 L55.725,22.075 C56.725,23.075 56.725,24.725 55.725,25.725 L55.725,25.725 L38.95,42.5 L34,42.5 L34,37.55 L50.8,20.75 C51.3,20.25 51.975,20 52.625,20 Z M44.118,30.943 L36.5,38.575 L36.5,40.025 L37.95,40.025 L45.574,32.399 L44.118,30.943 Z M52.625,22.475 C52.575,22.475 52.55,22.5 52.55,22.5 L52.55,22.5 L45.879,29.179 L47.337,30.637 L54,23.975 C54.0375,23.9375 54.046875,23.9 54.028125,23.8625 L54,23.825 L52.675,22.5 Z M29,27.5 L29,30 L11.5,30 L11.5,27.5 L29,27.5 Z M29,20 L29,22.5 L11.5,22.5 L11.5,20 L29,20 Z M13.994,3.081 L6.95,10 L13.975,10 L13.994,3.081 Z"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <h3 class="rt-font-h4 sp-b-1">Сформировать отчёт архивных конференций?</h3>
                                        <p class="rt-font-control">Выберите желаемый период для вывода списка прошедших конференций.</p>
                                        <div class="row sp-v-1-3">
                                            <div class="rt-col-4"></div>
                                            <div class="rt-col-2">
                                                <a-c-date-picker placeholder="От" value={this.since} ref="since"/>
                                            </div>
                                            <div class="rt-col-2">
                                                <a-c-date-picker placeholder="До" value={this.till} ref="till"/>
                                            </div>
                                            <div class="rt-col-4"></div>
                                        </div>
                                        <rt-button class="rt-button-orange" onClick={this.getReport}>Сформировать отчёт</rt-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            } else {
                if(this.localConferenceList.length < 1) {
                    return <div class="archive-wrapper">
                        <div class="rt-container">
                            <div class="rt-col">
                                <div class="row">
                                    <div class="rt-col">
                                        <div class="row sp-t-2-4 sp-b-1">
                                            <div class="rt-col-6">
                                                <h1 class="rt-font-h2">Архив конференций</h1>
                                            </div>
                                            <div class="rt-col-6 flex-center-center">
                                                <div class="select-wrapper">
                                                    <a-c-date-picker placeholder="От" value={this.since} ref="since"/>
                                                </div>
                                                <div class="select-wrapper">
                                                    <a-c-date-picker placeholder="До" value={this.till} ref="till"/>
                                                </div>
                                                <rt-button class="rt-button-orange-border color-orange button-in-flex" onClick={this.getReport}>Сформировать отчёт</rt-button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="rt-col">
                                        <div class="conference__archive conference__archive--empty">
                                            <svg class="conference__archive-icon" width="53px" height="60px" viewBox="0 0 53 60"
                                                 version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g transform="translate(-554.000000, -90.000000)" fill="#101828">
                                                        <g transform="translate(540.000000, 80.000000)">
                                                            <g transform="translate(10.000000, 10.000000)">
                                                                <path d="M6.5,12.5 L6.5,57.5 L46.4,57.5 L46.4,38.475 L48.9,35.975 L48.9,57.5 C48.9,58.875 47.775,60 46.4,60 L46.4,60 L6.5,60 C5.125,60 4,58.875 4,57.5 L4,57.5 L4,10.45 C4,9.775 4.275,9.15 4.75,8.675 L4.75,8.675 L12.825,0.725 C13.3,0.25 13.925,0 14.575,0 L14.575,0 L46.375,0 C47.75,0 48.875,1.125 48.875,2.5 L48.875,2.5 L48.875,18.975 L46.375,21.475 L46.375,2.5 L16.5,2.5 L16.5,10 C16.5,11.32 15.4632,12.4096 14.163744,12.494656 L14,12.5 L6.5,12.5 Z M52.625,20 C53.275,20 53.925,20.25 54.425,20.775 L54.425,20.775 L55.725,22.075 C56.725,23.075 56.725,24.725 55.725,25.725 L55.725,25.725 L38.95,42.5 L34,42.5 L34,37.55 L50.8,20.75 C51.3,20.25 51.975,20 52.625,20 Z M44.118,30.943 L36.5,38.575 L36.5,40.025 L37.95,40.025 L45.574,32.399 L44.118,30.943 Z M52.625,22.475 C52.575,22.475 52.55,22.5 52.55,22.5 L52.55,22.5 L45.879,29.179 L47.337,30.637 L54,23.975 C54.0375,23.9375 54.046875,23.9 54.028125,23.8625 L54,23.825 L52.675,22.5 Z M29,27.5 L29,30 L11.5,30 L11.5,27.5 L29,27.5 Z M29,20 L29,22.5 L11.5,22.5 L11.5,20 L29,20 Z M13.994,3.081 L6.95,10 L13.975,10 L13.994,3.081 Z"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <h3 class="rt-font-h4 sp-b-1">За данный период конференций не найдено</h3>
                                            <p class="rt-font-control">Выберите другой период для вывода списка прошедших конференций.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                } else {
                    const listBody = () => {
                        return this.localConferenceList.map(item => {
                            let localDate = item.date?.split('-').reverse().join('.');
                            const itemTotalTime = () => {
                                return this.countTotalTime(item.participants)
                            };
                            const participants = () => {
                                return item.participants.map(innerItem => {
                                    let phone = ('8' + innerItem.phone).toString().split('');
                                    phone.splice(7, 0, " ");
                                    phone.splice(4, 0, " ");
                                    phone.splice(1, 0, " ");
                                    return <div>
                                        <div class="sp-v-0-4 d-flex rt-font-control aa-bottom-part__participant">
                                            <div class="aa-bottom-part__participant-item">{innerItem.enterTime}</div>
                                            <div class="aa-bottom-part__participant-item">{Math.floor(+innerItem.duration / 60)} ч {+innerItem.duration % 60} мин</div>
                                            <div class="aa-bottom-part__participant-item">{innerItem.name ? innerItem.name : '-'}</div>
                                            <div class="aa-bottom-part__participant-item">{phone}</div>
                                        </div>
                                    </div>
                                })
                            };
                            return <div class="conference-archive__item rt-font-control">
                                <div class="conference-archive__item-top-part d-flex">
                                    <div class="conference-archive__item-field d-flex">
                                        <div class="conference-archive__item__icon">
                                            <svg width="18px" height="20px" viewBox="0 0 18 20" version="1.1"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g transform="translate(-23.000000, -21.000000)">
                                                        <g transform="translate(20.000000, 20.000000)">
                                                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                            <path
                                                                d="M19,3 L18,3 L18,1 L16,1 L16,3 L8,3 L8,1 L6,1 L6,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 Z M19,19 L5,19 L5,9 L19,9 L19,19 Z M19,7 L5,7 L5,5 L19,5 L19,7 Z M7,11 L12,11 L12,16 L7,16 L7,11 Z"
                                                                fill="#101828" fill-rule="nonzero"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="conference-archive__item__date">
                                            <p class="">{localDate}</p>
                                            <p class="">{item.startHour ? item.startHour.toString().length < 2 ? ('0' + item.startHour) : item.startHour : '0'} : {item.startMinute ? item.startMinute.toString().length < 2 ? ('0' + item.startMinute) : item.startMinute : '00'}</p>
                                        </div>
                                    </div>
                                    <div class="conference-archive__item-field">{item.durationHour ? item.durationHour : '0'} ч {item.durationMinute ? item.durationMinute.toString().length < 2 ? ('0' + item.durationMinute) : item.durationMinute : '00'} мин</div>
                                    <div class="conference-archive__item-field">{Math.floor(itemTotalTime() / 60)} ч {itemTotalTime() % 60} мин</div>
                                    <div class="conference-archive__item-field">{item.leader}</div>
                                    <div class="conference-archive__item-field">
                                        <p class="ovh rt-font-bold">{item.theme}</p>
                                        <div class="conference-archive__item-field__hint">{item.theme}</div>
                                    </div>
                                    <div class="conference-archive__item-field d-flex d-space-between">
                                        <span>{item.audio ? 'есть' : 'нет'}</span>
                                        <div class="c-p sp-b-0-3 sp-h-0-3" onClick={this.toggleOpen}>
                                            <svg class="conference-archive__item-field-icon" width="13px" height="8px"
                                                 viewBox="0 0 13 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g transform="translate(-1123.000000, -86.000000)" fill="#575D68">
                                                        <g transform="translate(1120.000000, 80.000000)">
                                                            <g transform="translate(10.000000, 10.000000) scale(1, -1) translate(-10.000000, -10.000000) ">
                                                                <polygon
                                                                    transform="translate(9.704500, 10.000000) rotate(-90.000000) translate(-9.704500, -10.000000) "
                                                                    points="12 4 6 9.999 12 16 13.409 14.591 13.409 14.589 8.83 9.999 13.409 5.411 13.409 5.409"></polygon>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="conference-archive__item-bottom-part">
                                    <rt-tabs show-as-tags={true} class="sp-t-0-3">
                                        <template slot="navigation">
                                            <rt-tabs-nav-item anchor={item.theme + '-1'} remove-base-tag={true}
                                                              name={item.theme + '-1'}>Статистика конференции
                                            </rt-tabs-nav-item>
                                            {item.audio ? <rt-tabs-nav-item anchor={item.theme + '-2'} remove-base-tag={true}
                                                              name={item.theme + '-2'}>Аудиозапись конференции
                                            </rt-tabs-nav-item> : null}
                                        </template>
                                        <template slot="content">
                                            <rt-tabs-content-item name={item.theme + '-1'}>
                                                <div class="sp-t-0-4 sp-b-0-2 d-flex rt-font-label color-main05 aa-bottom-part__title">
                                                    <div class="aa-bottom-part__title-item">Время входа</div>
                                                    <div class="aa-bottom-part__title-item">Продолжительность участия</div>
                                                    <div class="aa-bottom-part__title-item">Участник</div>
                                                    <div class="aa-bottom-part__title-item">Номер телефона</div>
                                                </div>
                                                {participants()}
                                                <div class="aa-bottom-part__summary d-flex rt-font-bold rt-font-control sp-t-1">
                                                    <div class="aa-bottom-part__summary-item">
                                                        <p>Продолжительность конференции</p>
                                                        <p>{item.durationHour ? item.durationHour : '0'} ч {item.durationMinute ? item.durationMinute.toString().length < 2 ? ('0' + item.durationMinute) : item.durationMinute : '00'} мин</p>
                                                    </div>
                                                    <div class="aa-bottom-part__summary-item">
                                                        <p>Суммарная продолжительность вызовов всех участников</p>
                                                        <p>{Math.floor(itemTotalTime() / 60)} ч {itemTotalTime() % 60} мин / {itemTotalTime()} мин</p>
                                                    </div>
                                                </div>
                                            </rt-tabs-content-item>
                                            {item.audio ? <rt-tabs-content-item name={item.theme + '-2'}>
                                                <div class="sp-t-0-4 sp-b-0-2 d-flex rt-font-label color-main05 aa-bottom-part__title">
                                                    <div class="aa-bottom-part__title-item aa-bottom-part__title-item--record">Аудиозапись
                                                    </div>
                                                    <div class="aa-bottom-part__title-item aa-bottom-part__title-item--record">Продолжительность
                                                        аудиозаписи
                                                    </div>
                                                    <div class="aa-bottom-part__title-item aa-bottom-part__title-item--record">Скачивание
                                                        аудиозаписи
                                                    </div>
                                                </div>
                                                <div class="sp-t-0-4 rt-font-control aa-bottom-part__record">
                                                    <div class="flex-start-center sp-b-0-4">
                                                        <div class="aa-bottom-part__record-item record-title" onClick={this.togglePlayer}>5967-15-12052020121124.wav</div>
                                                        <div class="aa-bottom-part__record-item">00 : 05 : 45</div>
                                                        <div class="aa-bottom-part__record-item">
                                                            <a class="download-icon" href="#">
                                                                <svg width="24px" height="24px" viewBox="0 0 24 24"
                                                                     version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g stroke="none" stroke-width="1" fill="none"
                                                                       fill-rule="evenodd">
                                                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                                        <path
                                                                            d="M19,12 L19,19 L5,19 L5,12 L3,12 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 Z M13,12.67 L15.59,10.09 L17,11.5 L12,16.5 L7,11.5 L8.41,10.09 L11,12.67 L11,3 L13,3 L13,12.67 Z"
                                                                            fill="#575D68" fill-rule="nonzero"></path>
                                                                    </g>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="record-body">
                                                        <div class="record-body__inner">
                                                            <div class="record-body__controls flex-center-center sp-l-1">
                                                                <div class="controls-button flex-center-center previous-button">
                                                                    <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1">
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <g transform="translate(-85.000000, -256.000000)">
                                                                                <g transform="translate(64.000000, 230.000000)">
                                                                                    <g transform="translate(15.000000, 20.000000)">
                                                                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                                                        <path d="M6,6 L8,6 L8,18 L6,18 L6,6 Z M9.5,12 L18,18 L18,6 L9.5,12 Z M16,14.14 L12.97,12 L16,9.86 L16,14.14 Z" fill="#575D68" fill-rule="nonzero"></path>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <div class="controls-button flex-center-center play-pause-button">
                                                                    <svg width="11px" height="14px" viewBox="0 0 11 14" version="1.1">
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <g transform="translate(-121.000000, -255.000000)">
                                                                                <g transform="translate(64.000000, 230.000000)">
                                                                                    <g transform="translate(49.000000, 20.000000)">
                                                                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                                                        <path d="M10,8.64 L15.27,12 L10,15.36 L10,8.64 M8,5 L8,19 L19,12 L8,5 Z" fill="#575D68" fill-rule="nonzero"></path>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <div class="controls-button flex-center-center next-button">
                                                                    <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1">
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <g transform="translate(-153.000000, -256.000000)">
                                                                                <g transform="translate(64.000000, 230.000000)">
                                                                                    <g transform="translate(83.000000, 20.000000)">
                                                                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                                                        <path d="M6,18 L14.5,12 L6,6 L6,18 Z M8,9.86 L11.03,12 L8,14.14 L8,9.86 Z M16,6 L18,6 L18,18 L16,18 L16,6 Z" fill="#575D68" fill-rule="nonzero"></path>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div class="record-body__time-passed">00 : 00 : 00</div>
                                                            <div class="record-body__sound-wave">
                                                              <img src="/static/images/B2B/soundwave.png"/>
                                                            </div>
                                                            <div class="record-body__full-time">00 : 59 : 45</div>
                                                            <div class="record-body__volume">
                                                                <div class="record-body__volume-icon">
                                                                    <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1">
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <g transform="translate(-887.000000, -253.000000)">
                                                                                <g transform="translate(64.000000, 230.000000)">
                                                                                    <g transform="translate(820.000000, 20.000000)">
                                                                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                                                        <path d="M3,9 L3,15 L7,15 L12,20 L12,4 L7,9 L3,9 Z M10,8.83 L10,15.17 L7.83,13 L5,13 L5,11 L7.83,11 L10,8.83 Z M16.5,12 C16.5,10.23 15.48,8.71 14,7.97 L14,16.02 C15.48,15.29 16.5,13.77 16.5,12 Z M14,3.23 L14,5.29 C16.89,6.15 19,8.83 19,12 C19,15.17 16.89,17.85 14,18.71 L14,20.77 C18.01,19.86 21,16.28 21,12 C21,7.72 18.01,4.14 14,3.23 Z" fill="#FF4F12" fill-rule="nonzero"></path>
                                                                                    </g>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <div class="record-body__volume-scale"></div>
                                                            </div>
                                                            <div class="record-body__button-wrapper sp-l-1">
                                                                <a href="#" download>
                                                                    <div class="record-body__download-button flex-start-center">
                                                                        <svg width="24px" height="24px" viewBox="0 0 24 24"
                                                                             version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                            <g stroke="none" stroke-width="1" fill="none"
                                                                               fill-rule="evenodd">
                                                                                <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                                                <path
                                                                                    d="M19,12 L19,19 L5,19 L5,12 L3,12 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 Z M13,12.67 L15.59,10.09 L17,11.5 L12,16.5 L7,11.5 L8.41,10.09 L11,12.67 L11,3 L13,3 L13,12.67 Z"
                                                                                    fill="#575D68" fill-rule="nonzero"></path>
                                                                            </g>
                                                                        </svg>
                                                                        <span class="sp-l-0-2">Скачать аудиозапись</span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="sp-v-0-4 flex-start-center rt-font-control aa-bottom-part__record">
                                                    <div class="aa-bottom-part__record-item">5967-15-12052020121124.wav
                                                    </div>
                                                    <div class="aa-bottom-part__record-item">00 : 05 : 45</div>
                                                    <div class="aa-bottom-part__record-item">
                                                        <svg width="24px" height="24px" viewBox="0 0 24 24"
                                                             version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                            <g stroke="none" stroke-width="1" fill="none"
                                                               fill-rule="evenodd">
                                                                <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                                <path
                                                                    d="M19,12 L19,19 L5,19 L5,12 L3,12 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 Z M13,12.67 L15.59,10.09 L17,11.5 L12,16.5 L7,11.5 L8.41,10.09 L11,12.67 L11,3 L13,3 L13,12.67 Z"
                                                                    fill="#575D68" fill-rule="nonzero"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </rt-tabs-content-item> : null}
                                        </template>
                                    </rt-tabs>
                                </div>
                            </div>
                        })
                    };
                    return <div class="archive-wrapper d-flex">

                        <div class="archive__top-part">
                            <div class="rt-container">
                                <div class="rt-col">
                                    <div class="row">
                                        <div class="rt-col">
                                            <div class="row sp-t-2-4 sp-b-1">
                                                <div class="rt-col-6">
                                                    <h1 class="rt-font-h2">Архив конференций</h1>
                                                </div>
                                                <div class="rt-col-6 flex-center-center">
                                                    <div class="select-wrapper">
                                                        <a-c-date-picker placeholder="От" value={this.since} ref="since"/>
                                                    </div>
                                                    <div class="select-wrapper">
                                                        <a-c-date-picker placeholder="До" value={this.till} ref="till"/>
                                                    </div>
                                                    <rt-button class="rt-button-orange-border color-orange button-in-flex" onClick={this.getReport}>Сформировать отчёт</rt-button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rt-col">
                                            <div class="conference__archive">
                                                <div class="conference-archive__title rt-font-label color-main05">
                                                    <div class="conference-archive__title-field">Дата и время начала
                                                        <div class="conference-archive__filter-icon">
                                                            <svg width="8px" height="14px" viewBox="0 0 8 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <g transform="translate(-291.000000, -306.000000)">
                                                                        <g transform="translate(285.000000, 303.000000)">
                                                                            <polygon points="0 0 20 0 20 20 0 20"></polygon>
                                                                            <polygon fill="#868B95" fill-rule="nonzero"
                                                                                     points="6.66666667 6.66666667 10 3.33333333 13.3333333 6.66666667"></polygon>
                                                                            <polygon fill="#868B95" fill-rule="nonzero"
                                                                                     transform="translate(10.000000, 15.000000) scale(1, -1) translate(-10.000000, -15.000000) "
                                                                                     points="6.66666667 16.6666667 10 13.3333333 13.3333333 16.6666667"></polygon>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div class="conference-archive__title-field">Продолжительность</div>
                                                    <div class="conference-archive__title-field">Сумма всех вызовов</div>
                                                    <div class="conference-archive__title-field">Ответственный</div>
                                                    <div class="conference-archive__title-field">Тема конференции</div>
                                                    <div class="conference-archive__title-field">Аудиозапись</div>
                                                </div>
                                                {listBody()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="archive__bottom-part">
                            <div class="rt-container">
                                <div class="rt-col sp-t-0-4 sp-b-0-2">
                                    <a-c-paginator conference-list={this.localConferenceList}/>
                                </div>
                            </div>
                            <div class="archive-summary color-block--cool-grey">
                                <div class="rt-container">
                                    <div class="rt-col sp-t-0-4 sp-b-0-2">
                                        <div class="row">
                                            <div class="rt-col-4">
                                                <p class="rt-font-paragraph rt-font-bold">
                                                    <span class="sp-r-1">Сумма вызовов</span>
                                                    <span>5 ч 25 мин / 325 мин</span>
                                                </p>
                                                <p class="rt-font-control color-main05">в период с 12.05.2020 по 13.05.2020</p>
                                            </div>
                                            <div class="rt-col-3">
                                                <p class="rt-font-paragraph rt-font-bold">
                                                    <span class="sp-r-1">Количество конференций</span>
                                                    <span>2</span>
                                                </p>
                                                <p class="rt-font-control color-main05">за данный период</p>
                                            </div>
                                            <div class="rt-col-5 flex-end-top">
                                                <rt-button small={true} color="transparent">
                                                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <g transform="translate(-961.000000, -15.000000)">
                                                                <g transform="translate(951.000000, 10.000000)">
                                                                    <g transform="translate(10.000000, 5.000000)">
                                                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                                        <path d="M19,8 L18,8 L18,3 L6,3 L6,8 L5,8 C3.34,8 2,9.34 2,11 L2,17 L6,17 L6,21 L18,21 L18,17 L22,17 L22,11 C22,9.34 20.66,8 19,8 Z M8,5 L16,5 L16,8 L8,8 L8,5 Z M16,17 L16,19 L8,19 L8,15 L16,15 L16,17 Z M18,15 L18,13 L6,13 L6,15 L4,15 L4,11 C4,10.45 4.45,10 5,10 L19,10 C19.55,10 20,10.45 20,11 L20,15 L18,15 Z" fill="#575D68" fill-rule="nonzero"></path>
                                                                        <circle fill="#575D68" fill-rule="nonzero" cx="18" cy="11.5" r="1"></circle>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                    <span class="sp-l-0-2 ws-nw">Версия для печати</span>
                                                </rt-button>
                                                <rt-button small={true} color="transparent">
                                                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <g transform="translate(-1157.000000, -15.000000)">
                                                                <g transform="translate(1147.000000, 10.000000)">
                                                                    <g transform="translate(10.000000, 5.000000)">
                                                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                                        <path d="M19,12 L19,19 L5,19 L5,12 L3,12 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 Z M13,12.67 L15.59,10.09 L17,11.5 L12,16.5 L7,11.5 L8.41,10.09 L11,12.67 L11,3 L13,3 L13,12.67 Z" fill="#575D68" fill-rule="nonzero"></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                    <span class="sp-l-0-2">Сохранить в Excel</span>
                                                </rt-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            }
        }
    };
</script>
