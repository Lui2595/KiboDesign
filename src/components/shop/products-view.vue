<template>
    <div
        :class="[
            'products-view',
            {'products-view--loading': $store.getters['shop/productsListIsLoading']}
        ]"
    >
        <div class="products-view__loader" />

        <div v-if="productsList.data.length === 0" class="products-view__empty">
            <div class="products-view__empty-title">
                No hay items similares
            </div>
            <div class="products-view__empty-subtitle">
                Vuelve a intentarlo
            </div>

            <button
                type="button"
                class="btn btn-primary btn-sm"
                @click="reset()"
            >
                Resetear filtros
            </button>
        </div>

        <div v-if="productsList.data.length !== 0" class="products-view__content">
            <div class="products-view__options">
                <div
                    :class="[
                        'view-options',
                        {
                            'view-options--offcanvas--always': offcanvas === 'always',
                            'view-options--offcanvas--mobile': offcanvas === 'mobile',
                        }
                    ]"
                >
                    <div class="view-options__filters-button">
                        <button type="button" class="filters-button" @click="$emit('openSidebar')">
                            <Filters16Svg class="filters-button__icon" />
                            <span class="filters-button__title">Filters</span>
                            <span v-if="filtersCount" class="filters-button__counter">{{ filtersCount }}</span>
                        </button>
                    </div>
                    <div class="view-options__layout">
                        <div class="layout-switcher">
                            <div class="layout-switcher__list">
                                <button
                                    v-for="viewMode in viewModes"
                                    :key="viewMode.key"
                                    :title="viewMode.title"
                                    :class="[
                                        'layout-switcher__button',
                                        {'layout-switcher__button--active': currentLayout === viewMode.key}
                                    ]"
                                    type="button"
                                    @click="currentLayout = viewMode.key"
                                >
                                    <component :is="viewMode.icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="view-options__legend">
                        Mostrar {{ productsList.meta.from }}—{{ productsList.meta.to }} of {{ productsList.meta.total }} productos
                    </div>
                    <div class="view-options__divider" />
                    <div class="view-options__control">
                        <label for="view-options-sort">Ordenar por</label>
                        <div>
                            <select
                                id="view-options-sort"
                                class="form-control form-control-sm"
                                :value="options.sort || productsList.meta.sort"
                                @change="handleSortChange"
                            >
                                <option value="default">
                                    Default
                                </option>
                                <option value="name_asc">
                                    Nombre(A-Z)
                                </option>
                                <option value="name_desc">
                                    Nombre(Z-A)
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="view-options__control">
                        <label for="view-options-limit">Mostrar</label>
                        <div>
                            <select
                                id="view-options-limit"
                                class="form-control form-control-sm"
                                :value="options.limit || productsList.meta.per_page"
                                @change="handleLimitChange"
                            >
                                <option value="6">
                                    6
                                </option>
                                <option value="12">
                                    12
                                </option>
                                <option value="18">
                                    18
                                </option>
                                <option value="24">
                                    24
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="products-view__list products-list"
                :data-layout="currentLayout !== 'list' ? grid : currentLayout"
                :data-with-features="currentLayout === 'grid-with-features' ? 'true' : 'false'"
                :data-mobile-grid-columns="2"
            >
                <div class="products-list__body">
                    <div v-for="product in productsList.data" :key="product.id" class="products-list__item">
                        <ProductCard :product="product" />
                    </div>
                </div>
            </div>

            <div class="products-view__pagination">
                <Pagination
                    :current="options.page || productsList.meta.current_page"
                    :siblings="2"
                    :total="productsList.meta.last_page"
                    @page-change="handlePageChange"
                />
            </div>
        </div>
        <pre>
              <!-- {{options}}
              {{filters}}
        {{productsList}} -->
        </pre>
    </div>
    
</template>

<script lang="ts">

import { VueConstructor } from 'vue'
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { IProductsList } from '~/interfaces/product'
import { IFilterValues, IListOptions } from '~/interfaces/list'
import Pagination from '~/components/shared/pagination.vue'
import ProductCard from '~/components/shared/product-card.vue'
import Filters16Svg from '~/svg/filters-16.svg'
import LayoutGrid16x16Svg from '~/svg/layout-grid-16x16.svg'
import LayoutGridWithDetails16x16Svg from '~/svg/layout-grid-with-details-16x16.svg'
import LayoutList16x16Svg from '~/svg/layout-list-16x16.svg'

export type ProductsViewLayout = 'grid' | 'grid-with-features' | 'list';
export type ProductsViewGrid = 'grid-3-sidebar' | 'grid-4-full' | 'grid-5-full';
export type ProductsViewOffcanvas = 'always' | 'mobile';

interface ViewMode {
    key: ProductsViewLayout
    title: string
    icon: VueConstructor
}

@Component({
    components: { Pagination, ProductCard, Filters16Svg }
})
export default class ProductsView extends Vue {
    @Prop({ type: String, default: () => 'grid' }) readonly layout!: ProductsViewLayout
    @Prop({ type: String, default: () => 'grid-3-sidebar' }) readonly grid!: ProductsViewGrid
    @Prop({ type: String, default: () => 'mobile' }) readonly offcanvas!: ProductsViewOffcanvas

    @Getter('shop/productsList') productsList!: IProductsList
    @Getter('shop/options') options!: IListOptions
    @Getter('shop/filters') filters!: IFilterValues

    currentLayout: ProductsViewLayout = this.layout

    viewModes: ViewMode[] = [
        { key: 'grid', title: 'Grid', icon: LayoutGrid16x16Svg },
        { key: 'grid-with-features', title: 'Grid With Features', icon: LayoutGridWithDetails16x16Svg },
        { key: 'list', title: 'List', icon: LayoutList16x16Svg }
    ]

    get filtersCount () {
        return Object.keys(this.filters).map(x => this.filters[x]).filter(x => x).length
    }

    handlePageChange (page: number) {
        //alert(JSON.stringify(links))
        //this.productsList.meta.links.length;
        let it=this.productsList.meta.links;
        let val="";
        for (let i = 0; i < it.length; i++) {
            const e = it[i];
            if (e.label==page.toString()){
                val=e.url;
            }
            
        }
        this.$store.dispatch('shop/setOptionValue', {
            option: 'page',
            value: page,
            url:val
        })
    }

    handleSortChange (event: InputEvent) {
        if (!(event.target instanceof HTMLSelectElement)) {
            return
        }

        this.$store.dispatch('shop/setOptionValue', {
            option: 'sort',
            value: event.target.value
        })
    }

    handleLimitChange (event: InputEvent) {
        if (!(event.target instanceof HTMLSelectElement)) {
            return
        }

        this.$store.dispatch('shop/setOptionValue', {
            option: 'limit',
            value: parseFloat(event.target.value)
        })
    }
    reset(){
        this.$router.push("/shop/catalog")
    }
}

</script>
