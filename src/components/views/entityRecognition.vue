<template>
  <div class="content-box">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i> 首页</el-breadcrumb-item>
      <el-breadcrumb-item><i class="el-icon-search"></i> 实体识别</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="input-box">
      <h3>输入文本，开始实体识别</h3>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea"
      >
      </el-input>
      <el-button type="primary" class="submit-btn" @click="startRecognition">开始识别</el-button>
    </div>
    <div class="result-box" v-show="entityRecognitionResult.length!==0">
      <h3>实体识别结果</h3>
      <div class="results">
        <span v-for="(item,index) in entityRecognitionResult" :key="index" :class="item.isEntity ? 'span-entity' : 'span-notentity'">
          {{item.str}}
        </span>
      </div>
      <h3>中文分词结果</h3>
      <div class="results">
         <span v-for="(item,index) in segmentationResult" :key="index">
          {{item.str}}<span class="part">[{{item.part}}]</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: '',
      entityRecognitionResult: [
        {
          str: '奥迪',
          isEntity: true,
        },{
          str: '是辆车',
          isEntity: false,
        }
      ],
      segmentationResult: [
        {
          str: '奥迪',
          part: 'np'
        },{
          str: '是',
          part: 'v'
        },{
          str: '辆',
          part: 'q'
        },{
          str: '车',
          part: 'n'
        }
      ]
    }
  },
  components: {
    
  },
  methods: {
    startRecognition() {
      // 这里开始识别，获取到输入的文本。
    }
  }
};
</script>

<style scoped>
.span-entity {
  color: blue;
}
.results{
  border: 1px solid #ccc;
  min-height: 100px;
  padding: 20px 10px;
  text-align: left;
}
.part{
  color: blue
}
</style>