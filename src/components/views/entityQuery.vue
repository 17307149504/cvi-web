<template>
  <div class="content-box">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i> 首页</el-breadcrumb-item>
      <el-breadcrumb-item><i class="el-icon-share"></i> 实体查询</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="input-box">
      <h3>输入实体名称，开始进行查询</h3>
      <el-input placeholder="请输入实体名称" v-model="entityName" width="200"></el-input>
      <el-button type="primary" class="submit-btn" @click="startRecognition">查询</el-button>
    </div>
    <div class="result-box" v-show="ifStartRecognition">
      <h3>实体关系图</h3>
      <relation-map></relation-map>
      <h3>关系列表</h3>
      <my-table></my-table>
    </div>
  </div>
</template>

<script>
import relationMap from '../common/relationmap'
import table from '../common/table'
export default {
data() {
  return {
    entityName: '',
    ifStartRecognition: false,
  }
},
components: {
  "relation-map": relationMap,
  "my-table": table
},
methods: {
  startRecognition() {
    if(!this.ifStartRecognition) this.ifStartRecognition = true;
  }
}
}
</script>

<style>
.el-input {
  width: 300px;
  display: block;
  margin: 0 auto;
}
.submit-btn {
  margin-top: 40px;
  width: 200px;
}
/* .inputs{
  background-color: pink;
  width: 60%;
  margin: 0 auto;
} */
</style>