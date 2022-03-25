<template>
    <div class="typography">
        <h3>Descripcion del producto</h3>
        <p v-html="props">
            
        </p>
      
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ProductTabDescription extends Vue { 
    @Prop({ type: String, required: true }) props!: any
}

</script>
