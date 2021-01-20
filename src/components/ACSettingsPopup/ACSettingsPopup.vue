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
                    {label:'Москва', selected: false},
                    {label:'Санкт-Петербург', selected: false},
                    {label:'Новосибирск', selected: false},
                    {label:'Екатеринбург', selected: false},
                    {label:'Казань', selected: false},
                    {label:'Нижний Новгород', selected: false},
                    {label:'Челябинск', selected: false},
                    {label:'Самара', selected: false},
                    {label:'Омск', selected: false},
                    {label:'Ростов-на-Дону', selected: false},
                    {label:'Уфа', selected: false},
                    {label:'Красноярск', selected: false},
                    {label:'Воронеж', selected: false},
                    {label:'Пермь', selected: false},
                    {label:'Волгоград', selected: false}
                ],
                passChangeMessage: false,
                passChanged: false,
                passChangeError: false,
                chosenCities: ['Москва', 'Санкт-Петербург', 'Челябинск']
            }
        },
        mounted() {
            this.$el.querySelectorAll('.rt-tabs-navigation__item-name').forEach(item => {
                item.addEventListener('click', this.tabChanged)
            });
            setTimeout(()=> {
                this.$refs.innerContent.style.minHeight = this.$refs.innerContent.offsetHeight + 'px';
            },100)
        },
        created() {},
        methods: {
            passChange() {
                let form = this.$el.querySelector('.password-block-wrapper').querySelectorAll('.input-element');
                let authConfig = JSON.parse(localStorage.acAuth);
                if(form[0].value == authConfig.password && form[1].value == form[2].value) {
                    authConfig.password = form[1].value;
                    localStorage.setItem('acAuth', JSON.stringify(authConfig));
                    this.passChanged = true;
                    this.passChangeMessage = true;
                } else {
                    this.passChangeError = true;
                    setTimeout(()=> {
                        this.passChanged = false;
                        this.passChangeMessage = true;
                    }, 2500)
                }
            },
            tabChanged() {
                this.passChangeMessage = false;
            },
            closeThisPopup() {
                this.$el.querySelector('.rtb-popup-close').dispatchEvent(new MouseEvent('click'));
            },
            removeItem(index) {
                this.chosenCities.splice(index, 1)
            },
            addCity() {
                if(this.chosenCities.indexOf(this.$refs.city.localValue) < 0) {
                    this.chosenCities.push(this.$refs.city.localValue);
                }
            }
        },
        render(h) {
            const selectOptions = () => {
                return this.optionsList.map((item) => {
                    return <rt-select-option>
                        {item.label}
                    </rt-select-option>
                })
            };
            const passChange = () => {
                if(!this.passChangeMessage) {
                    return <div>
                        <h4 class="rt-font-h4 sp-t-2 sp-b-1">Изменить пароль</h4>
                        <p class="rt-font-small-paragraph color-main05 sp-b-2">Мы рекомендуем
                            использовать надежные пароли, чтобы защитить личные данные и конфиденциальную
                            информацию. Пароль должен содержать не менее 8 символов, состоять из заглавных и
                            строчных букв, специальных символов и цифр.</p>
                        <div class="password-block-wrapper">
                            <div class="sp-b-1">
                                <rt-input type="password" placeholder="Введите старый пароль" is-b2b-input={true}
                                          outlined={true} has-error={this.passChangeError} error-message="неверный пароль"/>
                            </div>
                            <div class="sp-b-1">
                                <rt-input type="password" placeholder="Введите новый пароль" is-b2b-input={true}
                                          outlined={true} has-error={this.passChangeError} error-message="пароли не совпадают"/>
                            </div>
                            <div class="sp-b-1-3">
                                <rt-input type="password" placeholder="Повторите пароль" is-b2b-input={true}
                                          outlined={true} has-error={this.passChangeError} error-message="пароли не совпадают"/>
                            </div>
                            <div>
                                <rt-button class="rt-button-orange" onClick={this.passChange}>Изменить пароль</rt-button>
                            </div>
                        </div>
                    </div>
                } else {
                    if(!this.passChanged) {
                        return <div>
                            <h4 class="rt-font-h4 sp-t-2 sp-b-1">Произошла неизвестная ошибка, попробуйте повторить <br/>попытку через 5 минут!</h4>
                            <p class="rt-font-small-paragraph color-main05 sp-b-5">Приносим Вам свои искренние сожаления.</p>
                            <div class="sp-b-1">
                                <rt-button class="rt-button-orange" onClick={this.closeThisPopup}>Закрыть</rt-button>
                            </div>
                        </div>
                    } else {
                        return <div>
                            <h4 class="rt-font-h4 sp-t-2 sp-b-1">Изменения успешно сохранены!</h4>
                            <p class="rt-font-small-paragraph color-main05 sp-b-5">Вы можете продолжить работу в личном кабинете.</p>
                            <div class="sp-b-1">
                                <rt-button class="rt-button-orange" onClick={this.closeThisPopup}>Закрыть</rt-button>
                            </div>
                        </div>
                    }
                }
            };
            const chosenCities = () => {
                return this.chosenCities.map((item, index) => {
                    const removeItem = () => {
                        this.removeItem(index);
                    };
                    return <div class="chosen-cities__item">
                        <div class="chosen-cities__time">20 : 49</div>
                        <div class="chosen-cities__title">{item}</div>
                        <button class="chosen-cities__delete-button" onClick={removeItem}>
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
                        </button>
                    </div>
                })
            };
            return <rt-real-popup trigger-element-class="conference-header__settings-icon" main-wrapper-class="app" position-center={true} class="settings-popup">
                <div class="popup-content" ref="innerContent">
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
                                    <rt-input placeholder="Ваше местонахождение" value="0" outlined={true} is-b2b-input={true}
                                              value={new Date().toTimeString().slice(9)} disabled={true}/>
                                </div>
                                <rt-radio-button is-orange={true} name="type-2" value="local">
                                    <p class="rt-font-small-paragraph">Единое время <span class="color-main05">(выставляется вручную)</span>
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
                                        <rt-select label="Выберите страну" value="0" outlined={true} is-b2b-select={true}
                                                   disabled={this.chosenCities.length >= 5}>
                                            {selectOptions()}
                                        </rt-select>
                                    </div>
                                    <div class="select-wrapper">
                                        <rt-select label="Выберите город" value="0" outlined={true} is-b2b-select={true}
                                                   ref="city" disabled={this.chosenCities.length >= 5}>
                                            {selectOptions()}
                                        </rt-select>
                                    </div>
                                    <div class="button-wrapper">
                                        <rt-button class="rt-button-orange" onClick={this.addCity}
                                                   disabled={this.chosenCities.length >= 5}>Добавить</rt-button>
                                    </div>
                                </div>
                                <div class="chosen-cities sp-t-2 sp-b-1">
                                    {chosenCities()}
                                </div>
                            </rt-tabs-content-item>
                            <rt-tabs-content-item name="ac3">
                                {passChange()}
                            </rt-tabs-content-item>
                        </template>
                    </rt-tabs>
                </div>
            </rt-real-popup>
        }
    };
</script>
