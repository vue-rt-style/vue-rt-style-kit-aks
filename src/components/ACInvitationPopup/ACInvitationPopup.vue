<script type="text/jsx">
    const componentsList = {};
    export default {
        name: "ACInvitationPopup",
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
        watch:{
            confData(newVal){
                this.localConfData = newVal;
            }
        },
        mounted() {},
        created() {},
        methods: {
            closeThisPopup() {
                this.$el.querySelector('.rtb-popup-close').dispatchEvent(new MouseEvent('click'));
            }
        },
        render(h) {
            const participantInvitation = () => {
                if(this.localConfData) {
                    return <div class="sp-h-1 sp-v-1 email-text">
                        <p class="rt-font-small-paragraph sp-b-1-1">Здравствуйте!<br/>
                            Вы приглашены на аудиоконференцию.<br/>
                            Начало: {this.localConfData.date} в {this.localConfData.startHour.toString().length < 2 ? ('0' + this.localConfData.startHour) : this.localConfData.startHour}:{this.localConfData.startMinute.toString().length < 2 ? ('0' + this.localConfData.startMinute) : this.localConfData.startMinute} (время
                            московское).<br/>
                            Тема: {this.localConfData.theme}<br/>
                            Продолжительность: {this.localConfData.durationHour} ч {this.localConfData.durationMinute.toString().length < 2 ? ('0' + this.localConfData.durationMinute) : this.localConfData.durationMinute} мин.
                        </p>
                        <p class="rt-font-small-paragraph sp-b-1-1">В назначенное время Вам нужно
                            осуществить вызов на номер 8 800 200 4064.<br/>
                            {!this.localConfData.noPIN ? `PIN-код конференции: ${this.localConfData.leaderPIN}` : null}
                        </p>
                        <p class="rt-font-small-paragraph">Презентация доступна по ссылке
                            http://{this.localConfData.presentationLink}
                        </p>
                    </div>
                } else {
                    return null
                }
            };
            const leaderInvitation = () => {
                if(this.localConfData?.leaderPIN) {
                    return <div class="sp-h-1 sp-v-1 email-text">
                        <p class="rt-font-small-paragraph sp-b-1-1">Здравствуйте, {this.localConfData.leader}!<br/>
                            Вы приглашены на аудиоконференцию.<br/>
                            Начало: {this.localConfData.date} в {this.localConfData.startHour.toString().length < 2 ? ('0' + this.localConfData.startHour) : this.localConfData.startHour}:{this.localConfData.startMinute.toString().length < 2 ? ('0' + this.localConfData.startMinute) : this.localConfData.startMinute} (время
                            московское).<br/>
                            Тема: {this.localConfData.theme}<br/>
                            Продолжительность: {this.localConfData.durationHour} ч {this.localConfData.durationMinute.toString().length < 2 ? ('0' + this.localConfData.durationMinute) : this.localConfData.durationMinute} мин.
                        </p>
                        <p class="rt-font-small-paragraph sp-b-1-1">В назначенное время Вам нужно
                            осуществить вызов на номер 8 800 200 4064.<br/>
                            {!this.localConfData.noPIN ? `PIN-код конференции: ${this.localConfData.leaderPIN}` : null}
                        </p>
                        <p class="rt-font-small-paragraph">Презентация доступна по ссылке
                            http://{this.localConfData.presentationLink}
                        </p>
                    </div>
                } else {
                    return null
                }
            };
            return <rt-real-popup trigger-element-class="invitation-button" main-wrapper-class="app"
                                  position-center={true} class="invitation-popup">
                <div class="popup-content">
                    <h3 class="rt-font-h3 sp-b-1">Приглашение на конференцию</h3>
                    <rt-tabs class="bordered-tabs">
                        <template slot="navigation">
                            <rt-tabs-nav-item anchor="ac4" remove-base-tag={true} name="ac4">Приглашение участникам</rt-tabs-nav-item>
                            {this.localConfData?.leaderPIN ? <rt-tabs-nav-item anchor="ac5" remove-base-tag={true} name="ac5">Приглашение лидеру</rt-tabs-nav-item> : null}
                        </template>
                        <template slot="content">
                            <rt-tabs-content-item name="ac4">
                                <div class="sp-t-1 sp-b-2">
                                    {participantInvitation()}
                                </div>
                                <p class="rt-font-small-paragraph sp-b-1">Вы можете открыть письмо в вашем почтовом
                                    клиенте с набранным выше шаблоном.</p>
                                <div class="row sp-b-2">
                                    <div class="rt-col-6">
                                        <rt-select is-b2b-select={true} outlined={true} label="Ваш почтовый клиент">
                                            <rt-select-option>Mozilla Thunderbird</rt-select-option>
                                            <rt-select-option>Mozilla Thunderbird</rt-select-option>
                                            <rt-select-option>Mozilla Thunderbird</rt-select-option>
                                        </rt-select>
                                    </div>
                                    <div class="rt-col-6 flex-end-center">
                                        <rt-button class="rt-button-orange" is-block={true}>Открыть шаблон в почтовом клиенте</rt-button>
                                    </div>
                                </div>
                                <div class="row sp-b-1-3">
                                    <div class="rt-col-7">
                                        <p class="rt-font-small-paragraph">Вы можете также создать приглашение
                                            средствами календаря Outlook. Для этого необходимо загрузить .ics файл и
                                            запустить его для импорта события.</p>
                                    </div>
                                    <div class="rt-col-1"/>
                                    <div class="rt-col-4 flex-end-top">
                                        <rt-button class="rt-button-orange-border">Загрузить .ics файл</rt-button>
                                    </div>
                                </div>
                            </rt-tabs-content-item>
                            {this.localConfData?.leaderPIN ? <rt-tabs-content-item name="ac5">
                                <div class="sp-t-1 sp-b-2">
                                    {leaderInvitation()}
                                </div>
                                <p class="rt-font-small-paragraph sp-b-1">Вы можете открыть письмо в вашем почтовом
                                    клиенте с набранным выше шаблоном.</p>
                                <div class="row sp-b-2">
                                    <div class="rt-col-6">
                                        <rt-select is-b2b-select={true} outlined={true} label="Ваш почтовый клиент">
                                            <rt-select-option>Mozilla Thunderbird</rt-select-option>
                                            <rt-select-option>Mozilla Thunderbird</rt-select-option>
                                            <rt-select-option>Mozilla Thunderbird</rt-select-option>
                                        </rt-select>
                                    </div>
                                    <div class="rt-col-6 flex-end-center">
                                        <rt-button class="rt-button-orange" is-block={true}>Открыть шаблон в
                                            почтовом клиенте
                                        </rt-button>
                                    </div>
                                </div>
                                <div class="row sp-b-1-3">
                                    <div class="rt-col-7">
                                        <p class="rt-font-small-paragraph">Вы можете также создать приглашение
                                            средствами календаря Outlook. Для этого необходимо загрузить .ics файл и
                                            запустить его для импорта события.</p>
                                    </div>
                                    <div class="rt-col-1"/>
                                    <div class="rt-col-4 flex-end-top">
                                        <rt-button class="rt-button-orange-border">Загрузить .ics файл</rt-button>
                                    </div>
                                </div>
                            </rt-tabs-content-item>: null}
                        </template>
                    </rt-tabs>
                    <div class="sp-t-1-3">
                        <rt-button class="rt-button-gray confirmation-button" small={true} target-popup="confirmation-popup"
                                   popup-button={true} onClick={this.closeThisPopup}>
                            <svg width="18px" height="12px" viewBox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-3.000000, -6.000000)" fill="#575D68" fill-rule="nonzero">
                                        <g>
                                            <polygon points="21 11 6.83 11 10.41 7.41 9 6 3 12 9 18 10.41 16.59 6.83 13 21 13"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span class="sp-l-0-3">Вернуться к просмотру созданной конференции</span>
                        </rt-button>
                    </div>
                </div>
            </rt-real-popup>
        }
    };
</script>
