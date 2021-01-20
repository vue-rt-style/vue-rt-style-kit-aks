<script type="text/jsx">
    const componentsList = {};
    export default {
        name: "ACPaginator",
        components: componentsList,
        props:{
            conferenceList: {
                type: Array,
                default: () => ([])
            }
        },
        data() {
            return {
                currentPage: null
            }
        },
        watch: {

        },
        mounted() {

        },
        created() {},
        methods: {

        },
        render(h) {
            const pagesCount = () => {
                let classList = 'paginator__item';
                return this.conferenceList?.map((item, index) => {
                    if(index == this.currentPage || this.conferenceList.length == 1) {
                        classList += ' paginator__item--active'
                    }
                    return <span class={classList}>{index + 1}</span>
                })
            };
            return <div class="rt-col">
                <div class="paginator d-flex sp-t-2 sp-b-1 rt-font-control">
                    <div class="paginator__pages">
                        <span class={"arrow-back paginator__item" + (this.currentPage != 1 ? ' paginator__item--active' : null)}>
                            <svg width="8px" height="12px" viewBox="0 0 8 12" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                               opacity="0.5">
                                <g transform="translate(-6.000000, -4.000000)" fill="#575D68">
                                    <polygon
                                        points="12 4 6 9.999 12 16 13.409 14.591 13.409 14.589 8.83 9.999 13.409 5.411 13.409 5.409"></polygon>
                                </g>
                            </g>
                        </svg>
                        </span>
                        {pagesCount()}
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
        }
    };
</script>
