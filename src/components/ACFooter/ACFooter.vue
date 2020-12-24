<script type="text/jsx">
    const componentsList = {};
    export default {
        name: "ACFooter",
        components: componentsList,
        props:{
            phone: {
                type: Number,
                default: null
            },
            name: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                dateNow : null,
                months: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
                locationsList: ['Новосибирск', 'Красноярск', 'Тула', 'Иркутск']
            }
        },
        mounted() {
            setInterval(() => {
              this.dateNow = new Date();
            },1000)
        },
        created() {},
        methods: {
            addLocation() {
                document.body.dispatchEvent(new CustomEvent("open-popup", {'detail': [this.$el, 'settings-popup']}));
            }
        },
        render(h) {
            const chosenLocations = () => {
                return this.locationsList.map(item => {
                    return <div class="current-time__chosen-location">
                        <div class="now__time">13 : 49</div>
                        <div class="current-time__location">{item}</div>
                    </div>
                })
            };
            const addLocationButton = () => {
                if(this.locationsList.length < 5 ) {
                    return <rt-button class="add-location c-p" onClick={this.addLocation} color="transparent"
                                      small={true}>
                        <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g transform="translate(-814.000000, -28.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                    <g transform="translate(370.000000, 20.000000)">
                                        <g transform="translate(432.000000, 1.000000)">
                                            <path
                                                d="M23,12 L21,12 L21,16 L17,16 L17,18 L21,18 L21,22 L23,22 L23,18 L27,18 L27,16 L23,16 L23,12 Z M22,7 C16.48,7 12,11.48 12,17 C12,22.52 16.48,27 22,27 C27.52,27 32,22.52 32,17 C32,11.48 27.52,7 22,7 Z M22,25 C17.59,25 14,21.41 14,17 C14,12.59 17.59,9 22,9 C26.41,9 30,12.59 30,17 C30,21.41 26.41,25 22,25 Z"
                                                id="Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span class="sp-l-0-3 color-white">Добавить город</span>
                    </rt-button>
                } else {
                    return null
                }
            };
            return <div class="conference-footer">
                <div class="rt-container">
                    <div class="rt-col">
                        <div class="conference-footer__top">
                            <div class="current-time">
                                <div class="current-time__current-location">
                                    <div class="now__date">{this.dateNow?.getDate()} {this.months[this.dateNow?.getMonth()]} {this.dateNow?.getFullYear()}</div>
                                    <div class="now__time">{this.dateNow?.getHours().toString().length < 2 ? ('0' + this.dateNow.getHours()) : this.dateNow?.getHours()} : {this.dateNow?.getMinutes().toString().length < 2 ? ('0' + this.dateNow.getMinutes()) : this.dateNow?.getMinutes()}</div>
                                    <div class="current-time__location">
                                        <span>{this.dateNow ? /\((.*)\)/.exec(this.dateNow.toString())[1] : null}</span>
                                    </div>
                                </div>
                                {chosenLocations()}
                                {addLocationButton()}
                            </div>
                            <a href="/help" class="conference-footer__help-link" target="_blank">Нужна помощь?</a>
                        </div>
                        <div class="conference-footer__bottom color-white05">
                            <div class="conference-footer__about">
                                <span>Узнать больше</span>
                                <a href="https://www.rt.ru/b2b/telephony/audioconference" target="_blank" class="color-white"> об услуге Аудиоконференция
                                    <svg class="conference-footer__about-icon" width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g transform="translate(-452.000000, -96.000000)" fill="#B8B9C0" fill-rule="nonzero">
                                                <g transform="translate(450.000000, 94.000000)">
                                                    <path d="M12.6666667,12.6666667 L3.33333333,12.6666667 L3.33333333,3.33333333 L8,3.33333333 L8,2 L3.33333333,2 C2.59333333,2 2,2.6 2,3.33333333 L2,12.6666667 C2,13.4 2.59333333,14 3.33333333,14 L12.6666667,14 C13.4,14 14,13.4 14,12.6666667 L14,8 L12.6666667,8 L12.6666667,12.6666667 Z M9.33333333,2 L9.33333333,3.33333333 L11.7266667,3.33333333 L5.17333333,9.88666667 L6.11333333,10.8266667 L12.6666667,4.27333333 L12.6666667,6.66666667 L14,6.66666667 L14,2 L9.33333333,2 Z" id="Shape"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                            <div class="conference-footer__legal">
                                <span class="conference-footer__copyright">
                                    <a href="https://www.rt.ru/b2b" target="_blank">© 2020 ПАО «Ростелеком». 18+.</a>
                                </span>
                                <span class="conference-footer__phone">
                                    <a href="tel:88001000800">8 800 100 0 800</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    };
</script>
