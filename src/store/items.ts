import crypto from 'node:crypto';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import { type IItem } from '@/types';

export const useItemsStore = defineStore('items', () => {
  const items = ref<IItem[]>([]);

  const addItem = (item: Omit<IItem, 'id'>) => {
    const id: string = crypto.randomUUID();

    items.value.push({
      id,
      ...item,
    });
  };

  const editItem = (id: string, content: string) => {
    const index = items.value.findIndex(i => i.id === id);

    if (index !== -1) {
      items.value.splice(index, 1, {
        ...items.value[index],
        content,
      });
    }
  };

  const deleteItem = (id: string) => {
    items.value = items.value.filter(i => i.id !== id);
  };

  return {
    items,
    addItem,
    editItem,
    deleteItem,
  };
});
