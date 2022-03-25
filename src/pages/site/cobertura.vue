<template>
    <div>
        <PageHeader
            :breadcrumb="[
                { title: 'Home', url: '/' },
                { title: 'Cobertura', url: '' },
            ]"
        />

        <div class="block">
            <div class="container">
                <div class="document">
                    <div class="document__header">
                        <h1 class="document__title">
                            Cobertura
                        </h1>
                        <div class="document__subtitle">
                        Actualizdo 2022
                           
                        </div>
                    </div>
                    <div class="document__content typography">
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
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import PageHeader from '~/components/shared/page-header.vue'
import AppLink from '~/components/shared/app-link.vue'

@Component({
    components: { PageHeader, AppLink },
    head () {
        return {
            title: 'Terminos y Condiciones'
        }
    }
})
export default class SitePageTerms extends Vue { 
    nested():void{
       const a=  event?.currentTarget as HTMLElement;
       a.parentElement?.children[1].classList.toggle("collapse");
   }
}

</script>
