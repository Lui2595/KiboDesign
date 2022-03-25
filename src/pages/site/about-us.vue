<template>
    <div class="block about-us">
        <div class="about-us__image" :style="imageStyle" />
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xl-10">
                    <div class="about-us__body">
                        <h1 class="about-us__title">
                            Sobre nosotros
                        </h1>
                        <div class="about-us__text typography">
                            <p>
                                Somos una empresa mexicana dedicada desde nuestra fundación al diseño y fabricación de muebles finos de madera.

                            </p>
                            <p>
                               Nuestro estilo ha evolucionado a través de los años, el cual se ve reflejado en nuestra actual producción de exclusivas e innovadoras líneas dedicadas a soluciones cómodas, versátiles y funcionales que dan a nuestros productos una marca distintiva de alta calidad.

                            </p>
                        </div>
                        <!-- <div class="about-us__team">
                            <h2 class="about-us__team-title">
                                Conoce a nuestro equipo
                            </h2>
                            <div class="about-us__team-subtitle text-muted">
                                Quieres trabajar con nosotros?
                                <br>
                                <AppLink :to="$url.contacts()">
                                    Contactanos
                                </AppLink>
                                
                            </div>
                            <div class="about-us__teammates teammates">
                                <Carousel :options="carouselOptions">
                                    <CarouselSlide v-for="(teammate, index) in teammates" :key="index">
                                        <div class="teammates__item teammate">
                                            <div class="teammate__avatar">
                                                
                                                <img :src="$url.img(teammate.avatar)" alt="">
                                            </div>
                                            <div class="teammate__name">
                                                {{ teammate.name }}
                                            </div>
                                            <div class="teammate__position text-muted">
                                                {{ teammate.position }}
                                            </div>
                                        </div>
                                    </CarouselSlide>
                                </Carousel>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { SwiperOptions } from 'swiper/types/swiper-options'
import AppLink from '~/components/shared/app-link.vue'
import Carousel from '~/components/shared/carousel.vue'
import CarouselSlide from '~/components/shared/carousel-slide.vue'

@Component({
    components: { AppLink, Carousel, CarouselSlide },
    head () {
        return {
            title: 'Sobre Nosotros'
        }
    }
})
export default class SitePageAboutUs extends Vue {
    imageStyle = {
        backgroundImage: `url("${this.$url.img('/images/aboutus.jpg')}")`
    }

    teammates = [
        {
            avatar: '/images/teammates/teammate-1.jpg',
            name: 'Michael Russo',
            position: 'Chief Executive Officer'
        },
        {
            avatar: '/images/teammates/teammate-2.jpg',
            name: 'Katherine Miller',
            position: 'Marketing Officer'
        },
        {
            avatar: '/images/teammates/teammate-3.jpg',
            name: 'Anthony Harris',
            position: 'Finance Director'
        }
    ]

    carouselOptions: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
            768: { slidesPerView: 3, spaceBetween: 32 },
            380: { slidesPerView: 2, spaceBetween: 24 }
        }
    }
}

</script>
