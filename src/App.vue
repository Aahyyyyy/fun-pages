<template>
  <div class="home">
    <el-container class="fun-home">
      <el-header class="fun-header"><Header /></el-header>
      <el-container>
        <el-aside class="fun-side"><Side /></el-aside>
        <el-main class="fun-content"><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import Header from './layouts/header/Header.vue'
  import Side from './layouts/side/Side.vue'
</script>
