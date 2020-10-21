import Vue from "vue";
import VueRouter from "vue-router";
import { isLoggedIn } from '@/config/auth'

import Login from "@/views/Login.vue";
import PageNotFound from "@/views/Page404.vue";
import ServerErrorPage from "@/views/Page500.vue";
import Dashboard from "@/views/Dashboard.vue";
import FulfillmentList from "@/views/Fulfillment/Index.vue";
import FulfillmentDetail from "@/views/Fulfillment/Detail.vue";
import FulfillmentCreate from "@/views/Fulfillment/Create.vue";
import FulfillmentEdit from "@/views/Fulfillment/Edit.vue";
import CompanyList from "@/views/Company/Index.vue";
import CompanyDetail from "@/views/Company/Detail.vue";
import CompanyCreate from "@/views/Company/Create.vue";
import CompanyEdit from "@/views/Company/Edit.vue";
import ProductsNormal from "@/views/Products/Normal/Index.vue";
import ProductNormalDetail from "@/views/Products/Normal/Detail.vue";
import ProductNormalEdit from "@/views/Products/Normal/Edit.vue";
import ProductNormalCreate from "@/views/Products/Normal/Create.vue";
import ProductNormalUpload from "@/views/Products/Normal/Upload.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    meta: {
      title: "Order Management System | JualPraktis",
      allowAnonymous: true
    },
    name: "Login",
    component: Login
  },
  {
    path:'/server-error', 
    meta: {
      title: "Order Management System | JualPraktis",
      allowAnonymous: true
    },
    name: "ServerErrorPage",
    component: ServerErrorPage
  }, 
  {
    path:'/page-not-found', 
    meta: {
      title: "Order Management System | JualPraktis",
      allowAnonymous: true
    },
    name: "PageNotFound",
    component: PageNotFound
  }, 
  {
    path:'*', 
    meta: {
      title: "Order Management System | JualPraktis"
    },
    name: "PageNotFoundArea",
    component: PageNotFound
  }, 
  {
    path:'/dashboard', 
    meta: {
      title: "Order Management System | JualPraktis"
    },
    name: "Dashboard",
    component: Dashboard
  }, 

  /**
   * Fulfillment
   */
  {
    path:'/fulfillment-center/detail/:id', 
    meta: {
      title: "Fulfillment Detail | JualPraktis"
    },
    name: "FulfillmentDetail",
    component: FulfillmentDetail,
    props: true
  }, 
  {
    path:'/fulfillment-center/create', 
    meta: {
      title: "Fulfillment Create | JualPraktis"
    },
    name: "FulfillmentCreate",
    component: FulfillmentCreate
  }, 
  {
    path:'/fulfillment-center/list', 
    meta: {
      title: "Fulfillment | JualPraktis"
    },
    name: "FulfillmentList",
    component: FulfillmentList
  }, 
  {
    path:'/fulfillment-center/edit/:id', 
    meta: {
      title: "Fulfillment Edit | JualPraktis"
    },
    name: "FulfillmentEdit",
    component: FulfillmentEdit,
    props: true
  }, 

  
  /**
   * Company
   */
  {
    path:'/company/detail/:id', 
    meta: {
      title: "Company Detail | JualPraktis"
    },
    name: "CompanyDetail",
    component: CompanyDetail,
    props: true
  }, 
  {
    path:'/company/create', 
    meta: {
      title: "Company Create | JualPraktis"
    },
    name: "CompanyCreate",
    component: CompanyCreate
  }, 
  {
    path:'/company/list', 
    meta: {
      title: "Company | JualPraktis"
    },
    name: "CompanyList",
    component: CompanyList
  }, 
  {
    path:'/company/edit/:id', 
    meta: {
      title: "Company Edit | JualPraktis"
    },
    name: "CompanyEdit",
    component: CompanyEdit,
    props: true
  }, 


  
  /**
   * Products
   */

  {
    path:'/products/normal', 
    meta: {
      title: "Normal Products | JualPraktis"
    },
    name: "ProductsNormal",
    component: ProductsNormal
  }, 
  {
    path:'/products/normal/detail/:id', 
    meta: {
      title: "Product Detail | JualPraktis"
    },
    name: "ProductNormalDetail",
    component: ProductNormalDetail,
    props: false
  }, 
  {
    path:'/products/normal/edit/:id', 
    meta: {
      title: "Product Edit | JualPraktis"
    },
    name: "ProductNormalEdit",
    component: ProductNormalEdit,
    props: false
  }, 
  {
    path:'/products/normal/create', 
    meta: {
      title: "Product Create | JualPraktis"
    },
    name: "ProductNormalCreate",
    component: ProductNormalCreate
  }, 
  {
    path:'/products/normal/upload', 
    meta: {
      title: "Product Upload | JualPraktis"
    },
    name: "ProductNormalUpload",
    component: ProductNormalUpload
  }, 





  {
    path: "/about",
    meta: {
      title: "About"
    },
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
    if (to.name == 'Login' && isLoggedIn()) {
        next({ path: '/dashboard' })
    }
    else if (!to.meta.allowAnonymous && !isLoggedIn()) {
        next({
            path: '/',
            query: { redirect: to.fullPath }
        })
    }
    else {
        next()
    }
});


export default router;
