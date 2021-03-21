import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'initIndex',
        component: () =>
            import ('../views/initPage/index.vue')
    },
    {
        path: '/index',
        name: 'index',
        component: () =>
            import ('../views/index/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/login.vue')
    },
    {
        path: '/regiest',
        name: 'regiest',
        component: () =>
            import ('../views/regiest/regiest.vue')
    },
    {
        path: '/personasset',
        name: 'personasset',
        component: () =>
            import ('../views/personasset/personasset.vue')
    },
    {
        path: '/localdetails',
        name: 'localdetails',
        component: () =>
            import ('../views/localdetails/localdetails.vue')
    },
    //白皮书
    {
        path: '/whitPaper',
        name: 'whitPaper',
        component: () =>
            import ('../views/whitePaper/whitPaper.vue'),
    },
    {
        path: '/buy',
        name: 'buy',
        component: () =>
            import ('../views/buy/buy.vue'),
        redirect: '/freetrade',
        children: [
            //自选交易
            {
                path: '/freetrade',
                name: 'freeTrade',
                component: () =>
                    import ('../views/buy/freetrade.vue')
            },
            //一键买卖
            {
                path: '/deal',
                name: 'deal',
                component: () =>
                    import ('../views/buy/deal.vue'),
            },
            //确认订单
            {
                path: 'confirmOrder',
                name: 'confirmOrder',
                component: () =>
                    import ('../views/buy/confirmOrder.vue'),
            },
            //取消订单
            {
                path: 'cancleorder',
                name: 'cancleorder',
                component: () =>
                    import ('../views/buy/cancleorder.vue'),
            },


        ]
    },
    //orderDetail
    {
        path: '/orderDetail',
        name: 'orderDetail',
        component: () =>
            import ('../views/buy/orderDetail.vue')
    },
    {
        path: '/shoppingCart',
        name: 'shoppingCart',
        component: () =>
            import ('../views/shop/shoppingCart.vue')
    },
    {
        path: '/treasurelog',
        name: 'treasurelog',
        component: () =>
            import ('../views/treasurelog/treasurelog.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () =>
            import ('../views/user/user.vue'),
        children: [
            //个人信息
            {
                path: 'userInfo',
                name: 'userInfo',
                component: () =>
                    import ('../views/user/userInfo.vue'),
            },
            //身份认证
            {
                path: 'userAuth',
                name: 'userAuth',
                component: () =>
                    import ('../views/user/userAuth.vue'),
            },
            //收货地址
            {
                path: 'userAddress',
                name: 'userAddress',
                component: () =>
                    import ('../views/user/userAddress.vue'),
            },
            //个人资产
            {
                path: 'userAccount',
                name: 'userAccount',
                component: () =>
                    import ('../views/user/userAccount.vue'),
            },
            //知识产权
            {
                path: 'property',
                name: 'property',
                component: () =>
                    import ('../views/user/property.vue'),
            },
        ]
    },

    //消息
    {
        path: '/message',
        name: 'message',
        component: () =>
            import ('../views/message/message.vue')
    },
    //订单
    {
        path: '/order',
        name: 'order',
        component: () =>
            import ('../views/order/order.vue')

    },
    //充值
    {
        path: '/topUp',
        name: 'topUp',
        component: () =>
            import ('../views/wallet/topUp.vue')
    },
    //提现
    {
        path: '/withdraw',
        name: 'withdraw',
        component: () =>
            import ('../views/wallet/withdraw.vue')
    },
    //商品详情
    {
        path: '/goodsdetails',
        name: 'goodsdetails',
        component: () =>
            import ('../views/goodsdetails/goodsdetails.vue')
    },
    //商品详情
    {
        path: '/Mgoodsdetails',
        name: 'Mgoodsdetails',
        component: () =>
            import ('../views/mobile/goodsdetails/goodsfetails.vue')
    },
    //商城
    {
        path: '/shoppingMall',
        name: 'shoppingMall',
        component: () =>
            import ('../views/shoppingMall/shoppingMall.vue')
    },

    {
        path: '/shoppingCar',
        name: 'shoppingCar',
        component: () =>
            import ('../views/shop/shoppingCart.vue')
    },

    //位置
    {
        path: '/position',
        name: 'position',
        component: () =>
            import ('../views/position/position.vue')
    },
    //支付成功
    {
        path: '/paymentSuccess',
        name: 'paymentSuccess',
        component: () =>
            import ('../views/paymentSuccess/paymentSuccess.vue')
    },

    // ===================================================
    //移动端个人中心
    {
        path: '/Muser',
        name: 'Muser',
        component: () =>
            import ('../views/mobile/user/user.vue')
    },
    //移动端订单
    {
        path: '/Morder',
        name: 'Morder',
        component: () =>
            import ('../views/mobile/order/order.vue')
    },
    //移动端购物车
    {
        path: '/MshoppingCart',
        name: 'MshoppingCart',
        component: () =>
            import ('../views/mobile/shop/shoppingCart.vue')
    },
    //移动端商城
    {
        path: '/Mmall',
        name: 'Mmall',
        component: () =>
            import ('../views/mobile/mall/mall.vue')
    },
    //移动端收货地址
    {
        path: '/MuserAddress',
        name: 'MuserAddress',
        component: () =>
            import ('../views/mobile/user/userAddress.vue')
    },
    //移动端身份认证
    {
        path: '/MuserAuth',
        name: 'MuserAuth',
        component: () =>
            import ('../views/mobile/user/userAuth.vue')
    },
    //移动端个人资产
    {
        path: '/MuserAccount',
        name: 'MuserAccount',
        component: () =>
            import ('../views/mobile/user/userAccount.vue')
    },
    //移动端充值
    {
        path: '/MtopUp',
        name: 'MtopUp',
        component: () =>
            import ('../views/mobile/wallet/topUp.vue')
    },
    //移动端提现
    {
        path: '/Mwithdraw',
        name: 'Mwithdraw',
        component: () =>
            import ('../views/mobile/wallet/withdraw.vue')
    },
    //移动端待接单
    {
        path: '/MwaitOrder',
        name: 'MwaitOrder',
        component: () =>
            import ('../views/mobile/order/waitOrder.vue')
    },
    //移动端买卖
    {
        path: '/Mbuy',
        name: 'Mbuy',
        component: () =>
            import ('../views/mobile/trade/exchange.vue'),
        children: [
            //自选交易
            {
                path: 'MTrade',
                name: 'MTrade',
                component: () =>
                    import ('../views/mobile/trade/trade')
            },
            //一键买卖
            {
                path: 'Mdeal',
                name: 'Mdeal',
                component: () =>
                    import ('../views/mobile/trade/deal'),
            },
            {
                path: 'Mconfirmorder',
                name: 'Mconfirmorder',
                component: () =>
                    import ('../views/mobile/trade/payorder'),
            },
            {
                path: 'Mcancleorder',
                name: 'Mcancleorder',
                component: () =>
                    import ('../views/mobile/trade/cancleorder'),
            },
            //订单详情
            {
                path: 'MorderDetail',
                name: 'MorderDetail',
                component: () =>
                    import ('../views/mobile/trade/orderDetail.vue'),
            },
        ]
    },
    //移动端聊天
    {
        path: '/Mchat',
        name: 'Mchat',
        component: () =>
            import ('../views/mobile/chat/index.vue')
    },

    {
        path: '/Mpaysucceed',
        name: 'Mpaysucceed',
        component: () =>
            import ('../views/mobile/paysucceed/paysucceed.vue')
    },
    //移动端我的
    {
        path: '/Musermsg',
        name: 'Musermsg',
        component: () =>
            import ('../views/mobile/usermsg/usermsg.vue')
    },
    //移动端首页
    {
        path: '/Mindex',
        name: 'Mindex',
        component: () =>
            import ('../views/mobile/index/index.vue')
    },
    //移动端消息列表
    {
        path: '/Mmsglist',
        name: 'Mmsglist',
        component: () =>
            import ('../views/mobile/msglist/msglist.vue')
    },
    //移动端登录
    {
        path: '/Mlogin',
        name: 'Mlogin',
        component: () =>
            import ('../views/mobile/login/login.vue')
    },

    //移动端记录
    {
        path: '/Mrecord',
        name: 'Mrecord',
        component: () =>
            import ('../views/mobile/record/record.vue'),
        children: [
            //移动端位置
            {
                path: 'Mposition',
                name: 'Mposition',
                component: () =>
                    import ('../views/mobile/position/position.vue')
            },
            //移动端商品交易
            {
                path: 'MDeal',
                name: 'MDeal',
                component: () =>
                    import ('../views/mobile/deal/deal.vue')
            },
            //财务记录
            {
                path: 'Mtopup',
                name: 'Mtopup',
                component: () =>
                    import ('../views/mobile/topup/topup.vue')
            },
            //OTC
            {
                path: 'Motc',
                name: 'MOTC',
                component: () =>
                    import ('../views/mobile/otc/otc.vue')
            },
        ]
    },
    //移动端提现
        {
            path: '/Mwithdraw',
            name: 'Mwithdraw',
            component: () =>
                import ('../views/mobile/wallet/withdraw.vue')
        },

    //移动端支付成功
    {
        path: '/Mpaysucceed',
        name: 'Mpaysucceed',
        component: () =>
            import ('../views/mobile/paysucceed/paysucceed.vue')
    }
]

const router = new VueRouter({
    // mode: 'history',  //去掉url中的#
    // base: '/dist',
    routes
})

export default router