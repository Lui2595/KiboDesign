<template>
    <div :class="`product product--layout--${layout}`">
        <div class="product__content">
            <ProductGallery :layout="layout" :images="product.images" />

            <div class="product__info">
                <div class="product__wishlist-compare">
                    <AsyncAction v-slot:default="{ run, isLoading }" :action="() => $store.dispatch('wishlist/add', { product })">
                        <button
                            type="button"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Wishlist"
                            :class="[
                                'btn btn-sm btn-light btn-svg-icon',
                                {'btn-loading': isLoading}
                            ]"
                            @click="run"
                        >
                            <Wishlist16Svg />
                        </button>
                    </AsyncAction>

                    <AsyncAction v-slot:default="{ run, isLoading }" :action="() => $store.dispatch('compare/add', { product })">
                        <button
                            type="button"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Compare"
                            :class="[
                                'btn btn-sm btn-light btn-svg-icon',
                                {'btn-loading': isLoading}
                            ]"
                            @click="run"
                        >
                            <Compare16Svg />
                        </button>
                    </AsyncAction>
                </div>
                <h1 class="product__name">
                    {{ product.name }}
                </h1>
                 <div class="product__prices">
                    <template v-if="product.compareAtPrice">
                        <span class="product__new-price">
                            {{ $price(product.price) }}
                        </span>
                        <span class="product__old-price">
                            {{ $price(product.compareAtPrice) }}
                        </span>
                    </template>
                    <template v-if="!product.compareAtPrice">
                        {{ $price(product.price) }}
                    </template>
                </div>
                <div class="product__rating">
                    <div class="product__rating-stars">
                        <Rating :value="product.rating" />
                    </div>
                    <div class="product__rating-legend">
                        <AppLink to="/">
                            {{ product.reviews }} Calificación
                        </AppLink>
                        <span>/</span>
                        <AppLink to="/">
                            Calificanos
                        </AppLink>
                    </div>
                </div>
                <div class="product__description">

                </div>
                <!-- <ul class="product__features">
                    <li>Speed: 750 RPM</li>
                    <li>Power Source: Cordless-Electric</li>
                    <li>Battery Cell Type: Lithium</li>
                    <li>Voltage: 20 Volts</li>
                    <li>Battery Capacity: 2 Ah</li>
                </ul> -->
                <ul class="product__meta">
                    <li class="product__meta-availability">
                        Disponibilidad:
                        <span class="text-success">Disponible</span>
                    </li>
                    <li>
                        Brand:
                        <AppLink to="/shop/catalog">
                           Kibo 
                        </AppLink>
                    </li>
                    <li>SKU: {{product.sku}}</li>
                </ul>
            </div>

            <div class="product__sidebar">
                <div class="previa text-center" id="divpreview">
                    <template class="text-center">
                        <b-img id="preview" class="card_img mt-1" src="" fluid alt="">
                         </b-img>
                    </template>
                        <h4 class="card_tit" id="preview_tit"></h4>
                        <p class="card_text" id="preview_text"></p>
                </div>
                <div class="product__availability">
                    Disponibilidad:
                    <span class="text-success">Disponible</span>
                </div>
                
               
                <form class="product__options">
                    <div class="form-group product__option">
                        <div class="accordion" role="tablist">
                            <b-card no-body class="mb-1" v-if="materiales.maderas.visible">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-1 variant="light" class="selector" @click="des()" >
                                        <div class="row">
                                            <div class="col"><b-img class="" style="float: left; left:auto; right: 30px; height: 40px; width:40px; margin-top: -0.55rem !important;" src=".././../static/images/f1.png" ></b-img></div>
                                            <div class="col-7 text-left">Madera</div>
                                            <div class="col flecha text-right">
                                                <b-img class="abajo d-none" style="left:auto; right: 30px; height: 15px; width:15px; " src=".././../static/images/flecha2.png" ></b-img>
                                                <b-img class="arriba" style="left:auto; right: 30px; height: 15px; width:15px; " src=".././../static/images/flecha.png" ></b-img>
                                            </div>
                                        </div>
                                   </b-button>
                                </b-card-header> 
                                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text> 
                                            <div class="row">
                                                <div 
                                                    v-for="(item,index) in materiales.maderas.items" :key="index"
                                                style="width: 50px; height: 50px; flex: none;" class="col-4">
                                                   <a href="#" v-on:click.stop.prevent="addvariante(item)" @mouseenter="mostrar(item)" @mouseleave="ocultar"> 
                                                        <b-card  style="width: 50px; height: 35px;" :id="'pop'+item.id" :img-src="$url.img(item.imagen)" img-alt="Image" overlay>
                                                        </b-card>
                                                    </a>
                                                    <!-- <b-popover class="poper" :target="'pop'+item.id" triggers="hover focus" placement="left">
                                                        <template class="text-center" #title><b-img class="card_img" :src="$url.img(item.imagen)" fluid alt="Fluid image"></b-img></template>
                                                        <h4 class="card_tit">{{item.nombre}}</h4>
                                                        <p class="card_text">{{item.des}}</p>
                                                    </b-popover> -->
                                                </div>
                                  
                                            </div>
                                        </b-card-text>                                        
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1"  v-if="materiales.telas.visible">
                                <b-card-header header-tag="header" class="p-1" role="tab">
                                    <b-button block v-b-toggle.accordion-2 variant="light" class="selector" @click="des()" >
                                        <div class="row">
                                            <div class="col"><b-img class="" style="float: left; left:auto; right: 30px; height: 40px; width:40px; margin-top: -0.55rem !important;" src=".././../static/images/f2.png" ></b-img></div>
                                            <div class="col-7 text-left">Telas</div>
                                            <div class="col flecha text-right">
                                                <b-img class="abajo" style="left:auto; right: 30px; height: 15px; width:15px; " src=".././../static/images/flecha2.png" ></b-img>
                                                <b-img class="arriba d-none" style="left:auto; right: 30px; height: 15px; width:15px; " src=".././../static/images/flecha.png" ></b-img>
                                            </div>
                                        </div>
                                   </b-button>       
                                </b-card-header>
                                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                        <b-card-text>
                                            <div class="row">
                                                 <div 
                                                    v-for="(item,index) in materiales.telas.items" :key="index"
                                                style="width: 50px; height: 50px; flex: none;" class="col-4">
                                                    <a href="#" v-on:click.stop.prevent="addvariante(item)" @mouseenter="mostrar(item)" @mouseleave="ocultar" > <b-card  style="width: 50px; height: 35px;" :id="'pop'+item.id" :img-src="$url.img(item.imagen)" img-alt="Image" overlay></b-card></a>
                
                                                </div>
                                            </div>
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1"  v-if="materiales.dimensiones.visible">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                 <b-button block v-b-toggle.accordion-3 variant="light" class="selector" @click="des()" >

                                        <div class="row">
                                            <div class="col"><b-img class="" style="float: left; left:auto; right: 30px; height: 40px; width:40px; margin-top: -0.55rem !important;" src=".././../static/images/f3.png" ></b-img></div>
                                            <div class="col-7 text-left">Dimensiones</div>
                                            <div class="col flecha text-right">
                                                <b-img class="abajo" style="left:auto; right: 30px; height: 15px; width:15px; " src=".././../static/images/flecha2.png" ></b-img>
                                                <b-img class="arriba d-none" style="left:auto; right: 30px; height: 15px; width:15px; " src=".././../static/images/flecha.png" ></b-img>
                                            </div>
                                        </div>
                                   </b-button> 
                             </b-card-header>
                            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                <b-card-text>   
                                    <div class="row">
                                                 <div 
                                                    v-for="(item,index) in materiales.dimensiones.items" :key="index"
                                                    class="col-4 p-1" style="flex:none"
                                                     >
                                                     <div class="dimesionbox text-center pt-1">
                                                         <a href="#" v-on:click.stop.prevent="addvariante(item)">
                                                        {{item.nombre}}
                                                    </a>
                                                     </div>
                                                    
                                              
                                                </div>
                                            </div>
                                </b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>
                        </div>
                    </div>
                    <!-- <div class="form-group product__option">
                        <div class="product__option-label">
                            Tamaño
                        </div>
                        <div class="input-radio-label">
                            <div class="input-radio-label__list">
                                
                                <label >
                                    <input type="radio" name="material">
                                    <span>xs</span>
                                </label>
                                <label >
                                    <input type="radio" name="material">
                                    <span>s</span>
                                </label>
                                <label >
                                    <input type="radio" name="material">
                                    <span>m</span>
                                </label>
                                <label  >
                                    <input type="radio" name="material">
                                    <span>x</span>
                                </label>
                                <label>
                                    <input type="radio" name="material" disabled>
                                    <span>xl</span>
                                </label>
                            </div>
                        </div>
                    </div> -->

                    <div class="form-group product__option">
                        <!--suppress XmlInvalidId -->
                        <!-- <label for="product-quantity" class="product__option-label">Quantity</label> -->
                        <div class="product__actions">
                            <div class="product__actions-item">
                                <InputNumber
                                    id="product-quantity"
                                    v-model="quantity"
                                    aria-label="Quantity"
                                    class="product__quantity"
                                    size="lg"
                                    :min="1"
                                     @input="handleChangeQuantity( $event)"
                                />
                            </div>
                            <div class="product__actions-item product__actions-item--addtocart col-12" style="">
                                <AsyncAction v-slot:default="{ run, isLoading }" :action="addToCart">
                                    <button
                                        type="button"
                                        :class="[
                                            'btn btn-primary btn-block',
                                            {'btn-loading': isLoading}
                                        ]"
                                        :disabled="!quantity"
                                        @click="run"
                                        style="height:45px;border-radius: 25px;"
                                    >
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <template v-if="product.compareAtPrice">
                                                <span >
                                                    {{ $price(valor) }}
                                                </span>
                                       
                                             </template>
                                            <template v-if="!product.compareAtPrice">
                                                {{ $price(valor) }}
                                            </template>
                                        </div>
                                        <div class="col-8 text-center">
                                              Añade al carrito
                                        </div>
                                    </div>
                                     
                                       
                                    </button>
                                </AsyncAction>
                                
                            </div>
                            <div class="col-12 mt-1 mb-1 ">
                                <button class="btn btn-block btn-2"  @click.prevent="cobertura">
                                     Revisa nuestra cobertura                                    
                                </button>
                                <div class="list-group collapse listacover" id="item-1">
                                    <ul class="list-group collapsed" >
                                        <li class="list-group-item">
                                            <a href="#" @click.prevent="nested">Ciudad de México</a> 
                                            <ul class="list-group collapse">
                                                <li class="list-group-item"> Álvaro Obregón</li>
                                                <li class="list-group-item">Cuauhtémoc</li>
                                                <li class="list-group-item"> Benito Juárez</li>
                                                <li class="list-group-item">Miguel Hidalgo</li>
                                                <li class="list-group-item">Venustiano Carranza</li>
                                                <li class="list-group-item">Tlalpan</li>
                                                <li class="list-group-item">Tlahuac</li>
                                            </ul>
                                        </li>
                                        <li class="list-group-item">Guadalajara</li>
                                        <li class="list-group-item">
                                            <a href="#" @click.prevent="nested">Monterrey área metropolitana</a> 
                                            <ul class="list-group collapse">
                                                <li class="list-group-item">San Pedro</li>
                                                <li class="list-group-item">San Nicolas</li>
                                                <li class="list-group-item">Santa Catarina</li>
                                                <li class="list-group-item">Apodaca</li>
                                                <li class="list-group-item">Escobedo</li>
                                            </ul>
                                        </li>
                                        <li class="list-group-item">Saltillo</li>
                                        <li class="list-group-item">Puebla</li>
                                        <li class="list-group-item">Morelia</li>
                                        <li class="list-group-item">Leon, Guanajuato</li>
                                        <li class="list-group-item">Aguascaliente</li>
                                        <li class="list-group-item">Veracrúz</li>
                                        <li class="list-group-item">Queretaro</li>
                                        <li class="list-group-item">Puerto Vallarta</li>
                                        <li class="list-group-item">Mazatlan</li>
                                        <li class="list-group-item">Toluca</li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div class="product__actions-item product__actions-item--wishlist ">
                                <AsyncAction v-slot:default="{ run, isLoading }" :action="() => $store.dispatch('wishlist/add', { product })">
                                    <button
                                        type="button"
                                        data-toggle="tooltip"
                                        title="Wishlist"
                                        :class="[
                                            'btn btn-secondary btn-svg-icon btn-lg',
                                            {'btn-loading': isLoading}
                                        ]"
                                        @click="run"
                                    >
                                        <Wishlist16Svg />
                                    </button>
                                </AsyncAction>
                            </div>
                            <div class="product__actions-item product__actions-item--compare ">
                                <AsyncAction v-slot:default="{ run, isLoading }" :action="() => $store.dispatch('compare/add', { product })">
                                    <button
                                        type="button"
                                        data-toggle="tooltip"
                                        title="Compare"
                                        :class="[
                                            'btn btn-secondary btn-svg-icon btn-lg',
                                            {'btn-loading': isLoading}
                                        ]"
                                        @click="run"
                                    >
                                        <Compare16Svg />
                                    </button>
                                </AsyncAction>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
