<template>
    <AccountLayout>
        <div class="card">
            <div class="card-header">
                <h5>Editar perfil</h5>
            </div>
            <div class="card-divider" />
            <div class="card-body">
                <form @submit.prevent="actualizar">
                <div class="row no-gutters">
                    <div class="col-12 col-lg-7 col-xl-6">
                        <div class="form-group">
                            <label for="profile-first-name">Nombre de usuario/s</label>
                            <input
                                id="profile-first-name"
                                type="text"
                                class="form-control"
                                placeholder="Nombre/s"
                                v-model="username"
                                required
                                
                            >
                        </div>
                        
                        <div class="form-group">
                            <label for="profile-email">Correo</label>
                            <input
                                id="profile-email"
                                type="email"
                                class="form-control"
                                placeholder="Correo"
                                v-model="correo"
                                required
                            >
                        </div>
                        <div class="form-group">
                            <label for="profile-phone">Telefono</label>
                            <input
                                id="profile-phone"
                                type="text"
                                class="form-control"
                                placeholder="Telefono"
                                v-model="cel"
                                required
                            >
                        </div>

                        <div class="form-group mt-5 mb-0">
                            <button type="submit" class="btn btn-primary">
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </AccountLayout>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import AccountLayout from '~/components/account/account-layout.vue'
import shopApi from '~/api/shop'

@Component({
    components: { AccountLayout },
    head: { title: 'Perfil' }
})
export default class Page extends Vue {
    
     private username: string =this.$store.state.account.user.userName;
     private correo: string =this.$store.state.account.user.email;
     private cel: string =this.$store.state.account.user.telefono;
     private id: string =this.$store.state.account.user.id;


     beforeCreate(){
        if(!this.$store.state.account.islogged){
            this.$router.push("/");
        }
    }
    actualizar():void{
       const data={
           id:this.id,
           user:this.username,
           email:this.correo,
           tel:this.cel,
           config: {
               headers:{
                Authorization: 'Bearer ' + this.$store.state.account.user.token
               }
           }
       }
      // alert(JSON.stringify(data));
      shopApi.updateUser(data).then((response)=>{
          if(response.status==200){
          Vue.notify({
               type: 'success',
                text: `Actualización Exitosa`
          })
          this.$store.commit("account/update",data);
          }else if(response.status==401){
               this.$router.push("/");
          }
          
          //console.log(response)
      }).catch((error)=>{
         // console.log(error)
          Vue.notify({
               type: 'error',
                text: `Sin Autorización`
          })
          this.$router.push("/");
          
      })
    }
 }

</script>
