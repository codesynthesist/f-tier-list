<template>
  <div class="category">
    <div class="category__name">
      <input
        type="text"
        :value="name"
        @change="$emit('category:change-content', $event.target.value)"
      >
    </div>
    <div class="category__items">

    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface TierItem {
  id: number,
  type: 'text' | 'image', // text, image
  content: string, // text or url of image
}

type Props = {
  name: string,
  items: Array<TierItem>,
}

defineProps<Props>();

</script>

<style scoped lang="scss">
.category {
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #000;
  padding: 5px;

  &__name {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
