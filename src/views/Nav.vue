<template>
	<div>
		<ul>
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
			
			<li v-if="!this.user">
				<router-link to="/login">登录</router-link>
			</li>
			<li v-if="this.user">
				<router-link to="/profile"><img :src="this.user.avatar" class="avatar"></router-link>
			</li>
			<li v-if="this.user" @click="logout" id="logout">退出</li>
		</ul>
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
	ul{
		display: flex;
		list-style: none;
		width: 100%;
		justify-content: space-around;
	}
	.avatar{
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	
</style>
