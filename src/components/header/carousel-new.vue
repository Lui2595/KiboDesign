<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      style="text-shadow: 1px 1px 2px #333; height:50px"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide  style=" background:#dd714d" content-tag="div"   >
          Envío gratuito a todas nuestras <AppLink to="/site/cobertura" >coberturas</AppLink> 
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide  style=" background:#ef5f76" content-tag="div"   >
        Visítanos en nuestra nueva tienda en <a href="https://maps.app.goo.gl/9AZHMffCUZW9kNvm7" target="_black">Monterrey</a> 
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide  style=" background:#6d5797" content-tag="div"   >
        Personaliza todos los muebles <AppLink to="shop/products/silla-mesa-comedor-ego" >aquí</AppLink>  
      </b-carousel-slide >

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide  style=" background:#36b1b8" content-tag="div"   >
        Multiples formas de pago y de manera segura a través de <a href="https://conekta.com/" target="_black">Conekta</a>

      </b-carousel-slide>

    </b-carousel>
  </div>
</template>
 <style>
  .carousel-caption{
    bottom: 0px !important;
    padding: 0px !important;
    color:rgb(255, 255, 255) !important;
    position: relative;
    top: 10px;
    left: 0;
    right: 0;
    font-size: 20px;
  }
  .carousel-item{
    height: 50px;
    color: black;
  }
  @media  (min-width: 601px) and (max-width: 991.98px) {
     .carousel-item{
        height: 60px;
        color: black;
      }
      .carousel-caption{
        font-size: 16px;
        top:17px
      }
  }
   @media ( min-width: 0px) and  ( max-width: 600px) {
     .carousel-caption{
        font-size: 14px;
      }
   }
  .carousel-control-next{
    z-index: 10;
  }
  .carousel-control-prev{
    z-index: 10;
  }
 </style>
<script>
import AppLink from '~/components/shared/app-link.vue'


  export default {
    components:{
      AppLink
    },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>