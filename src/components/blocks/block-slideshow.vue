<template>
    <!-- .block-slideshow -->
    <div
        :class="[
            'block-slideshow',
            `block-slideshow--layout--${layout}`,
            'block'
        ]"
       
    >
        <div >
            <div class="row">
                <div v-if="layout === 'with-departments'" class="col-lg-3 d-none d-lg-block" />
                <div
                    :class="[
                        'col-12',
                        {'col-lg-9': layout === 'with-departments'}
                    ]"
                >
                    <div class="block-slideshow__body" v-if="show">
                        <Carousel  :options="{
                            autoplay:{
                                  delay: 2000,
                                    pauseOnMouseEnter:true,
                                    disableOnInteraction:false
                            }
                        }">
                            <CarouselSlide v-for="(slide, index) in slides" :key="index">
                                <AppLink class="block-slideshow__slide" :to="slide.url">
                                    <div
                                        class="block-slideshow__slide-image block-slideshow__slide-image--mobile"
                                        :style="{ backgroundImage: getMobileImage(slide) }" style="   background-position: center; background-size:cover"
                                    />
                                    <div
                                        class="block-slideshow__slide-image block-slideshow__slide-image--desktop"
                                        :style="{ backgroundImage: getDesktopImage(slide) }" style="   background-position: center;  background-size:cover"
                                    />
                                    
                                    <!-- <div class="block-slideshow__slide-content">
                                       
                                        <div class="block-slideshow__slide-title" v-html="slide.title" />
                                       
                                        <div class="block-slideshow__slide-text" v-html="slide.text" />
                                        <div class="block-slideshow__slide-button">
                                            <span class="btn btn-primary btn-lg">Comprar ahora </span>
                                        </div>
                                    </div> -->
                                </AppLink>
                            </CarouselSlide>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <!-- .block-slideshow / end -->
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { ILanguage } from '~/interfaces/language'
import departments from '~/services/departments'
import Carousel from '~/components/shared/carousel.vue'
import CarouselSlide from '~/components/shared/carousel-slide.vue'
import AppLink from '~/components/shared/app-link.vue'
import shopApi from  '~/api/shop'
import { Swiper, Pagination } from 'swiper'

type BlockSlideshowLayout = 'full' | 'with-departments';

interface SlideImage {
    ltr: string
    
}

interface Slide {
    title: string
    text: string
    imageClassic: SlideImage
    imageFull: SlideImage
    imageMobile: SlideImage
    url: String
}

@Component({
    components: { CarouselSlide, Carousel, AppLink }
})
export default class BlockSlideshow extends Vue {
    @Prop({ type: String, default: () => 'full' }) readonly layout!: BlockSlideshowLayout
    @Getter('locale/language') language!: ILanguage

    slides: Slide[] = [];
    show:boolean=false;
    get direction () {
        return this.language.direction
    }
  
    // created(){
    //     shopApi.slides().then(res => {
    //     this.slides = res.data;  });
    //     departments.set(this.$el);
    //    // const swip = new Swiper(".swiper-container").update();
    //      //document.getElementsByClassName("")
    //     //console.log(swip)
    // }
     mounted () {
        shopApi.slides().then(res => {
        this.slides = res.data; 
        this.show=true  });
        departments.set(this.$el);
    //      this.$nextTick(function () {
         
    //     //console.log(res.data)
    //   });
      
        //departments.set(this.$el)
        //this.datos();
        
    }

    beforeDestroy () {
        departments.set(null)
    }

    getDesktopImage (slide: Slide): string {
        const url = (this.layout === 'with-departments' ? slide.imageClassic : slide.imageFull)[this.direction]

        return `url(${this.$url.img(url)})`
    }

    getMobileImage (slide: Slide): string {
        return `url(${this.$url.img(slide.imageMobile[this.direction])})`
    }
}

</script>
<style>
    @media (min-width: 320px) and (max-width: 481px) {
        .block-slideshow__slide-image--desktop{
            display: none;
        }
    }
  @media (min-width: 1025px)  {
    .block-slideshow__slide-image--mobile{
      display: none;
    }
  }
</style>