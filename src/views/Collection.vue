<template>
	<div class="pos1">
		<div class="bl-container bl-row flex">
			<div v-for="(item,index) in topics" :key="index" class="bl-col-4">
			<div class="card bl-card box-shadow bl-row " >
				<div class="card-header">
					<div class="card-header-title">
						<h3>{{item.topic_name.slice(0,10)}}</h3>
					</div>
					<div class="card-header-pic">
						<img :src="'https://images.weserv.nl/?url='+item.logo">
					</div>
				</div>
				<div class="card-body">
					<p class="body-title">
						{{item.description.slice(0,30)}}
					</p>
					<h5 class="boby-articles">{{item.articles}}篇文章, {{item.follows}}人关注</h5>
				</div>
				<div class="card-bottem">
					<h3>专题主页</h3>
				</div>
			</div>
			</div>
		</div>
		
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				topics:[]
			}
		},
		created:function(){
			this.axios.get('http://localhost:8080/api/topic/all').then(response =>{
				this.topics = response.data.data;
			})
		}
	}
</script>

<style scoped>
	.pos1{
		position: absolute;
		left: 150px;
		top: 100px;
		z-index: 10;
	}
	.card{
		height: 300px;
		/* background-color: #FFB800; */
		flex-wrap: wrap;
	    
	}
	.box-shadow{
		box-shadow:4px 5px 10px #555555;
	}
	.card-header{
		margin-top: 5px;
		flex: 0 0 30%;
		width: 90%;
		/* background-color: #009688; */
		display: flex;
	}
	.card-body{
		display: flex;
		flex-direction: column;
		margin-top: 5px;
		flex: 0 0 30%;
		width: 85%;
		/* background-color: #555555; */
	}
	.card-bottem{
		margin-top: 5px;
		flex: 0 0 10%;
		width: 90%;
		/* background-color:orangered; */
	}
	.card-header-title{
		flex: 0 0 45%;
		/* background-color: green; */
	}
	.card-header-title h3{
		margin-top: 40px;
		margin-left: 10px;
	}
	.card-header-pic{
		flex: 0 0 55%;
		/* background-color: #393D49; */
	}
	.card-header-pic img{
		width: 65%;
		height: 65%;
		border-radius: 5px;
		/* background-color: #B0BEC5; */
		margin-left: 20px;
		margin-top: 20px;
	}
	.card-body-description{
		flex: 0 0 80%;
	}
	.card-body-follows{
		/* background-color: red; */
		flex: 0 0 20%;
	}
	.body-title{
		height: 80%;
	}
	.card-bottem h3{
		margin-top:50px ;
		color: #009688;
	}
	.flex{
		flex-wrap: wrap;
	}
</style>
