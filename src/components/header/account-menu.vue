<template>
    <div class="account-menu">
        <form class="account-menu__form" v-on:submit.prevent="login" v-if="!$store.state.account.islogged" >
            <div class="account-menu__form-title">
                Acceder con tu cuenta
            </div>
            <div class="form-group">
                <label for="header-signin-email" class="sr-only">Correo</label>
                <input id="header-signin-email" type="email" class="form-control form-control-sm" placeholder="Correo electronico">
            </div>
            <div class="form-group">
                <label for="header-signin-password" class="sr-only">Contraseña</label>
                <div class="account-menu__form-forgot">
                    <input id="header-signin-password" type="password" class="form-control form-control-sm" placeholder="Contraseña">
                    <a href="" class="account-menu__form-forgot-link">Recuperar?</a>
                </div>
            </div>
            <div class="form-group account-menu__form-button">
                <button type="submit" class="btn btn-primary btn-sm">
                    Ingresar
                </button>
                 <button class="btn mt-2 fbbtn" @click="logInWithFacebook">Facebook Log In</button>
                 <div id="fb-root"></div>
            </div>
            <div class="account-menu__form-link">
                <AppLink :to="$url.signUp()">
                    Crear una cuenta
                </AppLink>
            </div>
        </form>
        <div class="account-menu__divider" />
        <div v-show="$store.state.account.islogged">
            <AppLink :to="$url.account()" class="account-menu__user">
                <div class="account-menu__user-avatar">
                    <img :src="$url.img('/images/avatars/avatar-3.jpg')" alt="">
                </div>
                <div class="account-menu__user-info">
                    <div class="account-menu__user-name">
                        {{$store.state.account.user.userName}}
                    </div>
                    <div class="account-menu__user-email">
                        {{$store.state.account.user.email}}
                    </div>
                </div>
            </AppLink>
            <div class="account-menu__divider" />
            <ul class="account-menu__links">
                <li>
                    <AppLink :to="$url.accountProfile()">
                        Editar perfil
                    </AppLink>
                </li>
                <li>
                    <AppLink :to="$url.accountOrders()">
                        Historial de ordenes
                    </AppLink>
                </li>
                <li>
                    <AppLink :to="$url.accountAddresses()">
                        Direcciones
                    </AppLink>
                </li>
         
                <li>
                    <AppLink :to="$url.accountPassword()">
                        Contraseña
                    </AppLink>
                </li>
            </ul>
            <div class="account-menu__divider" />
            <ul class="account-menu__links">
                <li>
                    <a v-on:click.prevent="logout">
                        Cerrar sesion
                    </a>
                </li>
            </ul>
        </div>
      
    </div>
    
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import AppLink from '~/components/shared/app-link.vue';
//import "facebook-js-sdk";
import * as FB from 'fb-sdk-wrapper';

@Component({

    components: { AppLink }
})
export default class AccountMenu extends Vue {
  
    
    
    login():void{
        const e = (<HTMLInputElement>document.getElementById("header-signin-email")).value;
        const pass = (<HTMLInputElement>document.getElementById("header-signin-password")).value;
        const user={
        }
       // alert(JSON.stringify(user));
         this.$store.dispatch('account/login', { email:e,  password:pass })

    
    }
    logout():void{
        this.$store.dispatch('account/logout')
        FB.logout();
        this.$router.push("/")
    }
    logInWithFacebook(){
       var someObj = {
             getThirdPartyID : function (thirdPartyIDCallback) {
                return FB.login().then( (response) =>{
                     if( response.status=="connected"){
                        	FB.api('/me').then( (response2) => {
                           // console.log(response+response2)
                           // alert("aqui fb")
                            let a={a:response,b:response2};
                            thirdPartyIDCallback(a);     
                            })
                     }else{
                         Vue.notify({
                            "type":"error",
                            "text":"Error de inicio de sesión"
                        })      
                     }
                
				
                 
             });
            }
        }
        var that=this;
        var handleThirdPartyID = function(thirdPartyID){
            console.log(thirdPartyID);
         that.$store.dispatch('account/loginfb', { thirdPartyID }).then(()=>{
                    that.$router.push("/");
          });
        
        }
        someObj.getThirdPartyID(handleThirdPartyID);
   
    }
    mounted(){
        FB.load().then(()=>
        {
            FB.init({ appId:"193453912731125",version:"v11.0",xfbml:true,autoLogAppEvents:true })
        })
    }
    
    
 }

</script>
<style >
    .fbbtn{
        background-color:#3b5998;
        color: white;
    }   
</style>

