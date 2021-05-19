<template>
  <div>
    <section>
      <menu-component classMenu="Courier"></menu-component>
      


        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">
                
          <!-- content -->
          <section class="people">
              <section class="w3l-team-block">

                  <div class="card card_border mb-5">

                    <div class="cards__heading">
                      <div class="welcome-msg pt-3 pb-4">
                        <h1>{{$t('courierManagement')}}</h1>
                      </div>
                    </div>

                  </div>

    <!-- statistics data -->
    <div class="statistics">
      <div class="row">

        <div class="col-xl-6 pr-xl-2">
          <div class="row">

            <div class="col-sm-6 pr-sm-2 statistics-grid">
<a href="/courier/header">
              <div class="card card_border border-primary-top p-4">
                 
                <h3 class="text-primary number">Courier Header</h3>
                <p class="stat-text">Company Courier</p>
              </div>
</a>
            </div>

            <div class="col-sm-6 pl-sm-2 statistics-grid">
<a href="/courier/Service">
              <div class="card card_border border-primary-top p-4">
                <h3 class="text-secondary number">Courier Service</h3>
                <p class="stat-text">Courier Service / Product name</p>
              </div>
</a>
            </div>

          </div>
        </div>


        <div class="col-xl-6 pl-xl-2">
          <div class="row">

            <div class="col-sm-6 pr-sm-2 statistics-grid">
<a href="/courier/api">
              <div class="card card_border border-primary-top p-4">
                <h3 class="text-success number">Courier API</h3>
                <p class="stat-text">Courier API Credential</p>
              </div>
</a>
            </div>

            <div class="col-sm-6 pl-sm-2 statistics-grid">
<a href="/courier/marketplace">
              <div class="card card_border border-primary-top p-4">
                <h3 class="text-danger number">Marketplace Courier</h3>
                <p class="stat-text">Marketplace courier Mapping</p>
              </div>
</a>
            </div>

          </div>
        </div>

        
      </div>
    </div>
    <!-- //statistics data -->
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
  name: 'CourierIndex',
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
      userDatas:[],
    }
  },
    watch: { 

    },
    methods: { 	

      fetchIt() {
        const userDatas = this.$getUserInfo();
        if(userDatas.sub.company.company_id != "OMS"){
          window.location.href = '/dashboard';
        }

        
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