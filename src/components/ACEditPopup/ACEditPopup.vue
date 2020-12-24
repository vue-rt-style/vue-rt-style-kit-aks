<script type="text/jsx">
    const componentsList = {};
    export default {
        name: "ACEditPopup",
        components: componentsList,
        props:{
            conferenceData: {
                type: Object,
                default: () => ({})
            }
        },
        data() {
            return {
                localConfData : this.conferenceData,
                closedMeeting: false,
                localList: [],
                formArray: [],
                confData: {},
                soundOn: true,
                noLeader: false,
                noTheme: false,
                noDate: false,
                itsOK: true,
                isTooLong: false,
                tooLate: false
            }
        },
        watch: {
            conferenceData(newVal) {
                this.localConfData = newVal;
            }
        },
        mounted() {
            // this.tooLate = Math.random() < 0.5;
        },
        updated() {
            this.fixMathSigns();
            this.formArray = Object.keys(this.$refs);
        },
        created() {},
        methods: {
            toggleInput($event) {
                console.log($event.target.closest('.field-item'))
                $event.target.closest('.field-item').querySelector('.input-with-hint--outlined').classList.toggle('d-none');
                $event.target.closest('.field-item').querySelector('.input-with-hint').focus();
            },
            controlSound() {
                if(this.soundOn) {
                    this.$el.querySelectorAll('.mic-icon').forEach((item)=> {
                        item.innerHTML = '<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" class="mic-icon__svg">\n' +
                            '    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                            '        <g>\n' +
                            '            <polygon points="0 0 24 0 24 24 0 24"></polygon>\n' +
                            '            <path d="M10.8,4.9 C10.8,4.24 11.34,3.7 12,3.7 C12.66,3.7 13.2,4.24 13.2,4.9 L13.19,8.81 L15,10.6 L15,5 C15,3.34 13.66,2 12,2 C10.46,2 9.21,3.16 9.04,4.65 L10.8,6.41 L10.8,4.9 L10.8,4.9 Z M19,11 L17.3,11 C17.3,11.58 17.2,12.13 17.03,12.64 L18.3,13.91 C18.74,13.03 19,12.04 19,11 Z M4.41,2.86 L3,4.27 L9,10.27 L9,11 C9,12.66 10.34,14 12,14 C12.23,14 12.44,13.97 12.65,13.92 L14.31,15.58 C13.6,15.91 12.81,16.1 12,16.1 C9.24,16.1 6.7,14 6.7,11 L5,11 C5,14.41 7.72,17.23 11,17.72 L11,21 L13,21 L13,17.72 C13.91,17.59 14.77,17.27 15.55,16.82 L19.75,21.02 L21.16,19.61 L4.41,2.86 Z" fill="#575D68" fill-rule="nonzero"></path>\n' +
                            '        </g>\n' +
                            '    </g>\n' +
                            '</svg>'
                    });
                } else {
                    this.$el.querySelectorAll('.mic-icon').forEach((item)=> {
                        item.innerHTML = '<svg width="14px" height="19px" viewBox="0 0 14 19" version="1.1" xmlns="http://www.w3.org/2000/svg" class="mic-icon__svg">\n' +
                            '                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                            '                                        <g transform="translate(-972.000000, -2623.000000)">\n' +
                            '                                            <g transform="translate(740.000000, 2601.000000)">\n' +
                            '                                                <g transform="translate(227.000000, 20.000000)">\n' +
                            '                                                    <polygon points="0 0 24 0 24 24 0 24"></polygon>\n' +
                            '                                                    <path d="M12,14 C13.66,14 15,12.66 15,11 L15,5 C15,3.34 13.66,2 12,2 C10.34,2 9,3.34 9,5 L9,11 C9,12.66 10.34,14 12,14 Z M11,5 C11,4.45 11.45,4 12,4 C12.55,4 13,4.45 13,5 L13,11 C13,11.55 12.55,12 12,12 C11.45,12 11,11.55 11,11 L11,5 Z M17,11 C17,13.76 14.76,16 12,16 C9.24,16 7,13.76 7,11 L5,11 C5,14.53 7.61,17.43 11,17.92 L11,21 L13,21 L13,17.92 C16.39,17.43 19,14.53 19,11 L17,11 Z" fill="#575D68" fill-rule="nonzero"></path>\n' +
                            '                                                </g>\n' +
                            '                                            </g>\n' +
                            '                                        </g>\n' +
                            '                                    </g>\n' +
                            '                                </svg>'
                    });
                }
                this.soundOn = !this.soundOn;
            },
            showClosedList() {
                this.closedMeeting = !this.closedMeeting;
            },
            addParticipant() {
                let form = this.$el.querySelector('.participantForm').querySelectorAll('.input-element');
                let name = form[0].value;
                let phone = form[1].value;
                if(!!name && !!phone){
                    this.localList.push({"name": name, "phone": phone});
                    form.forEach(item => {
                        item.value = ''
                    });
                    this.$refs.partName.hasInputText = '';
                    this.$refs.partTel.hasInputText = '';
                }
            },
            createConf() {
                this.validate();
                if(this.itsOK) {
                    this.formArray.map(item => {
                        if(!!this.$refs[item].localValue) {
                            this.confData[item] = this.$refs[item].localValue.toString().trim();
                        } else if(!!this.$refs[item].$el.querySelector('.input-element')){
                            this.confData[item] = this.$refs[item].$el.querySelector('.input-element').value.trim();
                        } else if(this.$refs[item].$el.querySelector('.switch-element')) {
                            this.confData[item] = this.$refs[item].$el.querySelector('.switch-element').checked;
                        }
                    });
                    console.log(this.formArray);
                    let confList;
                    if(localStorage.acList) {
                        confList = JSON.parse(localStorage.acList);
                    } else {
                        confList = [];
                    }
                    let confIndex = confList.findIndex(item => item.confID == this.localConfData.confID);
                    confList.splice(confIndex, 1, this.confData);
                    // confList.push(this.confData);
                    localStorage.setItem('acList', JSON.stringify(confList));
                    this.$refs.closedList.$el.querySelector('.switch-element').checked ? this.confData.participants = this.localList : null;
                    this.$emit('conf-created', this.confData);
                    this.$el.querySelector('.rtb-popup-close').dispatchEvent(new MouseEvent('click'));
                    document.body.dispatchEvent(new CustomEvent("open-popup", {'detail': [this.$el, 'confirmation-popup']}))
                }
            },
            removeParticipant(i){
                this.localList.splice(i, 1)
            },
            fixVisibility() {
                if(this.$refs.date.localValue.length > 0) {
                    this.$refs.date.$el.classList.remove('calendar-input--hidden')
                }
            },
            fixMathSigns() {
                this.$el.querySelectorAll('.input-arithmetic__button').forEach(item => item.innerHTML = '');
            },
            fixQuantity() {
                if(this.localList.length > this.$refs.quantity.localValue) {
                    this.localList.splice(Number(this.$refs.quantity.localValue) -1, this.localList.length - this.$refs.quantity.localValue)
                }
            },
            validate() {
                let noLeader = this.$refs.leader.localValue.trim().length == 0;
                let noTheme = this.$refs.theme.localValue.trim().length == 0;
                let noDate = this.$refs.date.$el.querySelector('.input-element').value.trim() == 0;
                let durationH = this.$refs.durationHour.$el.querySelector('.input-element').value.trim();
                let durationM = this.$refs.durationMinute.$el.querySelector('.input-element').value.trim();
                this.isTooLong = Number(durationH + durationM) > 1200;
                this.itsOK = !noTheme && !noDate && !noLeader && !this.isTooLong;
                if(noLeader) {
                    this.noLeader = true;
                }
                if(noTheme) {
                    this.noTheme = true;
                }
                if(noDate) {
                    this.noDate = true;
                }
            }
        },
        render(h) {
            if(this.localConfData) {
                const participants = () => {
                    if (this.closedMeeting) {
                        return <div class="row">
                            <div class="rt-col-6 participantForm">
                                <p class="rt-font-small-paragraph sp-b-0-3">Добавление участников</p>
                                <rt-input type="text" is-b2b-input={true} outlined={true}
                                          placeholder="Имя участника" ref="partName"
                                          disabled={this.localList.length >= this.$refs.quantity.localValue}/>
                                <p class="rt-font-label sp-t-0-3 sp-b-1 color-main05">Введите имя или выберите
                                    его из адресной книги</p>
                                <rt-input insert-type="tel" is-b2b-input={true} outlined={true}
                                          placeholder="Контактный телефон" ref="partTel"
                                          disabled={this.localList.length >= this.$refs.quantity.localValue}/>
                                <div class="sp-t-1-2 flex-start-center">
                                    <rt-button class="rt-button-orange-border d-inline-block color-orange"
                                               small={true} onClick={this.addParticipant}
                                               disabled={this.localList.length >= this.$refs.quantity.localValue}>
                                        Добавить
                                    </rt-button>
                                    <rt-button class="rt-button-cool-grey-border d-inline-block" small={true}
                                               onClick={this.controlSound}>
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g>
                                                    <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                                    <path
                                                        d="M10.8,4.9 C10.8,4.24 11.34,3.7 12,3.7 C12.66,3.7 13.2,4.24 13.2,4.9 L13.19,8.81 L15,10.6 L15,5 C15,3.34 13.66,2 12,2 C10.46,2 9.21,3.16 9.04,4.65 L10.8,6.41 L10.8,4.9 L10.8,4.9 Z M19,11 L17.3,11 C17.3,11.58 17.2,12.13 17.03,12.64 L18.3,13.91 C18.74,13.03 19,12.04 19,11 Z M4.41,2.86 L3,4.27 L9,10.27 L9,11 C9,12.66 10.34,14 12,14 C12.23,14 12.44,13.97 12.65,13.92 L14.31,15.58 C13.6,15.91 12.81,16.1 12,16.1 C9.24,16.1 6.7,14 6.7,11 L5,11 C5,14.41 7.72,17.23 11,17.72 L11,21 L13,21 L13,17.72 C13.91,17.59 14.77,17.27 15.55,16.82 L19.75,21.02 L21.16,19.61 L4.41,2.86 Z"
                                                        fill="#575D68" fill-rule="nonzero"></path>
                                                </g>
                                            </g>
                                        </svg>
                                        {this.soundOn ? <span>Отключить всем звук</span> :
                                            <span>Включить всем звук</span>}
                                    </rt-button>
                                    <rt-hint simple-tool-tip={true}>При входе у участника будет выключен микрофон, он
                                        сможет только слушать других участников. Включить микрофон обратно можно будет
                                        во время конференции через панель управления конференцией
                                    </rt-hint>
                                </div>
                            </div>
                            <div class="rt-col-6">
                                <p class="rt-font-small-paragraph sp-b-0-3">Список участников
                                    <span
                                        class="participants-count sp-l-1">{this.localList.length} / {this.$refs.quantity.localValue ? this.$refs.quantity.localValue : '0'}</span>
                                </p>
                                <div class="participants">
                                    <div class="participants-list sp-v-0-3 sp-h-1">
                                        {this.localList.length < 1 ?
                                            <p class="sp-t-0-2">Для того чтобы добавить участника, воспользуйтесь формой
                                                слева.</p> : null}
                                        {participantsList()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    } else {
                        return null
                    }
                };
                const participantsList = () => {
                    return this.localList.map((item, index) => {
                        const remove = () => {
                            this.removeParticipant(index)
                        };
                        return <div class="sp-v-0-2 participants__item sp-r-0-2">
                            <div class="person">
                                <p class="rt-font-small-paragraph">{item.name}</p>
                                <p class="rt-font-label color-main05">{item.phone}</p>
                            </div>
                            <div class="manage">
                                <div class="mic-icon">
                                    <svg width="14px" height="19px" viewBox="0 0 14 19" version="1.1"
                                         xmlns="http://www.w3.org/2000/svg" class="mic-icon__svg">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g transform="translate(-972.000000, -2623.000000)">
                                                <g transform="translate(740.000000, 2601.000000)">
                                                    <g transform="translate(227.000000, 20.000000)">
                                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                        <path
                                                            d="M12,14 C13.66,14 15,12.66 15,11 L15,5 C15,3.34 13.66,2 12,2 C10.34,2 9,3.34 9,5 L9,11 C9,12.66 10.34,14 12,14 Z M11,5 C11,4.45 11.45,4 12,4 C12.55,4 13,4.45 13,5 L13,11 C13,11.55 12.55,12 12,12 C11.45,12 11,11.55 11,11 L11,5 Z M17,11 C17,13.76 14.76,16 12,16 C9.24,16 7,13.76 7,11 L5,11 C5,14.53 7.61,17.43 11,17.92 L11,21 L13,21 L13,17.92 C16.39,17.43 19,14.53 19,11 L17,11 Z"
                                                            fill="#575D68" fill-rule="nonzero"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div class="delete-icon" onClick={remove}>
                                    <svg width="11px" height="11px" viewBox="0 0 11 11" version="1.1"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g transform="translate(-1029.000000, -1305.000000)" stroke="#575D68"
                                               stroke-width="2">
                                                <g transform="translate(1024.000000, 1300.000000)">
                                                    <path d="M10.5,5 L10.5,16 M16,10.5 L5,10.5"
                                                          transform="translate(10.500000, 10.500000) rotate(-315.000000) translate(-10.500000, -10.500000) "></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    })
                };
                if(!this.tooLate) {
                    return <rt-real-popup trigger-element-class="edit-button" main-wrapper-class="app"
                                          position-center={true} class="edit-popup">
                        <div class="popup-content">
                            <h3 class="rt-font-h3 sp-b-1">Редактирование конференции</h3>
                            <div class="field-wrapper sp-b-1">
                                <div class="sp-t-1 field-item">
                                    <rt-input insert-type="text" placeholder="Тема конференции" is-b2b-input={true}
                                              outlined={true} ref="theme" hasError={this.noTheme}
                                              error-message="Необходимо задать тему конференции" value={this.localConfData.theme}/>
                                </div>
                                <div class="sp-t-1 field-item">
                                    <rt-input insert-type="text" placeholder="Ответственный" is-b2b-input={true}
                                              outlined={true}
                                              ref="leader" hasError={this.noLeader}
                                              error-message="Необходимо ввести Ф.И.О. ответственного за организацию конференции"
                                              value={this.localConfData.leader}/>
                                </div>
                                <div class="sp-t-1 field-item">
                                    <rt-input insert-type="number" placeholder="Количество участников" is-b2b-input={true}
                                              outlined={true} max-length={3} max-number={128} ref="quantity"
                                              label="Минимальное количество участников — 3 человека, максимальное — 128 чел."
                                              show-numbers-buttons={true} onInput={this.fixQuantity} value={this.localConfData.quantity}/>
                                </div>
                                <div class="sp-t-1 field-item">
                                    <rt-input type="date" placeholder="Дата конференции" is-b2b-input={true} outlined={true}
                                              class="calendar-input" ref="date"
                                              onChange={this.fixVisibility}
                                              hasError={this.noDate} error-message="Необходимо выбрать дату конференции" value={this.localConfData.date}/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="rt-col-6">
                                    <p class="rt-font-small-paragraph sp-b-0-3">Время начала конференции</p>
                                    <div class="field-wrapper sp-b-1-2">
                                        <div class="field-item-2">
                                            <rt-input type="number" is-b2b-input={true} outlined={true} placeholder="Часы"
                                                      min-number={0} max-number={23} max-length={2} insert-type='number'
                                                      ref="startHour" show-numbers-buttons={true} value={this.localConfData.startHour}/>
                                        </div>
                                        <div class="field-item-2">
                                            <rt-input type="number" is-b2b-input={true} outlined={true} placeholder="Минуты"
                                                      min-number={0} max-number={59} max-length={2} insert-type='number'
                                                      ref="startMinute" show-numbers-buttons={true} value={this.localConfData.startMinute}/>
                                        </div>
                                        <p class="rt-font-label color-main05 sp-t-0-2">Время системы: местное, Москва (GMT
                                            +3:00)</p>
                                    </div>
                                </div>
                                <div class="rt-col-6">
                                    <p class="rt-font-small-paragraph sp-b-0-3">Продолжительность конференции</p>
                                    <div class="field-wrapper sp-b-1-2">
                                        <div class="field-item-2">
                                            <rt-input type="number" is-b2b-input={true} outlined={true} placeholder="Часы"
                                                      min-number={0} max-number={12} max-length={2} insert-type='number'
                                                      ref="durationHour" show-numbers-buttons={true}
                                                      hasError={this.isTooLong} value={this.localConfData.durationHour}/>
                                        </div>
                                        <div class="field-item-2">
                                            <rt-input type="number" is-b2b-input={true} outlined={true} placeholder="Минуты"
                                                      min-number={0} max-number={59} max-length={2} insert-type='number'
                                                      ref="durationMinute" show-numbers-buttons={true}
                                                      hasError={this.isTooLong} value={this.localConfData.durationMinute}/>
                                        </div>
                                        <p class="rt-font-label color-main05 sp-t-0-2">Максимальная длительность конференции
                                            12 часов</p>
                                    </div>
                                </div>
                                <div class="field-wrapper rt-col">
                                    <div class="field-item sp-b-2">
                                        <rt-switch ref="audio" checked={this.localConfData.audio}>Аудиозапись конференции</rt-switch>
                                        <rt-hint simple-tool-tip={true}>4х-значное число. В случае, если выбрана
                                            конференция с Лидером, то PIN-коды будут совпадать.
                                        </rt-hint>
                                    </div>
                                    <div class="field-item sp-b-2">
                                        <rt-switch ref="noPIN" name="noPIN" checked={this.localConfData.audio}>
                                            Конференция без PIN-кода
                                        </rt-switch>
                                        <rt-hint simple-tool-tip={true}>4х-значное число. В случае, если выбрана
                                            конференция с Лидером, то PIN-коды будут совпадать.
                                        </rt-hint>
                                    </div>
                                    <div class="field-item sp-b-2">
                                        <rt-switch ref="withLeader" onClick={this.toggleInput} checked={this.localConfData.withLeader}>Конференция с лидером</rt-switch>
                                        <rt-hint simple-tool-tip={true}>4х-значное число. В случае, если выбрана
                                            конференция с Лидером, то PIN-коды будут совпадать.
                                        </rt-hint>
                                        <div class={"sp-t-1 input-with-hint input-with-hint--outlined " + (this.localConfData.withLeader ? null : ' d-none')}>
                                            <rt-input type="number" is-b2b-input={true} outlined={true} max-length={4}
                                                      placeholder="Задайте PIN-код Лидера" ref="leaderPIN" value={this.localConfData.leaderPIN}/>
                                            <rt-hint simple-tool-tip={true}>4х-значное число. В случае, если выбрана
                                                конференция с Лидером, то PIN-коды будут совпадать.
                                            </rt-hint>
                                        </div>
                                    </div>
                                    <div class="field-item sp-b-2">
                                        <rt-switch ref="withPresentation" onClick={this.toggleInput} checked={this.localConfData.withPresentation}>Конференция с
                                            презентацией
                                        </rt-switch>
                                        <rt-hint simple-tool-tip={true}>4х-значное число. В случае, если выбрана
                                            конференция с Лидером, то PIN-коды будут совпадать.
                                        </rt-hint>
                                        <div class={"sp-t-1 input-with-hint input-with-hint--outlined " + (this.localConfData.withPresentation ? null : ' d-none')}>
                                            <rt-input type="number" is-b2b-input={true} outlined={true} max-length={4}
                                                      placeholder="Задайте PIN-код Модератора" ref="modPIN" value={this.localConfData.modPIN}/>
                                            <rt-hint simple-tool-tip={true}>4х-значное число. В случае, если выбрана
                                                конференция с Лидером, то PIN-коды будут совпадать.
                                            </rt-hint>
                                        </div>
                                    </div>
                                    <div class="field-item sp-b-1">
                                        <rt-switch ref="closedList" onChangeswitcher={this.showClosedList}>Закрытый список
                                            участников
                                        </rt-switch>
                                        <rt-hint simple-tool-tip={true}>4х-значное число. В случае, если выбрана
                                            конференция с Лидером, то PIN-коды будут совпадать.
                                        </rt-hint>
                                    </div>
                                </div>
                            </div>
                            {participants()}
                            <div class="flex-start-center sp-t-1">
                                <rt-button class="rt-button-orange d-inline-block fs0 confirmation-button"
                                           target-popup="confirmation-popup" onClick={this.createConf}>Сохранить изменения
                                </rt-button>
                                {this.itsOK ?
                                    <span class="rt-font-label d-inline-block sp-l-1 color-main05">После создания конференции
                                    её можно редактировать. Возможность редактирования прекращается за 10 минут до начала
                                    конференции.</span> :
                                    <div class="sp-l-1 flex-row d-flex align-center">
                                        <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-635.000000, -10597.000000)">
                                                    <g transform="translate(635.000000, 10597.000000)">
                                                        <circle fill="#FF0C0C" fill-rule="nonzero" opacity="0.7" cx="10"
                                                                cy="10" r="10"></circle>
                                                        <polygon fill="#FFFFFF"
                                                                 points="8.9393 10 5.46906 13.4703 6.53099 14.5297 10 11.0607 13.4691 14.5298 14.531 13.4704 11.0607 10 14.531 6.52972 13.4691 5.47034 10 8.9394 6.531 5.47035 5.46906 6.52972"></polygon>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <span class="rt-font-label d-inline-block sp-l-0-2 color-error">Вы заполнили не все поля
                                            или допустили ошибку. Пожалуйста, проверьте заполнение полей, выделенных красным.</span>
                                    </div>}
                            </div>
                        </div>
                    </rt-real-popup>
                } else {
                    return <rt-real-popup trigger-element-class="edit-button" main-wrapper-class="app" position-center={true} class="edit-popup">
                        <div class="popup-content">
                            <h3 class="rt-font-h3 sp-b-1">Редактирование недоступно</h3>
                            <p class="rt-font-small-paragraph">Осталось менее 10 минут до начала конференции.
                                К сожалению, редактирование на данном этапе невозможно.</p>
                        </div>
                    </rt-real-popup>
                }
            }
        }
    };
</script>
