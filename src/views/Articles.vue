<template>
	<div class="pos1">
		<div class="bl-container">
			<div v-for="(item,index) in articles" :key="index">
			<div class="card">
				<div class="card-avatar">
					<router-link :to="{ path:'/user/'+item.article.user_id}">
					<img :src="'https://images.weserv.nl/?url='+item.author.avatar">
					</router-link>
					<h3>{{item.author.nickname}}</h3>
				</div>
				<div class="card-main">
					<router-link :to="{path:'/article/'+item.article.id}">
					<h3>{{item.article.id}}.{{item.article.title}}</h3>
					</router-link>
					<p>{{item.article.summary}}</p>
					<h5>{{item.article.comment}}评论/{{item.article.praise}}喜欢</h5>
				</div>
			</div>
			</div>
			<div>
				<button class="bl-btn bl-btn-round bl-btn-nomal bl-shadow bl-btn-default click-more" @click="loadMore">点击加载更多</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				articles:[],
				currentPage:1,
				count:10
			}
		},
		/* created:function(){
			this.axios.get('http://localhost:8080/article/nickname').then(response =>{
				this.articles = response.data.data;
			})
		}, */
		created() {
				this.axios
					.get(this.GLOBAL.baseUrl + 'article',{
						params: {
							page:this.currentPage,
							count:this.count
						}
					})
					.then(res => {
						console.log(res.data.data.length);
						this.articles = res.data.data;
					});	
			},
			methods: {
				loadMore() {
					this.currentPage = this.currentPage + 1;
					this.axios
					          .get(this.GLOBAL.baseUrl + 'article',{
								  params:{
									  page:this.currentPage,
									  count:this.count
								  }
							  })
							  .then(res => {
								  console.log(res.data.data.length);
								  let temp = [];
								  temp = res.data.data;
								  for(var i=0;i<temp.length;i++){
									  this.articles.splice(this.currentPage * this.count,0,temp[i]);
								  }
								  console.log(this.articles.length);
							  });
				}
			}
	};
</script>

<style scoped="scoped">
	.pos1{
		position: absolute;
		left: 150px;
		top: 100px;
		z-index: 10;
	}
	.card{
		width: 100%;
		height: 200px;
		/* background-color: #009688; */
		box-shadow:4px 5px 10px #555555;
		display: flex;
		margin-bottom: 18px;
	}
	.card-avatar{
		flex: 0 0 30%;
		/* background-color: #B0BEC5; */
	}
	.card-main{
		flex: 0 0 70%;
		/* background-color: green; */
	}
	.card-avatar img{
		height: 70px;
		width: 70px;
		border-radius: 50%;
		margin-left: 110px;
		margin-top: 35px;
	}
	.card-avatar h3{
		 text-align: center;
		margin-top: 10px;
	}
	.card-main h3{
		color:tomato;
		margin-top: 20px;
	}
	.card-main p{
		margin-top: 20px;
	}
	.card-main h5{
		color: #969696;
		margin-top: 55px;
	}
	.click-more{
		width: 100%;
		margin-top: 20px;
	}
</style>
