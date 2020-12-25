<template>
    <div class="nav-box">
        <span class="title">CVI知识图谱</span>
        <el-menu
            :default-active="activeIndex"
            router
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="/">实体识别</el-menu-item>
            <!-- <el-menu-item index="/entityQuery">实体查询</el-menu-item>
            <el-menu-item index="/relationalQuery">关系查询</el-menu-item> -->
            <el-menu-item index="/quiz">知识问答</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/",
    };
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
};
</script>

<style>
.nav-box {
    position: relative;
}
.title {
    position: absolute;
    top: 10px;
    left: 0;
    z-index: 10;
    font-size: 1.5em;
}
.el-menu.el-menu--horizontal {
    padding-left: 140px;
}
</style>