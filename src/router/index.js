import Vue from "vue";
import VueRouter from "vue-router";
import { isLoggedIn } from '@/config/auth'

import Login from "../views/Login.vue";
import PageNotFound from "../views/Page404.vue";
import ServerErrorPage from "../views/Page500.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    meta: {
      title: "Order Management System | TokoPusat",
      allowAnonymous: true
    },
    name: "Login",
    component: Login
  },
  {
    path:'/server-error', 
    meta: {
      title: "Order Management System | TokoPusat",
      allowAnonymous: true
    },
    name: "ServerErrorPage",
    component: ServerErrorPage
  }, 
  {
    path:'/page-not-found', 
    meta: {
      title: "Order Management System | TokoPusat",
      allowAnonymous: true
    },
    name: "PageNotFound",
    component: PageNotFound
  }, 
  {
    path:'*', 
    meta: {
      title: "Order Management System | TokoPusat"
    },
    name: "PageNotFoundArea",
    component: PageNotFound
  }, 
  {
    path:'/dashboard', 
    meta: {
      title: "Order Management System | TokoPusat"
    },
    name: "Dashboard",
    component: Dashboard
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
