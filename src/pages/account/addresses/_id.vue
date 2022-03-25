<template>
    <AccountLayout>
        <div class="card">
            <div class="card-header">
                <h5>{{titulo}}</h5>
            </div>
            <div class="card-divider" />
            <div class="card-body">
                <div class="row no-gutters">
                   
                    <div class="col-12 col-lg-10 col-xl-8">
                         <form @submit.prevent="saveaadress" >
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="checkout-first-name">Nombre</label>
                                <input
                                    id="checkout-first-name"
                                    class="form-control"
                                    type="text"
                                    placeholder="First Name"
                                    v-model="nombre"
                                    required
                                >
                               
                            </div>
                            <div class="form-group col-md-6">
                                <label for="checkout-last-name">Apellido</label>
                                <input
                                    id="checkout-last-name"
                                    class="form-control"
                                    type="text"                                    
                                    placeholder="Last Name"
                                    v-model="apellido"
                                    required
                                >
                            </div>
                        </div>

                        <!-- <div class="form-group">
                            <label for="checkout-company-name">
                                Company Name
                                <span class="text-muted">(Optional)</span>
                            </label>
                            <input
                                id="checkout-company-name"
                                class="form-control"
                                type="text"
                                placeholder="Company Name"
                            >
                        </div> -->
                        <div class="form-group d-none">
                            <label for="checkout-country">País</label>
                            <select id="checkout-country" class="form-control form-control-select2" v-model="pais" required  readonly>
                                <option selected value="Mexico">México</option>
                                <!-- <option>United States</option>
                                <option>Russia</option>
                                <option>Italy</option>
                                <option>France</option>
                                <option>Ukraine</option>
                                <option>Germany</option>
                                <option>Australia</option> -->
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="checkout-street-address">Dirección</label>
                            <input
                                id="checkout-street-address"
                                class="form-control"
                                type="text"
                                placeholder="Street Address"
                                required
                                v-model="direccion"
                            >
                        </div>
                        <!-- <div class="form-group">
                            <label for="checkout-address">
                                Apartment, suite, unit etc.
                                <span class="text-muted">(Optional)</span>
                            </label>
                            <input
                                id="checkout-address"
                                class="form-control"
                                type="text"
                            >
                        </div> -->
                        <div class="form-group">
                            <label for="checkout-city">Ciudad</label>
                            <input
                                id="checkout-city"
                                class="form-control"
                                type="text"
                                v-model="ciudad"
                                required
                            >
                        </div>
                        <div class="form-group">
                            <label for="checkout-state">Estado</label>
                            <input
                                id="checkout-state"
                                class="form-control"
                                type="text"
                                v-model="estado"
                                required
                            >
                        </div>
                        <div class="form-group">
                            <label for="checkout-postcode">Codigo Postal </label>
                            <input
                                id="checkout-postcode"
                                class="form-control"
                                type="text"
                                v-model="cp"
                                required
                            >
                        </div>

                        <div class="form-row d-none">
                            <div class="form-group col-md-6">
                                <label for="checkout-email">Email</label>
                                <input
                                    id="checkout-email"
                                    class="form-control"
                                    type="email"
                                    placeholder="Email address"
                                    v-model="email"
                                     readonly
                                    required
                                >
                            </div>
                            <div class="form-group col-md-6">
                                <label for="checkout-phone">Teléfono</label>
                                <input
                                    id="checkout-phone"
                                    class="form-control"
                                    type="text"
                                    placeholder="Phone"                                    
                                   v-model="telefono"
                                    readonly
                                  
                                >
                            </div>
                        </div>

                        <div class="form-group mt-3 mb-0">
                            <button class="btn btn-primary" type="submit">
                                Save
                            </button>
                        </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </AccountLayout>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import AccountLayout from '~/components/account/account-layout.vue'
import { Context } from '@nuxt/types'
import shopApi from '~/api/shop'

@Component({
    components: { AccountLayout },
    head: { title: 'Edit Address' },
    middleware ({ store,redirect, $url }: Context) {
         if(!store.state.account.islogged){
            //this.$router.push("/");
            return redirect("/account/login");        
        }
    }
    
   })

export default class Page extends Vue {   
    titulo:string = "Dirección";
    nombre:string="";
    apellido:string="";
    pais:string="Mexico";
    direccion:string="";
    ciudad:string="";
    estado:string="";
    cp:string="";
    email:string=this.$store.state.account.user.email;
    telefono:string=this.$store.state.account.user.telefono;
    id_dir:string="";

    saveaadress(): void{

        let tel=(document.getElementById("checkout-phone") as HTMLInputElement).value;
        let fd= new FormData();
        fd.append("id",this.$store.state.account.user.id);
        //fd.append("")
        let data ={
            "id":this.$store.state.account.user.id,
            "firstName":this.nombre,
            "lastName":this.apellido,
            "email":this.email,
            "phone":tel,
            "country":this.pais,
            "state":this.estado,
            "city":this.ciudad,
            "postcode":this.cp,
            "address":this.email,
            "id_dir":this.id_dir
        }
         
        if(this.$route.params.id!="new"){

            shopApi.editdireccion(data).then(response => {
                 if(response.status==200){
                     this.$store.dispatch("account/validate",this.$store.state.account.user.token).then(()=>{
                         this.$router.push("/account/addresses");
                     });
                     
                 }
            });               
        }else{
            shopApi.adddireccion(data).then(response => {
                // data=response.data;
                 if(response.status==200){
                     this.$store.dispatch("account/validate",this.$store.state.account.user.token).then(()=>{
                         this.$router.push("/account/addresses");
                     });
                 }
                 
            });
        }
        
                
        
    }
    solonumeros(e:InputEvent):void{
        let a = e.target as HTMLInputElement;        
        a.value=a.value.replace(/[^0-9]/g,'');
        //console.log(a.value);
    }
    beforeCreate(){
        if(!this.$store.state.account.islogged){
            this.$router.push("/");
        }
        
    }
    mounted(){
        if(this.$route.params.id!="new"){

            const i=this.$route.params.id;
            const dir=this.$store.state.account.user.direcciones[i]
            this.nombre=dir.firstName
            this.apellido=dir.lastName
            this.pais=dir.country
            this.direccion=dir.address
            this.ciudad=dir.city
            this.estado=dir.state
            this.cp=dir.postcode
            this.email=dir.email;
            (document.getElementById("checkout-phone") as HTMLInputElement).value=dir.phone
            this.id_dir=dir.id
        }else{
            if(this.$store.state.account.user.telefono==null||this.$store.state.account.user.telefono==""){
                this.$router.push("/account/profile")
                Vue.notify({
                    text:"Por favor actualiza tu teléfono",
                    type:"error"
                })
            }
        }
    }   

}

</script>
