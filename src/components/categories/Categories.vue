<template>
    <el-row justify="end">
        <el-button>Добавить категорию</el-button>
    </el-row>

    <el-row class="categories-container">
      <!-- TODO: loop should be here -->
      <el-col>
        <Category/>
      </el-col>

      <el-col>
        <Category/>
      </el-col>
    </el-row>
</template>

<script setup lang="ts">

import Category from './Category.vue';
</script>

<style lang="scss" scoped>
.categories-container {
  margin-top: 10px;
}
</style>
