<template>
    <AccountLayout>
        <div class="addresses-list">
            <AppLink :to="$url.accountAddress( 'new' )" class="addresses-list__item addresses-list__item--new">
                <div class="addresses-list__plus" />
                <div class="btn btn-secondary btn-sm">
                    Añadir nuevo
                </div>
            </AppLink>

            <div class="addresses-list__divider" />
            <template v-for="(address,index) in addresses">
                <AddressCard
                    :key="address.id"
                    :address="address"
                    :badge="address.default ? 'Default' : ''"
                    class="addresses-list__item"
                >
                    <AppLink :to="$url.accountAddress(index)">
                        Editar
                    </AppLink>
                    &nbsp;&nbsp;
                    <a href="#" @click.prevent="eliminar(address.id)">Quitar</a>
                </AddressCard>
                <div :key="address.id + '-divider'" class="addresses-list__divider" />
            </template>
            <!-- <pre>
                {{$store.state.account.user.direcciones}}
            </pre> -->
        </div>
    </AccountLayout>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { IUserAddress } from '~/interfaces/address'
import AppLink from '~/components/shared/app-link.vue'
import AddressCard from '~/components/shared/address-card.vue'
import AccountLayout from '~/components/account/account-layout.vue'
import dataAccountAddresses from '~/data/accountAddresses'
import shopApi from '~/api/shop'

@Component({
    components: { AppLink, AddressCard, AccountLayout },
    head: { title: 'Lista de direcciones' }
})
export default class Page extends Vue {
    beforeCreate(){
        
        if(!this.$store.state.account.islogged){
            this.$router.push("/");
        }
    }
    addresses: IUserAddress[] = this.$store.state.account.user.direcciones; //dataAccountAddresses

    eliminar(id:string):void{
        let a=confirm("Deseas eliminar la dirección ");
        if(a){
            shopApi.deldir(id).then(response => {
                 if(response.status==200){
                     this.$store.dispatch("account/validate",this.$store.state.account.user.token);
                     this.$router.push("/account/dashboard");
                 }
            });     
        }
    }
}

</script>
