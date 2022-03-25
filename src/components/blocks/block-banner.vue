<template>
    <div class="block block-banner">
        <div class="container"  v-if="show">
            <Carousel  :options="{
                            autoplay:{
                                  delay: 2000,
                                    pauseOnMouseEnter:true,
                                    disableOnInteraction:false
                            }
                        }">
                 <CarouselSlide v-for="(prop, index) in props" :key="index">
                    <AppLink :to="prop.url" class="block-banner__body">
                        <div
                            class="block-banner__image block-banner__image--desktop"
                            :style="{
                                backgroundImage: `url(${$url.img(prop.img)})`
                            }"
                        />
                        <div
                            class="block-banner__image block-banner__image--mobile"
                            :style="{
                                backgroundImage: `url(${$url.img(prop.imgmobile)})`
                            }"
                        />
                        <!-- <div class="block-banner__title">
                        {{ props.titulo1}}
                            <br class="block-banner__mobile-br">
                            {{ props.titulo2}}
                        </div>
                        <div class="block-banner__text">
                            {{ props.des}}
                        </div> -->
                        <!-- <div class="block-banner__button">
                            <span class="btn btn-sm btn-primary">Compra Ahora</span>
                        </div> -->
                    </AppLink>
                </CarouselSlide>
            </Carousel>
            
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
import AppLink from '~/components/shared/app-link.vue'
import Carousel from '~/components/shared/carousel.vue'
import CarouselSlide from '~/components/shared/carousel-slide.vue'

@Component({
    components: {CarouselSlide, Carousel, AppLink }
})
export default class BlockBanner extends Vue {
    @Prop({ type: Array,required: true }) props!:any
     @Prop({ type: Boolean,required: true }) show!:any
    // show:boolean=false;
    // mounted(){
    //     this.show=true;
    // }
 }

</script>
