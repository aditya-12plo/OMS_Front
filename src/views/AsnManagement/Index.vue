<template>
  <div>
    <section>
      <menu-component classMenu="asnManagement"></menu-component>
      


        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">
                
          <!-- content -->
          <section class="people">
              <section class="w3l-team-block">

                  <div class="card card_border mb-5">

                    <div class="cards__heading">
                      <div class="welcome-msg pt-3 pb-4">
                        <h1>{{$t('asnManagement')}}</h1>
                      </div>
                    </div>

                  </div>

    <!-- statistics data -->
    <div class="statistics">
      <div class="row">

        <div class="col-xl-6 pr-xl-2">
          <div class="row">

            <div class="col-sm-6 pr-sm-2 statistics-grid">
<a href="/asn-management/asn-status-master">
              <div class="card card_border border-primary-top p-4">
                 
                <h5 class="text-primary number">PO / ASN Status</h5>
                <p class="stat-text">PO / ASN Status Master Data</p>
              </div>
</a>
            </div>

            <div class="col-sm-6 pl-sm-2 statistics-grid">
<a href="/asn-management/asn-type-master">
              <div class="card card_border border-primary-top p-4">
                <h5 class="text-secondary number">PO / ASN Type Code</h5>
                <p class="stat-text">PO / ASN Type Master Data</p>
              </div>
</a>
            </div>

          </div>
        </div>


        <div class="col-xl-6 pl-xl-2">
          <div class="row">
 

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
  name: 'AsnManagementDashboard',
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