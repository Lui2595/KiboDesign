<template>
    <div :class="[$attrs.class, 'social-links', `social-links--shape--${shape}`]">
        <ul class="social-links__list">
            <li v-for="item in items" :key="item.type" class="social-links__item">
                <a
                    :class="['social-links__link', `social-links__link--type--${item.type}`]"
                    :href="item.url"
                    target="_blank"
                >
                    <i :class="item.icon" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
import theme from '~/data/theme'

type Shape = 'circle' | 'rounded';

@Component
export default class SocialLinks extends Vue {
    @Prop({ type: String, default: () => 'circle' }) readonly shape!: Shape

    items = [
        //{ type: 'rss', icon: 'fas fa-rss', url: theme.author.profile_url },
       // { type: 'youtube', icon: 'fab fa-youtube', url: theme.author.profile_url },
        { type: 'facebook', icon: 'fab fa-facebook-f', url: "https://www.facebook.com/kibomuebles/" },
        { type: 'WhatsApp', icon: 'fab fa-whatsapp', url: "https://api.whatsapp.com/send?phone=528448082830&text=Hola+v%C3%AD+tu+sitio+web+y+requiro+m%C3%A1s+informaci%C3%B3n" },
        //{ type: 'instagram', icon: 'fab fa-whatsapp', url: theme.author.profile_url }
    ]
}

</script>

