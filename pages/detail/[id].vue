<template>
  <div v-if="product">
    <div  class="container">
      <div class="main-panel">
        <img :src="product.imageUrl" :alt="product.name"/>
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart" >장바구니에 담기</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { fetchProductById, createCartItem } from '~/api';
import { useCartStore } from '~/stores/index';

const route = useRoute();
const router = useRouter();
const product = ref(null);  // product를 ref로 선언하여 초기값을 null로 설정
const cartStore = useCartStore();


// 제품 상세 정보를 불러오는 함수
const fetchProductDetails = async () => {
  const response = await fetchProductById(route.params.id);
  product.value = response.data;  // product 데이터를 갱신
};


const addToCart = async () => {
  if (product.value) {
    try {
      // 장바구니에 같은 제품이 이미 있는지 확인
      const existingItem = cartStore.cartItems.find(item => item.id === product.value.id);
      if (existingItem) {
        alert('이미 장바구니에 있습니다.');
        return;
      }
      
      await createCartItem(product.value);
      cartStore.addCartItem(product.value);
      router.push('/cart');
    } catch (error) {
      console.error('장바구니에 추가하는 데 실패했습니다:', error);
      alert('이미 장바구니에 있습니다.');
    }
  }
};



// 컴포넌트가 마운트되었을 때 제품 정보 불러오기
onMounted(fetchProductDetails);

</script>
