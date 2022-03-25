<template>
    <AccountLayout>
        <div class="card">
            <div class="order-header">
                <div class="order-header__actions">
                    <AppLink :to="$url.accountOrders()" class="btn btn-xs btn-secondary">
                        Volver a la lista
                    </AppLink>
                </div>
                <h5 class="order-header__title">
                    Orden #{{ order.id }} 
                </h5>
                <div class="order-header__subtitle">
                    Realizada en
                    <mark class="order-header__date">{{ order.date }}</mark>
                    Estado actual
                    <mark class="order-header__status">{{ order.status }}</mark>.
                    Guía
                    <mark class="order-header__status" v-if=" order.guia!=''">  <a href="https://www.paqueteria-flechaamarilla.com.mx/" target="_blank">{{ order.guia }}</a></mark>
                    <mark class="order-header__status" v-else>por asignarse</mark>.
                    <br>
                     <mark class="order-header__date">Link de pago:</mark>
                     <a :href="order.link">{{order.link}}</a>
                </div>
                     
            </div>
            <div class="card-divider" />
            <div class="card-table">
                <div class="table-responsive-sm mb-0">
                    <table>
                        <thead>
                            <tr>
                                  <th class="order-list__column-label" :colspan="2">
                                        Producto
                                    </th>
                                    <th class="order-list__column-quantity">
                                        Ctd
                                    </th>
                                    <th class="order-list__column-total">
                                        Total
                                    </th>
                            </tr>
                        </thead>
                        <tbody class="card-table__body card-table__body--merge-rows">
                            <!-- <tr v-for="item in order.items" :key="item.id">
                                <td>{{ item.name }} × {{ item.quantity }}</td>
                                <td>{{ item.total }}</td>
                            </tr> -->

                            <tr v-for="(item, itemIndex) in order.items" :key="itemIndex">
                                    <td class="order-list__column-image">
                                        <div class="product-image">
                                            <AppLink :to="$url.product(item)" class="product-image__body">
                                                <!--suppress HtmlUnknownTarget -->
                                                <img class="product-image__img" :src="$url.img(item.image)" alt="">
                                            </AppLink>
                                        </div>
                                    </td>
                                    <td class="order-list__column-product">
                                        <AppLink :to="$url.product(item)">
                                            {{ item.name }}
                                        </AppLink>
                                        <div
                                            v-if="item.options && item.options.length > 0"
                                            class="order-list__options"
                                        >
                                            <ul class="order-list__options-list">
                                                <li
                                                    v-for="(option, optionIndex) in (item.options || [])"
                                                    :key="optionIndex"
                                                    class="order-list__options-item"
                                                >
                                                    <span class="order-list__options-label">
                                                        {{ option.label }}:
                                                    </span>
                                                    <span class="order-list__options-value">{{ option.value }}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td class="order-list__column-quantity" data-title="Qty:">
                                        {{ item.quantity }}
                                    </td>
                                    <td class="order-list__column-total">
                                        {{ item.total }}
                                    </td>
                                </tr>
                        </tbody>
                        <tbody
                            v-if="order.additionalLines.length > 0"
                            class="card-table__body card-table__body--merge-rows"
                        >
                            <tr>
                                <th>Subtotal</th>
                                <td>{{ order.subtotal }}</td>
                            </tr>
                            <tr v-for="(item, index) in order.additionalLines" :key="index">
                                <th>{{ item.label }}</th>
                                <td>{{ item.total }}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Total</th>
                                <td>{{ order.total }}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

        <div class="row mt-3 no-gutters mx-n2">
            <div class="col-sm-12 col-12 px-2">
                <AddressCard :address="order.shippingAddress[0]" featured badge="Dirección de envío" badge-muted />
            </div>
            <!-- <div class="col-sm-6 col-12 px-2 mt-sm-0 mt-3">
                <AddressCard :address="order.billingAddress" featured badge="Billing Address" badge-muted />
            </div> -->
        </div>
    </AccountLayout>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { IOrder } from '~/interfaces/order'
import AppLink from '~/components/shared/app-link.vue'
import AddressCard from '~/components/shared/address-card.vue'
import AccountLayout from '~/components/account/account-layout.vue'
import dataAccountOrderDetails from '~/data/accountOrderDetails'

@Component({
    components: { AppLink, AddressCard, AccountLayout },
    head: { title: 'Ordenes detalles' }
})
export default class Page extends Vue {
    order: IOrder = this.$store.state.account.user.orders[0]
    beforeCreate(){
        // if(!this.$store.state.account.islogged){
        //     this.$router.push("/");
        // }
        // this.order = this.$store.state.account.user.orders[]
        // console.log(this.order);
    }
    mounted(){
     //this.order = this.$store.state.account.user.orders[this.$route.params.id]
        //alert("oik");
        const el=this.$store.state.account.user.orders[this.$route.params.id];
        //console.log(el);
        this.order=el
    }
   // order: IOrder = dataAccountOrderDetails

}

</script>
