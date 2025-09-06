<template>
  <el-dialog
    v-model="modelValue"
    title="Добавить"
    :close-on-click-modal="false"
    destroy-on-close
    @opened="onModalOpened"
    @closed="onModalClosed"
  >
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="auto"
    >
      <el-form-item label="Тип контента" prop="type">
        <el-select v-model="form.type" placeholder="Тип контента">
          <el-option
            label="Текст"
            :value="ItemTypes.TEXT"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Контент" prop="content">
        <el-input
          v-model="form.content"
          type="textarea"
          :rows="2"
          ref="contentInputRef"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="modelValue = false">Отмена</el-button>
        <el-button type="primary" @click="submit">
          Добавить
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, defineModel, defineEmits, nextTick } from 'vue';
import { type FormRules, type FormInstance, type ElInput } from 'element-plus';
import { type IItem, ItemTypes } from '@/types';

type FormData = Omit<IItem, 'id'>;

const modelValue = defineModel<boolean>();
const emit = defineEmits<{
  confirm: [form: FormData],
}>();

const formRef = ref<FormInstance>(null);
const contentInputRef = ref<InstanceType<typeof ElInput>>(null);

const form = reactive<FormData>({
  type: ItemTypes.TEXT,
  content: '',
});
const rules = reactive<FormRules<FormData>>({
  type: [
    { required: true, message: 'Поле обязательно', trigger: 'blur' },
  ],
  content: [
    { required: true, message: 'Поле обязательно', trigger: ['change', 'blur'] },
  ],
});

const onModalOpened = () => {
  nextTick(() => {
    contentInputRef.value?.focus();
  });
};

const onModalClosed = () => {
  form.type = ItemTypes.TEXT;
  form.content = '';
  formRef.value?.clearValidate();
};

const submit = async () => {
  await formRef.value.validate((valid, fields) => {
    if (valid) {
      emit('confirm', form);
    } else {
      console.log('error submit!', fields);
    }
  });
};
</script>
