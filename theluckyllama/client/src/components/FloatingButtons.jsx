import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, ShoppingCart } from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import CartSidebar from './CartSidebar'

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false)
  
  const handleClick = () => {
    window.open('https://wa.me/966500000000', '_blank')
  }

  return (
    <motion.a
      className="fixed bottom-6 right-20 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <MessageCircle className="w-6 h-6" />
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="text-sm font-medium whitespace-nowrap"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
          >
            Chat on WhatsApp
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  )
}

const CartButton = () => {
  const { toggleCart, isCartOpen, getItemCount } = useCartStore()
  const itemCount = getItemCount()

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 z-40 bg-gold hover:bg-gold-light text-black p-4 rounded-full shadow-lg flex items-center gap-2 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleCart}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ShoppingCart className="w-6 h-6" />
        {itemCount > 0 && (
          <motion.span
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            key={itemCount}
          >
            {itemCount}
          </motion.span>
        )}
      </motion.button>

      <CartSidebar isOpen={isCartOpen} onClose={() => useCartStore.getState().closeCart()} />
    </>
  )
}

const FloatingButtons = () => {
  return (
    <>
      <WhatsAppButton />
      <CartButton />
    </>
  )
}

export default FloatingButtons
