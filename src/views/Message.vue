<template>
	<div class="pos1">
		<ul>
			<li>
				<router-link to="/message/yesMessage">已读消息</router-link>
			</li>
			<li>
				<router-link to="/message/noMessage">未读消息</router-link>
			</li>
		</ul>
		<router-view class="box" />
	</div>
</template>

<script>
</script>

<style scoped>
	ul{
		display: flex;
		list-style: none;
		width: 100%;
		justify-content: space-around;
	}
	.box{
		width: 70%;
		margin: 0 auto;
		background-color: #fff;
		min-height: 400px;
	}
	.pos1{
		position: absolute;
		left: 50px;
		top: 100px;
	}
</style>
