<template>
    <div class="block-map block">
        <div class="block-map__body">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57642.58098362817!2d-101.02386237385417!3d25.449584354774874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86886d502c95e7ab%3A0x6240dfc016438a8!2sCasa%20Canela!5e0!3m2!1ses-419!2smx!4v1626203050124!5m2!1ses-419!2smx"
            />
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BlockMap extends Vue { }

</script>
