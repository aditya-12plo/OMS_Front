<template>
  <div>
    <section>
      <menu-component classMenu="Fulfillment"></menu-component>
      
        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">

          <!-- content -->
          <section class="people">
              <section class="w3l-team-block">

                  <div class="card card_border mb-5">

                    <div class="cards__heading">
                        <h3>Fulfillment Center</h3>
                    </div>


                    
                    <div class="statistics">
                        <div class="row">

                        </div>
                    </div>

                  </div>

              </section>
          </section>
          <!-- //content -->

            </div>
 
        </div>
        <!-- main content end-->


    </section>


  </div>
</template>
<script>
import menuComponent from '@/views/Menu/Index'

export default {
  name: 'FulfillmentList',
  components: {
    'menu-component':menuComponent,
  },
  data () {
    return {  
      maxToasts: 100,
      position: 'up right',
      closeBtn: true,  
      errors: [],
      langs: ['id', 'en'],
      name:'',
    }
  },
    watch: { 

    },
    methods: { 	

      fetchIt() {
        const userDatas = this.$getUserInfo();
        this.name = userDatas.sub.name;
        
      },

      logout(){
        this.$logoutUser();
        this.$router.push('/');
      },

    },
    events: {

    },
    created: function() { 
 
    },
	mounted() {
      document.body.classList.add("sidebar-menu-collapsed");
      this.fetchIt();
    }

}
</script>
<style scoped>
 
</style>