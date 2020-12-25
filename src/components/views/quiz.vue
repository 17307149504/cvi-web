<template>
  <div class="content-box">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i> 首页</el-breadcrumb-item>
      <el-breadcrumb-item><i class="el-icon-link"></i> 关系查询</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="input-box">
      <h3>问题描述</h3>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="question" placeholder="输入问题" class="input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <div class="tag-box" @click="getTages">
        问题示例：<el-tag v-for="(tag, index) in tagsArr" :key="index">{{tag}}</el-tag>
      </div>
    </div>
    <div class="result-box">
      <h3>答案</h3>
      <div class="results">
        {{answer}}
      </div>
      <h3>关系图</h3>
      <relation-map></relation-map>
    </div>
  </div>
</template>

<script>
import relationMap from '../common/relationmap';
export default {
  data(){
    return {
      question: '',
      tagsArr: ['tag1', 'tag2', 'tag3'],
      answer: ''
    }
  },
methods: {
  onSubmit() {},
  getTages(e) {
    let target = e.target;
    if(target.localName === "span") {
      this.question = target.innerText;
    }
  }
},
components: {
  'relation-map': relationMap,

}
}
</script>

<style>
.input{
  width: 600px;
}
.el-tag {
  cursor: pointer;
}
.results{
  border: 1px solid #ccc;
  min-height: 100px;
  padding: 20px 10px;
  text-align: left;
}
.tag-box{
  width: 60%;
  margin: 0 auto;
  text-align: left;
}
</style>