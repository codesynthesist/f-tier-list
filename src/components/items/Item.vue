<template>
  <el-card class="item">
    <img
      v-if="props.type === ItemTypes.IMAGE"
      :src="props.item.content"
      class="item__img"
    >
    <span v-else class="item__text">{{ props.content }}</span>
  </el-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { type IItem, ItemTypes } from '@/types';

const props = defineProps<IItem>();
</script>

<style lang="scss">
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  margin: 0 10px 10px 0;
  user-select: none;
  cursor: move;

  &:hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25) !important;
  }

  .el-card {
    &__body {
      padding: 5px;
    }
  }

  &__img {
    display: block;
    object-fit: contain;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &__text {
    font-weight: 600;
    font-size: 14px;
  }
}
</style>