<!-- 
            <div class="product__footer">
                <div class="product__tags tags">
                    <div class="tags__list">
                        <AppLink to="/">
                            Mounts
                        </AppLink>
                        <AppLink to="/">
                            Electrodes
                        </AppLink>
                        <AppLink to="/">
                            Chainsaws
                        </AppLink>
                    </div>
                </div>

                <div class="product__share-links share-links">
                    <ul class="share-links__list">
                        <li class="share-links__item share-links__item--type--like">
                            <AppLink to="/">
                                Like
                            </AppLink>
                        </li>
                        <li class="share-links__item share-links__item--type--tweet">
                            <AppLink to="/">
                                Tweet
                            </AppLink>
                        </li>
                        <li class="share-links__item share-links__item--type--pin">
                            <AppLink to="/">
                                Pin It
                            </AppLink>
                        </li>
                        <li class="share-links__item share-links__item--type--counter">
                            <AppLink to="/">
                                4K
                            </AppLink>
                        </li>
                    </ul>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
import { IProduct , IMateriales} from '~/interfaces/product'
import Rating from '~/components/shared/rating.vue'
import ProductGallery from '~/components/shared/product-gallery.vue'
import AppLink from '~/components/shared/app-link.vue'
import AsyncAction from '~/components/shared/async-action.vue'
import InputNumber from '~/components/shared/input-number.vue'
import Wishlist16Svg from '~/svg/wishlist-16.svg'
import Compare16Svg from '~/svg/compare-16.svg'
import ProductTabs from '~/components/shop/product-tabs.vue'

