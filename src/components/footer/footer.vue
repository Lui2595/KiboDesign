<template>
    <div class="site-footer" style="background:black; color:white">
        <div class="container">
            <div class="site-footer__widgets">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4">
                        <footer-contacts />
                    </div>
                    <div class="col-6 col-md-3 col-lg-2">
                        <footer-links
                            title="Informacion"
                            :links="[
                                {title: 'Sobre nosotros', url: '/site/about-us'},
                                //{title: 'Informacion de entrega', url: '/'},
                                {title: 'Politicas de privacidad', url: '/site/privacy'},
                                  {title: 'Terminos y Condiciones', url: '/site/terms'},
                                //{title: 'Marcas', url: ''},
                                {title: 'Contactanos', url: '/site/contact-us'},
                                {title: 'Cobertura', url: '/site/cobertura'},
                                //{title: 'Regresar', url: ''},
                                //{title: 'Menus', url: ''}
                            ]"
                        />
                    </div>
                    <div class="col-6 col-md-3 col-lg-2">
                        <footer-links
                            title="Mi cuenta"
                            :links="[
                                {title: 'Perfil', url: '/account/dashboard'},
                                {title: 'Direcciones', url: '/account/addresses'},
                                {title: 'Ubicacion de la tienda', url: '/site/contact-us'},
                                {title: 'Historial de compras', url: '/account/orders'},
                                {title: 'Lista de deseos', url: '/shop/wishlist'},
                                //{title: 'Newsletter', url: ''},
                                //{title: 'Especial', url: ''},
                                
                            ]"
                        />
                    </div>
                    <div class="col-12 col-md-12 col-lg-4">
                        <footer-newsletter />
                    </div>
                </div>
            </div>

            <div class="site-footer__bottom" >
                <div class="site-footer__copyright">
                    <!-- copyright -->
                    
                    Design by <a :href="theme.author.profile_url" target="_blank">{{ theme.author.name }}</a>
                    <!-- copyright / end -->
                </div>
                <div class="site-footer__payments">
                    <img :src="$url.img('/images/payments.png')" alt="" width="375px" class="d-md-none" >
                     <img :src="$url.img('/images/payments2.png')" alt="" height="50px" class="d-none d-md-block" >
                </div>
            </div>
        </div>
        <ToTop />
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import FooterContacts from '~/components/footer/footer-contacts.vue'
import FooterLinks from '~/components/footer/footer-links.vue'
import FooterNewsletter from '~/components/footer/footer-newsletter.vue'
import ToTop from '~/components/footer/to-top.vue'
import theme from '~/data/theme'

@Component({
    components: { ToTop, FooterNewsletter, FooterLinks, FooterContacts }
})
export default class Footer extends Vue {
    theme = theme
}

</script>
