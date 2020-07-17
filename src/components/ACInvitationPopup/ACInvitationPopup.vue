<script type="text/jsx">
    const componentsList = {};
    export default {
        name: "ACSInvitationPopup",
        components: componentsList,
        props:{

        },
        data() {
            return {

            }
        },
        mounted() {},
        created() {},
        methods: {},
        render(h) {
            return <rt-real-popup trigger-element-class="conference-header__create" main-wrapper-class="app" position-center={true}>
                <div class="popup-content">
                    <h3 class="rt-font-h3 sp-b-1">Приглашение на конференцию</h3>
                    <rt-tabs class="bordered-tabs">
                        <template slot="navigation">
                            <rt-tabs-nav-item anchor="ac4" remove-base-tag={true} name="ac4">Приглашение участникам</rt-tabs-nav-item>
                            <rt-tabs-nav-item anchor="ac5" remove-base-tag={true} name="ac5">Приглашение лидеру</rt-tabs-nav-item>
                        </template>
                        <template slot="content">
                            <rt-tabs-content-item name="ac4">
                                <div class="sp-t-1 sp-b-2">
                                    <div class="sp-h-1 sp-v-1 email-text">
                                        <p class="rt-font-small-paragraph sp-b-1-1">Здравствуйте!<br/>
                                        Вы приглашены на аудиоконференцию.<br/>
                                        Начало: 23 мая 2020 в 14:30 (время московское).<br/>
                                        Тема: Создание личного кабинета.<br/>Продолжительность: 2 ч 30 мин.</p>
                                        <p class="rt-font-small-paragraph sp-b-1-1">В назначенное время Вам нужно
                                            осуществить вызов на номер 8 800 200 4064.<br/>
                                            PIN-код конференции: 5582
                                        </p>
                                        <p class="rt-font-small-paragraph">Презентация доступна по ссылке
                                            http://presentation.rt.ru/rt/pin.jsp?pin=5582
                                        </p>
                                    </div>
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
                            <rt-tabs-content-item name="ac5"></rt-tabs-content-item>
                        </template>
                    </rt-tabs>
                    <div class="sp-t-1-3">
                        <rt-button class="rt-button-gray" small={true}>
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