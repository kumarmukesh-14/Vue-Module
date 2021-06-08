import Vue from 'vue';
import Router from 'vue-router';
import myOrder from '../modules/myOrders/router'
//import subscription from '../modules/subscriptions'

Vue.use(Router);
const baseRoutes = [

]

const routes = baseRoutes.concat(myOrder);

export default new Router({
    mode: 'history',
    routes
})