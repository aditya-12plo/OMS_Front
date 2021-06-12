<template>
  <div>
   
    <!-- sidebar menu start -->
  <div class="sidebar-menu sticky-sidebar-menu">

    <!-- logo start -->
    <div class="logo">
      <h1><a href="/dashboard">JualPraktis</a></h1>
    </div>


    <div class="logo-icon text-center">
      <a href="/dashboard" title="JualPraktis"><img src="/assets/images/logo.png" alt="JualPraktis"> </a>
    </div>
    <!-- //logo end -->

    <div class="sidebar-menu-inner">

      <!-- sidebar nav start -->
      <ul class="nav nav-pills nav-stacked custom-nav">
        <li class=""><a href="/dashboard"><i class="fas fa-bar-chart"></i><span> Dashboard</span></a>
        </li>
        <li class="menu-list">
          <a href="#"><i class="fas fa-box"></i>
            <span>Orders <i class="lnr lnr-chevron-right"></i></span></a>
          <ul class="sub-menu-list">
            <li><a href="/order/all">Orders</a> </li>
            <li><a href="/order/create">Create Orders</a></li>
            <li><a href="/order/upload">Upload Orders</a></li>
            <li><a href="/order/buyyers">Buyyers</a></li>
          </ul>
        </li>
        <li class="menu-list">
          <a href="#"><i class="fas fa-barcode"></i>
            <span>Products <i class="lnr lnr-chevron-right"></i></span></a>
          <ul class="sub-menu-list">
            <li><a href="/products/normal">{{$t('normalProducts')}}</a> </li>
            <li><a href="/products/bundle">{{$t('bundleProducts')}}</a></li>
            <li><a href="/products/damage"> {{$t('damageProducts')}}</a></li>
            <li><a href="locations/index"> {{$t('locationProducts')}}</a></li>
          </ul>
        </li>
        <li class="menu-list">
          <a href="#"><i class="fas fa-dolly-flatbed"></i>
            <span>PO<i class="lnr lnr-chevron-right"></i></span></a>
          <ul class="sub-menu-list">
            <li><a href="/po/pending">Pending</a> </li>
            <li><a href="/po/confirmation">Confirmation</a> </li>
            <li><a href="/po/inbound-Process">Inbound Process</a></li>
            <li><a href="/po/received">Received</a></li>
          </ul>
        </li>
        
        <li class="menu-list">
          <a href="#"><i class="fas fa-shopping-cart"></i>
            <span>Marketplace<i class="lnr lnr-chevron-right"></i></span></a>
          <ul class="sub-menu-list">
            <li><a href="/marketplace/sync-products">{{$t('integrations')}}</a></li>
            <li><a href="/marketplace/update-stock">Update Stock</a> </li>
            <li><a href="/marketplace/get-orders">Get Orders</a> </li>
            <li><a href="/marketplace/sync-products">Sync Products</a></li>
          </ul>
        </li>

        <li class=""><a href="/company-fulfillment/list"><i class="fas fa-warehouse"></i><span> {{$t('fulfillmentCenter')}}</span></a>
        </li>
        

        <li class="menu-list" v-if="company_id == 'OMS' && user_role_id == 'ADMIN'">
          <a href="#"><i class="fas fa-building"></i>
            <span>Administrator<i class="lnr lnr-chevron-right"></i></span></a>
          <ul class="sub-menu-list">
            <li><a href="/fulfillment-center/list">{{$t('fulfillmentCenter')}}</a></li>
            <li><a href="/fulfillment-type-master/list">{{$t('fulfillmentTypeMaster')}}</a></li>

            <li><a href="/company/list">{{$t('companyCenter')}}</a></li>
            <li><a href="/user/list">{{$t('userManagement')}}</a></li>
            <li><a href="/user-role/list">{{$t('userRole')}}</a></li>
            <li><a href="/courier/dashboard">{{$t('courierManagement')}}</a></li>
            <li><a href="/marketplace/dashboard">{{$t('marketplaceManagement')}}</a></li>
            <li><a href="/order-management/dashboard">{{$t('orderManagement')}}</a></li>
            <li><a href="/asn-management/dashboard">{{$t('asnManagement')}}</a></li>
          </ul>
        </li>
        
        
        <li class="menu-list">
          <a href="#"><i class="fas fa-language"></i>
            <span>Language / Bahasa<i class="lnr lnr-chevron-right"></i></span></a>
          <ul class="sub-menu-list">
            <li><a @click.prevent="toEN">EN</a> </li>
            <li><a @click.prevent="toID">ID</a> </li>
          </ul>
        </li>
 
      </ul>
      <!-- //sidebar nav end -->
      <!-- toggle button start -->
      <a class="toggle-btn">
        <i class="fa fa-angle-double-left menu-collapsed__left"><span>{{ $t('collapseSidebar') }}</span></i>
        <i class="fa fa-angle-double-right menu-collapsed__right"></i>
      </a>
      <!-- //toggle button end -->
    </div>
  </div>
  <!-- //sidebar menu end -->
  <!-- header-starts -->
  <div class="header sticky-header">

    <!-- notification menu start -->
    <div class="menu-right">
      <div class="navbar user-panel-top">
        
        <div class="user-dropdown-details d-flex">
          <div class="profile_details_left">
            <ul class="nofitications-dropdown">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                    class="fa fa-bell-o"></i><span class="badge blue">3</span></a>
                <ul class="dropdown-menu">
                  <li>
                    <div class="notification_header">
                      <h3>You have 3 new notifications</h3>
                    </div>
                  </li>
                  <li><a href="#" class="grid">
                      <div class="user_img"><img src="assets/images/avatar1.jpg" alt=""></div>
                      <div class="notification_desc">
                        <p>Johnson purchased template</p>
                        <span>Just Now</span>
                      </div>
                    </a></li>
                  <li class="odd"><a href="#" class="grid">
                      <div class="user_img"><img src="assets/images/avatar2.jpg" alt=""></div>
                      <div class="notification_desc">
                        <p>New customer registered </p>
                        <span>1 hour ago</span>
                      </div>
                    </a></li>
                  <li><a href="#" class="grid">
                      <div class="user_img"><img src="assets/images/avatar3.jpg" alt=""></div>
                      <div class="notification_desc">
                        <p>Lorem ipsum dolor sit amet </p>
                        <span>2 hours ago</span>
                      </div>
                    </a></li>
                  <li>
                    <div class="notification_bottom">
                      <a href="#all" class="bg-primary">See all notifications</a>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                    class="fa fa-comment-o"></i><span class="badge blue">4</span></a>
                <ul class="dropdown-menu">
                  <li>
                    <div class="notification_header">
                      <h3>You have 4 new messages</h3>
                    </div>
                  </li>
                  <li><a href="#" class="grid">
                      <div class="user_img"><img src="assets/images/avatar1.jpg" alt=""></div>
                      <div class="notification_desc">
                        <p>Johnson purchased template</p>
                        <span>Just Now</span>
                      </div>
                    </a></li>
                  <li class="odd"><a href="#" class="grid">
                      <div class="user_img"><img src="assets/images/avatar2.jpg" alt=""></div>
                      <div class="notification_desc">
                        <p>New customer registered </p>
                        <span>1 hour ago</span>
                      </div>
                    </a></li>
                  <li><a href="#" class="grid">
                      <div class="user_img"><img src="assets/images/avatar3.jpg" alt=""></div>
                      <div class="notification_desc">
                        <p>Lorem ipsum dolor sit amet </p>
                        <span>2 hours ago</span>
                      </div>
                    </a></li>
                  <li><a href="#" class="grid">
                      <div class="user_img"><img src="assets/images/avatar1.jpg" alt=""></div>
                      <div class="notification_desc">
                        <p>Johnson purchased template</p>
                        <span>Just Now</span>
                      </div>
                    </a></li>
                  <li>
                    <div class="notification_bottom">
                      <a href="#all" class="bg-primary">See all messages</a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="profile_details">
            <ul>
              <li class="dropdown profile_details_drop">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                  aria-expanded="false">
                  <div class="profile_img">
                    <img src="/assets/images/profile.png" class="rounded-circle" alt="" />
                    <div class="user-active">
                      <span></span>
                    </div>
                  </div>
                </a>
                <ul class="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
                  <li class="user-info">
                    <h5 class="user-name">{{this.name}}</h5>
                    <span class="status ml-2">{{this.company +' ('+ this.company_id +' )'}}</span>
                  </li>
                  <li> <a href="/profile"><i class="lnr lnr-user"></i>My Profile</a> </li>
                  <li class="logout"> <a @click="logout()"><i class="fa fa-power-off"></i> Logout</a> </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--notification menu end -->
  </div>
  <!-- //header-ends -->


  </div>
