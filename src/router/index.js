import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '@/views/Nav.vue'
import Login from '@/views/Login.vue'
import Message from '@/views/Message.vue'
import Index from '@/views/Index.vue'
import Profile from '@/views/Profile.vue'
import YesMessage from '@/views/YesMessage.vue'
import NoMessage from '@/views/NoMessage.vue'
import Attention from '@/views/Attention.vue'
import Collection from '@/views/Collection.vue'
import Articles from '@/views/Articles.vue'
import ArticleDetail from '@/views/ArticleDetail'

//引入所有出现在路由中的页面组建
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Nav,
	children :[
		{
			path: '/',
			redirect: 'index'
		},
		{
			path : 'index',
			component : Index
		},
		{
			path : 'articles',
			name : 'my-articles',
			component : Articles
		},
		{
			path : 'article',
			component : ArticleDetail
		},
		{
			path : 'message',
			component : Message,
			children :[
				{
					path: '/',
					component : YesMessage
				},
				{
					path: 'yesMessage',
					component : YesMessage
				},
				{
					path: 'noMessage',
					component : NoMessage
				}
			]
		},
		{
			path : 'attention',
			component : Attention
		},
		{
			path : 'collection',
			component : Collection
		},
		{
			path : 'profile',
			component : Profile
		}
	]
  },
  {
    path: '/login',
    name: 'login',
	component : Login
  }
]

const router = new VueRouter({
  routes
})

export default router