export type ProductLayout = 'standard' | 'sidebar' | 'columnar' | 'quickview';



@Component({
    components: { Rating, AppLink, ProductGallery, AsyncAction, Wishlist16Svg, Compare16Svg, InputNumber }
})
export default class Product extends Vue {
    data() {
      return {
        placements: [
          'left', ],
        }
    }
    private materiales: IMateriales={
           telas:{
               visible:false,
               items:[]
           },
           maderas:{
               visible:false,
               items:[]
           }  ,
           dimensiones:{
               visible:false,
               items:[]
           } 
    }
   
    
    @Prop({ type: String, required: true }) readonly layout!: ProductLayout
    @Prop({ type: Object, required: true }) product!: IProduct

    private valor:number=this.product.price;

    quantity: number  = 1

    addToCart (): Promise<void> {
        if (typeof this.quantity === 'string' || this.quantity < 1) {
            return Promise.resolve()
        }

        return this.$store.dispatch('cart/add', { product: this.product, quantity: this.quantity })
    }
    public existe():void {
        //alert("holas");
        //alert(JSON.stringify(this.product))
        let mat=this.product.materiales;
        for (let i = 0; i < mat.length; i++) 
          {
              const e=mat[i];
            if(e.tipo==="Madera"){
               
               this.materiales.maderas.items.push(e);
               this.materiales.maderas.visible=true;
               // console.log("si hay madera")
            }else if(e.tipo==="Telas"){
                this.materiales.telas.items.push(e);
                this.materiales.telas.visible=true;
               // console.log("si hay telas")
            }else if(e.tipo==="Dimensiones"){
                this.materiales.dimensiones.items.push(e);
                this.materiales.dimensiones.visible=true;
                //console.log("si hay dimensiones")
            }
            
        }
    }
    created(){
       this.existe();
    }
    
