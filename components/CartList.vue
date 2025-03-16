<template>
    <div class="list-wrapper">
      <ul>
        <li class="list-item" v-for="cartItem in cartStore.cartItems" :key="cartItem.id">
          <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name">
          <div class="description">
            <p>{{ cartItem.name }}</p>
            <span>{{ cartItem.price }}</span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script setup>
import { useCartStore } from '~/stores/index'

// Pinia store 사용
const cartStore = useCartStore();

</script>