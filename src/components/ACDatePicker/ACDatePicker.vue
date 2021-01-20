<script type="text/jsx">
    import CalendarView from './CalendarView.vue'
    const componentsList = {};
    export default {
        name: "ACDatePicker",
        components: {
            componentsList,
            CalendarView
        },
        props:{
            placeholder: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default : ''
            }
        },
        data() {
            return {
                selectedDate: this.value?.length ? this.value.split('-').reverse().join('.') : '',
                hasInputFocus: false,
                localValue: this.value
            }
        },
        watch: {

        },
        computed: {
            placeholderClasses() {
                let classList = 'ac-datepicker__pseudo-placeholder';
                if(this.hasInputFocus || this.selectedDate) {
                    classList += ' ac-datepicker__pseudo-placeholder--active';
                }
                return classList;
            }
        },
        mounted() {},
        created() {},
        methods: {
            toggleCalendar() {
                this.$refs.calendar.$el.classList.toggle('d-none');
            },
            chooseDate() {
                // console.log(this.$refs.input.value)
            },
            pickDate() {
                let calendarData = this.$refs.calendar.selectedDate;
                let day = calendarData.date.toString().length == 1 ? '0' + calendarData.date : calendarData.date;
                let month = calendarData.month.toString().length == 1 ? '0' + (calendarData.month + 1) : (calendarData.month + 1);
                this.selectedDate = day + '.' + month + '.' + calendarData.year;
                let localDate = [];
                localDate.push(calendarData.year);
                localDate.push(month);
                localDate.push(day);
                this.localValue = localDate.join('-');
                this.$refs.calendar.$el.classList.toggle('d-none');
                this.hasInputFocus = true;
                // console.log(new Date(calendarData.year, (month - 1), day))
            },
            fixInputValue($event) {
                if(this.mayInput) {
                    this.mayInput = false;
                    let digit = $event.key;
                    let length = $event.target.value.length;
                    if (isNaN(digit) && $event.keyCode !== 8) {
                        $event.preventDefault();
                    } else {
                        if (length == 0) {
                            let localData = '';
                            if (digit > 3) {
                                localData += '0';
                                this.selectedDate = localData;
                            }
                        }
                        if (length == 1) {
                            let localData = this.selectedDate;
                            if (this.selectedDate == '3' && digit > 1) {
                                $event.preventDefault();
                                localData = '31';
                                this.selectedDate = localData;
                            }
                        }
                        if (length == 3) {
                            let localData = this.selectedDate;
                            if (digit > 1) {
                                localData += '0';
                                this.selectedDate = localData;
                            }
                        }
                        if (length == 4) {
                            let localData = this.selectedDate;
                            if (digit > 2) {
                                $event.preventDefault();
                                localData += '2';
                                this.selectedDate = localData;
                            }
                        }
                        if (length == 6 && $event.keyCode !== 8) {
                            let localData = this.selectedDate;
                            localData += '20';
                            this.selectedDate = localData;
                        }
                    }
                } else {
                    if($event.keyCode !== 8) {
                        $event.preventDefault();
                    }
                }
            },
            formatMask($event) {
                if(($event.target.value.length == 2 || $event.target.value.length == 5) && $event.keyCode !== 8) {
                    $event.target.value += '.'
                }
                this.selectedDate = $event.target.value;
                this.mayInput = true;
            },
            getSelection() {
                // console.log(window.getSelection().toString())
            },
            clearDate() {
                this.selectedDate = null;
                this.hasInputFocus = false;
                this.$refs.calendar.$el.classList.add('d-none');
                this.$refs.calendar._data.selectedDate = null;
            },
            liftPlaceholder() {
                this.hasInputFocus = true;
            },
            lowerPlaceholder() {
                if(!this.selectedDate) {
                    this.hasInputFocus = false;
                }
            }
        },
        render(h) {
            const clearButton = () => {
                if(this.selectedDate) {
                    return <div class="ac-datepicker__delete-icon" onClick={this.clearDate}>
                        <svg viewBox="0 0 14 14" width="12" height="12" xmlns="http://www.w3.org/2000/svg"
                             class="input-clear__icon">
                            <path d="M14 1.4L12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7z" fill-rule="evenodd"/>
                        </svg>
                    </div>
                } else {
                    return null
                }
            };
            return <div class="ac-datepicker-wrapper">
                <input type="text" class="ac-datepicker__body" ref="input"
                       onMouseup={this.getSelection} value={this.selectedDate} maxlength="10"
                       onKeydown={this.fixInputValue} onKeyup={this.formatMask} onFocus={this.liftPlaceholder} onBlur={this.lowerPlaceholder}/>
                <div class={this.placeholderClasses} ref="placeholder">{this.placeholder}</div>
                <div class="ac-datepicker__calendar-icon" onClick={this.toggleCalendar}/>
                {clearButton()}
                <calendar-view first-day-of-week={1} onSelectDate={this.pickDate} ref="calendar" class="d-none"/>
            </div>
        }
    };
</script>