    handleChangeQuantity ( quantity: number) {
       // alert(quantity);
       this.valor=this.product.price*quantity;
        
    }
   addvariante(item:any){
      
    
    const original=this.product.variaciones.original.precio;
    const variantes=this.product.variaciones;
    const compare=this.product.variaciones.original.compareAtPrice;
    const mix=this.product.mix;
    // if(item.variantes!=""|| null){
    //       this.product.images=item.variantes;
    // }else{
    //     this.product.images=this.product.variaciones.original.images;
    // }
    let adiciones=0;
    let adiciones2=0;
  
    if(item.tipo=="Madera"){
        variantes.madera=item;
    }else if(item.tipo=="Telas"){   
        variantes.telas=item;
    }else if(item.tipo=="Dimensiones"){
        variantes.dimensiones=item;

        //const par=event?.target as HTMLLinkElement;
        //console.log(par.parentElement?.parentElement?.parentElement);
        const dives=document.getElementsByClassName("dimesionbox");
        for (let i = 0; i < dives.length; i++) {
            //console.log((<HTMLElement>dives[i].firstElementChild).innerText)
            let txt=(<HTMLElement>dives[i].firstElementChild).innerText;
            // alert(txt+" "+item.nombre )
            if(txt.replace(/\s/g, '')==item.nombre.replace(/\s/g, '')){
                 //alert("este"+txt);
                if(!dives[i].classList.contains("active")){
                    dives[i].classList.add("active")
                }
            }else{
               // alert(txt+" "+item.nombre )
                if(dives[i].classList.contains("active")){
                    dives[i].classList.remove("active")
                }
            }
        }
    }
    
    for (let i = 0; i < mix.length; i++) {
        const e = mix[i];
        //alert(e.madera+e.tela+ variantes.madera.nombre+variantes.telas.nombre)
        if(e.madera== variantes.madera.nombre && e.tela== variantes.telas.nombre){
           if(JSON.stringify(variantes.original.images) != JSON.stringify(e.imagenes)){
               //alert(variantes.original.images+e.imagenes)
               this.product.images = e.imagenes;
           }else{
               this.product.images = variantes.original.images;
           }
        }
        
    }
   // alert(this.product.variaciones.length);
    
    if(variantes.madera.length!=0){
        adiciones+=original*(variantes.madera.porcentaje/100)
        if(compare!=null){
            adiciones2+=compare*(variantes.madera.porcentaje/100)
        }    
    }
    if(variantes.telas.length!=0){
        adiciones+=original*(variantes.telas.porcentaje/100)   
        if(compare!=null){
            adiciones2+=compare*(variantes.telas.porcentaje/100)
        }   
    }
    if(variantes.dimensiones.length!=0){
        adiciones+=original*(variantes.dimensiones.porcentaje/100)   
       if(compare!=null){
            adiciones2+=compare*(variantes.dimensiones.porcentaje/100)
        }   
    }
    //alert(compare);
    //console.log(variantes);
   // console.log(this.product.variaciones);

    this.product.price=original+adiciones;
    this.product.compareAtPrice=compare+adiciones2;
    this.valor=(original+adiciones) * this.quantity ;   

   }
   cobertura():void{
       const el=document.getElementById("item-1") as HTMLElement;
      // alert(el.classList.);
      el.classList.toggle("collapse")
   } 
    nested():void{
       const a=  event?.currentTarget as HTMLElement;
       a.parentElement?.children[1].classList.toggle("collapse");
   }   
   des(){
    //    alert    ("hola")
    //console.log(event.target.innerHTML);
    const a=  event?.currentTarget as HTMLElement;
    //console.log(a);
    const selects=document.getElementsByClassName("selector");
    for (let i = 0; i < selects.length; i++) {
        const element = selects[i];
        if(a!=element){
            const d=element.attributes[3].value;
            const el=document.getElementById(d) as HTMLElement;
            //console.log(el.classList);
            
           // console.log(d);
                const x=element.children[0].children[2].children[0];
                const x1=element.children[0].children[2].children[1];
            if(d=='true'){
                x.className=x.classList[0];
                x1.className=x1.classList[0] + " d-none";
                
            }else{
                x.className=x.classList[0];
               x1.className=x1.classList[0] + " d-none";            
            }
        }
        
    }
  //  console.log(selects);   
    const b=a.children[0].children[2].children[0];//.children[2].children[0].classList.length;
    const b1=b.classList.length;
    const c=a.children[0].children[2].children[1]//.children[2].children[1].classList.length;
    const c1=c.classList.length;
    //console.log(b1);
    //console.log(c1);
    if(b1 > 1){  
        //alert("hola")
        b.className=b.classList[0];
        c.className=b.classList[0] + " d-none";
    }else if(c1 > 1){
        c.className=c.classList[0];
        b.className=c.classList[0] + " d-none";
    }
        
    
    
   }
   mostrar(item:any){
       //alert(item.imagen);
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if(width>1025){
             let b = document.getElementById("divpreview") as HTMLDivElement;
       b.style.display="block";
       let src= this.$url.img(item.imagen)
       let a = (document.getElementById("preview") as HTMLImageElement);
       let tit=document.getElementById("preview_tit");
       if(tit!=null){
           tit.innerHTML=item.nombre;
       }
       let text=document.getElementById("preview_text");
       if(text!=null){
        text.innerHTML=item.des;
       }
       
       a.src=src;
        }
      
       //console.log(a);
       
   }
   ocultar(){
       
           let a = document.getElementById("divpreview") as HTMLDivElement;
           a.style.display="none";
      // setTimeout(() => {}, 100);        
   }
}

