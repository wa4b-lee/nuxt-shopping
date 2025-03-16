<template>
  <div class="app">
    <main>
      <SearchInput v-model="searchKeyword" @search="searchProuducts"/>
        <ul>
          <li class="item flex" v-for="product in products" :key="product.id" @click="moveToDetailPage(product.id)">
            <img class="product-image" :src="product.imageUrl" :alt="product.name"/>
            <p>{{ product.name }}</p>
            <span>{{ product.price }}</span>
          </li>
        </ul>
        <div class="cart-wrapper">
          <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
        </div>
    </main>
  </div>
</template>

<script setup>
import { fetchProductByKeyword } from '~/api';
import { useCartStore } from '~/stores/index'

// Pinia store 사용
const cartStore = useCartStore();
const router = useRouter();
const searchKeyword = ref('');

const { data: products } = await useAsyncData('products', () =>
  $fetch('http://localhost:3000/products') // 데이터 요청
);



const moveToDetailPage = (id) => {
  router.push(`detail/${id}`);
};

const moveToCartPage = () => {
  router.push(`cart`);
};

// 검색을 실행하는 함수
const searchProuducts = async () => {
  const response = await fetchProductByKeyword(searchKeyword.value);
  // 검색된 결과를 처리하는 로직을 여기에 추가
  console.log(response);
  products.value = response.data
};


// 컴포넌트가 마운트될 때 장바구니 아이템을 불러옴
onMounted(() => {
  cartStore.fetchCartItems();
})
</script>