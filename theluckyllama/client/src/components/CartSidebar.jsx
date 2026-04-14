import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, ShoppingBag, Utensils, Package, Truck } from 'lucide-react'
import { useCartStore } from '../store/cartStore'

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getItemCount, closeCart } = useCartStore()
  const [orderType, setOrderType] = useState('dine-in')
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = () => {
    setIsCheckingOut(true)
    // Here you would integrate with your backend
    setTimeout(() => {
      alert('Order placed successfully! We will prepare your order shortly.')
      clearCart()
      setIsCheckingOut(false)
      onClose()
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-black border-l border-gold/30 z-50 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25 }}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-serif font-bold text-white">Your Order</h2>
                <p className="text-gray-400 text-sm">{getItemCount()} items</p>
              </div>
              <button
                className="w-10 h-10 flex items-center justify-center hover:bg-gold/10 rounded-full transition-colors"
                onClick={onClose}
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Order Type */}
            <div className="p-6 border-b border-white/10">
              <div className="flex gap-3">
                <button
                  className={`flex-1 py-3 px-4 border flex items-center justify-center gap-2 transition-all ${
                    orderType === 'dine-in'
                      ? 'bg-gold text-black border-gold'
                      : 'border-white/20 text-gray-400 hover:border-gold'
                  }`}
                  onClick={() => setOrderType('dine-in')}
                >
                  <Utensils className="w-4 h-4" />
                  Dine-in
                </button>
                <button
                  className={`flex-1 py-3 px-4 border flex items-center justify-center gap-2 transition-all ${
                    orderType === 'pickup'
                      ? 'bg-gold text-black border-gold'
                      : 'border-white/20 text-gray-400 hover:border-gold'
                  }`}
                  onClick={() => setOrderType('pickup')}
                >
                  <Package className="w-4 h-4" />
                  Pickup
                </button>
                <button
                  className={`flex-1 py-3 px-4 border flex items-center justify-center gap-2 transition-all ${
                    orderType === 'delivery'
                      ? 'bg-gold text-black border-gold'
                      : 'border-white/20 text-gray-400 hover:border-gold'
                  }`}
                  onClick={() => setOrderType('delivery')}
                >
                  <Truck className="w-4 h-4" />
                  Delivery
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
                  <ShoppingBag className="w-16 h-16 opacity-20" />
                  <p className="text-lg">Your cart is empty</p>
                  <button
                    className="text-gold hover:underline"
                    onClick={onClose}
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                cart.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${index}`}
                    className="flex gap-4 p-4 bg-black/50 border border-white/10"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    {/* Image */}
                    <div className="w-20 h-20 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold truncate">{item.name}</h3>
                      
                      {/* Customizations */}
                      {item.customizations && (
                        <div className="text-xs text-gray-400 mt-1 space-y-1">
                          {item.customizations.spiceLevel && (
                            <p>Spice: {item.customizations.spiceLevel}</p>
                          )}
                          {item.customizations.doneness && (
                            <p>Doneness: {item.customizations.doneness}</p>
                          )}
                          {item.customizations.temperature && (
                            <p>Temperature: {item.customizations.temperature}</p>
                          )}
                          {item.customizations.addons?.length > 0 && (
                            <p>+{item.customizations.addons.map(a => a.name).join(', ')}</p>
                          )}
                        </div>
                      )}

                      {/* Price and Quantity */}
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-gold font-bold">
                          {((item.price + (item.customizations?.addons?.reduce((sum, addon) => sum + addon.price, 0) || 0)) * item.quantity)} SAR
                        </span>
                        
                        <div className="flex items-center gap-2">
                          <button
                            className="w-7 h-7 border border-white/20 flex items-center justify-center hover:border-gold transition-colors"
                            onClick={() => updateQuantity(item.id, item.customizations, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-white w-6 text-center">{item.quantity}</span>
                          <button
                            className="w-7 h-7 border border-white/20 flex items-center justify-center hover:border-gold transition-colors"
                            onClick={() => updateQuantity(item.id, item.customizations, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      onClick={() => removeFromCart(item.id, item.customizations)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-white/10 space-y-4">
                {/* Subtotal */}
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>{getTotalPrice()} SAR</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax (15%)</span>
                    <span>{(getTotalPrice() * 0.15).toFixed(2)} SAR</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-white pt-2 border-t border-white/10">
                    <span>Total</span>
                    <span className="gold-gradient">{(getTotalPrice() * 1.15).toFixed(2)} SAR</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  className="w-full btn-gold py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="spinner w-5 h-5" />
                      Processing...
                    </span>
                  ) : (
                    `Place Order - ${(getTotalPrice() * 1.15).toFixed(2)} SAR`
                  )}
                </button>

                {/* Clear Cart */}
                <button
                  className="w-full text-gray-400 hover:text-white text-sm py-2 transition-colors"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartSidebar
