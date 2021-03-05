import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: () => import ('../views/login/login.vue')
},
    {
        path: '/index',
        name: 'index',
        component: () => import ('../views/index/index.vue')
    },
    {
        path: '/regiest',
        name: 'regiest',
        component: () => import ('../views/regiest/regiest.vue')
    },
    {
        path: '/personasset',
        name: 'personasset',
        component: () => import ('../views/personasset/personasset.vue')
    },
    {
        path: '/buy',
        name: 'buy',
        component: () => import ('../views/buy/buy.vue'),
        children: [
            //自选交易
            {
                path: 'freetrade',
                name: 'freeTrade',
                component: () => import ('../views/buy/freetrade.vue')
            },
            //一键买卖
            {
                path: 'deal',
                name: 'deal',
                component: () => import ('../views/buy/deal.vue'),
            },
        ]
    },
    {
        path: '/shoppingCart',
        name: 'shoppingCart',
        component: () => import ('../views/shop/shoppingCart.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import ('../views/user/user.vue'),
        children: [
            //个人信息
            {
                path: 'userInfo',
                name: 'userInfo',
                component: () => import ('../views/user/userInfo.vue'),
            },
            //身份认证
            {
                path: 'userAuth',
                name: 'userAuth',
                component: () => import ('../views/user/userAuth.vue'),
            },
            //收货地址
            {
                path: 'userAddress',
                name: 'userAddress',
                component: () => import ('../views/user/userAddress.vue'),
            },
            //个人资产
            {
                path: 'userAccount',
                name: 'userAccount',
                component: () => import ('../views/user/userAccount.vue'),
            },
            //知识产权
            {
                path: 'property',
                name: 'property',
                component: () => import ('../views/user/property.vue'),
            },
        ]
    },
    //消息
    {
        path: '/message',
        name: 'message',
        component: () => import ('../views/message/message.vue')
    },
    //订单
    {
        path: '/order',
        name: 'order',
        component: () => import ('../views/order/order.vue')

    },
    //充值
    {
        path: '/topUp',
        name: 'topUp',
        component: () => import ('../views/wallet/topUp.vue')
    },
    //提现
    {
        path: '/withdraw',
        name: 'withdraw',
        component: () => import ('../views/wallet/withdraw.vue')
    },
    //商品详情
    {
        path: '/goodsdetails',
        name: 'goodsdetails',
        component: () => import ('../views/goodsdetails/goodsdetails.vue')
    },
    //商城
    {
        path: '/shoppingMall',
        name: 'shoppingMall',
        component: () => import ('../views/shoppingMall/shoppingMall.vue')
    },
    //移动端充值
    {
        path: '/MtopUp',
        name: 'MtopUp',
        component: () => import ('../views/mobile/wallet/topUp.vue')
    },
    //移动端提现
    {
        path: '/Mwithdraw',
        name: 'Mwithdraw',
        component: () => import ('../views/mobile/wallet/withdraw.vue')
    },
    //移动端买卖
    {
        path: '/Mbuy',
        name: 'Mbuy',
        component: () => import ('../views/mobile/trade/exchange.vue'),
        children: [
            //自选交易
            {
                path: 'MTrade',
                name: 'MTrade',
                component: () => import ('../views/mobile/trade/trade')
            },
            //一键买卖
            {
                path: 'Mdeal',
                name: 'Mdeal',
                component: () => import ('../views/mobile/trade/deal'),
            },
        ]
    },
    //移动端我的
    {
        path: '/Musermsg',
        name: 'Musermsg',
        component: () => import ('../views/mobile/usermsg/usermsg.vue')
    },
    //移动端消息列表
    {
        path: '/Mmsglist',
        name: 'Mmsglist',
        component: () => import ('../views/mobile/msglist/msglist.vue')
    },
    //移动端登录
    {
        path: '/Mlogin',
        name: 'Mlogin',
        component: () => import ('../views/mobile/login/login.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router