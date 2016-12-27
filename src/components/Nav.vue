<script>
	export default{
		name: 'nav',
		vuex: {
	      getters: {
	        cart: ({ index }) => index.cart
	      }
	    },
	    computed: {
	      'totalItem': function() {
	        return this.cart.length
	      }
	    }
	}
</script>
<template>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<router-link to="/" class="navbar-brand">购物车</router-link>
			</div>
			<div class="collapse navbar-collapse">

				<ul class="nav navbar-nav">

					<li >
						<router-link to="/index">iphone 6s</router-link>
					</li>
					<li >
						<router-link to="/cart">购物车<span class="badge text-danger" v-text="totalItem" v-if="totalItem"></span></router-link>
						
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style media="screen">
  .text-danger {
    color: #fff;
    background-color: #d9534f;
  }
</style>