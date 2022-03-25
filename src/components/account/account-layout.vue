<template>
    <div>
        <PageHeader
            title="Mi cuenta"
            :breadcrumb="[
                {title: 'Home', url: '/'},
                {title: 'Breadcrumb', url: ''},
                {title: 'Mi cuenta', url: ''},
            ]"
        />

        <div class="block">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-3 d-flex">
                        <div class="account-nav flex-grow-1">
                            <h4 class="account-nav__title">
                                Navegacion
                            </h4>
                            <ul>
                                <NuxtLink
                                    v-for="(item, index) in items"
                                    v-slot="{ isActive }"
                                    :key="index"
                                    :to="$url.lang(item.link)"
                                    :exact="true"
                                >
                                    <li
                                        :class="[
                                            'account-nav__item',
                                            {'account-nav__item--active': isActive}
                                        ]"
                                    >
                                        <AppLink :to="item.link" >
                                            {{ item.title }}
                                        </AppLink>
                                    </li>
                                </NuxtLink>
                                 <li
                                        :class="[
                                            'account-nav__item',
                                            {'account-nav__item--active': isActive}
                                        ]"
                                    >
                                        <a @click.prevent="logoutf" :href="$url.signOut()">
                                            Logout
                                        </a>
                                    </li>
                                <!-- <NuxtLink
                                
                                    v-slot="{ isActive }"
                                    :to="$url.signOut()"
                                    :exact="true"
                                >
                                    <li
                                        :class="[
                                            'account-nav__item',
                                            {'account-nav__item--active': isActive}
                                        ]"
                                    >
                                        <AppLink @click.prevent="logoutf" :to="$url.signOut()">
                                            Logout
                                        </AppLink>
                                    </li>
                                </NuxtLink> -->
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-lg-9 mt-4 mt-lg-0">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import PageHeader from '~/components/shared/page-header.vue'
import AppLink from '~/components/shared/app-link.vue'

@Component({
    components: { PageHeader, AppLink }
})
export default class AccountLayout extends Vue {
    data () {
        return {
            items: [
                { title: 'Dashboard', link: this.$url.accountDashboard(),fun:"" },
                { title: 'Editar Perfil', link: this.$url.accountProfile(),fun:"" },
                { title: 'Historial de Ordenes', link: this.$url.accountOrders(),fun:"" },
               // { title: 'Order Details', link: this.$url.accountOrder({ id: 5 }) },
                { title: 'Direcciones', link: this.$url.accountAddresses(),fun:"" },
                //{ title: 'Edit Address', link: this.$url.accountAddress({ id: 2 }) },
                { title: 'Reestablecer contraseña', link: this.$url.accountPassword() },
                //{ title: 'Logout', link: this.$url.signOut(),fun:"logout"  }
            ]
        }
    }
    async logoutf():Promise<void>{
        var that=this;
        await this.$store.dispatch('account/logout').then(()=>{
                    that.$router.push("/");
            });;
    }
}

</script>
