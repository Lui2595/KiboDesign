<template>
    <div class="reviews-view">
        <div class="reviews-view__list">
            <h3 class="reviews-view__header">
                Reseñas
            </h3>

            <div class="reviews-list">
                <ol class="reviews-list__content">
                    <li v-for="(review, index) in props.comentarios" :key="index" class="reviews-list__item">
                        <div class="review">
                            <!-- <div class="review__avatar">
                              
                                <img :src="$url.img(review.avatar)" alt="">
                            </div> -->
                            <div class=" review__content">
                                <div class=" review__author">
                                    {{ review.author }}
                                </div>
                                <div class=" review__rating">
                                    <Rating :value="review.rating" />
                                </div>
                                <div class=" review__text">
                                    {{ review.text }}
                                </div>
                                <div class=" review__date">
                                    {{ review.date }}
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
                <!-- <div class="reviews-list__pagination">
                    <Pagination :current="1" :siblings="2" :total="10" />
                </div> -->
            </div>
        </div>

        <form class="reviews-view__form" v-if="$store.state.account.islogged" @submit.prevent="resena">
            <h3 class="reviews-view__header">
                Escribir una reseña
            </h3>
            <div class="row">
                <div class="col-12 col-lg-9 col-xl-8">
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="review-stars">Estrellas</label>
                            <select id="review-stars" class="form-control" v-model="sel">
                                <option value="5" >5 estrellas</option>
                                <option value="4">4 estrellas</option>
                                <option value="3">3 estrellas</option>
                                <option value="2">2 estrellas</option>
                                <option value="1">1 estrella</option>
                            </select>
                        </div>
                        <!-- <div class="form-group col-md-4">
                            <label for="review-author">Nombre</label>
                            <input
                                id="review-author"
                                class="form-control"
                                type="text"
                                placeholder="Nombre"
                            >
                        </div>
                        <div class="form-group col-md-4">
                            <label for="review-email">Correo</label>
                            <input
                                id="review-email"
                                class="form-control"
                                type="text"
                                placeholder="Correo"
                            >
                        </div> -->
                    </div>
                    <div class="form-group">
                        <label for="review-text" >Review</label>
                        <textarea
                            id="review-text"
                            class="form-control"
                            :rows="6"
                            required
                            v-model="text"
                        />
                    </div>
                    <div class="form-group mb-0">
                        <button type="submit" class="btn btn-primary btn-lg">
                            Enviar Reseña
                        </button>
                    </div>
                </div>
            </div>
        </form>
        <h5 v-else class="reviews-view__header mt-3">
               Inicia sesión para dejar tu reseña
        </h5>
    
      
    </div>
</template>

<script lang="ts">

import { Vue, Component,Prop } from 'vue-property-decorator'
import { IReview } from '~/interfaces/review'
import Pagination from '~/components/shared/pagination.vue'
import Rating from '~/components/shared/rating.vue'
import dataShopProductReviews from '~/data/shopProductReviews'
import shopApi from '~/api/shop'

@Component({
    components: { Pagination, Rating }
})

export default class ProductTabReviews extends Vue {
    //reviews: IReview[] = dataShopProductReviews
    @Prop({ type: Object, required: true }) props!: any
    private text: string = ""
    private sel: number = 5
    public resena():void{
        shopApi.postreview({
            "value":this.sel,
            "comentario":this.text,
            "id_pro":this.props.id,
            "id_user":this.$store.state.account.user.id
        }).then((response)=>{
            if(response.status==200){
                 Vue.notify({
                type: 'success',
                text: `Comentario guardado`
            })
            const date= new Date().toLocaleString('en-US');
            this.props.comentarios.push({
                    text: this.text,
                    author: this.$store.state.account.user.userName,
                    rating: this.sel,
                    date: date
            })
                this.sel=5;
                this.text="";
            }
        })
    }
    
}

</script>
