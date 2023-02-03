import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import authStore from './authStore';
import empStore from './empStore';
import simulatorStore from './simulatorStore';



const store=new Vuex.Store({
    modules:{
        authStore,
        empStore,
        simulatorStore
    }
});

export default store;