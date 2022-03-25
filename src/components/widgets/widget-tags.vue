<template>
    <div class="widget-tags widget">
        <h4 class="widget__title">
            Tags Cloud
        </h4>
        <div class="tags tags--lg">
            <div class="tags__list">
                <AppLink v-for="(tag, index) in tags" :key="index" to="/">
                    {{ tag }}
                </AppLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import AppLink from '~/components/shared/app-link.vue'

@Component({
    components: { AppLink }
})
export default class WidgetTags extends Vue {
    tags = [
        'Sofa',
        'Silla',
        'Nuevo',
        'Mesa',
        'Banco',
        'Sillon',
        'Electrodes'
    ]
}

</script>
