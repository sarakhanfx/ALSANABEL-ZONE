import { create } from 'zustand'

export const useCartStore = create((set, get) => ({
  cart: [],
  isCartOpen: false,
  
  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => 
          cartItem.id === item.id && 
          JSON.stringify(cartItem.customizations) === JSON.stringify(item.customizations)
      )
      
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id && 
            JSON.stringify(cartItem.customizations) === JSON.stringify(item.customizations)
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        }
      }
      
      return { cart: [...state.cart, { ...item, quantity: 1 }] }
    })
  },
  
  removeFromCart: (itemId, customizations) => {
    set((state) => ({
      cart: state.cart.filter(
        (item) => 
          !(item.id === itemId && 
            JSON.stringify(item.customizations) === JSON.stringify(customizations))
      ),
    }))
  },
  
  updateQuantity: (itemId, customizations, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(itemId, customizations)
      return
    }
    
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === itemId && 
        JSON.stringify(item.customizations) === JSON.stringify(customizations)
          ? { ...item, quantity }
          : item
      ),
    }))
  },
  
  clearCart: () => set({ cart: [] }),
  
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  
  closeCart: () => set({ isCartOpen: false }),
  
  getTotalPrice: () => {
    return get().cart.reduce((total, item) => {
      const customizationPrice = item.customizations?.addons?.reduce((sum, addon) => sum + (addon.price || 0), 0) || 0
      return total + (item.price + customizationPrice) * item.quantity
    }, 0)
  },
  
  getItemCount: () => {
    return get().cart.reduce((total, item) => total + item.quantity, 0)
  },
}))
