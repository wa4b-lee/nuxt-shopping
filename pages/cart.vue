<template>
  <div class="container-box">
    <h1 class="list-title">카트페이지 입니다.</h1>
    <CartList/>
    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/index'

// Pinia store 사용
const cartStore = useCartStore();

// 컴포넌트가 마운트될 때 장바구니 아이템을 불러옴
onMounted(() => {
  cartStore.fetchCartItems();
})
</script>
