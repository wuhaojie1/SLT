import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../views/login/login.vue')
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/index/index.vue')
    },
    {
        path: '/regiest',
        name: 'regiest',
        component: () => import('../views/regiest/regiest.vue')
    },
    {
        path: '/personasset',
        name: 'personasset',
        component: () => import('../views/personasset/personasset.vue')
    },
    {
        path: '/buy',
        name: 'buy',
        component: () => import('../views/buy/buy.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../views/user/user.vue'),
        children:[
            //个人信息
            {
                path: 'userInfo',
                name: 'userInfo',
                component: () => import('../views/user/userInfo.vue'),
            },
            //身份认证
            {
                path: 'userAuth',
                name: 'userAuth',
                component: () => import('../views/user/userAuth.vue'),
            },
            //收货地址
            {
                path: 'userAddress',
                name: 'userAddress',
                component: () => import('../views/user/userAddress.vue'),
            },
            //个人资产
            {
                path: 'userAccount',
                name: 'userAccount',
                component: () => import('../views/user/userAccount.vue'),
            },
            //知识产权
            {
                path: 'property',
                name: 'property',
                component: () => import('../views/user/property.vue'),
            },
        ]

    }
    // {
    //   path: '/tradetype',
    //   name: 'tradetype',
    //   children: [
    //     {
    //       path: '/trade',
    //       name: 'trade',
    //       component: () => import('../views/personasset/personasset.vue')
    //     },
    //     {
    //       path: '/buyorsale',
    //       name: 'buyorsale',
    //       component: () => import('../views/personasset/personasset.vue'),
    //       children:[
    //         {
    //           path: '/buy',
    //           name: 'buy',
    //           component: () => import('../views/buy/buy.vue'),
    //         },
    //         {
    //           path: '/sale',
    //           name: 'sale',
    //           component: () => import('../views/sale/sale.vue'),
    //         }
    //       ]
    //     }
    //   ],
    //   redirect: '/tradetype/trade',
    // }

]

const router = new VueRouter({
    routes
})

export default router
