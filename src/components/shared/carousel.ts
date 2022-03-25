import { Vue, Component, Prop } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { Swiper, Pagination, Autoplay } from 'swiper'
import { SwiperOptions } from 'swiper/types/swiper-options'
import { IDirection } from '~/interfaces/language'

Swiper.use([Pagination, Autoplay])

@Component
export default class Carousel extends Vue {
    @Prop({ type: Object, default: () => ({}) }) options!: SwiperOptions;
    

    @Getter('locale/direction') direction!: IDirection;

    swiper: Swiper | null = null;


    mounted () {

        this.$nextTick(function () {
            if (!(this.$el instanceof HTMLElement)) {
                return
            }
            this.swiper = new Swiper(this.$el, Object.assign({}, {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                watchOverflow: true
            }, this.options))
        })
    }
 
}
