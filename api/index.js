import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
})


const fetchProducts = async () => {
  try {
    const { data } = await instance.get('/products');
    return data;
  } catch (error) {
    console.error('데이터 요청 중 에러 발생:', error);
    throw error;  // 에러는 호출하는 곳에서 처리
  }
}

function fetchProductById(id){
  return instance.get(`/products/${id}`)
}

function fetchProductByKeyword(keyword){
  return instance.get(`/products`,{
    params:{
      name_like: keyword,
    },
  })
}

function fetchCartItem() {
  return instance.get('/carts')
}

function createCartItem(cartItem) {
  return instance.post('/carts', cartItem);
}

export { 
  fetchProductById, 
  fetchProductByKeyword, 
  fetchCartItem, 
  createCartItem,
  fetchProducts
}