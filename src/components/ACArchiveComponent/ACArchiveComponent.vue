<script type="text/jsx">
    const componentsList = {};
    export default {
        name: "ACArchiveComponent",
        components: componentsList,
        props:{
            conferenceList: {
                type: Array,
                default: () => ([])
            }
        },
        data() {
            return {
                wasResponse: true
            }
        },
        mounted() {},
        created() {},
        methods: {},
        render(h) {
            if(!this.wasResponse) {
                return <div class="archive-wrapper">
                    <div class="row">
                        <div class="rt-col">
                            <h1 class="rt-font-h2 sp-t-3 sp-b-1-2">Архив</h1>
                        </div>
                        <div class="rt-col">
                            <div class="conference__archive conference__archive--start">
                                <svg class="conference__archive-icon" width="53px" height="60px" viewBox="0 0 53 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-554.000000, -90.000000)" fill="#101828">
                                            <g transform="translate(540.000000, 80.000000)">
                                                <g transform="translate(10.000000, 10.000000)">
                                                    <path d="M6.5,12.5 L6.5,57.5 L46.4,57.5 L46.4,38.475 L48.9,35.975 L48.9,57.5 C48.9,58.875 47.775,60 46.4,60 L46.4,60 L6.5,60 C5.125,60 4,58.875 4,57.5 L4,57.5 L4,10.45 C4,9.775 4.275,9.15 4.75,8.675 L4.75,8.675 L12.825,0.725 C13.3,0.25 13.925,0 14.575,0 L14.575,0 L46.375,0 C47.75,0 48.875,1.125 48.875,2.5 L48.875,2.5 L48.875,18.975 L46.375,21.475 L46.375,2.5 L16.5,2.5 L16.5,10 C16.5,11.32 15.4632,12.4096 14.163744,12.494656 L14,12.5 L6.5,12.5 Z M52.625,20 C53.275,20 53.925,20.25 54.425,20.775 L54.425,20.775 L55.725,22.075 C56.725,23.075 56.725,24.725 55.725,25.725 L55.725,25.725 L38.95,42.5 L34,42.5 L34,37.55 L50.8,20.75 C51.3,20.25 51.975,20 52.625,20 Z M44.118,30.943 L36.5,38.575 L36.5,40.025 L37.95,40.025 L45.574,32.399 L44.118,30.943 Z M52.625,22.475 C52.575,22.475 52.55,22.5 52.55,22.5 L52.55,22.5 L45.879,29.179 L47.337,30.637 L54,23.975 C54.0375,23.9375 54.046875,23.9 54.028125,23.8625 L54,23.825 L52.675,22.5 Z M29,27.5 L29,30 L11.5,30 L11.5,27.5 L29,27.5 Z M29,20 L29,22.5 L11.5,22.5 L11.5,20 L29,20 Z M13.994,3.081 L6.95,10 L13.975,10 L13.994,3.081 Z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <h3 class="rt-font-h4 sp-b-1">Сформировать отчёт архивных конференций?</h3>
                                <p class="rt-font-control sp-b-1-3">Выберите желаемый период для вывода списка прошедших конференций.</p>
                                <div class="row sp-v-1-3">
                                    <div class="rt-col-4"></div>
                                    <div class="rt-col-2">
                                        <rt-input placeholder="От" outlined={true} is-b2b-input={true}/>
                                    </div>
                                    <div class="rt-col-2">
                                        <rt-input placeholder="До" outlined={true} is-b2b-input={true}/>
                                    </div>
                                    <div class="rt-col-4"></div>
                                </div>
                                <rt-button class="rt-button-orange">Сформировать отчёт</rt-button>
                            </div>
                        </div>
                    </div>
                </div>
            } else {
                if(this.conferenceList.length == 0) {
                    return <div class="archive-wrapper">
                        <div class="row">
                            <div class="rt-col">
                                <div class="row sp-t-2-4 sp-b-1">
                                    <div class="rt-col-6">
                                        <h1 class="rt-font-h2">Архив</h1>
                                    </div>
                                    <div class="rt-col-6 flex-center-center">
                                        <div class="select-wrapper">
                                            <rt-input outlined={true} is-b2b-input={true} placeholder="От"/>
                                        </div>
                                        <div class="select-wrapper">
                                            <rt-input outlined={true} is-b2b-input={true} placeholder="До"/>
                                        </div>
                                        <rt-button class="rt-button-orange-border color-orange button-in-flex">Сформировать отчёт</rt-button>
                                    </div>
                                </div>
                            </div>
                            <div class="rt-col">
                                <div class="conference__archive conference__archive--empty">
                                    <svg class="conference__archive-icon" width="53px" height="60px" viewBox="0 0 53 60"
                                         version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g transform="translate(-554.000000, -90.000000)" fill="#101828">
                                                <g transform="translate(540.000000, 80.000000)">
                                                    <g transform="translate(10.000000, 10.000000)">
                                                        <path d="M6.5,12.5 L6.5,57.5 L46.4,57.5 L46.4,38.475 L48.9,35.975 L48.9,57.5 C48.9,58.875 47.775,60 46.4,60 L46.4,60 L6.5,60 C5.125,60 4,58.875 4,57.5 L4,57.5 L4,10.45 C4,9.775 4.275,9.15 4.75,8.675 L4.75,8.675 L12.825,0.725 C13.3,0.25 13.925,0 14.575,0 L14.575,0 L46.375,0 C47.75,0 48.875,1.125 48.875,2.5 L48.875,2.5 L48.875,18.975 L46.375,21.475 L46.375,2.5 L16.5,2.5 L16.5,10 C16.5,11.32 15.4632,12.4096 14.163744,12.494656 L14,12.5 L6.5,12.5 Z M52.625,20 C53.275,20 53.925,20.25 54.425,20.775 L54.425,20.775 L55.725,22.075 C56.725,23.075 56.725,24.725 55.725,25.725 L55.725,25.725 L38.95,42.5 L34,42.5 L34,37.55 L50.8,20.75 C51.3,20.25 51.975,20 52.625,20 Z M44.118,30.943 L36.5,38.575 L36.5,40.025 L37.95,40.025 L45.574,32.399 L44.118,30.943 Z M52.625,22.475 C52.575,22.475 52.55,22.5 52.55,22.5 L52.55,22.5 L45.879,29.179 L47.337,30.637 L54,23.975 C54.0375,23.9375 54.046875,23.9 54.028125,23.8625 L54,23.825 L52.675,22.5 Z M29,27.5 L29,30 L11.5,30 L11.5,27.5 L29,27.5 Z M29,20 L29,22.5 L11.5,22.5 L11.5,20 L29,20 Z M13.994,3.081 L6.95,10 L13.975,10 L13.994,3.081 Z"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <h3 class="rt-font-h4 sp-b-1">За данный период конференций не найдено</h3>
                                    <p class="rt-font-control">Выберите другой период для вывода списка прошедших конференций.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                } else {
                    return <div class="archive-wrapper">
                        <div class="row">
                            <div class="rt-col">
                                <div class="row sp-t-2-4 sp-b-1">
                                    <div class="rt-col-6">
                                        <h1 class="rt-font-h2">Архив</h1>
                                    </div>
                                    <div class="rt-col-6 flex-center-center">
                                        <div class="select-wrapper">
                                            <rt-input outlined={true} is-b2b-input={true} placeholder="От"/>
                                        </div>
                                        <div class="select-wrapper">
                                            <rt-input outlined={true} is-b2b-input={true} placeholder="До"/>
                                        </div>
                                        <rt-button class="rt-button-orange-border color-orange button-in-flex">Сформировать отчёт</rt-button>
                                    </div>
                                </div>
                            </div>
                            <div class="rt-col">
                                <div class="conference__archive">
                                    <div class="conference-archive__title rt-font-label color-main05">
                                        <div class="conference-archive__title-field">Дата и время начала
                                            <div class="conference-archive__filter-icon">
                                                <svg width="8px" height="14px" viewBox="0 0 8 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(-291.000000, -306.000000)">
                                                            <g transform="translate(285.000000, 303.000000)">
                                                                <polygon points="0 0 20 0 20 20 0 20"></polygon>
                                                                <polygon fill="#868B95" fill-rule="nonzero"
                                                                         points="6.66666667 6.66666667 10 3.33333333 13.3333333 6.66666667"></polygon>
                                                                <polygon fill="#868B95" fill-rule="nonzero"
                                                                         transform="translate(10.000000, 15.000000) scale(1, -1) translate(-10.000000, -15.000000) "
                                                                         points="6.66666667 16.6666667 10 13.3333333 13.3333333 16.6666667"></polygon>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="conference-archive__title-field">Продолжительность</div>
                                        <div class="conference-archive__title-field">Сумма всех вызовов</div>
                                        <div class="conference-archive__title-field">Ответственный</div>
                                        <div class="conference-archive__title-field">Тема конференции</div>
                                        <div class="conference-archive__title-field">Аудиозапись</div>
                                    </div>
                                    <div class="conference-archive__item rt-font-control">
                                        <div class="conference-archive__item-top-part d-flex">
                                            <div class="conference-archive__item-field d-flex">
                                                <div class="conference-archive__item__icon">
                                                    <svg width="18px" height="20px" viewBox="0 0 18 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <g transform="translate(-23.000000, -21.000000)">
                                                                <g transform="translate(20.000000, 20.000000)">
                                                                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                                    <path d="M19,3 L18,3 L18,1 L16,1 L16,3 L8,3 L8,1 L6,1 L6,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 Z M19,19 L5,19 L5,9 L19,9 L19,19 Z M19,7 L5,7 L5,5 L19,5 L19,7 Z M7,11 L12,11 L12,16 L7,16 L7,11 Z" fill="#101828" fill-rule="nonzero"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div class="conference-archive__item__date">
                                                    <p class="">08.05.2020</p>
                                                    <p class="">09 : 00</p>
                                                </div>
                                            </div>
                                            <div class="conference-archive__item-field">2 ч 00 мин</div>
                                            <div class="conference-archive__item-field">10 ч 00 мин</div>
                                            <div class="conference-archive__item-field">Кузнечикова М.М.</div>
                                            <div class="conference-archive__item-field">Финансовая отчетность за VI квартал 2019 года те…</div>
                                            <div class="conference-archive__item-field d-flex d-space-between">
                                                <span>есть</span>
                                                <svg class="conference-archive__item-field-icon" width="13px" height="8px" viewBox="0 0 13 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(-1123.000000, -86.000000)" fill="#575D68">
                                                            <g transform="translate(1120.000000, 80.000000)">
                                                                <g transform="translate(10.000000, 10.000000) scale(1, -1) translate(-10.000000, -10.000000) ">
                                                                    <polygon transform="translate(9.704500, 10.000000) rotate(-90.000000) translate(-9.704500, -10.000000) " points="12 4 6 9.999 12 16 13.409 14.591 13.409 14.589 8.83 9.999 13.409 5.411 13.409 5.409"></polygon>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="conference-archive__item-bottom-part">
                                            <rt-tabs show-as-tags={true}>
                                                <template slot="navigation">
                                                    <rt-tabs-nav-item  anchor="read2y!" remove-base-tag={true} name="2one">Статистика конференции</rt-tabs-nav-item>
                                                    <rt-tabs-nav-item anchor="hell2o" remove-base-tag={true} name="2two">Аудиозапись конференции</rt-tabs-nav-item>
                                                </template>
                                                <template slot="content">
                                                    <rt-tabs-content-item name="2one">
                                                        <div class="sp-t-0-4 sp-b-0-2 d-flex rt-font-label color-main05 aa-bottom-part__title">
                                                            <div class="aa-bottom-part__title-item">Время входа</div>
                                                            <div class="aa-bottom-part__title-item">Продолжительность участия</div>
                                                            <div class="aa-bottom-part__title-item">Участник</div>
                                                            <div class="aa-bottom-part__title-item">Номер телефона</div>
                                                        </div>
                                                        <div class="sp-v-0-4 d-flex rt-font-control aa-bottom-part__participant">
                                                            <div class="aa-bottom-part__participant-item">12 : 24 : 58</div>
                                                            <div class="aa-bottom-part__participant-item">1 ч 00 мин</div>
                                                            <div class="aa-bottom-part__participant-item">Кузнецов Р.А.</div>
                                                            <div class="aa-bottom-part__participant-item">8 800 123 4567</div>
                                                        </div>
                                                        <div class="sp-v-0-4 d-flex rt-font-control aa-bottom-part__participant">
                                                            <div class="aa-bottom-part__participant-item">12 : 24 : 58</div>
                                                            <div class="aa-bottom-part__participant-item">1 ч 00 мин</div>
                                                            <div class="aa-bottom-part__participant-item">—</div>
                                                            <div class="aa-bottom-part__participant-item">8 800 123 4567</div>
                                                        </div>
                                                        <div class="aa-bottom-part__summary d-flex rt-font-bold rt-font-control sp-t-1">
                                                            <div class="aa-bottom-part__summary-item">
                                                                <p>Продолжительность конференции</p>
                                                                <p>1 ч 00 мин</p>
                                                            </div>
                                                            <div class="aa-bottom-part__summary-item">
                                                                <p>Суммарная продолжительность вызовов всех участников</p>
                                                                <p>5 ч 25 мин / 325 мин</p>
                                                            </div>
                                                        </div>
                                                    </rt-tabs-content-item>
                                                    <rt-tabs-content-item name="2two">
                                                        <div class="sp-t-0-4 sp-b-0-2 d-flex rt-font-label color-main05 aa-bottom-part__title">
                                                            <div class="aa-bottom-part__title-item aa-bottom-part__title-item--record">Аудиозапись</div>
                                                            <div class="aa-bottom-part__title-item aa-bottom-part__title-item--record">Продолжительность аудиозаписи</div>
                                                            <div class="aa-bottom-part__title-item aa-bottom-part__title-item--record">Скачивание аудиозаписи</div>
                                                        </div>
                                                        <div class="sp-v-0-4 flex-start-center rt-font-control aa-bottom-part__record">
                                                            <div class="aa-bottom-part__record-item">5967-15-12052020121124.wav</div>
                                                            <div class="aa-bottom-part__record-item">00 : 5 : 45</div>
                                                            <div class="aa-bottom-part__record-item">
                                                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                                        <path d="M19,12 L19,19 L5,19 L5,12 L3,12 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 Z M13,12.67 L15.59,10.09 L17,11.5 L12,16.5 L7,11.5 L8.41,10.09 L11,12.67 L11,3 L13,3 L13,12.67 Z" fill="#575D68" fill-rule="nonzero"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="sp-v-0-4 flex-start-center rt-font-control aa-bottom-part__record">
                                                            <div class="aa-bottom-part__record-item">5967-15-12052020121124.wav</div>
                                                            <div class="aa-bottom-part__record-item">00 : 5 : 45</div>
                                                            <div class="aa-bottom-part__record-item">
                                                                <svg width="24px" height="24px" viewBox="0 0 24 24"
                                                                     version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                    <g stroke="none" stroke-width="1" fill="none"
                                                                       fill-rule="evenodd">
                                                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                                        <path
                                                                            d="M19,12 L19,19 L5,19 L5,12 L3,12 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 Z M13,12.67 L15.59,10.09 L17,11.5 L12,16.5 L7,11.5 L8.41,10.09 L11,12.67 L11,3 L13,3 L13,12.67 Z"
                                                                            fill="#575D68" fill-rule="nonzero"></path>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </rt-tabs-content-item>
                                                </template>
                                            </rt-tabs>
                                        </div>
                                    </div>
                                    <div class="conference-archive__item rt-font-control">
                                        <div class="conference-archive__item-top-part d-flex">
                                            <div class="conference-archive__item-field d-flex">
                                                <div class="conference-archive__item__icon">
                                                    <svg width="18px" height="20px" viewBox="0 0 18 20" version="1.1"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                            <g transform="translate(-23.000000, -21.000000)">
                                                                <g transform="translate(20.000000, 20.000000)">
                                                                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                                    <path
                                                                        d="M19,3 L18,3 L18,1 L16,1 L16,3 L8,3 L8,1 L6,1 L6,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 Z M19,19 L5,19 L5,9 L19,9 L19,19 Z M19,7 L5,7 L5,5 L19,5 L19,7 Z M7,11 L12,11 L12,16 L7,16 L7,11 Z"
                                                                        fill="#101828" fill-rule="nonzero"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div class="conference-archive__item__date">
                                                    <p class="">08.05.2020</p>
                                                    <p class="">09 : 00</p>
                                                </div>
                                            </div>
                                            <div class="conference-archive__item-field">2 ч 00 мин</div>
                                            <div class="conference-archive__item-field">10 ч 00 мин</div>
                                            <div class="conference-archive__item-field">Кузнечикова М.М.</div>
                                            <div class="conference-archive__item-field">Финансовая отчетность за VI
                                                квартал 2019 года те…
                                            </div>
                                            <div class="conference-archive__item-field d-flex d-space-between">
                                                <span>есть</span>
                                                <svg class="conference-archive__item-field-icon conference-archive__item-field-icon--reversed" width="13px"
                                                     height="8px" viewBox="0 0 13 8" version="1.1"
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
                            </div>
                            <div class="rt-col">
                                <div class="conference-list__navigation paginator d-flex sp-t-2 sp-b-1">
                                    <div class="paginator__pages">
                                        <span class="arrow-back paginator__item">
                                            <svg width="8px" height="12px" viewBox="0 0 8 12" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.5">
                                                <g transform="translate(-6.000000, -4.000000)" fill="#575D68">
                                                    <polygon
                                                        points="12 4 6 9.999 12 16 13.409 14.591 13.409 14.589 8.83 9.999 13.409 5.411 13.409 5.409"></polygon>
                                                </g>
                                            </g>
                                        </svg>
                                        </span>
                                        <span class="paginator__item">1</span>
                                        <span class="paginator__item">...</span>
                                        <span class="paginator__item">4</span>
                                        <span class="paginator__item paginator__item--active">5</span>
                                        <span class="paginator__item">6</span>
                                        <span class="paginator__item">7</span>
                                        <span class="paginator__item">8</span>
                                        <span class="paginator__item">...</span>
                                        <span class="paginator__item">20</span>
                                        <span class="arrow-forward paginator__item">
                                            <svg width="8px" height="12px" viewBox="0 0 8 12" version="1.1"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g transform="translate(-310.000000, -4.000000)" fill="#575D68">
                                                        <g transform="translate(304.000000, 0.000000)">
                                                            <g transform="translate(10.000000, 10.000000) scale(-1, 1) translate(-10.000000, -10.000000) ">
                                                                <polygon
                                                                    points="12 4 6 9.999 12 16 13.409 14.591 13.409 14.589 8.83 9.999 13.409 5.411 13.409 5.409"></polygon>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="paginator__filter">
                                        <span class="sp-r-0-2">Показывать </span>
                                        <span class="color-main05 sp-r-0-2">по</span>
                                        <span class="items-quantity color-main05">30</span>
                                        <span class="items-quantity color-main05 items-quantity--active">50</span>
                                        <span class="items-quantity color-main05">100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            }
        }
    };
</script>
