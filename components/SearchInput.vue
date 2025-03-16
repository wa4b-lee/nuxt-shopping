<template>
  <div class="input-wrapper flex">
    <input type="text" v-model="searchKeyword" class="search-input"/>
    <button @click="$emit('search')" class="btn">검색</button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default:"",
  },
});

const emit = defineEmits(['update:modelValue']);  // 'update:modelValue' 이벤트로 부모와 데이터 동기화

const searchKeyword = ref(props.modelValue);  // 부모에서 전달된 modelValue를 ref로 저장

// searchKeyword 값이 변경될 때마다 부모에게 업데이트 전달
watch(searchKeyword, (newValue) => {
  emit('update:modelValue', newValue);  // 'update:modelValue' 이벤트 발생
});

</script>