import Vue from 'vue'
import { Plugin } from '@nuxt/types'

function price (this: Vue, value: number): string {
    const symbol = this.$store.state.currency.current.symbol
    const options2 = { style: 'currency', currency: 'USD' };
    const numberFormat2 = new Intl.NumberFormat('en-US', options2);
    return numberFormat2.format(value)
}

declare module 'vue/types/vue' {
    interface Vue {
        $price: typeof price
    }
}

const plugin: Plugin = (_context, inject) => {
    inject('price', price)
}

export default plugin
