<template>
  <div id="Index">
    <div class="container">
      <div class="row">
        <div class="login col-md-8 col-md-offset-2">
          <div class="text-center sysTitle">
            <h1><span class="sysName">爱心人寿</span> 智能客服</h1>
          </div>
          <div class="login-content col-md-6 col-md-offset-3">
            <form class="form form-horizontal login-form" @submit="login()">
              <div class="form-group" :class="{'has-error':loginStatus.name == 'empty'}">
                <input type="text" v-model="loginInfo.name" class="form-control loginName" placeholder="登录名">
                <i class="iconfont icon-yonghu" style="margin-right: 4px;"></i>
              </div>
              <div class="form-group" :class="{'has-error':loginStatus.password == 'empty'}">
                <input type="text" v-model="loginInfo.password" class="form-control password" placeholder="密码">
                <i class="iconfont icon-mima" style="margin-right: 10px;"></i>
              </div>
              <hr>
              <div class="col-md-9">
                <span class="textInfo">{{loginStatus.textInfo}}</span>
              </div>
              <div class="col-md-3">
                <input type="submit" class="btn btn-primary" value="登录">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      loginInfo:{
        name:'',
        password:''
      },
      loginStatus:{
        name:'',
        password:'',
        textInfo:''
      }
    };
  },
  methods: {
    login(){
      this.loginStatus.textInfo = ''
      if(this.loginInfo.name == ''){
        this.loginStatus.name = 'empty'
        this.loginStatus.textInfo = '请输入用户名'
        return false
      }
      if(this.loginInfo.password == ''){
        this.loginStatus.password = 'empty'
        this.loginStatus.textInfo = '请输入密码'
        return false
      }

      localStorage.token = this.loginInfo.name
      this.loginStatus.textInfo = '正在登录...'

      this.$router.push({ path: '/' })

      return false
    }
  },
  mounted() {

  }
};
</script>

<style lang='less' scoped>
#Index{
  background-image: url(~@/assets/login/loginBackground.jpg);
  width: 100vw;
  height: 100vh;
}
.login{
  margin-top: 5vh;
}
.login-content{
  background: #f4f4f4;
  padding: 30px 30px 20px 30px;
  border-radius: 4px;
  margin-top: 10px;
}
.form-horizontal .form-group{
  margin-left: 0px;
  margin-right: 0px;
}
.login-form hr{
  border-top-color: #c1c0c0;
}
.sysTitle h1{
  color: white;
}
.sysName{
  color: #dd5a43;
}
.textInfo{
  color: #d93c20;
  height: 34px;
  line-height: 34px;
}
.login-form i{
  color: #777;
  float: right;
  margin-top: -30px;
}
.login-form .form-control{
  padding-right: 34px;
}
</style>