</template>

<script>

export default {
  name: 'Menu',
  props: {
    classMenu: {
      type: String,
      required: true
    },
  },
  components: {
  },
  data () {
    return {  
      locale:'',
      name:"",
      company:"",
      company_id:"",
      user_role_id:"",
        
    }
  },
    watch: { 

    },
    methods: { 	
      
      langChanged(lang){
        if(this.locale == ''){
          this.locale = lang;
        }else{
          this.$i18n.locale = this.locale;
          localStorage.Lang = this.locale;
        }
      },
      toEN(){
        this.$i18n.locale = 'en';
         localStorage.Lang = 'en';
      },

      toID(){
        this.$i18n.locale = 'id';
         localStorage.Lang = 'id';
      },


      logout(){
        this.$logoutUser();
        window.location.href = '/';
      },

      fetchIt() {
        const userDatas = this.$getUserInfo();
        this.name = userDatas.sub.name;
        this.company = userDatas.sub.company.name;
        this.company_id = userDatas.sub.company.company_id;
        this.user_role_id = userDatas.sub.user_role_id;
      },

    },
    events: {

    },
    created: function() { 
    
    },
	mounted() {
      this.fetchIt();
      this.langChanged(this.$i18n.locale);
        
    }

}
</script>
<style scoped>

</style>