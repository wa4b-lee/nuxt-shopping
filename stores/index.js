import { defineStore } from 'pinia'
import { fetchCartItem } from '~/api'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: []
  }),
  
  actions: {
    addCartItem(cartItem) {
      this.cartItems.push(cartItem);
    },
    
    setCartItems(cartItems) {
      this.cartItems = cartItems
    },

    async fetchCartItems() {
      const { data } = await fetchCartItem()
      this.setCartItems(data)
    },
  }
})