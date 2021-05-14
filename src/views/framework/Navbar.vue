<template>
<div class="myNavbar">
  <el-col :span="4">
    <h3 class="sysName">
      <i class="icon iconfont icon-zhinengyun logo"></i>智能客服系统
    </h3>
  </el-col>

  <el-col :span="3" class="userInfo">
    <div class="fenge"></div>
    <div class="portrait">
      <img src="../../assets/navbar/images/portrait.png">
    </div>

    <div class="userBox">
      <span class="userName">张小飞</span><br>
      <span class="good">上午好</span>
    </div>

  </el-col>
</div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.myNavbar{
  height: 55px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.2);
}
.sysName{
  color: #0090ff;
  margin:0px;
  line-height: 55px;
  margin-left: 20px;
}
.logo{
  font-size: 25px;
  margin-right: 10px;
 }
.userInfo{
  height: 55px;
  float: right;
  width: 150px;
}

.fenge{
  width: 1.5px;
  height: 30px;
  background-color: #d7d7d7;
  float: left;
  margin-top: 12.5px;
  margin-right: 3px;
}

.portrait{
  float: left;
  width: 55px;
  height: 55px;
}
.portrait img{
  width: 55px;
  height: 55px;
  padding: 10px;
  border-radius: 100%;
}
.userBox{
  float: left;

  height: 55px;
  padding-left: 5px;
  padding-top: 5px;
  cursor: pointer;
  text-align: center;
}
.userBox .userName{
  font-size: 18px;
  color: #0099ff;
}
.userBox .good{
  font-size: 13px;
  color: #767676;
}
</style>
