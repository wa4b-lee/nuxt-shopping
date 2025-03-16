import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
})

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
  createCartItem 
}