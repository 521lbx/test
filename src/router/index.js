import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '',
			component: resolve => require(['@/view/main'], resolve),
			children: [
				{
					path: 'index', //首页
					name: 'index',
					component: resolve => require(['@/view/index'], resolve)
				},
				{
					path: 'orders', //订单页
					name: 'orders',
					component: resolve => require(['@/view/orders'], resolve)
				},
				{
					path: 'mine', //我的
					name: 'mine',
					component: resolve => require(['@/view/mine'], resolve)
				},
				{
					path: '', //首页
					name: '',
					component: resolve => require(['@/view/index'], resolve)
				},
			]
		}
  ]
})
