<script>
	export default{
		name: 'nav'
	}
</script>
<template>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header"><a href="#" class="navbar-brand" v-link="{path:'/'}">购物车</a></div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li v-link="{ path: '/index', activeClass: 'active' }">
						<a href="#!">iphone 6s</a>
					</li>
					<li v-link="{ path: '/cart', activeClass: 'active' }">
						<a href="#!">
							购物车<span class="badge text-danger"></span>
						</a>
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