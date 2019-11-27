<template>
	<div id="bg">
		<div class="login-box">
			<input type="text" class="bl-input-box" placeholder="请输入注册手机号码" v-model="userDto.mobile" id="mobile" />
			<input type="password" class="bl-input-box" placeholder="请输入注册密码" v-model="userDto.password" />
			<input type="button" class="bl—btn bl-btn-round bl-btn-default bl-btn-nomal bl-shadow" value="注册" @click="signUp(userDto)" />
			<router-link to="/login"><p class="">已有账号？去登录</p></router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userDto: {
					mobile: '',
					password: ''
				}
			};
		},
		created() {
			var number = Math.ceil(Math.random() * 10);
			this.codeUrl = this.GLOBAL.baseUrl + '/code?num = ' + number;
		},
		methods: {
			signUp(userDto) {
				this.axios({
					method: 'post',
					url: this.GLOBAL.baseUrl + 'sign-up',
					data: JSON.stringify(this.userDto)
				}).then(res => {
					if (res.data.msg === '成功') {
						alert('注册成功');
						this.$router.push('/sign-in');
					} else {
						alert(res.data.msg);
					}
				});
			}
		}
	};
</script>

<style scoped>
	#bg {
		position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		background-image:url(../assets/bjt.jpg);
	}
	.login-box {
		width: 450px;
		height: 300px;
		/* border: 2px solid rgb(170, 208, 95); */
		border-radius: 10px;
		background-color: rgb(0, 0, 0, 0.2);
		position: absolute;
		top: 200px;
		left: 30%;
	}
	.login-box p{
		color: blue;
		margin-top: 20px;
		margin-left: 130px;
	}
	.login-box input{
		margin-left: 130px;
		margin-top: 20px;
	}
	.login-form {
		padding-top: 40px;
		width: 70%;
		margin: 0 auto;
		text-align: left;
	}
	.login-form input {
		width: 100%;
		height: 35px;
		outline: none;
		border: none;
		margin-bottom: 20px;
		border-radius: 5px;
	}
</style>
