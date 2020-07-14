import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../Pages/Msite/Msite.vue'
import Search from '../Pages/Search/Search.vue'
import Order from '../Pages/Order/Order.vue'
import Profile from '../Pages/Profile/Profile.vue'
import Login from '../Pages/LogIn/LogIn.vue'
import Shop from '../Pages/Shop/Shop.vue'
import ShopRatings from '../Pages/Shop/ShopRatings/ShopRatings.vue'
import ShopGoods from '../Pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../Pages/Shop/ShopInfo/ShopInfo.vue'
import ShopHeader from '../Pages/ShopHeader/ShopHeader.vue'



Vue.use(VueRouter)

export default new VueRouter({
  routes: [

    {
      path: '/shopheader',
      component: ShopHeader,
    },

    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods,
        },
        {
          path: '/shop/info',
          component: ShopInfo,
        },
        {
          path: '/shop/ratings',
          component: ShopRatings,
        },
        {
          path: '',
          redirect:'/shop/goods',
        },

      ]
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})