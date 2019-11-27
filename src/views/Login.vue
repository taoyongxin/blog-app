<template>
	<div class="bj">
	<div class="bl-df-center">
		<div class="login-box bl-shadow">
			<div class="box-top">
				<input type="text" placeholder="输入手机号" class="bl-input-box" v-model="userDto.mobile" />
				<input type="password" placeholder="输入密码" class="bl-input-box" v-model="userDto.password" />
			</div>
			<div class="code-box">
							<input type="text" v-model="userDto.code" class="bl-input-box" />
							<img class="verify" @click.prevent="refresh" ref="codeImg" />
			</div>

			<div class="box-bottom">
				<button class="bl—btn bl-btn-round bl-btn-default bl-btn-nomal bl-shadow " @click="signIn(userDto)">确定</button>
				<button class="bl—btn bl-btn-round bl-btn-warning bl-btn-nomal bl-shadow">取消</button>
				<router-link to='/sign-up'><p>没有账号？去注册</p></router-link>
			</div>
			
		</div>
	</div>
	</div>
	
</template>

<script>
	export default {
	  data() {
	    return {
	      userDto: {
	        mobile: '',
	        password: '',
			code:''
	      },
		  token: ''
	    };
	  },
	  created(){
		  this.axios.get(this.GLOBAL.baseUrl + 'api/code', { responseType: 'blob' }).then(res => {
		  			// console.log(res);
		  			var img = this.$refs.codeImg;
		  			let url = window.URL.createObjectURL(res.data);
		  			img.src = url;
		  			console.log(res.headers);
		  			//取得后台通过响应头返回的sessionId的值
		  			this.token = res.headers['access-token'];
		  			console.log(this.token);
		  		});
	  },
	  methods: {
	    signIn(userDto) {
	      this.axios.post('http://localhost:8080/sign-in', JSON.stringify(this.userDto)).then(response => {
	       console.log(response.data.msg)
	        if (response.data.msg === '登陆成功') {
				 alert(response.data.msg);
	          //将后台的用户信息存入本地存储
	          localStorage.user = JSON.stringify(response.data.data);
			  //路由跳转
	          this.$router.push('/index');
	        }
	      });
	    },
		
		/* signIn(userDto) {
					this.axios({
						method: 'post',
						url: this.GLOBAL.baseUrl + 'api/user/sign-in',
						data: JSON.stringify(this.userDto),
						headers: {
							'Access-Token': this.token
						}
					}).then(res => {
						if (res.data.msg === '成功') {
							alert('登录成功');
							localStorage.setItem('user', JSON.stringify(res.data.data));
							this.$router.push('/');
						} else {
							alert(res.data.msg);
							this.userDto.code = '';
						}
					});
				}, */
				refresh() {
					this.axios.get(this.GLOBAL.baseUrl + 'api/code', { responseType: 'blob' }).then(res => {
						console.log(res);
						var img = this.$refs.codeImg;
						let url = window.URL.createObjectURL(res.data);
						img.src = url;
					});
				}

	  }
	};
</script>

<style scoped>
	.login-box{
		margin-top: 200px;
		width: 400px;
		height: 450px;
	}
	.box-top{
		margin-top: 50px;
		margin-left: 120px;
	}
	.box-bottom{
		margin-top: 20px;
		margin-left: 110px;
	}
	.code-box{
		margin-left: 120px;
	}
	.bj{
		width: 100%;
		height: 700px;
		background: url(../assets/bjt.jpg);
	}
	.box-bottom p{
		color: blue;
		margin-top: 20px;
		margin-left: 30px;
	}
</style>
