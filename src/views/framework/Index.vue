<template>
<div id="Index">
  <el-row>
    <Navbar></Navbar>
  </el-row>
  <el-row>
    <el-col class="menu-col" :span="3">
      <Menu></Menu>
    </el-col>
    <el-col class="menu-col" :span="9">
      <router-view></router-view>
    </el-col>
  </el-row>
</div>
</template>

<script>
import Menu from "@/views/framework/Menu/Index";
import Navbar from "@/views/framework/Navbar";
export default {
  name: "Index",
  components:{Navbar, Menu}
}
</script>

<style scoped>

</style>
