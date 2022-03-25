<template>
    <AccountLayout>
        <div class="card">
            <div class="card-header">
                <h5>Historial de ordenes</h5>
            </div>
            <div class="card-divider" />
            <div class="card-table">
                <div class="table-responsive-sm">
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
                                <td>{{ order.date }} </td>
                                <td>{{ order.status }}</td>
                                 <td>
                                         <a v-if="order.guia!=''" href="https://www.paqueteria-flechaamarilla.com.mx/" target="_blank">{{ order.guia }} </a>
                                         <p v-else>Por Asignarse</p>
                                         </td>
                                <td>
                                    {{ order.total   }}
                                    for
                                    {{ order.quantity }}
                                    item(s)
                                  
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="card-divider" />
            <div class="card-footer">
                <!-- <Pagination :current="page" :total="3" @page-change="setPage" /> -->
            </div>
        </div>
    </AccountLayout>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { IOrder } from '~/interfaces/order'
import Pagination from '~/components/shared/pagination.vue'
import AppLink from '~/components/shared/app-link.vue'
import AccountLayout from '~/components/account/account-layout.vue'
import dataAccountOrders from '~/data/accountOrders'

@Component({
    components: { Pagination, AppLink, AccountLayout },
    head: { title: 'Historial de Ordenes' }
})
export default class Page extends Vue {
    page: number = 1

    orders: IOrder[] = this.$store.state.account.user.orders;

    setPage (page: number) {
        this.page = page
    }
    beforeCreate(){
        if(!this.$store.state.account.islogged){
            this.$router.push("/");
        }
    }
}

</script>
