<template>
    <AccountLayout>
        <div class="dashboard">
            <div class="dashboard__profile card profile-card">
                <div class="card-body profile-card__body">
                    <div class="profile-card__avatar">
                        <img :src="$url.img('/images/avatars/avatar-3.jpg')" alt="">
                    </div>
                    <div class="profile-card__name">
                        {{$store.state.account.user.userName}}
                    </div>
                    <div class="profile-card__email">
                        {{$store.state.account.user.email}}
                    </div>
                    <div class="profile-card__edit">
                        <AppLink :to="$url.accountProfile()" class="btn btn-secondary btn-sm">
                            Editar perfil
                        </AppLink>
                    </div>
                </div>
            </div>

            <AddressCard
                :address="address"
                class="dashboard__address"
                featured
                badge="Dirección predeterminada" badge-muted
            >
                <AppLink :to="$url.accountAddress({ id: 5 })">
                    Ediar contraseña
                </AppLink>
            </AddressCard>

            <div class="dashboard__orders card">
                <div class="card-header">
                    <h5>Ordenes recientes</h5>
                </div>
                <div class="card-divider" />
                <div class="card-table">
                    <div class="table-responsive-sm mb-0">
                        <table>
                            <thead>
                                <tr>
                                    <th>Orden</th>
                                    <th>Fecha</th>
                                    <th>Estatus</th>
                                    <th>Guia</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(order,index) in orders" :key="order.id">
                                    <td>
                                        <AppLink :to="$url.accountOrder(index)">
                                            #{{ order.id }}
                                        </AppLink>
                                    </td>
                                    <td>{{ order.date }}</td>
                                    <td>{{ order.status }}</td>
                                     <td>
                                         <a v-if="order.guia!=''" href="https://www.paqueteria-flechaamarilla.com.mx/" target="_blank">{{ order.guia }} </a>
                                         <p v-else>Por Asignarse</p>
                                         </td>
                                    <td>
                                        {{ order.total}}
                                        for
                                        {{ order.quantity }}
                                        item(s)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                 <!-- <pre>
                    {{orders}}
                </pre> -->
            </div>
        </div>

    </AccountLayout>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { IUserAddress } from '~/interfaces/address'
import { IOrder } from '~/interfaces/order'
import AppLink from '~/components/shared/app-link.vue'
import AddressCard from '~/components/shared/address-card.vue'
import AccountLayout from '~/components/account/account-layout.vue'
import dataAccountAddresses from '~/data/accountAddresses'
import dataAccountOrders from '~/data/accountOrders'

@Component({
    components: { AppLink, AddressCard, AccountLayout },
    head: { title: 'Mi cuenta' }
})
export default class Page extends Vue {
  beforeCreate(){
        if(!this.$store.state.account.islogged){
            this.$router.push("/");
        }
    }
    address: IUserAddress = this.$store.state.account.user.direcciones[0];

    orders: IOrder[] = this.$store.state.account.user.orders.slice(0,3);

   
}

</script>
