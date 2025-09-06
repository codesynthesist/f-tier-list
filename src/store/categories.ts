import { v4 as uuid } from 'uuid';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import { type ICategory } from '@/types';

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<ICategory[]>([]);

  const addCategory = (category: Omit<ICategory, 'id'>) => {
    const id: string = uuid();

    categories.value.push({
      id,
      ...category,
    });
  };

  const editCategory = (id: string, name: string) => {
    const index = categories.value.findIndex(i => i.id === id);

    if (index !== -1) {
      categories.value.splice(index, 1, {
        ...categories.value[index],
        name,
      });
    }
  };

  const deleteCategory = (id: string) => {
    categories.value = categories.value.filter(i => i.id !== id);
  };

  return {
    categories,
    addCategory,
    editCategory,
    deleteCategory,
  };
}, { persist: true });
