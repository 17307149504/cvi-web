<template>
  <div class="content-box">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i> 首页</el-breadcrumb-item>
      <el-breadcrumb-item><i class="el-icon-link"></i> 关系查询</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="input-box">
      <h3>输入查询条件，开始进行查询</h3>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="form.entity1" placeholder="实体1"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select>
            <el-options v-for="(option,index) in optionsArr" :key="index"></el-options>
          </el-select>
        </el-form-item>
        <el-form-item> 
          <el-input v-model="form.entity2" placeholder="实体2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="result-box">
      <h3>实体关系图</h3>
      <relation-map></relation-map>
      <h3>关系列表</h3>
      <my-table></my-table>
    </div>
  </div>
</template>

<script>
import relationMap from '../common/relationmap';
import table from '../common/table'
export default {
data() {
  return {
    optionsArr: [
      'accompany_with',
      'anatomy_part',
      'because_of'
    ],
    form: {
      entity1: '',
      entity2: '',

    }
  }
},
methods: {
  onSubmit() {
    console.log("wcl");
  }
},
components: {
  'relation-map': relationMap,
  'my-table': table
}
}
</script>

<style>

</style>