import Vue from 'vue'
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import $axios ,{ AxiosRequestConfig, AxiosPromise } from 'axios';
import shopApi from '~/api/shop'

export interface loginI  {
    islogged: boolean;
    user:userI;
}
export interface userI{
    token:string;
    token_type: string;
    expires_on: number;
    id: number;
    userName:string;
    email:string;
    telefono?:string;
    direcciones?:any;
    orders?:any;
   
}

export interface loginPayload{
    email:string;
    pass:string;
}
export interface regPayload{
    user:string;
    email:string;
    pass:string;
}

function getDefaultState (): loginI {
    return {
        islogged:false ,
        user:{

            token:"",
            token_type: "",
            expires_on: 0,
            id: 0,
            userName:"",
            email:"",
            telefono:"",
            direcciones:[],
            orders:[]

        }
    }
}

export const state = getDefaultState


// noinspection JSUnusedGlobalSymbols
export const mutations: MutationTree<loginI> = {
    login (state, response) {
        console.log(response);

        
        if(response.status==200){
            Vue.notify({
                type: 'success',
                text: `Incio de sesión exitoso`
            })
            state.islogged=true;
            state.user.token=response.data.token;
           }else{
            state.islogged=false;
            Vue.notify({
                type: 'danger',
                text: `Revisa tus datos`
            })
           }
        
       
           
            //alert(JSON.stringify(payload));
        //state.islogged=true;
      
    },
    logout (state) {
        state.islogged=false;
        state.user={
            token:"",
            token_type: "",
            expires_on: 0,
            id: 0,
            userName:"",
            email:"",
            telefono:"",
            direcciones:[],
            orders:[]
        };
    },
    validate(state, response){
        //console.log(response)
        const d=response.data
        if(response.status==200){
        
            state.user.id=d.id;
            state.user.userName=d.userName;
            state.user.email=d.email;
            state.user.direcciones=d.direcciones;
            state.user.orders=d.orders;
            state.user.telefono=d.telefono;                
            state.islogged=true;
            //alert(d.telefono);
            if (d.telefono==""||d.telefono==null){
                this.$router.push("/account/profile")
                Vue.notify({
                    text:"Por favor actualiza tu teléfono",
                    type:"error"
                })
            }
        }else{
         state.islogged=false;
        }

    },
    update(state,data){
        state.user.userName=data.user;
        state.user.email=data.email;
        state.user.telefono=data.tel;   
    }   
}

// noinspection JSUnusedGlobalSymbols
export const actions: ActionTree<loginI, {}> = {
    async register ({ commit,dispatch }, payload: regPayload): Promise<void> {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve()
            }, 500)
        })        
      //  let url='http://127.0.0.1:8000/login';        
        //console.log(payload);        
        let response= shopApi.register(payload).catch();

        let r=(await response);
        if(r.status==200){
            dispatch('login',{email:payload.email, password:payload.pass});
        }else{
            Vue.notify({
                text:"Hubo algun error o el correo ya esta registrado",
                type:"error"
            })
        }
        
        
    },
    async login ({ commit,dispatch }, payload: loginPayload): Promise<void> {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve()
            }, 500)
        })     
      //  let url='http://127.0.0.1:8000/login';        
        //console.log(payload);        
        let response= shopApi.login(payload);
        response.catch(function (error){
            Vue.notify({
                text:"Email o contraseña incoorrecta",
                type:"error"
            })
            return;
        })
        let r=(await response);
        
        if(r.status==200){
            commit('login', r);
            dispatch('validate',r.data.token);
        }
        
    },
    async loginfb ({ commit,dispatch }, payload: any): Promise<void> {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve()
            }, 500)
        })        
      //  let url='http://127.0.0.1:8000/login';        
        //console.log(payload);        
        let response= shopApi.loginfb(payload);
        let r=(await response);

        commit('login', r);
        dispatch('validate',r.data.token);
    },
    async logout ({ commit }): Promise<void> {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve()
            }, 500)
        })
        

        commit('logout')
    },
    async update ({ commit }, data: any): Promise<void> {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve()
            }, 500)
        })
        commit('update', data)
    },
    async validate ({ commit },token): Promise<void> {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve()
            }, 500)
        })
        let config={
            headers:{
                Authorization: 'Bearer ' + token
            }
        }
        //let url='http://127.0.0.1:8000/validateuser';
        let a= shopApi.validarUser(config);
         let r=(await a);
         if(r?.status!=200){
            this.$router.push("/")
         }

        commit('validate',r)
    },

}

export const getters: GetterTree<loginI, {}> = {
    user (store) {
        return store.user
    }
}
