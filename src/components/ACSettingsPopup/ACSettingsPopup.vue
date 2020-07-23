<script type="text/jsx">
    const componentsList = {};
    export default {
        name: "ACSettingsPopup",
        components: componentsList,
        props:{

        },
        data() {
            return {
                optionsList: [
                    {label:"Адыгея Респ",selected:true},
                    {label:"Алтай Респ",selected:false},
                    {label:"Алтайский край",selected:false},
                    {label:"Амурская обл",selected:false},
                    {label:"Архангельская обл",selected:false},
                    {label:"Астраханская обл",selected:false},
                    {label:"Башкортостан Респ",selected:false},
                    {label:"Белгородская обл",selected:false},
                    {label:"Брянская обл",selected:false},
                    {label:"Бурятия Респ",selected:false},
                    {label:"Владимирская обл",selected:false},
                    {label:"Волгоградская обл",selected:false},
                    {label:"Вологодская обл",selected:false},
                    {label:"Воронежская обл",selected:false},
                    {label:"Дагестан Респ",selected:false},
                    {label:"Еврейская Аобл",selected:false},
                    {label:"Забайкальский край",selected:false},
                    {label:"Ивановская обл",selected:false},
                    {label:"Ингушетия Респ",selected:false},
                    {label:"Иркутская обл",selected:false},
                    {label:"Кабардино-Балкарская Респ",selected:false},
                    {label:"Калининградская обл",selected:false},
                    {label:"Калмыкия Респ",selected:false},
                    {label:"Калужская обл",selected:false},
                    {label:"Камчатский край",selected:false},
                    {label:"Карачаево-Черкесская Респ",selected:false},
                    {label:"Карелия Респ",selected:false},
                    {label:"Кемеровская обл",selected:false},
                    {label:"Кировская обл",selected:false},
                    {label:"Коми Респ",selected:false},
                    {label:"Костромская обл",selected:false},
                    {label:"Краснодарский край",selected:false},
                    {label:"Красноярский край",selected:false},
                    {label:"Курганская обл",selected:false},
                    {label:"Курская обл",selected:false},
                    {label:"Ленинградская обл",selected:false},
                    {label:"Липецкая обл",selected:false},
                    {label:"Магаданская обл",selected:false},
                    {label:"Марий Эл Респ",selected:false},
                    {label:"Мордовия Респ",selected:false},
                    {label:"Москва г",selected:false},
                    {label:"Московская обл",selected:false},
                    {label:"Мурманская обл",selected:false},
                    {label:"Ненецкий АО",selected:false},
                    {label:"Нижегородская обл",selected:false},
                    {label:"Новгородская обл",selected:false},
                    {label:"Новосибирская обл",selected:false},
                    {label:"Омская обл",selected:false},
                    {label:"Оренбургская обл",selected:false},
                    {label:"Орловская обл",selected:false},
                    {label:"Пензенская обл",selected:false},
                    {label:"Пермский край",selected:false},
                    {label:"Приморский край",selected:false},
                    {label:"Псковская обл",selected:false},
                    {label:"Ростовская обл",selected:false},
                    {label:"Рязанская обл",selected:false},
                    {label:"Самарская обл",selected:false},
                    {label:"Санкт-Петербург г",selected:false},
                    {label:"Саратовская обл",selected:false},
                    {label:"Саха /Якутия/ Респ",selected:false},
                    {label:"Сахалинская обл",selected:false},
                    {label:"Свердловская обл",selected:false},
                    {label:"Северная Осетия - Алания Респ",selected:false},
                    {label:"Смоленская обл",selected:false},
                    {label:"Ставропольский край",selected:false},
                    {label:"Тамбовская обл",selected:false},
                    {label:"Татарстан Респ",selected:false},
                    {label:"Тверская обл",selected:false},
                    {label:"Томская обл",selected:false},
                    {label:"Тульская обл",selected:false},
                    {label:"Тыва Респ",selected:false},
                    {label:"Тюменская обл",selected:false},
                    {label:"Удмуртская Респ",selected:false},
                    {label:"Ульяновская обл",selected:false},
                    {label:"Хабаровский край",selected:false},
                    {label:"Хакасия Респ",selected:false},
                    {label:"Ханты-Мансийский Автономный округ - Югра АО",selected:false},
                    {label:"Челябинская обл",selected:false},
                    {label:"Чеченская Респ",selected:false},
                    {label:"Чувашская Респ",selected:false},
                    {label:"Чукотский АО",selected:false},
                    {label:"Ямало-Ненецкий АО",selected:false},
                    {label:"Ярославская обл",selected:false},
                ]
            }
        },
        mounted() {},
        created() {},
        methods: {},
        render(h) {
            const selectOptions = () => {
                return this.optionsList.map((item) => {
                    return <rt-select-option>
                        {item.label}
                    </rt-select-option>
                })
            }
            return <rt-real-popup trigger-element-class="conference-header__settings-icon" main-wrapper-class="app" position-center={true} class="settings-popup">
                <div class="popup-content">
                    <h3 class="rt-font-h3 sp-b-1">Настройки личного кабинета</h3>
                    <rt-tabs>
                        <template slot="navigation">
                            <rt-tabs-nav-item anchor="ac1" remove-base-tag={true} name="ac1">Время системы</rt-tabs-nav-item>
                            <rt-tabs-nav-item anchor="ac2" remove-base-tag={true} name="ac2">Избранные города</rt-tabs-nav-item>
                            <rt-tabs-nav-item anchor="ac3" remove-base-tag={true} name="ac3">Изменить пароль</rt-tabs-nav-item>
                        </template>
                        <template slot="content">
                            <rt-tabs-content-item name="ac1">
                                <h4 class="rt-font-h4 sp-t-2 sp-b-1">Время системы</h4>
                                <rt-radio-button is-orange={true} name="type-2" checked={true} value="local">
                                    <p class="rt-font-small-paragraph">Местное время <span class="color-main05">(определяется автоматически)</span></p>
                                </rt-radio-button>
                                <div class="sp-l-1-2 sp-b-2">
                                    <p class="rt-font-small-paragraph color-main05 sp-t-1 sp-b-1">При входе, система автоматически
                                        определит ваше местоположение и переведет часы на местное (для вас) время. При
                                        этом, например: если два сотрудника организации, пользутся системой под одним
                                        логином в Москве и Владивостоке, то каждый для себя видит свое местное время.</p>
                                    <rt-select label="Ваше местонахождение" value="0" outlined={true} is-b2b-select={true}>
                                        {selectOptions()}
                                    </rt-select>
                                </div>
                                <rt-radio-button is-orange={true} name="type-2" value="local">
                                    <p class="rt-font-small-paragraph">Единое время <span className="color-main05">(выставляется вручную)</span>
                                    </p>
                                </rt-radio-button>
                                <div class="sp-l-1-2">
                                    <p class="rt-font-small-paragraph color-main05 sp-t-1 sp-b-1">Вне зависимости от вашего
                                        местонахождения время системы будет настроено по единому для всех времени,
                                        например по Московскому (GMT +3:00)</p>
                                    <rt-select label="Выберите часовой пояс" value="0" outlined={true} is-b2b-select={true}>
                                        {selectOptions()}
                                    </rt-select>
                                </div>
                            </rt-tabs-content-item>
                            <rt-tabs-content-item name="ac2">
                                <h4 class="rt-font-h4 sp-t-2 sp-b-1">Избранные города</h4>
                                <p class="rt-font-small-paragraph color-main05 sp-b-2">Вы можете добавить
                                    не более 5 городов в список избранных для того, чтобы было удобнее ориентироваться
                                    во времени в разных уголках мира.</p>
                                <div class="custom-wrapper">
                                    <div class="select-wrapper">
                                        <rt-select label="Выберите страну" value="0" outlined={true} is-b2b-select={true}>
                                            {selectOptions()}
                                        </rt-select>
                                    </div>
                                    <div class="select-wrapper">
                                        <rt-select label="Выберите город" value="0" outlined={true} is-b2b-select={true}>
                                            {selectOptions()}
                                        </rt-select>
                                    </div>
                                    <div class="button-wrapper">
                                        <rt-button class="rt-button-orange">Добавить</rt-button>
                                    </div>
                                </div>
                                <div class="chosen-cities sp-t-2 sp-b-1">
                                    <div class="chosen-cities__item">
                                        <div class="chosen-cities__time">20 : 49</div>
                                        <div class="chosen-cities__title">Новосибирск</div>
                                        <button class="chosen-cities__delete-button">
                                            <svg width="11px" height="11px" viewBox="0 0 11 11" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g transform="translate(-1029.000000, -1305.000000)" stroke="#575D68" stroke-width="2">
                                                        <g transform="translate(1024.000000, 1300.000000)">
                                                            <path d="M10.5,5 L10.5,16 M16,10.5 L5,10.5" transform="translate(10.500000, 10.500000) rotate(-315.000000) translate(-10.500000, -10.500000) "></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="chosen-cities__item">
                                        <div class="chosen-cities__time">20 : 49</div>
                                        <div class="chosen-cities__title">Новосибирск</div>
                                        <button class="chosen-cities__delete-button">
                                            <svg width="11px" height="11px" viewBox="0 0 11 11" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g transform="translate(-1029.000000, -1305.000000)" stroke="#575D68" stroke-width="2">
                                                        <g transform="translate(1024.000000, 1300.000000)">
                                                            <path d="M10.5,5 L10.5,16 M16,10.5 L5,10.5" transform="translate(10.500000, 10.500000) rotate(-315.000000) translate(-10.500000, -10.500000) "></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="chosen-cities__item">
                                        <div class="chosen-cities__time">20 : 49</div>
                                        <div class="chosen-cities__title">Новосибирск</div>
                                        <button class="chosen-cities__delete-button">
                                            <svg width="11px" height="11px" viewBox="0 0 11 11" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g transform="translate(-1029.000000, -1305.000000)" stroke="#575D68" stroke-width="2">
                                                        <g transform="translate(1024.000000, 1300.000000)">
                                                            <path d="M10.5,5 L10.5,16 M16,10.5 L5,10.5" transform="translate(10.500000, 10.500000) rotate(-315.000000) translate(-10.500000, -10.500000) "></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="chosen-cities__item">
                                        <div class="chosen-cities__time">20 : 49</div>
                                        <div class="chosen-cities__title">Новосибирск</div>
                                        <button class="chosen-cities__delete-button">
                                            <svg width="11px" height="11px" viewBox="0 0 11 11" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g transform="translate(-1029.000000, -1305.000000)" stroke="#575D68" stroke-width="2">
                                                        <g transform="translate(1024.000000, 1300.000000)">
                                                            <path d="M10.5,5 L10.5,16 M16,10.5 L5,10.5" transform="translate(10.500000, 10.500000) rotate(-315.000000) translate(-10.500000, -10.500000) "></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </rt-tabs-content-item>
                            <rt-tabs-content-item name="ac3">
                                <h4 class="rt-font-h4 sp-t-2 sp-b-1">Изменить пароль</h4>
                                <p class="rt-font-small-paragraph color-main05 sp-b-2">Мы рекомендуем
                                    использовать надежные пароли, чтобы защитить личные данные  и конфиденциальную
                                    информацию. Пароль должен содержать не менее 8 символов, состоять из заглавных и
                                    строчных букв, специальных символов и цифр.</p>
                                <div class="password-block-wrapper">
                                    <div class="sp-b-1">
                                        <rt-input type="password" placeholder="Введите старый пароль" is-b2b-input={true} outlined={true}/>
                                    </div>
                                    <div class="sp-b-1">
                                        <rt-input type="password" placeholder="Введите новый пароль" is-b2b-input={true} outlined={true}/>
                                    </div>
                                    <div class="sp-b-1-3">
                                        <rt-input type="password" placeholder="Повторите пароль" is-b2b-input={true} outlined={true}/>
                                    </div>
                                    <div class="sp-b-1">
                                        <rt-button class="rt-button-orange">Изменить пароль</rt-button>
                                    </div>
                                </div>
                            </rt-tabs-content-item>
                        </template>
                    </rt-tabs>
                </div>
            </rt-real-popup>
        }
    };
</script>
