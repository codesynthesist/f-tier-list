<template>
  <el-row>
    <Item
      v-for="item of items"
      :id="item.id"
      :key="item.id"
      :type="item.type"
      :content="item.content"
    />

    <el-card class="item item_plus" @click="setModalState(true)">
      <el-icon>
        <Plus/>
      </el-icon>
    </el-card>
  </el-row>

  <teleport to="body">
    <AddItemModal
      v-model="isAddItemModalOpened"
      @confirm="onAddItem"
    />
  </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Plus } from '@element-plus/icons-vue';

import Item from '@/components/items/Item.vue';
import AddItemModal from '@/components/items/AddItemModal.vue';
import { useItemsStore } from '@/store/items';
import { IItem } from '@/types';

const { items, addItem } = useItemsStore();

const isAddItemModalOpened = ref<boolean>(false);

const setModalState = (state: boolean) => {
  isAddItemModalOpened.value = state;
};

const onAddItem = (item: IItem) => {
  addItem(item);
  setModalState(false);
};
</script>

<style scoped lang="scss">
.item {
  &_plus {
    cursor: pointer;
  }
}
</style>
