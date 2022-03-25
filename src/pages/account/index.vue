<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types'

@Component({
    middleware ({ store,redirect, $url }: Context) {

         if(!store.state.account.islogged){
            //this.$router.push("/");
            return redirect("/");
        }else{
             return redirect(
            $url.lang($url.accountDashboard())
        )
        }
       
    }
})
export default class Page extends Vue {
  
 }

</script>
