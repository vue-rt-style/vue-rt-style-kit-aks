<script type="text/jsx">
    const componentsList = {};
    export default {
        name: "ACManagePopup",
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
            return <rt-real-popup trigger-element-class="conference-header__settings-icon" main-wrapper-class="app" position-center={true}>
                <div class="popup-content">
                    <h3 class="rt-font-h3 sp-b-1">Управление конференцией</h3>
                    <div class="d-flex sp-b-1">
                        <div class="ac-title">
                            <p class="rt-font-control color-main05">Тема конференции</p>
                            <p class="rt-font-paragraph rt-font-bold">Финансовая отчетность III квартала 2019 года (max 1 строк…</p>
                        </div>
                        <div class="timing">
                            <p class="rt-font-control color-main05 ws-nw">Закончится через</p>
                            <p class="rt-font-paragraph rt-font-bold">00 : 20 : 50</p>
                        </div>
                        <div class="ac-button-wrapper">
                            <rt-button class="rt-button-orange-border ws-nw color-orange">+ 10 мин</rt-button>
                        </div>
                    </div>
                    <div class="manage-conference-body d-flex sp-t-1">
                        <div class="manage-conference-body__main-info">
                            <div class="field-wrapper">
                                <p class="field-item color-main05 rt-font-control">Ответственный</p>
                                <p class="field-item rt-font-small-paragraph rt-font-bold">Рихтер Р.Л. РТ-Ла… </p>
                                <p class="field-item color-main05 rt-font-control">PIN конф. / лидера</p>
                                <p class="field-item rt-font-small-paragraph rt-font-bold">1292 / 1234</p>
                                <p class="field-item color-main05 rt-font-control">Подкл. участники</p>
                                <p class="field-item rt-font-small-paragraph rt-font-bold">7 / 10</p>
                                <p class="field-item color-main05 rt-font-control">Аудиозапись</p>
                                <p class="field-item rt-font-small-paragraph rt-font-bold">Вкл.</p>
                                <p class="field-item color-main05 rt-font-control rt-link">
                                    <span class="sp-r-0-2 color-purple">Презентация</span>
                                    <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g transform="translate(-395.000000, -1754.000000)">
                                                <g transform="translate(309.000000, 1752.000000)">
                                                    <g transform="translate(84.000000, 0.000000)">
                                                        <polygon points="0 0 16 0 16 16 0 16"></polygon>
                                                        <path d="M12.6666667,12.6666667 L3.33333333,12.6666667 L3.33333333,3.33333333 L8,3.33333333 L8,2 L3.33333333,2 C2.59333333,2 2,2.6 2,3.33333333 L2,12.6666667 C2,13.4 2.59333333,14 3.33333333,14 L12.6666667,14 C13.4,14 14,13.4 14,12.6666667 L14,8 L12.6666667,8 L12.6666667,12.6666667 Z M9.33333333,2 L9.33333333,3.33333333 L11.7266667,3.33333333 L5.17333333,9.88666667 L6.11333333,10.8266667 L12.6666667,4.27333333 L12.6666667,6.66666667 L14,6.66666667 L14,2 L9.33333333,2 Z" fill="#7700FF" fill-rule="nonzero"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </p>
                                <p class="field-item rt-font-small-paragraph rt-font-bold">Есть</p>
                                <p class="field-item color-main05 rt-font-control">PIN модератора</p>
                                <p class="field-item rt-font-small-paragraph rt-font-bold">1234</p>
                            </div>
                            <div class="sp-t-2-4">
                                <rt-button class="rt-button-orange">Завершить конференцию</rt-button>
                            </div>
                        </div>
                        <div class="manage-conference-body__participants">
                            <div class="manage-conference-body__participants__title d-flex sp-b-0-4">
                                <p class="rt-font-small-paragraph">Все участники конференции</p>
                                <div class="action-buttons">
                                    <button class="action-buttons__item">
                                        <svg width="14px" height="19px" viewBox="0 0 14 19" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
                                    </button>
                                    <button class="action-buttons__item">
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
                            <div class="manage-conference-body__participants__list sp-t-0-4">
                                <div class="manage-conference-body__participants__list-item d-flex">
                                    <div class="participant__phone sp-r-1">8 800 567 8901</div>
                                    <div class="participant__call-status">
                                        <svg width="12px" height="11px" viewBox="0 0 12 11" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-801.000000, -1659.000000)" fill="#57D9B7" fill-rule="nonzero">
                                                    <g transform="translate(801.000000, 1659.000000)">
                                                        <polygon points="6 8.84052632 9.708 11 8.724 6.93 12 4.19157895 7.686 3.83842105 6 0 4.314 3.83842105 0 4.19157895 3.276 6.93 2.292 11"></polygon>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="participant__name sp-l-1-1">Рихтер Р.Л.</div>
                                    <button class="action-buttons__item participant__mic-status">
                                        <svg width="14px" height="19px" viewBox="0 0 14 19" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-1069.000000, -1655.000000)">
                                                    <g transform="translate(1064.000000, 1597.000000)">
                                                        <g transform="translate(0.000000, 56.000000)">
                                                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                            <path d="M12,14 C13.66,14 15,12.66 15,11 L15,5 C15,3.34 13.66,2 12,2 C10.34,2 9,3.34 9,5 L9,11 C9,12.66 10.34,14 12,14 Z M17,11 C17,13.76 14.76,16 12,16 C9.24,16 7,13.76 7,11 L5,11 C5,14.53 7.61,17.43 11,17.92 L11,21 L13,21 L13,17.92 C16.39,17.43 19,14.53 19,11 L17,11 Z" fill="#57D9B7" fill-rule="nonzero"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                    <button class="action-buttons__item participant__delete">
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
                                <div class="manage-conference-body__participants__list-item d-flex">
                                    <div class="participant__phone sp-r-1">8 800 567 8901</div>
                                    <div class="participant__call-status">
                                        <svg width="8px" height="8px" viewBox="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-803.000000, -1700.000000)" fill="#57D9B7">
                                                    <g transform="translate(801.000000, 1659.000000)">
                                                        <circle cx="6" cy="45" r="4"></circle>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="participant__name sp-l-1-1">Рихтер Р.Л.</div>
                                    <button class="action-buttons__item participant__mic-status">
                                        <svg width="14px" height="19px" viewBox="0 0 14 19" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
                                    </button>
                                    <button class="action-buttons__item participant__delete">
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
                                <div class="manage-conference-body__participants__list-item d-flex">
                                    <div class="participant__phone sp-r-1">8 800 567 8901</div>
                                    <div class="participant__call-status">
                                        <svg width="8px" height="8px" viewBox="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-803.000000, -1778.000000)" fill="#FF4F12">
                                                    <g transform="translate(801.000000, 1659.000000)">
                                                        <circle cx="6" cy="123" r="4"></circle>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="participant__name sp-l-1-1">Рихтер Р.Л.</div>
                                    <button class="action-buttons__item participant__mic-status">
                                        <svg width="14px" height="19px" viewBox="0 0 14 19" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
                                    </button>
                                    <button class="action-buttons__item participant__delete">
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
                                <div class="manage-conference-body__participants__list-item d-flex">
                                    <div class="participant__phone sp-r-1">8 800 567 8901</div>
                                    <div class="participant__call-status">
                                        <svg width="8px" height="8px" viewBox="0 0 8 8" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-803.000000, -1778.000000)" fill="#FF4F12">
                                                    <g transform="translate(801.000000, 1659.000000)">
                                                        <circle cx="6" cy="123" r="4"></circle>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="participant__name sp-l-1-1">Рихтер Р.Л.</div>
                                    <button class="action-buttons__item participant__mic-status">
                                        <svg width="14px" height="19px" viewBox="0 0 14 19" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
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
                                    </button>
                                    <button class="action-buttons__item participant__delete">
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
                                <div class="manage-conference-body__participants__list-item d-flex">
                                    <div class="participant__phone sp-r-1">8 800 567 8901</div>
                                    <div class="participant__call-status">
                                        <svg width="8px" height="8px" viewBox="0 0 8 8" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-803.000000, -1778.000000)" fill="#FF4F12">
                                                    <g transform="translate(801.000000, 1659.000000)">
                                                        <circle cx="6" cy="123" r="4"></circle>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="participant__name sp-l-1-1">Рихтер Р.Л.</div>
                                    <button class="action-buttons__item participant__mic-status">
                                        <svg width="14px" height="19px" viewBox="0 0 14 19" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
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
                                    </button>
                                    <button class="action-buttons__item participant__delete">
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
                                <div class="manage-conference-body__participants__list-item d-flex">
                                    <div class="participant__phone sp-r-1">8 800 567 8901</div>
                                    <div class="participant__call-status">
                                        <svg width="8px" height="8px" viewBox="0 0 8 8" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-803.000000, -1778.000000)" fill="#FF4F12">
                                                    <g transform="translate(801.000000, 1659.000000)">
                                                        <circle cx="6" cy="123" r="4"></circle>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="participant__name sp-l-1-1">Рихтер Р.Л.</div>
                                    <button class="action-buttons__item participant__mic-status">
                                        <svg width="14px" height="19px" viewBox="0 0 14 19" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
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
                                    </button>
                                    <button class="action-buttons__item participant__delete">
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
                                <div class="manage-conference-body__participants__list-item d-flex">
                                    <div class="participant__phone sp-r-1">8 800 567 8901</div>
                                    <div class="participant__call-status">
                                        <svg width="12px" height="11px" viewBox="0 0 12 11" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-801.000000, -1659.000000)" fill="#57D9B7"
                                                   fill-rule="nonzero">
                                                    <g transform="translate(801.000000, 1659.000000)">
                                                        <polygon
                                                            points="6 8.84052632 9.708 11 8.724 6.93 12 4.19157895 7.686 3.83842105 6 0 4.314 3.83842105 0 4.19157895 3.276 6.93 2.292 11"></polygon>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="participant__name sp-l-1-1">Рихтер Р.Л.</div>
                                    <button class="action-buttons__item participant__mic-status">
                                        <svg width="14px" height="19px" viewBox="0 0 14 19" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-1069.000000, -1655.000000)">
                                                    <g transform="translate(1064.000000, 1597.000000)">
                                                        <g transform="translate(0.000000, 56.000000)">
                                                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                            <path
                                                                d="M12,14 C13.66,14 15,12.66 15,11 L15,5 C15,3.34 13.66,2 12,2 C10.34,2 9,3.34 9,5 L9,11 C9,12.66 10.34,14 12,14 Z M17,11 C17,13.76 14.76,16 12,16 C9.24,16 7,13.76 7,11 L5,11 C5,14.53 7.61,17.43 11,17.92 L11,21 L13,21 L13,17.92 C16.39,17.43 19,14.53 19,11 L17,11 Z"
                                                                fill="#57D9B7" fill-rule="nonzero"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                    <button class="action-buttons__item participant__delete">
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
                                <div class="manage-conference-body__participants__list-item d-flex">
                                    <div class="participant__phone sp-r-1">8 800 567 8901</div>
                                    <div class="participant__call-status">
                                        <svg width="8px" height="8px" viewBox="0 0 8 8" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-803.000000, -1700.000000)" fill="#57D9B7">
                                                    <g transform="translate(801.000000, 1659.000000)">
                                                        <circle cx="6" cy="45" r="4"></circle>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="participant__name sp-l-1-1">Рихтер Р.Л.</div>
                                    <button class="action-buttons__item participant__mic-status">
                                        <svg width="14px" height="19px" viewBox="0 0 14 19" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
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
                                    </button>
                                    <button class="action-buttons__item participant__delete">
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
                                <div class="manage-conference-body__participants__list-item d-flex">
                                    <div class="participant__phone sp-r-1">8 800 567 8901</div>
                                    <div class="participant__call-status">
                                        <svg width="8px" height="8px" viewBox="0 0 8 8" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-803.000000, -1778.000000)" fill="#FF4F12">
                                                    <g transform="translate(801.000000, 1659.000000)">
                                                        <circle cx="6" cy="123" r="4"></circle>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="participant__name sp-l-1-1">Рихтер Р.Л.</div>
                                    <button class="action-buttons__item participant__mic-status">
                                        <svg width="14px" height="19px" viewBox="0 0 14 19" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
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
                                    </button>
                                    <button class="action-buttons__item participant__delete">
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
                                <div class="manage-conference-body__participants__list-item d-flex">
                                    <div class="participant__phone sp-r-1">8 800 567 8901</div>
                                    <div class="participant__call-status">
                                        <svg width="8px" height="8px" viewBox="0 0 8 8" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-803.000000, -1778.000000)" fill="#FF4F12">
                                                    <g transform="translate(801.000000, 1659.000000)">
                                                        <circle cx="6" cy="123" r="4"></circle>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="participant__name sp-l-1-1">Рихтер Р.Л.</div>
                                    <button class="action-buttons__item participant__mic-status">
                                        <svg width="14px" height="19px" viewBox="0 0 14 19" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
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
                                    </button>
                                    <button class="action-buttons__item participant__delete">
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
                                <div class="manage-conference-body__participants__list-item d-flex">
                                    <div class="participant__phone sp-r-1">8 800 567 8901</div>
                                    <div class="participant__call-status">
                                        <svg width="8px" height="8px" viewBox="0 0 8 8" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-803.000000, -1778.000000)" fill="#FF4F12">
                                                    <g transform="translate(801.000000, 1659.000000)">
                                                        <circle cx="6" cy="123" r="4"></circle>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="participant__name sp-l-1-1">Рихтер Р.Л.</div>
                                    <button class="action-buttons__item participant__mic-status">
                                        <svg width="14px" height="19px" viewBox="0 0 14 19" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
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
                                    </button>
                                    <button class="action-buttons__item participant__delete">
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
                                <div class="manage-conference-body__participants__list-item d-flex">
                                    <div class="participant__phone sp-r-1">8 800 567 8901</div>
                                    <div class="participant__call-status">
                                        <svg width="8px" height="8px" viewBox="0 0 8 8" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g transform="translate(-803.000000, -1778.000000)" fill="#FF4F12">
                                                    <g transform="translate(801.000000, 1659.000000)">
                                                        <circle cx="6" cy="123" r="4"></circle>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="participant__name sp-l-1-1">Рихтер Р.Л.</div>
                                    <button class="action-buttons__item participant__mic-status">
                                        <svg width="14px" height="19px" viewBox="0 0 14 19" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
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
                                    </button>
                                    <button class="action-buttons__item participant__delete">
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
                            </div>
                        </div>
                    </div>
                </div>
            </rt-real-popup>
        }
    };
</script>
