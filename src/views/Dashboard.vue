<template>
  <div>
    <section>
      <menu-component classMenu="Dashboard"></menu-component>
      


        <!-- main content start -->
        <div class="main-content">
            
            <div class="container-fluid content-top-gap">
                
          <!-- content -->
          <section class="people">
              <section class="w3l-team-block">

                  <div class="card card_border mb-5">

                    <div class="cards__heading">
                      <div class="welcome-msg pt-3 pb-4">
                        <h1>Hi <span class="text-primary">{{this.name}}</span>, {{$t('welcomeBack')}}</h1>
                        <p><b>OMS</b> (<b>Order Management System</b>) merupakan system yang dibuat untuk memudahkan anda dalam melakukan penjualan 
                        secara online maupun offline dengan cara yang efektif , hemat biaya dan dapat melacak kemajuan setiap pesanan 
                        di seluruh sistem.</p>
                      </div>
                    </div>

                  </div>

    <!-- statistics data -->
    <div class="statistics">
      <div class="row">
        <div class="col-xl-6 pr-xl-2">
          <div class="row">
            <div class="col-sm-6 pr-sm-2 statistics-grid">
              <div class="card card_border border-primary-top p-4">
                <i class="fa fa-money"> </i>
                <h3 class="text-primary number">29.75</h3>
                <p class="stat-text">Total Amount Orders</p>
              </div>
            </div>
            <div class="col-sm-6 pl-sm-2 statistics-grid">
              <div class="card card_border border-primary-top p-4">
                <i class="fa fa-shopping-cart"> </i>
                <h3 class="text-secondary number">51.25</h3>
                <p class="stat-text">Total Orders</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 pl-xl-2">
          <div class="row">
            <div class="col-sm-6 pr-sm-2 statistics-grid">
              <div class="card card_border border-primary-top p-4">
                <i class="fa fa-square"> </i>
                <h3 class="text-success number">166.89</h3>
                <p class="stat-text">Total QTY</p>
              </div>
            </div>
            <div class="col-sm-6 pl-sm-2 statistics-grid">
              <div class="card card_border border-primary-top p-4">
                <i class="fa fa-spinner"> </i>
                <h3 class="text-danger number">1,250</h3>
                <p class="stat-text">Average Warehouse SLA</p>
              </div>
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
import menuComponent from './Menu/Index'

export default {
  name: 'Dashboard',
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

      /*
      call js file internal
      let jquery3 = document.createElement('script');    
      jquery3.setAttribute('src',"/assets/js/jquery-3.3.1.min.js");
      jquery3.async = true;
      jquery3.defer = true;
      let jquery1 = document.createElement('script');    
      jquery1.setAttribute('src',"/assets/js/jquery-1.10.2.min.js");
      jquery1.async = true;
      jquery1.defer = true;
      let jquerynicescroll= document.createElement('script');    
      jquerynicescroll.setAttribute('src',"/assets/js/jquery.nicescroll.js");
      jquerynicescroll.async = true;
      jquerynicescroll.defer = true;
      let scriptsJs= document.createElement('script');    
      scriptsJs.setAttribute('src',"/assets/js/scripts.js");
      scriptsJs.async = true;
      scriptsJs.defer = true;
      let bootstrapMin= document.createElement('script');    
      bootstrapMin.setAttribute('src',"/assets/js/bootstrap.min.js");
      bootstrapMin.async = true;
      bootstrapMin.defer = true;
      document.head.appendChild(jquery3);
      document.head.appendChild(jquery1);
      document.head.appendChild(jquerynicescroll);
      document.head.appendChild(scriptsJs);
      document.head.appendChild(bootstrapMin);
      */
    },
	mounted() {
      document.body.classList.add("sidebar-menu-collapsed");
      this.fetchIt();
    }

}
</script>
<style scoped>
 
</style>