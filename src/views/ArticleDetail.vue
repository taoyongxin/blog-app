<template>
<div class="pos1">
<div class="bl-container">
	<h2>{{ articleVo.title}}</h2>
	<div v-html="articleVo.content" class="body">
		{{articleVo.content}}
	</div>
</div>
</div>
</template>

<script>
	export default {
		data() {
			return {
				articleVo: {}
			};
		},
		created() {
			var id = this.$route.params.id;
			this.axios.get(this.GLOBAL.baseUrl + 'article/' + id).then(res => {
				console.log(res.data.data);
				this.articleVo = res.data.data;
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
	.pos1 h2{
		text-align: center;
	}
	.body{
		margin-top: 20px;
		margin-left: 100px;
	}
</style>