</script>

<style>

    .listacover{
        position: absolute;
        z-index: 1060;
        left: 30%;
        top: 50px;
        transform: translateX(-20%);
    }
    .dimesionbox {
        display: table-cell; font-size:14px; background-color:#f5f5f5; border-width: thin;border-style: solid; border-color: #c7c7c7;
        color:black;
        border-radius: 5px; 
        height: 80px;
        vertical-align: middle;
    }
    .dimesionbox a:link {
         color: rgb(0, 0, 0);
     }
    .dimesionbox :hover{
         flex: none;
        color:rgb(163, 163, 163); 
    }
    .dimesionbox.active{
         flex: none; font-size:14px; background-color:#000000; border-width: thin;border-style: solid; border-color: #ffd000;
       
    } .dimesionbox.active a:link{
        color: #ffd000;
    }
@media (min-width: 320px) and (max-width: 481px) {
    .card_img{
        width: 100px;
        height:auto;
    }
    .popover{
        max-width: 110px;
    }
    .card_tit{
        font-size: 12px;
    }
     .card_text{
        font-size: 11px;
    }.poper{
        display: none;
    }
    .product__sidebar{
        position: relative;
    }
    
}
@media (min-width: 482px) and (max-width: 1024px) {
    .card_img{
        width: 120px;
        height:auto;
    }
    .card_tit{
        font-size: 15px;
    }
    .popover{
        max-width: 1230px;
    }
    .product__gallery {
        width:80%;
         margin:auto;
    }
}
@media (min-width: 1025px)  {
    .card_img{
        width: 150px;
        height:auto;
    }
    .card_tit{
        font-size: 18px;
    }
    .popover{
        max-width: 200px;
    }
    .product__gallery {
        width:80%;
        margin:auto;
       
    }.product-gallery__featured .swiper-container{
         height: 400px;
    }
    .product-gallery__carousel{
         height: 150px
    }
    .product-gallery__carousel .swiper-container{
         height: 150px;
    }
   
    div.product-image--location--gallery a.product-image__body .product-image__img{
        height: 400px;
    }
    .previa{
        position: absolute;
        background-color: rgb(250, 250, 250);
        width: 180px;
        height: auto;
        z-index: 1060;
        border-radius: 3%;
        left:-180px;
        display: none;
        border: 2px solid rgb(51, 51, 51);
      
    }
    .previa:after{ /*arrow added to uparrowdiv DIV*/
    content:'';
    display:block;
    position:absolute;
    top:100px; /*should be set to -border-width x 2 */
    left:100%;
    width:0;
    height:0;
    border-color: transparent transparent transparent rgb(51, 51, 51) ; /*border color should be same as div div background color*/
    border-style: solid;
    border-width: 10px;
    }
    .product__sidebar{
        position: relative;
    }
    .product-gallery {
    height: 600px;
    }
}

</style>