// Route config
// export default function(router) {
//   router({
//     '/': {
//       component: require("./components/Index.vue")
//     },
//     '/index': {
//       component: require("./components/Index.vue")
//     },
//     '/cart': {
//       component: require("./components/Cart.vue")
//     }
//   })
// }
export const ROUTES = [
  {path:'/',component: require("./components/Index.vue")},
  {path:'/index',component:require("./components/Index.vue")},
  {path:'/cart',component:require("./components/Cart.vue")}
]