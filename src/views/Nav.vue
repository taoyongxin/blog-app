<template>
	<div>
		<div class="navtop">
			<div class="left">
				<li>
					<router-link to="/">简书</router-link>
				</li>
				<li>
					<router-link to="/attention">关注</router-link>
				</li>
				<li>
					<router-link to="/message">消息</router-link>
				</li>
				<li>
					<router-link to="/collection">专题</router-link>
				</li>
			</div>
			<div class="right">
				<li v-if="!this.user">
					<router-link to="/login">登录</router-link>
				</li>
				<li v-if="this.user" @click="logout" id="logout" class="pos finger">退出</li>
				<li v-if="this.user">
					<router-link to="/profile"><img :src="this.user.avatar" ></router-link>
				</li>
				
			</div>
		</div>	
			<router-view class="bl-container" />	
	</div>
	
	
</template>

<script>
	export default {
		data () {
			return{
				user:JSON.parse(localStorage.user)
			}
		},
		created: function(){
			if(this.user){
				console.log(this.user)
			}
		},
		methods:{
			logout () {
				alert('是否需要注销')
				this.user = null
				localStorage.clear()
			}
		}
	}
</script>

<style scoped>
	
	.navtop{
		position: fixed;
		width: 100%;
		height: 60px;
		background: #B0BEC5;
		color: #FFF;
		display: flex;
		align-items: center;
		justify-content:space-between;
	}
	.left {			
		 display: flex;
		 flex-direction: row;		
		 padding-left: 30px;
	}
	.left li {
		margin-right: 120px;
	}
	.right {
		 display: flex;
		 flex-direction: row-reverse;
		 padding-right: 20px;
	}
	.right li{
		margin-left: 40px;
	}
    .right li img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	li {
		list-style: none;
	}
	.pos{
		margin-top: 8px;
		margin-right: 20px;
	}
	
	
</style>
