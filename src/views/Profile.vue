<template>
	<div class="pos1">
		<!-- 顶部：头像，昵称，个性签名，三个标签 -->
		<div class="bl-container ">
			<div class="header-top">
				<img :src="'https://images.weserv.nl/?url='+user.avatar">
				<p>{{user.nickname}}</p>
				<h3>{{user.introduction}}</h3>
			</div>
			<div class="header-bottom">
					<div class="hb-left">
						<p>我的主页</p>
					</div>
					<div class="hb-mid">
						<p>我的相册</p>
					</div>
					<div class="hb-right">
						<p>管理中心</p>
					</div>
			</div>
		</div>
		<!-- 分为左右，右基本信息 -->
		<div class="bl-container Pro-box">
			<!-- 关注粉丝，二维码 -->
			<div class="box-left">
				<div class="box-left-fans">
					<div class="box-left-1">
						<p>{{user.follows}}</p>
						<p class="font-xt">关注</p>
					</div>
					<div class="box-left-2">
						<p>{{user.fans}}</p>
						<p class="font-xt">粉丝</p>
					</div>
					<div class="box-left-3">
						<p>{{user.articles}}</p>
						<p class="font-xt">文章</p>
					</div>
				</div>
				<div class="QRcode">
					<div class="code-top">
						<h3>二维码</h3>
					</div>
					<div class="code-bottom">
						<img src="../assets/QRcode.png" alt="">
						<h5>扫描二维码使用手机访问本页</h5>
					</div>
					<p>下载</p>
				</div>
			</div>
			<!-- 基本信息 -->
			<div class="box-right">
				<div class="box-right-basic">
					<div class="basic-top">
						<h3>基本信息</h3>
						<h3>编辑</h3>
					</div>
					<div class="basic-bottom">
						 <p>登录名：{{user.mobile}}</p>
						 <p>昵称：{{user.nickname}}</p>
						 <p>所在地：未设置{{user.address}}</p>
						 <p>性别：{{user.gender}}</p>
						 <p>生日：{{user.birthday.year}}年{{user.birthday.month}}月{{user.birthday.day}}日</p>
						 <p>个性签名：{{user.introduction}}</p>
					</div>
				</div>
			</div>
		</div>
		
		
	</div>
	
</template>

<script>
	export default {
		data () {
			return{
				user:JSON.parse(localStorage.user)
			}
		}
		}
</script>

<style scoped>
	.pos1{
		position: absolute;
		left: 50px;
		top: 100px;
	}
	.header-top{
		width: 100%;
		height: 280px;
		/* background-color: #FF6347; */
		margin-left: 100px;
		background: url(../assets/123.jpg) no-repeat ;
	}
	.header-top img{
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin-top: 20px;
		margin-left: 45%;	
	}
	.header-top p{
		font-weight: 600;
		font-size: 27px;
		margin-top: 5px;
		
		text-align: center;
	}
	.header-top h3{
		margin-top: 10px;
		
		text-align: center;
	}
	
	.header-bottom{
		width: 100%;
		height: 60px;
		background-color: #009688;
		margin-left: 100px;
		display: flex;
		
	}
	.shadow{
		box-shadow:4px 5px 10px #555555;
	}
	.hb-left{
		flex: 0 0 33.33%;
		background-color: #555555;
	}
	.hb-left p{
		text-align: center;
		margin-top: 20px;
		
	}
	.hb-mid{
		flex: 0 0 33.33%;
		background-color: #B0BEC5;
	}
	.hb-mid p{
		text-align: center;
		margin-top: 20px;
		
	}
	.hb-right{
		flex: 0 0 33.33%;
		background-color: #FF6347;
	}
	.hb-right p{
		text-align: center;
		margin-top: 20px;
		
	}
	.Pro-box{
		/* background-color:greenyellow; */
		height: 600px;
		margin-left: 220px;
		margin-top: 50px;
		display: flex;
	}
	.box-left{
		flex: 0 0 30%;
		/* background-color: #AAAAAA; */
	}
	.box-right{
		flex: 0 0 70%;
		/* background-color: aquamarine; */
		margin-left:38px;
		
	}
	.box-right-basic{
		width: 90%;
		margin: 0 auto;
		height: 100%;
		background-color: blueviolet;
		display: flex;
		flex-direction: column;
		box-shadow:4px 5px 10px #555555;
	}
	.basic-top{
		flex:  0 0 10%;
		background-color: #969696;
		display: flex;
		justify-content: space-between;
		
	}
	.basic-top h3{
		margin-top: 25px;
	}
	.basic-bottom{
		flex: 0 0 90%;
	}
	.basic-bottom p{
		font-size: 20px;
		margin-top: 35px;
		margin-left: 50px;
		color: beige;
	}
	.box-left-fans{
		width: 100%;
		height: 80px;
		background-color: #8A2BE2;
		display: flex;
		box-shadow:4px 5px 10px #555555;
	}
	.box-left-1{
		flex: 0 0 33.3%;
		background-color: #FFB800;
	}
	.box-left-2{
		flex: 0 0 33.3%;
		background-color: #FF6347;
	}
	.box-left-3{
		flex: 0 0 33.33%;
		background-color: #FFB800;
	}
	.box-left-fans p{
		text-align: center;
		margin-top: 10px;
	}
	.font-xt{
		color: #EEEEEE;
		font-size: 14px;
	}
	.QRcode{
		width: 100%;
		height: 150px;
		margin-top: 20px;
		background-color: #FF6347;
		display: flex;
		flex-direction: column;
		box-shadow:4px 5px 10px #555555;
	}
	.code-top{
		flex: 0 0 40%;
		background-color: #FFB800;
	}
	.code-top h3{
		margin-left: 10px;
		margin-top: 10px;
	}
	.code-bottom{
		flex: 0 0 60%;
		background-color: #8A2BE2;
		display: flex;
	}
	.code-bottom h5{
		margin-top: 20px;
		margin-left: 10px;
	}
	.QRcode p{
		margin-top: -40px;
		margin-left:250px;
		font-size: 14px;
	}
</style>
