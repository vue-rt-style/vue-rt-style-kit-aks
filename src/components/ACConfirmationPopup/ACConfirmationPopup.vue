<script type="text/jsx">
    const componentsList = {};
    export default {
        name: "ACConfirmationPopup",
        components: componentsList,
        props:{
            confData: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {
                localConfData: this.confData
            }
        },
        watch: {
            confData(newVal){
                this.localConfData = newVal
            }
        },
        mounted() {},
        created() {},
        methods: {
            closeThisPopup() {
                this.$el.querySelector('.rtb-popup-close').dispatchEvent(new MouseEvent('click'));
            },
            deleteConf() {
                document.body.dispatchEvent(new CustomEvent("open-popup", {'detail': [this.$el, 'delete-popup']}));
                this.$el.querySelector('.rtb-popup-close').dispatchEvent(new MouseEvent('click'));
            },
            copyLink() {
                var aux = document.createElement("input");
                aux.setAttribute("value", this.$refs.copyField.innerText);
                document.body.appendChild(aux);
                aux.select();
                document.execCommand("copy");
                document.body.removeChild(aux);
                this.$el.querySelector('.presentation-link-wrapper__hint').classList.add('presentation-link-wrapper__hint--active');
                setTimeout(() => {
                    this.$el.querySelector('.presentation-link-wrapper__hint').classList.remove('presentation-link-wrapper__hint--active')
                },1000)
            }
        },
        render(h) {
            const bodyContent = () => {
                if(this.localConfData) {
                    return <rt-table>
                        <template slot="columns">
                            <rt-table-col/>
                            <rt-table-col/>
                        </template>
                        <template slot="body">
                            <rt-table-row>
                                <rt-table-item>Тема конференции</rt-table-item>
                                <rt-table-item>{this.localConfData.theme}</rt-table-item>
                            </rt-table-row>
                            <rt-table-row>
                                <rt-table-item>Ответственный</rt-table-item>
                                <rt-table-item>{this.localConfData.leader}</rt-table-item>
                            </rt-table-row>
                            <rt-table-row>
                                <rt-table-item>Дата</rt-table-item>
                                <rt-table-item>{this.localConfData.date}</rt-table-item>
                            </rt-table-row>
                            <rt-table-row>
                                <rt-table-item>Время начала</rt-table-item>
                                <rt-table-item>
                                    {this.localConfData.startHour ? this.localConfData.startHour.toString().length < 2 ? ('0' + this.localConfData.startHour) : this.localConfData.startHour : '??'} : {this.localConfData.startMinute ? this.localConfData.startMinute.toString().length < 2 ? ('0' + this.localConfData.startMinute) : this.localConfData.startMinute : '??'}
                                </rt-table-item>
                            </rt-table-row>
                            <rt-table-row>
                                <rt-table-item>Продолжительность</rt-table-item>
                                <rt-table-item>{this.localConfData.durationHour ? this.localConfData.durationHour : '0'} ч {this.localConfData.durationMinute ? this.localConfData.durationMinute.toString().length < 2 ? ('0' + this.localConfData.durationMinute) : this.localConfData.durationMinute : '00'} мин</rt-table-item>
                            </rt-table-row>
                            <rt-table-row>
                                <rt-table-item>PIN конф. / лидера</rt-table-item>
                                <rt-table-item>{this.localConfData.noPIN ? 'без кода' : this.localConfData.leaderPIN} / {this.localConfData.leaderPIN ? this.localConfData.leaderPIN : 'без лидера'}</rt-table-item>
                            </rt-table-row>
                            <rt-table-row>
                                <rt-table-item>Количество участников</rt-table-item>
                                <rt-table-item>{this.localConfData.quantity}</rt-table-item>
                            </rt-table-row>
                            <rt-table-row>
                                <rt-table-item>Аудиозапись</rt-table-item>
                                <rt-table-item>{this.localConfData.audio ? 'Вкл.' : 'Выкл.'}</rt-table-item>
                            </rt-table-row>
                            {this.localConfData.withPresentation ? <rt-table-row>
                                <rt-table-item>Презентация / PIN модератора</rt-table-item>
                                <rt-table-item>Есть / {this.localConfData.modPIN} </rt-table-item>
                            </rt-table-row> : null}
                            {this.localConfData.withPresentation ? <rt-table-row>
                                <rt-table-item>
                                    <span>Перейти на </span>
                                    <a class="color-purple" href={this.localConfData.presentationLink} target="_blank">страницу презентации</a>
                                </rt-table-item>
                                <rt-table-item>
                                    <div class="flex-start-center">
                                        <div class="presentation-link color-block--cool-grey rt-space-vertical0-half rt-space-left0-half rt-space-right05">
                                            <div class="d-flex presentation-link-wrapper">
                                                <div class="presentation-icon vam">
                                                    <svg width="19px" height="22px" viewBox="0 0 19 22" version="1.1"
                                                         xmlns="http://www.w3.org/2000/svg" class="d-block">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <g transform="translate(-737.000000, -1914.000000)">
                                                                <g transform="translate(730.000000, 1908.000000)">
                                                                    <g transform="translate(5.000000, 5.000000)">
                                                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                                        <path
                                                                            d="M16,1 L4,1 C2.9,1 2,1.9 2,3 L2,17 L4,17 L4,3 L16,3 L16,1 Z M15,5 L8,5 C6.9,5 6.01,5.9 6.01,7 L6,21 C6,22.1 6.89,23 7.99,23 L19,23 C20.1,23 21,22.1 21,21 L21,11 L15,5 Z M8,21 L8,7 L14,7 L14,12 L19,12 L19,21 L8,21 Z"
                                                                            fill="#575D68" fill-rule="nonzero"></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <p class="sp-l-0-3 c-p" ref="copyField"
                                                      onClick={this.copyLink}>http://{this.localConfData.presentationLink}</p>
                                                <p class="presentation-link-wrapper__hint">Ссылка скопирована</p>
                                            </div>
                                        </div>
                                        <rt-hint simple-tool-tip={true}>Вы можете скопировать ссылку на презентацию, кликнув
                                            на нее мышкой
                                        </rt-hint>
                                    </div>
                                </rt-table-item>
                            </rt-table-row> : null}
                        </template>
                    </rt-table>
                } else {
                    return null
                }
            }
            return <rt-real-popup trigger-element-class="confirmation-button" main-wrapper-class="app"
                                  position-center={true} class="confirmation-popup">
                <div class="popup-content">
                    <h3 class="rt-font-h3 sp-b-1">Конференция успешно запланирована!</h3>
                    <p class="rt-font-small-paragraph sp-b-1-3">Теперь вы можете отправить приглашения всем
                        участникам конференции, отредактировать её или удалить.</p>
                    <rt-button class="rt-button-cool-grey-border edit-button" small={true} target-popup="edit-popup"
                               popup-button={true} onClick={this.closeThisPopup}>
                        <svg width="15px" height="16px" viewBox="0 0 15 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g transform="translate(-657.000000, -281.000000)">
                                    <g transform="translate(642.000000, 272.000000)">
                                        <g transform="translate(10.000000, 5.000000)">
                                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                            <path d="M5,16.3148148 L5,19.5555556 L8.05513123,19.5555556 L17.0657316,9.99753086 L14.0106004,6.75679012 L5,16.3148148 Z M7.37892885,17.8271605 L6.62940332,17.8271605 L6.62940332,17.0320988 L14.0106004,9.20246914 L14.7601259,9.99753086 L7.37892885,17.8271605 Z M19.4283664,6.27283951 L17.5219645,4.25061728 C17.3590242,4.07777778 17.1553488,4 16.9435264,4 C16.7317039,4 16.5280285,4.08641975 16.3732352,4.25061728 L14.8823312,5.83209877 L17.9374624,9.07283951 L19.4283664,7.49135802 C19.7461001,7.15432099 19.7461001,6.60987654 19.4283664,6.27283951 Z" fill="#575D68" fill-rule="nonzero"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span class="sp-l-0-3">Редактировать конференцию</span>
                    </rt-button>
                    <rt-button class="rt-button-cool-grey-border" small={true} onClick={this.deleteConf}>
                        <svg width="14px" height="18px" viewBox="0 0 14 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g transform="translate(-927.000000, -280.000000)">
                                    <g transform="translate(912.000000, 272.000000)">
                                        <g transform="translate(10.000000, 5.000000)">
                                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                            <path d="M16,9 L16,19 L8,19 L8,9 L16,9 M14.5,3 L9.5,3 L8.5,4 L5,4 L5,6 L19,6 L19,4 L15.5,4 L14.5,3 Z M18,7 L6,7 L6,19 C6,20.1 6.9,21 8,21 L16,21 C17.1,21 18,20.1 18,19 L18,7 Z" fill="#575D68" fill-rule="nonzero"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span class="sp-l-0-3">Удалить</span>
                    </rt-button>
                    <div class="sp-b-1-2"/>
                    {bodyContent()}
                    <div class="sp-t-1-3">
                        <rt-button class="rt-button-orange" target-popup="invitation-popup"
                                   popup-button={true} onClick={this.closeThisPopup}>Отправить приглашения</rt-button>
                    </div>
                </div>
            </rt-real-popup>
        }
    };
</script>
