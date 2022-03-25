<template>
    <div class="site-header">
        <!-- <Topbar /> -->
        <Topbar />
        <div :style="'background: url('+this.$url.img('images/nevando.gif')+'), black'">
            <div v-if="layout === 'default'" class="site-header__middle container" >
            <div class="site-header__logo">
                <AppLink to="/">
                    <!-- logo / end -->
                    <b-img :src="this.$url.img('images/logonegro.jpg')" fluid alt="Responsive image"></b-img>
                   
                    <!-- logo / end  <LogoSvg />-->
                </AppLink>
            </div>
            <div class="site-header__search">
                <Search location="header" />
            </div>
            <div class="site-header__phone">
                <!-- <div class="site-header__phone-title">
                    Atencion al cliente
                </div> -->
                <!-- <div class="site-header__phone-number">
                    <div class="row">
                        <div class="px-2">
                            <WHA />
                        </div>
                        <div ></div>
                        <div >
                            {{ theme.contacts.phone }}
                        </div>
                    </div>
                </div> -->
                <div class="row">
                    <div><a href="https://api.whatsapp.com/send?phone=528448082830&text=Hola+v%C3%AD+tu+sitio+web+y+requiro+m%C3%A1s+informaci%C3%B3n" target="_blank">
                        <Indicator >
                            <template v-slot:icon>
                                <WHA />
                            </template>
                        </Indicator>
                        </a>
                    </div>
                    <div>
                        <Indicator :to="$url.wishlist()" :value="wishlist.items.length">
                            <template v-slot:icon>
                                <Heart20Svg />
                            </template>
                        </Indicator>
                    </div>
                    <div>
                        <Indicator
                            ref="cartIndicator"
                            :to="$url.cart()"
                            :value="$store.getters['cart/quantity']"
                            trigger="click"
                            @buttonClick="onCartClick"
                        >
                            <template v-slot:icon>
                                <Cart20Svg />
                            </template>

                            <Dropcart v-if="dropcartType === 'dropdown'" />
                        </Indicator>
                    </div>
                    <div>
                    <Indicator ref="accountIndicator" :to="$url.accountDashboard()" trigger="click">
                        <template v-slot:icon>
                            <Person20Svg />
                        </template>

                        <AccountMenu />
                    </Indicator>
                    </div>
                </div>
            </div>
        </div>
        </div>
        

        <div class="site-header__nav-panel ">
            <NavPanel class="bg-white" :layout="layout" sticky-mode="alwaysOnTop" />
        </div>
        
        <CarouselNew />
    </div>
    

        
</template>

<script lang="ts">

import { Vue, Component, Ref } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { RootState } from '~/store'
import { HeaderLayout } from '~/store/options'
import Search from '~/components/header/search.vue'
import NavPanel from '~/components/header/nav-panel.vue'
import CarouselNew from '~/components/header/carousel-new.vue'
import Topbar from '~/components/header/topbar.vue'
import AppLink from '~/components/shared/app-link.vue'
import LogoSvg from '~/svg/logo.svg'
import theme from '~/data/theme'
import Indicator from '~/components/header/indicator.vue'

import Heart20Svg from '~/svg/heart-20.svg'
import Cart20Svg from '~/svg/cart-20.svg'
import Person20Svg from '~/svg/person-20.svg'


import { WishlistState } from '~/store/wishlist'
import { DropcartType } from '~/store/options'
import Sticky from '~/services/sticky'
import departments from '~/services/departments'

import Departments from '~/components/header/departments.vue'
import NavLinks from '~/components/header/nav-links.vue'
import AccountMenu from '~/components/header/account-menu.vue'
import Dropcart from '~/components/header/dropcart.vue'
import SearchScope from '~/components/header/search-scope.vue'
import WHA from '../../svg/wha.svg'

@Component({
    components: { 
        AppLink, 
        NavPanel, 
        Indicator, 
        Heart20Svg,
        Cart20Svg,
        Person20Svg,
        Search, 
        Topbar,
        WHA,CarouselNew,
        
                SearchScope,
        Dropcart,

        NavLinks,
        Departments,

        AccountMenu,

        LogoSvg }
})
export default class Header extends Vue {
    theme = theme

    @State((state: RootState) => state.options.headerLayout) layout!: HeaderLayout
    


    @State((state: RootState) => state.options.dropcartType) dropcartType!: DropcartType
    @State((state: RootState) => state.wishlist) wishlist!: WishlistState

    @Ref() readonly departments: Departments | undefined
    @Ref() readonly nav: NavLinks | undefined
    @Ref() readonly searchIndicator: Indicator | undefined
    @Ref() readonly cartIndicator: Indicator | undefined
    @Ref() readonly accountIndicator: Indicator | undefined
    @Ref() readonly search: Search | undefined

    sticky: Sticky | null = null

    mounted () {
        const element = this.$el as HTMLElement

        this.sticky = new Sticky(element, {
            stuck: 'nav-panel--stuck',
            show: 'nav-panel--show'
        })

        this.sticky.on('stuck', () => {
            if (this.departments) {
                this.departments.setStickyState(true)
            }
        })
        this.sticky.on('fix', () => {
            if (this.departments) {
                this.departments.setStickyState(false)
            }
        })
        this.sticky.on('hide', () => {
            if (this.departments) {
                this.departments.closeMenu(true)
            }
            if (this.nav) {
                this.nav.closeSubmenu()
            }
            if (this.searchIndicator) {
                this.searchIndicator.close(true)
            }
            if (this.cartIndicator) {
                this.cartIndicator.close(true)
            }
            if (this.accountIndicator) {
                this.accountIndicator.close(true)
            }
        })

        this.sticky.start()
        this.sticky.calc(element, departments.element ? [departments.element] : [])
    }

    beforeDestroy () {
        if (this.sticky) {
            this.sticky.destroy()
        }
    }



    onSetDepartmentsArea (area: Element) {
        const element = this.$el as Element

        if (this.sticky) {
            this.sticky.calc(element, area ? [area] : [])
        }
    }

    onCartClick () {
        if (this.$store.state.options.dropcartType === 'offcanvas') {
            this.$store.commit('offcanvasCart/open')
        }
    }


}

</script>
