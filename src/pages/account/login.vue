<template>
    <div>
        <PageHeader
            title="Mi cuenta"
            :breadcrumb="[
                {title: 'Home', url: ''},
                {title: 'Login', url: ''},
                {title: 'Mi cuenta', url: ''},
            ]"
        />

        <div class="block">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 d-flex flex-column">
                        <div class="card flex-grow-1 mb-md-0">
                            <div class="card-body">
                                <h3 class="card-title">
                                    Login
                                </h3>
                                <form v-on:submit.prevent="login">
                                    <div class="form-group">
                                        <label for="login-email">Correo</label>
                                        <input
                                            id="login-email"
                                            class="form-control"
                                            type="email"
                                            placeholder="Correo"
                                            required
                                        >
                                    </div>
                                    <div class="form-group">
                                        <label for="login-password">Contraseña</label>
                                        <input
                                            id="login-password"
                                            class="form-control"
                                            type="password"
                                            placeholder="Contraseña"
                                            required
                                        >
                                        <small class="form-text text-muted">
                                            <a href="">Olvide mi contraseña</a>
                                        </small>
                                    </div>
                                    <!-- <div class="form-group">
                                        <div class="form-check">
                                            <span class="form-check-input input-check">
                                                <span class="input-check__body">
                                                    <input
                                                        id="login-remember"
                                                        class="input-check__input"
                                                        type="checkbox"
                                                    >
                                                    <span class="input-check__box" />
                                                    <Check9x7Svg class="input-check__icon" />
                                                </span>
                                            </span>
                                            <label class="form-check-label" for="login-remember">Recuerdame</label>
                                        </div>
                                    </div> -->
                                    <button type="submit" class="btn btn-primary mt-4">
                                        Login
                                    </button>
                                   
                                </form>
                                 <button class="btn mt-2 fbbtn" @click="logInWithFacebook"> Facebook Log In</button>
                                 <div id="fb-root"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex flex-column mt-4 mt-md-0">
                        <div class="card flex-grow-1 mb-0">
                            <div class="card-body">
                                <h3 class="card-title">
                                    Registrar
                                </h3>
                                <form @submit.prevent="register">

                                    <div class="form-group">
                                        <label for="register-email">Nombre de Usuario</label>
                                        <input
                                            id="username-email"
                                            class="form-control"
                                            type="text"
                                            placeholder="Nombre de usuario"
                                            required
                                        >
                                    </div>
                                    <div class="form-group">
                                        <label for="register-email">Correo</label>
                                        <input
                                            id="register-email"
                                            class="form-control"
                                            type="email"
                                            placeholder="Correo"
                                            required
                                        >
                                    </div>
                                    <div class="form-group">
                                        <label for="register-password">Contraseña</label>
                                        <input
                                            id="register-password"
                                            class="form-control"
                                            type="password"
                                            placeholder="Contraseña"
                                            required
                                        >
                                    </div>
                                    <div class="form-group">
                                        <label for="register-confirm">Repite tu contraseña</label>
                                        <input
                                            id="register-confirm"
                                            class="form-control"
                                            type="password"
                                            placeholder="Contraseña"                                            
                                            required
                                        >
                                    </div>
                                    <button type="submit" class="btn btn-primary mt-4">
                                        Registrar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import PageHeader from '~/components/shared/page-header.vue'
import Check9x7Svg from '~/svg/check-9x7.svg'
import * as FB from 'fb-sdk-wrapper';

@Component({
    components: { PageHeader, Check9x7Svg },
    head: { title: 'Log In' }
})

export default class Page extends Vue {
    

    async login():Promise<void>{
        const e = (<HTMLInputElement>document.getElementById("login-email")).value;
        const pass = (<HTMLInputElement>document.getElementById("login-password")).value;
       // alert(JSON.stringify(user));
       var that=this;
        await this.$store.dispatch('account/login', { email:e,  password:pass }).then(()=>{
                    that.$router.push("/");
            });;

         this.$router.push("/")    
    }
    async register():Promise<void>{
           const e = (<HTMLInputElement>document.getElementById("register-email")).value;
            const user = (<HTMLInputElement>document.getElementById("username-email")).value;
        const pass = (<HTMLInputElement>document.getElementById("register-password")).value;
        const pass2 = (<HTMLInputElement>document.getElementById("register-confirm")).value;
       // alert(JSON.stringify(user));
       if(pass==pass2){
            var that=this;
            await  this.$store.dispatch('account/register', {user:user, email:e,  pass:pass }).then(()=>{
                    that.$router.push("/");
            });
            //
       }else{
           Vue.notify({
               "type":"error",
               "text":"No coinciden las contraseñas"
           })
       }         
    }
    mounted(){
        FB.load().then(()=>
        {
            FB.init({ appId:"193453912731125",version:"v11.0",xfbml:true,autoLogAppEvents:true })
        })
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
    //  FB.login(function (response) {
    //          var that=this;
    //         if( response.status=="connected"){
    //             FB.api('/me', function(response2) {
	// 			  let a={a:response,b:response2};
    //               callbackfb(a);                  
    //             })
    //         }else{
    //             Vue.notify({
    //            "type":"error",
    //            "text":"Error de inicio de sesión"
    //        })
    //         }
           
            
    //     },{scope: 'public_profile,email'});
    }
        
    

 }

</script>
<style >
    .fbbtn{
        background-color:#3b5998;
        color: white;
    }   
</style>
