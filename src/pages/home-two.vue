<template>
    <div>
        <BlockSlideshow layout="full" />

        <BlockFeatures layout="boxed" />

        <BlockProductsCarouselContainer
            v-slot:default="{ products, isLoading, tabs, handleTabChange }"
            :tabs="[
                { id: 1, name: 'TODO', categorySlug: undefined },
                { id: 2, name: 'CATEGORIA 1', categorySlug: 'power-tools' },
                { id: 3, name: 'CATEGORIA 2', categorySlug: 'hand-tools' },
                { id: 4, name: 'CATEGORIA 3', categorySlug: 'plumbing' }
            ]"
            :initial-data="featuredProducts"
            :data-source="featuredProductsSource"
        >
            <BlockProductsCarousel
                title="Productos mas vendidos"
                layout="grid-5"
                :rows="2"
                :products="products"
                :loading="isLoading"
                :groups="tabs"
                @groupClick="handleTabChange"
            />
        </BlockProductsCarouselContainer>

        <BlockBanner />

        <BlockProducts
            title="Productos mas vendidos"
            layout="large-last"
            :featured-product="(bestsellers || [])[0]"
            :products="(bestsellers || []).slice(1, 7)"
        />

        <BlockCategories
            title="Categorias populares"
            layout="compact"
            :categories="categories"
        />

        <BlockProductsCarouselContainer
            v-slot:default="{ products, isLoading, tabs, handleTabChange }"
            :tabs="[
                { id: 1, name: 'Todas', categorySlug: undefined },
                { id: 2, name: 'CATEGORIA 1', categorySlug: 'Sub1' },
                { id: 3, name: 'CATEGORIA 2', categorySlug: 'Sub2' },
                { id: 4, name: 'CATEGORIA 3', categorySlug: 'Sub3' }
            ]"
            :initial-data="latestProducts"
            :data-source="latestProductsSource"
        >
            <BlockProductsCarousel
                title="Nuevo"
                layout="grid-5"
                :products="products"
                :loading="isLoading"
                :groups="tabs"
                @groupClick="handleTabChange"
            />
        </BlockProductsCarouselContainer>

        <BlockPosts
            title="Ultimas noticias"
            layout="grid-3"
            :posts="posts"
        />

        <BlockBrands />

        <BlockProductColumns :columns="columns || []" />
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
        context.store.commit('options/setHeaderLayout', 'compact')
        context.store.commit('options/setDropcartType', 'dropdown')

        const featuredProducts = runOnlyOnServer(() => shopApi.getFeaturedProducts({ limit: 12 }), null)
        const bestsellers = runOnlyOnServer(() => shopApi.getPopularProducts({ limit: 7 }), null)
        const latestProducts = runOnlyOnServer(() => shopApi.getLatestProducts({ limit: 8 }), null)
        const columns = runOnlyOnServer(() => loadColumns(), null)

        return {
            featuredProducts: await featuredProducts,
            bestsellers: await bestsellers,
            latestProducts: await latestProducts,
            columns: await columns
        }
    },
    head () {
        return {
            title: 'Home Page Two'
        }
    }
})
export default class Page extends Vue {
    shopApi = shopApi

    featuredProducts: IProduct[] | null = []

    bestsellers: IProduct[] | null = []

    categories: ICategory[] = dataShopBlockCategories

    latestProducts: IProduct[] | null = []

    posts: IPost[] = dataBlogPosts

    columns: BlockProductColumnsItem[] | null = []

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
        return shopApi.getFeaturedProducts({ limit: 12, category: tab.categorySlug })
    }

    latestProductsSource (tab: {categorySlug: string}): Promise<IProduct[]> {
        return shopApi.getLatestProducts({ limit: 8, category: tab.categorySlug })
    }
}

</script>
