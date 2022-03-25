<template>
    <div
        :class="[
            'product-tabs',
            {'product-tabs--layout--sidebar': withSidebar}
        ]"
    >
        <div class="product-tabs__list">
            <div class="product-tabs__list-body">
                <div class="product-tabs__list-container container">
                    <button
                        v-for="tab in tabs"
                        :key="tab.key"
                        :class="[
                            'product-tabs__item',
                            {'product-tabs__item--active': current === tab.key}
                        ]"
                        type="button"
                        @click="current = tab.key"
                    >
                        {{ tab.title }}
                    </button>
                </div>
            </div>
        </div>

        <div class="product-tabs__content">
            <div
                v-for="tab in tabs"
                :key="tab.key"
                :class="[
                    'product-tabs__pane',
                    {'product-tabs__pane--active': current === tab.key}
                ]"
            >
                <component :is="tab.content" :props="tab.data" />
            </div>
        </div>

       
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
import ProductTabDescription from '~/components/shop/product-tab-description.vue'
import ProductTabSpecification from '~/components/shop/product-tab-specification.vue'
import ProductTabReviews from '~/components/shop/product-tab-reviews.vue'
import { IProduct } from '~/interfaces/product'

@Component
export default class ProductTabs extends Vue {
    @Prop({ type: Boolean, default: () => false }) readonly withSidebar!: boolean
    @Prop({ type: Object, required: true }) product!: IProduct

    current = 'Descripción'

    tabs = [
        { key: 'Descripción', title: 'Descripción', content: ProductTabDescription, data:this.product.des },
        { key: 'Especificaciones', title: 'Especificaciones', content: ProductTabSpecification, data:this.product.especs },
        { key: 'Reseñas', title: 'Reseñas', content: ProductTabReviews, data:this.product}
    ]
}

</script>
