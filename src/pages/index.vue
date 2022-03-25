<template>
    <div>
        <BlockSlideshow layout="full" />
<br>
        <BlockFeatures layout="boxed" />

        <BlockProductsCarouselContainer
            v-slot:default="{ products, isLoading, tabs, handleTabChange }"
            :tabs="categorias"
            :initial-data="featuredProducts"
            :data-source="featuredProductsSource"
        >
            <BlockProductsCarousel
                title="Featured Products"
                layout="grid-4"
                :products="products"
                :loading="isLoading"
                :groups="tabs"
                @groupClick="handleTabChange"
            />
        </BlockProductsCarouselContainer>

        <BlockBanner :props="banner" :show="showbanner" />

       
        <!-- <BlockPosts
            title="Latest News"
            layout="list"
            :posts="posts"
        /> -->

        <!-- <BlockBrands /> -->

        <!-- <BlockProductColumns :columns="columns" /> -->
         <!-- <pre>
            {{categorias}}
        </pre> -->
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types'
import { runOnlyOnServer } from '~/services/helpers'
import { IProduct } from '~/interfaces/product'
import { ICategory } from '~/interfaces/category'
import { IPost } from '~/interfaces/post'
import { BlockProductColumnsItem } from '~/interfaces/components'
import shopApi from '~/api/shop'
import BlockSlideshow from '~/components/blocks/block-slideshow.vue'
import BlockFeatures from '~/components/blocks/block-features.vue'
import BlockProductsCarousel from '~/components/blocks/block-products-carousel.vue'
import BlockProductsCarouselContainer from '~/components/blocks/block-products-carousel-container.vue'
import BlockBanner from '~/components/blocks/block-banner.vue'
import BlockProducts from '~/components/blocks/block-products.vue'
import BlockCategories from '~/components/blocks/block-categories.vue'
import BlockPosts from '~/components/blocks/block-posts.vue'
import BlockBrands from '~/components/blocks/block-brands.vue'
import BlockProductColumns from '~/components/blocks/block-product-columns.vue'
import dataShopBlockCategories from '~/data/shopBlockCategories'
import dataBlogPosts from '~/data/blogPosts'

async function loadColumns () {
    const topRated = shopApi.getTopRatedProducts({ limit: 3 })
    const specialOffers = shopApi.getDiscountedProducts({ limit: 3 })
    const bestsellers = shopApi.getPopularProducts({ limit: 3 })

    return [
        { title: 'Top Rated Products', products: await topRated },
        { title: 'Special Offers', products: await specialOffers },
        { title: 'Bestsellers', products: await bestsellers }
    ]
}

@Component({
    components: {
        BlockSlideshow,
        BlockFeatures,
        BlockProductsCarousel,
        BlockProductsCarouselContainer,
        BlockBanner,
        BlockProducts,
        BlockCategories,
        BlockPosts,
        BlockBrands,
        BlockProductColumns
    },
    async asyncData (context: Context) {
        context.store.commit('options/setHeaderLayout', 'default')
        context.store.commit('options/setDropcartType', 'dropdown')
        const categorias=shopApi.categoriasrecientes();
        const featuredProducts = shopApi.getFeaturedProducts({ limit: 8 })
        const bestsellers =  shopApi.getPopularProducts({ limit: 7 })
        const latestProducts =shopApi.getLatestProducts({ limit: 8 })
        const columns = loadColumns()
        return {
            categorias: await categorias,
            featuredProducts: await featuredProducts,
            bestsellers: await bestsellers,
            latestProducts: await latestProducts,
            columns: await columns
        }
    },
    head () {
        return {
            title: 'Kibo Muebles',
            meta:[
                {
                    hid: 'description',
                    name: 'description',
                    content: 'En Kibo encontrarás un amplio catálogo de muebles para tu hogar a un precio increíble. Muebles altamente personalizables  '
                },
                {
                    hid: 'robots',
                    name: 'robots',
                    content: 'index, follow'
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'muebles,salas,comedores,sillas,recamaras,Kibo Muebles'
                }
            ]
        }
    }
})
export default class HomePageOne extends Vue {
    shopApi = shopApi

    featuredProducts: IProduct[] | null = []

    bestsellers: IProduct[] | null = []

    categories: ICategory[] = dataShopBlockCategories

    latestProducts: IProduct[] | null = []

    posts: IPost[] = dataBlogPosts

    columns: BlockProductColumnsItem[] | null = []

    showbanner:boolean=false;

    banner:Array<Object> = [{  
                titulo1: "Hundreds",
                titulo2: "Hand Tools",
                des: "Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws",
                img: "/images/banners/banner-1.jpg",
                imgmobile: "/images/banners/banner-1-mobile.jpg",
                url: "/shop/catalog"
         }];

    beforeMount(){
        //alert("hola")
          shopApi.banner().then((d)=>{
            this.banner=d.data
            this.showbanner=true
        })
    }
    mounted () {
        if (this.bestsellers === null) {
            shopApi.getPopularProducts({ limit: 7 }).then((products) => {
                this.bestsellers = products
            })
        }
        if (this.columns === null) {
            loadColumns().then((columns) => {
                this.columns = columns
            })
        }
      
    }

    featuredProductsSource (tab: {categorySlug: string}): Promise<IProduct[]> {
        return shopApi.getFeaturedProducts({ limit: 8, category: tab.categorySlug })
    }

    latestProductsSource (tab: {categorySlug: string}): Promise<IProduct[]> {
        return shopApi.getLatestProducts({ limit: 8, category: tab.categorySlug })
    }
}

</script>
