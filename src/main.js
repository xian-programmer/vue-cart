import Vue from 'vue'
import VueRouter from 'vue-router'
// import {ROUTES} from './router'
import App from './App.vue'


Vue.config.devtools = true

Vue.use(VueRouter)

const routes = [
	{path:'/',component: require("./components/Index.vue")},
    {path:'/index',component:require("./components/Index.vue")},
    {path:'/cart',component:require("./components/Cart.vue")}
]
var router = new VueRouter({
	routes
})
// ConfigRouter(router)
router.beforeEach(function() {
  window.scrollTo(0, 0)
})

// If no route is matched redirect home
// router.redirect({
//   '*': '/'
// })
// router.start(App, '#root')

// new Vue({
//   el: '#app',
//   render: h => h(App),
//   router
// })
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})