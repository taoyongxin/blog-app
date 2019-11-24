<template>
	
	<div class="bl-container bl-row">
		<div class="bl-col-8 pos1">
			<div class="card" v-for="(article,index) in articles" :key="index">
				<div class="bl-col-8">
					<div class="card-header bl-title">
						<router-link :to="{ path:'/article/' + article.id}">
							{{article.title}}
						</router-link>
						
					</div>
					<div class="card-body bl-meta">
						<div>{{article.summary}}</div>
						<div class="card-bottem">
							<p>作者: {{article.nickname}}</p>
							<p>评论数: {{article.comment}}</p>
							<p>点赞数: {{article.praise}}</p>
						</div>
					</div>
				</div>
				<div class="bl-col-4">
					<img :src="'https://images.weserv.nl/?url='+article.article_pic" class="picture">
				</div>
			</div>
		</div>
		<div class="bl-col-4  pos1">
			<div class="label">
				<a href="#"><img src="../assets/1.png" alt=""></a>
				<a href="#"><img src="../assets/2.png" alt=""></a>
				<a href="#"><img src="../assets/3.png" alt=""></a>
				<a href="#"><img src="../assets/4.png" alt=""></a>
			</div>
			<div class="change-style">
				<div>
					<p>推荐作者</p>
				</div>
				<div>
					<p @click="change" class="finger">换一批</p>
				</div>
				
			</div>
			<div class="bj" v-for="(user,index) in users.slice(start,end)" :key="index" v-show="look">
				<div class="side">
					<div class="side-left">
						<img :src="'https://images.weserv.nl/?url='+user.avatar" class="picture">
					</div>
					<div class="side-right">
						<h4>{{user.nickname}}</h4>
						<h6>{{user.introduction}}</h6>
					</div>
					
				</div>
			</div>
			<div class="bj" v-for="(user,index) in users" :key="index" v-show="!look">
				<div class="side">
					<div class="side-left">
						<img :src="'https://images.weserv.nl/?url='+user.avatar" class="picture">
					</div>
					<div class="side-right">
						<h4>{{user.nickname}}</h4>
						<h6>{{user.introduction}}</h6>
					</div>
					
				</div>
			</div>
			<div class="LookAll">
				<p @click="changeTab">查看所有</p>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		data(){
			return {
				articles:[],
				users:[],
				start: 0,
				end: 5,
				look: true
			}
		},
		created:function(){
			this.axios.get('http://localhost:8080/article').then(response =>{
				this.articles = response.data.data;
				// console.log(response.data.data);
				// 控制台查看数据
				// alert(response.data.data.length);
				// 弹出窗口提示数据条数
			})
				this.axios.get('http://localhost:8080/user').then(res =>{
					this.users = res.data.data;
			})
		},
		methods: {
			change() {
					this.start = this.start + 5;
					this.end = this.end + 5;
			},
			changeTab: function() {
				this.look = !this.look;
			},
		}
		
		
	}
</script>

<style scoped>
	@font-face {
		font-family: 'iconfont';
		/* project id 1432363 */
		src: url('//at.alicdn.com/t/font_1432363_xaa6kill2z.eot');
		src: url('//at.alicdn.com/t/font_1432363_xaa6kill2z.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1432363_xaa6kill2z.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1432363_xaa6kill2z.woff') format('woff'),
			url('//at.alicdn.com/t/font_1432363_xaa6kill2z.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1432363_xaa6kill2z.svg#iconfont') format('svg');
	}
	
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		color: #aaa;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}
	.card{
		width: 80%;
		margin: 0 auto;
		/* border: 2px solid black; */
		display: flex;
		/* flex-direction: column; */
		margin-bottom: 20px;
	}
	.pos1{
		margin-top: 100px;
	}
	
	
	.card-header{
		flex:1 1 20% 
	}
	.card-body{
		flex: 1 1 80%;
	}
	.card-bottem{
		display: flex;
	}
	.card-bottem p{
		margin-right: 20px;
	}
	.picture{
		margin-left: 10px;
		height: 100px;
		width: 150px;
		border-radius: 5px;
	}
	.label img{
		height: 60px;
		width: 300px;
	}
	.label{
		margin-bottom: 80px;
	}
	.side{
		display: flex;
		margin-bottom:10px;
		width: 300px;
		height: 50px;
		/* background-color: #B0BEC5; */
	}
	
	.side img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	.authorright{
		color: rgb(64, 65, 60);
		margin-top: 50px;
		margin-left: 200px;
	}
	
	.side-left {
		flex: 1 1 30%;
	}
	.side-right{
		flex: 1 1 70%;
	}
	.change-style{
		width: 70%;
		display: flex;
		margin-bottom: 20px;
		justify-content: space-between;
	}
	.LookAll{
		width: 300px;
		height: 30px;
		background-color: rgb(247, 247, 247);
		border: 1px solid #969696;
		text-align: center;
		cursor: pointer;
	}
	
</style>
