<template>
	<div class="pos1">
		<div class="container">
			<img :src="'https://images.weserv.nl/?url='+users.avatar">
			<p>{{users.nickname}}</p>
			<h3>{{users.introduction}}</h3>
		</div>
		<div class="userDetail-nav">
			<div class="nav-left">
				<h3>ta的主页</h3>
			</div>
			<div class="nav-right">
				<h3>ta的相册</h3>
			</div>
		</div>
		<div class="box-body">
			<div class="box-body-left">
				<div class="box-left-fans">
					<div class="box-left-1">
						<p>{{users.follows}}</p>
						<p class="font-xt">关注</p>
					</div>
					<div class="box-left-2">
						<p>{{users.fans}}</p>
						<p class="font-xt">粉丝</p>
					</div>
					<div class="box-left-3">
						<p>{{users.articles}}</p>
						<p class="font-xt">文章</p>
					</div>
				</div>
				<div class="box-left-message">
					<p>所在地：未设置{{users.address}}</p>
					<p>性别：{{users.gender}}</p>
					<p>生日：{{users.birthday.year}}年{{users.birthday.month}}月{{users.birthday.day}}日</p>
					<p>个性签名：{{users.introduction}}</p>
				</div>
			</div>
			<div class="box-body-right">
				<div class="box-right-top">
					<p>ta的全部文章</p>
				</div>
				<div class="box-right-bottom">
					<p>获取到的文章....暂时没有获取到...</p>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				users: {}
			};
		},
		created() {
			var id = this.$route.params.id;
			/* alert(id) */
			this.axios.get(this.GLOBAL.baseUrl + 'user/' + id).then(res => {
				console.log(res.data.data);
				this.users = res.data.data;
			});
		},
		computed: {},
		methods: {}
	};
</script>

<style scoped>
	.pos1{
		position: absolute;
		left: 50px;
		top: 100px;
	}
	.container{
		width: 80%;
		height: 300px;
		margin-left: 230px;
		background: url(../assets/bg_body.png);
	}
	.container img{
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin-left: 420px;
		margin-top: 10px;
	}
	.container p{
		font-size: 30px;
		font-weight: 500;
		
		color: lavender;
		margin-top: 20px;
		text-align: center;
	}
	.container h3{
		margin-top: 10px;
		color: royalblue;
		text-align: center;
	}
	.userDetail-nav{
		width: 80%;
		height: 50px;
		
		margin-left: 230px;
		margin-top: 10px;
		display: flex;
		box-shadow:4px 5px 10px #555555;
	}
	.nav-left{
		flex: 0 0 50%;
		background-color: #8A2BE2;
	}
	.nav-left h3{
		text-align: center;
		margin-top: 10px;
	}
	.nav-right{
		flex: 0 0 50%;
		background-color: #FFB800;
	}
	.nav-right h3{
		text-align: center;
		margin-top: 10px;
	}
	.box-body{
		width: 80%;
		height: 500px;
		
		margin-left: 230px;
		margin-top: 10px;
		display: flex;
	}
	.box-body-left{
		flex: 0 0 30%;
		/* background-color: greenyellow; */
	}
	.box-body-right{
		flex: 0 0 70%;
		margin-left: 40px;
		/* background-color: tomato; */
		
		
	}
	.box-left-fans{
		width: 100%;
		height: 80px;
		/* background-color: #8A2BE2; */
		display: flex;
		box-shadow:4px 5px 10px #555555;
	}
	.box-left-1{
		flex: 0 0 33.33%;
		background-color: #FFB800;
	}
	.box-left-2{
		flex: 0 0 33.33%;
		background-color: #FF6347;
	}
	.box-left-3{
		flex: 0 0 33.33%;
		background-color: #FFB800;
	}
	.box-left-message{
		width: 100%;
		height: 320px;
		margin-top: 20px;
		background-color: #4169E1;
		box-shadow:4px 5px 10px #555555;
	}
	.box-left-message p{
		margin-top: 30px;
		font-size: 15px;
		font-weight: 600;
	}
	.box-body-right{
		width: 90%;
		height: 500px;
		/* background-color: orchid; */
	}
	.box-right-top{
		width: 90%;
		height: 60px;
		background-color: #4169E1;
		margin-left: 30px;
		box-shadow:4px 5px 10px #555555;
	}
	.box-right-top p{
		font-weight: 600;
		font-size: 24px;
		color: #B0BEC5;
		margin-left: 30px;
		
	}
	.box-right-bottom{
		width: 90%;
		height: 500px;
		background-color: burlywood;
		margin-left: 30px;
		box-shadow:4px 5px 10px #555555;
	}
</style>
