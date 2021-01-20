<script type="text/jsx">
    const componentsList = {};
    export default {
        name: "ACPhonebookComponent",
        components: componentsList,
        props:{
            phoneBook: {
                type: Array,
                default: () => ([])
            },
            search: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                localPhoneBook: null,
                showAddPopup: false,
                isSearching: this.search
            }
        },
        computed: {
            sortPhonebook() {
                return this.localPhoneBook?.sort(this.compareNumbers);
            }
        },
        watch:{
            phoneBook(newVal){
                this.localPhoneBook = newVal;
            },
            search(newVal) {
                this.isSearching = newVal;
            }
        },
        mounted() {
            this.localPhoneBook = this.phoneBook;
            this.$parent.$on('add-contact', this.addContactPopup)
        },
        created() {},
        methods: {
            toggleOpen($event){
                this.$el.querySelectorAll('.conference__phonebook__item').forEach(item => {
                    if($event.target.closest('.conference__phonebook__item') != item) {
                        item.classList.remove('conference__phonebook__item--active')
                    }
                });
                $event.target.closest('.conference__phonebook__item').classList.toggle('conference__phonebook__item--active');
            },
            addContact() {
                let contact = {};
                contact.name = this.$refs.name.localValue.trim();
                contact.phone = this.$refs.phone.localValue.trim();
                contact.capital = this.$refs.name.localValue.trim().charAt(0).toLowerCase();
                let tempList = localStorage.phonebook ? JSON.parse(localStorage.phonebook) : [];
                tempList.push(contact);
                localStorage.setItem('phonebook', JSON.stringify(tempList));
                this.$refs.phone.localValue = '';
                this.$refs.name.localValue = '';
                this.showAddPopup = false;
                if(!!this.$parent.$refs.searchInput.localValue || !!this.$parent.$refs.searchInput.$el.querySelector('.input-element').value) {
                    this.$parent.$refs.searchInput.localValue = '';
                    this.$parent.$refs.searchInput.$el.querySelector('.input-clear').click();
                }
                this.$emit('contact-edited');
            },
            editItem(i) {
                let editItem = this.$el.querySelectorAll('.conference__phonebook__item')[i];
                this.localPhoneBook[i].name = editItem.querySelectorAll('.input-element')[0].value;
                this.localPhoneBook[i].phone = editItem.querySelectorAll('.input-element')[1].value;
                this.localPhoneBook[i].capital = editItem.querySelectorAll('.input-element')[0].value.charAt(0);
                localStorage.setItem('phonebook', JSON.stringify(this.localPhoneBook));
                editItem.querySelector('.endEdit').click();
                this.$emit('contact-edited');
            },
            addContactPopup() {
                this.showAddPopup = true;
                this.isSearching = false;
            },
            compareNumbers(a, b) {
                if(a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1
                } else {
                    return 1
                }
            },
            deleteItemFunc(i) {
                this.localPhoneBook.splice(i, 1);
                localStorage.setItem('phonebook', JSON.stringify(this.localPhoneBook));
                this.$emit('contact-edited');
            },
            hideAddPopup() {
                this.showAddPopup = false;
                if(!!this.$parent.$refs.searchInput.localValue || !!this.$parent.$refs.searchInput.$el.querySelector('.input-element').value) {
                    this.$parent.$refs.searchInput.localValue = '';
                    this.$parent.$refs.searchInput.$el.querySelector('.input-clear').click();
                }
            },
            rollbackEdit(i) {
                let editItem = this.$el.querySelectorAll('.conference__phonebook__item')[i];
                editItem.querySelectorAll('.input-element')[0].value = this.localPhoneBook[i].name;
                editItem.querySelectorAll('.input-element')[1].value = this.localPhoneBook[i].phone;
                editItem.querySelector('.endEdit').click();
            }
        },
        render(h) {
            const editIcon = () => {
                return <svg width="15px" height="16px" viewBox="0 0 15 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
            };
            const deleteItemIcon = () => {
                return <svg width="14px" height="18px" viewBox="0 0 14 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
            };
            const items = () => {
                return this.sortPhonebook?.map((item, index) => {
                    let localName = item.name;
                    let localPhone = item.phone;
                    const edit = () => {
                        this.editItem(index)
                    };
                    const rollback = () => {
                        this.rollbackEdit(index)
                    };
                    const deleteItem = () => {
                        this.deleteItemFunc(index)
                    };
                    return <div class="conference__phonebook__item">
                        <div class="row sp-v-0-4 conference__phonebook__item-top-part">
                            <div class="rt-col-4 pos-rel">
                                <span class="start-letter">{index == 0 || item.capital != this.localPhoneBook[index - 1].capital ? item.capital : null}</span>
                                <span class="conference__phonebook__name sp-l-3">{item.name}</span>
                            </div>
                            <div class="rt-col-6">
                                <span class="conference__phonebook__number sp-l-0-4">{item.phone}</span>
                            </div>
                            <div class="rt-col-2">
                                <div class="flex-end-center sp-r-1">
                                    <button class="sp-h-0-3 c-p" onClick={this.toggleOpen}>
                                        {editIcon()}
                                    </button>
                                    <button class="sp-h-0-3 c-p" onClick={deleteItem}>
                                        {deleteItemIcon()}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row sp-v-1-2 conference__phonebook__item-bottom-part">
                            <div class="rt-col-4">
                                <div class="sp-l-3">
                                    <rt-input insert-type="text" outlined={true} is-b2b-input={true}
                                              placeholder="Редактировать имя" value={localName}/>
                                </div>
                            </div>
                            <div class="rt-col-7 flex-center-center">
                                <div class="select-wrapper">
                                    <rt-input insert-type="tel" outlined={true} is-b2b-input={true}
                                              placeholder="Контактный телефон" value={localPhone}/>
                                </div>
                                <rt-button class="rt-button-orange-border color-orange" onClick={edit}>Сохранить изменения</rt-button>
                                <rt-button class="rt-button-transparent" onClick={rollback}>Отменить</rt-button>
                            </div>
                            <div class="rt-col-1 endEdit" onClick={this.toggleOpen}>
                                <div class="flex-end-top sp-r-1">
                                    <svg width="13px" height="8px" viewBox="0 0 13 8" version="1.1"
                                         xmlns="http://www.w3.org/2000/svg">
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
                    </div>
                })
            };
            if((this.localPhoneBook?.length == 0 || this.showAddPopup) && !this.isSearching) {
                return <div class="conference__phonebook conference__phonebook--empty">
                    <svg width="50px" height="60px" viewBox="0 0 50 60" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-555.000000, -90.000000)" fill="#101828">
                                <g transform="translate(540.000000, 80.000000)">
                                    <g transform="translate(10.000000, 10.000000)">
                                        <path
                                            d="M31.25,32.5 C32.625,32.5 33.75,33.625 33.75,35 L33.75,35 L45,35 C50.525,35 55,39.475 55,45 L55,45 L55,60 L52.5,60 L52.5,45 C52.5,40.875 49.125,37.5 45,37.5 L45,37.5 L33.75,37.5 L36.25,57.5 L23.75,57.5 L26.25,37.5 L15,37.5 C10.875,37.5 7.5,40.875 7.5,45 L7.5,45 L7.5,60 L5,60 L5,45 C5,39.475 9.475,35 15,35 L15,35 L26.25,35 C26.25,33.625 27.375,32.5 28.75,32.5 L28.75,32.5 Z M31.55,40 L28.475,40 L26.6,55 L33.425,55 L31.55,40 Z M30,0 C38.275,0 45,6.725 45,15 C45,23.275 38.275,30 30,30 C21.725,30 15,23.275 15,15 C15,6.725 21.725,0 30,0 Z M30,2.5 C23.1,2.5 17.5,8.1 17.5,15 C17.5,21.9 23.1,27.5 30,27.5 C36.9,27.5 42.5,21.9 42.5,15 C42.5,8.1 36.9,2.5 30,2.5 Z"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <h3 class="rt-font-h4 sp-v-1">Добавить новый контакт</h3>
                    <p class="rt-font-control sp-b-1-3">Добавьте новый контакт в адресную книгу, воспользовавшись полями
                        ниже</p>
                    <div class="phonebook__add-form field-wrapper">
                        <rt-input insert-type="text" placeholder="Имя участника" outlined={true} is-b2b-input={true}
                                  ref="name"/>
                        <rt-input insert-type="tel" placeholder="Контактный телефон" outlined={true} is-b2b-input={true}
                                  ref="phone"/>
                        <rt-button class="rt-button-orange-border color-orange" onClick={this.addContact}>Добавить</rt-button>
                        <rt-button class="rt-button-transparent" onClick={this.hideAddPopup}>Отменить</rt-button>
                    </div>
                </div>
            } else if(this.isSearching && this.localPhoneBook?.length == 0){
                return <div class="conference__phonebook conference__phonebook--empty">
                    <svg width="50px" height="60px" viewBox="0 0 50 60" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-555.000000, -90.000000)" fill="#101828">
                                <g transform="translate(540.000000, 80.000000)">
                                    <g transform="translate(10.000000, 10.000000)">
                                        <path
                                            d="M31.25,32.5 C32.625,32.5 33.75,33.625 33.75,35 L33.75,35 L45,35 C50.525,35 55,39.475 55,45 L55,45 L55,60 L52.5,60 L52.5,45 C52.5,40.875 49.125,37.5 45,37.5 L45,37.5 L33.75,37.5 L36.25,57.5 L23.75,57.5 L26.25,37.5 L15,37.5 C10.875,37.5 7.5,40.875 7.5,45 L7.5,45 L7.5,60 L5,60 L5,45 C5,39.475 9.475,35 15,35 L15,35 L26.25,35 C26.25,33.625 27.375,32.5 28.75,32.5 L28.75,32.5 Z M31.55,40 L28.475,40 L26.6,55 L33.425,55 L31.55,40 Z M30,0 C38.275,0 45,6.725 45,15 C45,23.275 38.275,30 30,30 C21.725,30 15,23.275 15,15 C15,6.725 21.725,0 30,0 Z M30,2.5 C23.1,2.5 17.5,8.1 17.5,15 C17.5,21.9 23.1,27.5 30,27.5 C36.9,27.5 42.5,21.9 42.5,15 C42.5,8.1 36.9,2.5 30,2.5 Z"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <h3 class="rt-font-h4 sp-v-1">Нет ни одного совпадения по заданному имени</h3>
                    <p class="rt-font-control sp-b-1-3">Вы можете добавить новый контакт в адресную книгу,
                        воспользовавшись кнопкой ниже</p>
                    <div class="phonebook__add-form field-wrapper">
                        <rt-button class="rt-button-orange" onClick={this.addContactPopup}>Добавить новый контакт</rt-button>
                    </div>
                </div>
            } else {
                return <div class="conference__phonebook-wrapper sp-t-1">
                    <div class="row">
                        <div class="rt-col-4">
                            <button class="sp-l-1">
                                <span class="rt-font-label color-main05 sp-r-0-3">Имя контакта</span>
                            </button>
                        </div>
                        <div class="rt-col-6">
                            <div class="sp-l-0-4 rt-font-label color-main05">Номер телефона</div>
                        </div>
                        <div class="rt-col-2">
                            <div class="flex-end-bottom">
                                <span class="sp-r-1 rt-font-label color-main05">Управление</span>
                            </div>
                        </div>
                    </div>
                    <div class="conference__phonebook">
                        {items()}
                    </div>
                </div>
            }
        }
    };
</script>
