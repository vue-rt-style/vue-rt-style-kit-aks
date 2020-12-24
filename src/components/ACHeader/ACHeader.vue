<script type="text/jsx">
    const componentsList = {};
    export default {
        name: "ACHeader",
        components: componentsList,
        props:{
            // phone: {
            //     type: Number,
            //     default: null
            // },
            // name: {
            //     type: String,
            //     default: ''
            // }
        },
        data() {
            return {
                phone: 80000000000,
                name: 'Username F. U.',
                phoneNumber: null
            }
        },
        mounted() {
            this.phoneNumber = this.phone.toString().split('');
            this.phoneNumber.splice(6, 0, " ");
            this.phoneNumber.splice(3, 0, " ");
            this.phoneNumber.splice(0, 0, " ");

            if(location.href.includes('archive')){
              this.$refs.archive.classList.add('conference-header__navigation-item--active')
            } else if(location.href.includes('phonebook')) {
              this.$refs.phonebook.classList.add('conference-header__navigation-item--active')
            } else if(location.href.includes('list')){
              this.$refs.list.classList.add('conference-header__navigation-item--active')
            }
        },
        created() {},
        methods: {
            openSettingsPopup() {
              document.body.dispatchEvent(new CustomEvent("open-popup", {'detail': [this.$el, 'settings-popup']}))
            },
            logOut() {
                window.location.href = '/vue-rt-style-kit-pages/audioconference';
            }
        },
        render(h) {
            const userName = () => {
                if(this.phone.toString().toLowerCase() != this.name.toString().toLowerCase()) {
                    return <div class="conference-header__name">
                        <svg class="conference-header__name-icon" width="16px" height="16px" viewBox="0 0 16 16"
                             xmlns="http://www.w3.org/2000/svg">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g transform="translate(-1052.000000, -42.000000)" fill="#575D68">
                                    <g id="Group-2-Copy-2" transform="translate(1052.000000, 41.000000)">
                                        <path
                                            d="M8,9 C10.2,9 12,7.2 12,5 C12,2.8 10.2,1 8,1 C5.8,1 4,2.8 4,5 C4,7.2 5.8,9 8,9 L8,9 Z M8,11 C5.3,11 0,12.3 0,15 L0,17 L16,17 L16,15 C16,12.3 10.7,11 8,11 L8,11 Z"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p class="conference-header__name-inner">
                            {this.name}
                        </p>
                    </div>
                } else {
                    return null
                }
            }
            return <div class="conference-header">
                <div class="rt-container">
                    <div class="rt-col sp-t-0-4 sp-b-1">
                        <div class="conference-header__inner">
                            <a href="https://www.rt.ru/b2b/telephony/audioconference">
                                <rt-logo show-text={true} height="44px" width="26px" top-fill-color="b2c-slate"/>
                            </a>
                            <div class="conference-header__navigation">
                                <a href="/vue-rt-style-kit-pages/audioconference-list" ref="list"
                                   class="conference-header__navigation-item">Аудиоконференции</a>
                                <a href="/vue-rt-style-kit-pages/archive" ref="archive"
                                   class="conference-header__navigation-item">Архив</a>
                                <a href="/vue-rt-style-kit-pages/phonebook" ref="phonebook"
                                   class="conference-header__navigation-item">Адресная книга</a>
                            </div>
                            <div class="conference-header__person">
                                <div class="conference-header__phone">
                                    <svg class="conference-header__phone-icon" width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g transform="translate(-884.000000, -42.000000)" fill="#575D68" fill-rule="nonzero">
                                                <g id="Group-8" transform="translate(884.000000, 41.000000)">
                                                    <path d="M15.12,12.0044444 C14.0266667,12.0044444 12.9688889,11.8266667 11.9822222,11.5066667 C11.6711111,11.4 11.3244444,11.48 11.0844444,11.72 L9.68888889,13.4711111 C7.17333333,12.2711111 4.81777778,10.0044444 3.56444444,7.4 L5.29777778,5.92444444 C5.53777778,5.67555556 5.60888889,5.32888889 5.51111111,5.01777778 C5.18222222,4.03111111 5.01333333,2.97333333 5.01333333,1.88 C5.01333333,1.4 4.61333333,1 4.13333333,1 L1.05777778,1 C0.577777778,1 0,1.21333333 0,1.88 C0,10.1377778 6.87111111,17 15.12,17 C15.7511111,17 16,16.44 16,15.9511111 L16,12.8844444 C16,12.4044444 15.6,12.0044444 15.12,12.0044444 Z" id="Path"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    8 {this.phoneNumber}
                                </div>
                                {userName()}
                                <button class="pos-rel conference-header__settings-icon sp-h-0-2" onClick={this.openSettingsPopup}>
                                    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g transform="translate(-1254.000000, -40.000000)" fill="#575D68" fill-rule="nonzero">
                                                <g transform="translate(1252.000000, 38.000000)">
                                                    <path d="M19.1593316,12.98 C19.1993316,12.66 19.2293316,12.34 19.2293316,12 C19.2293316,11.66 19.1993316,11.34 19.1593316,11.02 L21.2693316,9.37 C21.4593316,9.22 21.5093316,8.95 21.3893316,8.73 L19.3893316,5.27 C19.2993316,5.11 19.1293316,5.02 18.9493316,5.02 C18.8893316,5.02 18.8293316,5.03 18.7793316,5.05 L16.2893316,6.05 C15.7693316,5.65 15.2093316,5.32 14.5993316,5.07 L14.2193316,2.42 C14.1893316,2.18 13.9793316,2 13.7293316,2 L9.7293316,2 C9.4793316,2 9.2693316,2.18 9.2393316,2.42 L8.8593316,5.07 C8.2493316,5.32 7.6893316,5.66 7.1693316,6.05 L4.6793316,5.05 C4.6193316,5.03 4.5593316,5.02 4.4993316,5.02 C4.3293316,5.02 4.1593316,5.11 4.0693316,5.27 L2.0693316,8.73 C1.9393316,8.95 1.9993316,9.22 2.1893316,9.37 L4.2993316,11.02 C4.2593316,11.34 4.2293316,11.67 4.2293316,12 C4.2293316,12.33 4.2593316,12.66 4.2993316,12.98 L2.1893316,14.63 C1.9993316,14.78 1.9493316,15.05 2.0693316,15.27 L4.0693316,18.73 C4.1593316,18.89 4.3293316,18.98 4.5093316,18.98 C4.5693316,18.98 4.6293316,18.97 4.6793316,18.95 L7.1693316,17.95 C7.6893316,18.35 8.2493316,18.68 8.8593316,18.93 L9.2393316,21.58 C9.2693316,21.82 9.4793316,22 9.7293316,22 L13.7293316,22 C13.9793316,22 14.1893316,21.82 14.2193316,21.58 L14.5993316,18.93 C15.2093316,18.68 15.7693316,18.34 16.2893316,17.95 L18.7793316,18.95 C18.8393316,18.97 18.8993316,18.98 18.9593316,18.98 C19.1293316,18.98 19.2993316,18.89 19.3893316,18.73 L21.3893316,15.27 C21.5093316,15.05 21.4593316,14.78 21.2693316,14.63 L19.1593316,12.98 Z M17.1793316,11.27 C17.2193316,11.58 17.2293316,11.79 17.2293316,12 C17.2293316,12.21 17.2093316,12.43 17.1793316,12.73 L17.0393316,13.86 L17.9293316,14.56 L19.0093316,15.4 L18.3093316,16.61 L17.0393316,16.1 L15.9993316,15.68 L15.0993316,16.36 C14.6693316,16.68 14.2593316,16.92 13.8493316,17.09 L12.7893316,17.52 L12.6293316,18.65 L12.4293316,20 L11.0293316,20 L10.8393316,18.65 L10.6793316,17.52 L9.6193316,17.09 C9.1893316,16.91 8.7893316,16.68 8.3893316,16.38 L7.4793316,15.68 L6.4193316,16.11 L5.1493316,16.62 L4.4493316,15.41 L5.5293316,14.57 L6.4193316,13.87 L6.2793316,12.74 C6.2493316,12.43 6.2293316,12.2 6.2293316,12 C6.2293316,11.8 6.2493316,11.57 6.2793316,11.27 L6.4193316,10.14 L5.5293316,9.44 L4.4493316,8.6 L5.1493316,7.39 L6.4193316,7.9 L7.4593316,8.32 L8.3593316,7.64 C8.7893316,7.32 9.1993316,7.08 9.6093316,6.91 L10.6693316,6.48 L10.8293316,5.35 L11.0293316,4 L12.4193316,4 L12.6093316,5.35 L12.7693316,6.48 L13.8293316,6.91 C14.2593316,7.09 14.6593316,7.32 15.0593316,7.62 L15.9693316,8.32 L17.0293316,7.89 L18.2993316,7.38 L18.9993316,8.59 L17.9293316,9.44 L17.0393316,10.14 L17.1793316,11.27 Z M11.7293316,8 C9.5193316,8 7.7293316,9.79 7.7293316,12 C7.7293316,14.21 9.5193316,16 11.7293316,16 C13.9393316,16 15.7293316,14.21 15.7293316,12 C15.7293316,9.79 13.9393316,8 11.7293316,8 Z M11.7293316,14 C10.6293316,14 9.7293316,13.1 9.7293316,12 C9.7293316,10.9 10.6293316,10 11.7293316,10 C12.8293316,10 13.7293316,10.9 13.7293316,12 C13.7293316,13.1 12.8293316,14 11.7293316,14 Z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <p class="header-button-hint">Настройки</p>
                                </button>
                                <button class="pos-rel conference-header__exit-icon sp-h-0-2" onClick={this.logOut}>
                                    <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g transform="translate(-1289.000000, -41.000000)" fill="#575D68" fill-rule="nonzero">
                                                <g transform="translate(1286.000000, 38.000000)">
                                                    <path d="M10.09,15.59 L11.5,17 L16.5,12 L11.5,7 L10.09,8.41 L12.67,11 L3,11 L3,13 L12.67,13 L10.09,15.59 Z M19,3 L5,3 C3.89,3 3,3.9 3,5 L3,9 L5,9 L5,5 L19,5 L19,19 L5,19 L5,15 L3,15 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 Z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <p class="header-button-hint">Выход</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    };
</script>
