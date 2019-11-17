<template>
	<div class="bl-container bl-row">
		<div class="bl-col-8">
			<div class="card" v-for="(article,index) in articles" :key="index">
				<div class="bl-col-8">
					<div class="card-header bl-title">
						{{article.title}}
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
		<div class="bl-col-4 bl-row">
			<div class="label">
				<img src="../assets/1.png" alt="">
				<img src="../assets/2.png" alt="">
				<img src="../assets/3.png" alt="">
				<img src="../assets/4.png" alt="">
			</div>
			
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				articles:[]
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
		},
	}
</script>

<style>
	.card{
		width: 80%;
		margin: 0 auto;
		/* border: 2px solid black; */
		display: flex;
		/* flex-direction: column; */
		margin-bottom: 20px;
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
</style>
