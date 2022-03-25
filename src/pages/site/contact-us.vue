<template>
    <div>
        <BlockMap />

        <PageHeader
            title="Contacto"
            :breadcrumb="[
                { title: 'Home', url: '' },
                { title: 'Contact Us', url: '' },
            ]"
        />

        <div class="block">
            <div class="container">
                <div class="card mb-0">
                    <div class="card-body contact-us">
                        <div class="contact-us__container">
                            <div class="row">
                                <div class="col-12 col-lg-6 pb-4 pb-lg-0">
                                    <h4 class="contact-us__header card-title">
                                       Direccion
                                    </h4>

                                    <div class="contact-us__address">
                                        <p>
                                            {{theme.contacts.address }}
                                            <br>
                                            Email: {{theme.contacts.email}}
                                            <br>
                                            Telefono: {{ theme.contacts.phone }}
                                        </p>

                                        <p>
                                            <strong>Horario de atencion</strong>
                                            <br>
                                            Lunes a viernes: 8am-8pm
                                            <br>
                                            Sabado: 8am-6pm
                                            <br>
                                            Domingo: 10am-4pm
                                        </p>

                                        <!-- <p>
                                            <strong>Commenta</strong>
                                            <br>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Curabitur suscipit suscipit mi, non tempor
                                            nulla finibus eget. Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                        </p> -->
                                    </div>
                                </div>

                                <div class="col-12 col-lg-6">
                                    <h4 class="contact-us__header card-title">
                                        Dejanos un mensaje
                                    </h4>

                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="form-name">Nombre</label>
                                                <input
                                                    id="form-name"
                                                    class="form-control"
                                                    type="text"
                                                    placeholder="Nombre"
                                                >
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="form-email">Correo</label>
                                                <input
                                                    id="form-email"
                                                    class="form-control"
                                                    type="email"
                                                    placeholder="Correo"
                                                >
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="form-subject">Asunto</label>
                                            <input
                                                id="form-subject"
                                                class="form-control"
                                                type="text"
                                                placeholder="Asunto"
                                            >
                                        </div>
                                        <div class="form-group">
                                            <label for="form-message">Mensaje</label>
                                            <textarea id="form-message" class="form-control" :rows="4" />
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Enviar mensaje
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import PageHeader from '~/components/shared/page-header.vue'
import BlockMap from '~/components/blocks/block-map.vue'
import theme from '~/data/theme'
@Component({
    components: { PageHeader, BlockMap },
    head () {
        return {
            title: 'Contacto'
        }
    }
})
export default class SitePageContactUs extends Vue {
     theme = theme
 }

</script>
