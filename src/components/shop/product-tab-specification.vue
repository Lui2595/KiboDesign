<template>
    <div class="spec">
        <h3 class="spec__header">
            Especificaciones
        </h3>
        <div v-for="(prop, index) in props" :key="index" class="spec__section">
            <h4 class="spec__section-title">
                {{ prop.name }}
            </h4>
            <div v-for="(attribute, attributeIndex) in prop.attributes" :key="attributeIndex" class="spec__row">
                <div class="spec__name">
                    {{ attribute.titulo }}
                </div>
                <div class="spec__value">
                    {{ attribute.des  }}
                </div>
            </div>
           
        </div>
        <div class="spec__disclaimer">
            
           Especificaciones 
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop  } from 'vue-property-decorator'
import { ISpec } from '~/interfaces/spec'
import dataShopProductSpec from '~/data/shopProductSpec'

@Component
export default class ProductTabSpecification extends Vue {

    @Prop({ type: Array, required: true }) props!: ISpec
   
  // sections: ISpec = dataShopProductSpec
}

</script>
