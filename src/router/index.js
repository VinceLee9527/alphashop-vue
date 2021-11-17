import Vue from 'vue'
import VueRouter from 'vue-router'
import Checkout from '../views/Checkout.vue'
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)

const routes = [
  { 
      path: '/',
      name: 'root',
      redirect: '/checkout/1',
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
      children: [
        //nested route共享checkout結構
      {
        path: '1',
        name: 'address',
        component: () => import('../components/FormOne.vue')
      },
      {
        path: '2',
        name: 'delivery',
        component:()=>import('../components/FormTwo.vue')
      },
      {
        path: '3',
        name: 'payment',
        component: () => import('../components/FormThree.vue')
      },
    ]
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
]

const router = new VueRouter({
  routes
})

export default router
