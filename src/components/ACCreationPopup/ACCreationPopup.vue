<script type="text/jsx">
    const componentsList = {};
    export default {
        name: "ACCreationPopup",
        components: componentsList,
        props:{

        },
        data() {
            return {

            }
        },
        mounted() {},
        created() {},
        methods: {
            closeThisPopup() {
                this.$el.querySelector('.rtb-popup-close').dispatchEvent(new MouseEvent('click'));
                global?.dispatchEvent(new Event('newConf'));
            },
            toggleInput($event) {
              $event.target.closest('.field-item').querySelector('.input-with-hint--outlined').classList.toggle('d-none')
            },
            controlSound($event) {
                this.$el.querySelectorAll('.mic-icon').forEach((item)=> {
                    item.innerHTML = '<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" class="mic-icon__svg">\n' +
                        '    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                        '        <g>\n' +
                        '            <polygon points="0 0 24 0 24 24 0 24"></polygon>\n' +
                        '            <path d="M10.8,4.9 C10.8,4.24 11.34,3.7 12,3.7 C12.66,3.7 13.2,4.24 13.2,4.9 L13.19,8.81 L15,10.6 L15,5 C15,3.34 13.66,2 12,2 C10.46,2 9.21,3.16 9.04,4.65 L10.8,6.41 L10.8,4.9 L10.8,4.9 Z M19,11 L17.3,11 C17.3,11.58 17.2,12.13 17.03,12.64 L18.3,13.91 C18.74,13.03 19,12.04 19,11 Z M4.41,2.86 L3,4.27 L9,10.27 L9,11 C9,12.66 10.34,14 12,14 C12.23,14 12.44,13.97 12.65,13.92 L14.31,15.58 C13.6,15.91 12.81,16.1 12,16.1 C9.24,16.1 6.7,14 6.7,11 L5,11 C5,14.41 7.72,17.23 11,17.72 L11,21 L13,21 L13,17.72 C13.91,17.59 14.77,17.27 15.55,16.82 L19.75,21.02 L21.16,19.61 L4.41,2.86 Z" fill="#575D68" fill-rule="nonzero"></path>\n' +
                        '        </g>\n' +
                        '    </g>\n' +
                        '</svg>'
                })
            }
        },
        render(h) {
            const participantsList = () => {
                let list = [];
                for(let i = 0; i < 7; i++) {
                    list.push(i)
                }
                return list.map((item) => {
                    return <div class="sp-v-0-2 participants__item sp-l-1 sp-r-0-2">
                        <div class="person">
                            <p class="rt-font-small-paragraph">Рихтер Р.Л.-{item}</p>
                            <p class="rt-font-label color-main05">{item} - 345324532452</p>
                        </div>
                        <div class="manage">
                            <div class="mic-icon">
                                <svg width="14px" height="19px" viewBox="0 0 14 19" version="1.1" xmlns="http://www.w3.org/2000/svg" class="mic-icon__svg">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-972.000000, -2623.000000)">
                                            <g transform="translate(740.000000, 2601.000000)">
                                                <g transform="translate(227.000000, 20.000000)">
                                                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                    <path d="M12,14 C13.66,14 15,12.66 15,11 L15,5 C15,3.34 13.66,2 12,2 C10.34,2 9,3.34 9,5 L9,11 C9,12.66 10.34,14 12,14 Z M11,5 C11,4.45 11.45,4 12,4 C12.55,4 13,4.45 13,5 L13,11 C13,11.55 12.55,12 12,12 C11.45,12 11,11.55 11,11 L11,5 Z M17,11 C17,13.76 14.76,16 12,16 C9.24,16 7,13.76 7,11 L5,11 C5,14.53 7.61,17.43 11,17.92 L11,21 L13,21 L13,17.92 C16.39,17.43 19,14.53 19,11 L17,11 Z" fill="#575D68" fill-rule="nonzero"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div class="delete-icon">
                                <svg width="11px" height="11px" viewBox="0 0 11 11" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-1029.000000, -1305.000000)" stroke="#575D68" stroke-width="2">
                                            <g transform="translate(1024.000000, 1300.000000)">
                                                <path d="M10.5,5 L10.5,16 M16,10.5 L5,10.5" transform="translate(10.500000, 10.500000) rotate(-315.000000) translate(-10.500000, -10.500000) "></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                })
            };
            return <rt-real-popup trigger-element-class="create-button" main-wrapper-class="app" position-center={true} class="create-popup">
                <div class="popup-content">
                    <h3 class="rt-font-h3 sp-b-1">Создание новой конференции</h3>
                    <div class="field-wrapper sp-b-1">
                        <div class="sp-t-1 field-item">
                            <rt-input type="text" placeholder="Тема конференции" is-b2b-input={true} outlined={true}/>
                        </div>
                        <div class="sp-t-1 field-item">
                            <rt-input type="text" placeholder="Ответственный" is-b2b-input={true} outlined={true}/>
                        </div>
                        <div class="sp-t-1 field-item">
                            <rt-input type="number" placeholder="Количество участников" is-b2b-input={true} outlined={true} label="Минимальное количество участников — 3 человека, максимальное — 128 чел."/>
                        </div>
                        <div class="sp-t-1 field-item">
                            <rt-input type="text" placeholder="Дата конференции" is-b2b-input={true} outlined={true} type="date" class="calender-input"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="rt-col-6">
                            <p class="rt-font-small-paragraph sp-b-0-3">Время начала конференции</p>
                            <div class="field-wrapper sp-b-1-2">
                                <div class="field-item-2">
                                    <rt-input type="number" is-b2b-input={true} outlined={true} placeholder="Часы"/>
                                </div>
                                <div class="field-item-2">
                                    <rt-input type="number" is-b2b-input={true} outlined={true} placeholder="Минуты"/>
                                </div>
                                <p class="rt-font-label color-main05 sp-t-0-2">Время системы: единое, (GMT-8:00) Тихоокеанское время (США и Канада)</p>
                            </div>
                        </div>
                        <div class="rt-col-6">
                            <p class="rt-font-small-paragraph sp-b-0-3">Продолжительность конференции</p>
                            <div class="field-wrapper sp-b-1-2">
                                <div class="field-item-2">
                                    <rt-input type="number" is-b2b-input={true} outlined={true} placeholder="Часы"/>
                                </div>
                                <div class="field-item-2">
                                    <rt-input type="number" is-b2b-input={true} outlined={true} placeholder="Минуты"/>
                                </div>
                                <p class="rt-font-label color-main05 sp-t-0-2">Максимальная длительность конференции 12 часов</p>
                            </div>
                        </div>
                        <div class="field-wrapper rt-col">
                            <div class="field-item sp-b-2">
                                <rt-switch>Аудиозапись конференции</rt-switch>
                                <rt-hint simple-tool-tip={true}>4х-значное число. В случае, если выбрана
                                    конференция с Лидером, то PIN-коды будут совпадать.</rt-hint>
                            </div>
                            <div class="field-item sp-b-2">
                                <rt-switch>Конференция без PIN-кода</rt-switch>
                                <rt-hint simple-tool-tip={true}>4х-значное число. В случае, если выбрана
                                    конференция с Лидером, то PIN-коды будут совпадать.
                                </rt-hint>
                            </div>
                            <div class="field-item sp-b-2">
                                <rt-switch onClick={this.toggleInput}>Конференция с лидером</rt-switch>
                                <rt-hint simple-tool-tip={true}>4х-значное число. В случае, если выбрана
                                    конференция с Лидером, то PIN-коды будут совпадать.
                                </rt-hint>
                                <div class="sp-t-1 input-with-hint input-with-hint--outlined d-none">
                                    <rt-input type="number" is-b2b-input={true} outlined={true} placeholder="Задайте PIN-код Лидера"/>
                                    <rt-hint simple-tool-tip={true}>4х-значное число. В случае, если выбрана
                                    конференция с Лидером, то PIN-коды будут совпадать.
                                </rt-hint>
                                </div>
                            </div>
                            <div class="field-item sp-b-2">
                                <rt-switch onClick={this.toggleInput}>Конференция с презентацией</rt-switch>
                                <rt-hint simple-tool-tip={true}>4х-значное число. В случае, если выбрана
                                    конференция с Лидером, то PIN-коды будут совпадать.
                                </rt-hint>
                                <div class="sp-t-1 input-with-hint input-with-hint--outlined d-none">
                                    <rt-input type="number" is-b2b-input={true} outlined={true} placeholder="Задайте PIN-код Модератора"/>
                                    <rt-hint simple-tool-tip={true}>4х-значное число. В случае, если выбрана
                                    конференция с Лидером, то PIN-коды будут совпадать.
                                </rt-hint>
                                </div>
                            </div>
                            <div class="field-item sp-b-1">
                                <rt-switch>Закрытый список участников</rt-switch>
                                <rt-hint simple-tool-tip={true}>4х-значное число. В случае, если выбрана
                                    конференция с Лидером, то PIN-коды будут совпадать.
                                </rt-hint>
                            </div>
                        </div>
                    </div>
                    <div class="participants-list sp-v-1">
                        <div class="row">
                            <div class="rt-col-6">
                                <p class="rt-font-small-paragraph sp-b-0-3">Добавление участников</p>
                                <rt-input type="text" is-b2b-input={true} outlined={true}
                                          placeholder="Имя участника"/>
                                <p class="rt-font-label sp-t-0-3 sp-b-1 color-main05">Введите имя или выберите
                                    его из адресной книги</p>
                                <rt-input insert-type="tel" is-b2b-input={true} outlined={true}
                                          placeholder="Контактный телефон"/>
                                <div class="sp-t-1-2 flex-start-center">
                                    <rt-button class="rt-button-orange-border d-inline-block color-orange"
                                               small={true}>Добавить
                                    </rt-button>
                                    <rt-button class="rt-button-cool-grey-border d-inline-block" small={true} onClick={this.controlSound}>
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
                                        Отключить всем звук
                                    </rt-button>
                                </div>
                            </div>
                            <div class="rt-col-6">
                                <p class="rt-font-small-paragraph sp-b-0-3">Список участников
                                    <span class="participants-count sp-l-1">5 / 7</span>
                                </p>
                                <div class="participants">
                                    {participantsList()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-start-center sp-t-1">
                        <rt-button class="rt-button-orange d-inline-block fs0 confirmation-button"
                                   target-popup="confirmation-popup" popup-button={true} onClick={this.closeThisPopup}>Создать конференцию</rt-button>
                        <span class="rt-font-label d-inline-block sp-l-1 color-main05">После создания конференции
                                    её можно редактировать. Возможность редактирования прекращается за 10 минут до
                                    начала конференции.</span>
                    </div>
                </div>
            </rt-real-popup>
        }
    };
</script>
