import { MutationTree } from 'vuex'
import { ICurrency } from '~/interfaces/currency'

export interface CurrencyState {
    current: ICurrency;
}

function getDefaultState (): CurrencyState {
    return {
        current: {
            code: 'MXN',
            symbol: '$',
            name: 'Peso Mexicano'
        }
    }
}

export const state = getDefaultState

export const mutations: MutationTree<CurrencyState> = {
    set (state, currency) {
        state.current = currency
    }
}
