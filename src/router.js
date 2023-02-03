import HomePage from './pages/HomePage.vue';
import LoginComponent from './components/LoginComponent.vue';
import ApprovalRequestPage from './pages/ApprovalRequestPage.vue';
import SimulatorPage from './pages/SimulatorPage.vue';
import VueRouter from 'vue-router';

const routerconfig=new VueRouter({
    mode:'history',
    routes:[ 
        {
            path:'/home',
            name:'HomePage',
            component:HomePage,
        },
        {
            path:'/',
            name:'LoginComponent',
            component:LoginComponent
        },
        {
          path:'/Approval',
          name:'ApprovalRequestPage',
          component:ApprovalRequestPage
      },
      {
        path: '/simulator',
        name:'SimulatorPage',
        component: SimulatorPage,
        meta: { public: true }
      }
   ]
})




routerconfig.beforeEach((to, from, next) => {
    // check if user is logged in
    const isLoggedIn = localStorage.getItem('user');  
    
    if(to.matched.some(record => record.meta.public))
    {
      next();
    }
    else if (to.path === '/' && isLoggedIn) {
      next('/home');
    } 
    else if(to.path === '/home' && !isLoggedIn){
        next({ path: '/' });    
    }
    else {
      // $store.dispatch('authStore/')
      next();

    }
  });

export default routerconfig;