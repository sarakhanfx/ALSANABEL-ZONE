import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, Flame, Utensils, Clock, MapPin, Phone, MessageCircle } from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import { getImageUrl } from '../utils/menuData'

const DishModal = ({ dish, isOpen, onClose }) => {
  const { addToCart } = useCartStore()
  const [customizations, setCustomizations] = useState({
    spiceLevel: null,
    doneness: null,
    temperature: null,
    addons: []
  })
  const [quantity, setQuantity] = useState(1)

  if (!dish || !isOpen) return null

  const handleToggleAddon = (addon) => {
    setCustomizations(prev => {
      const exists = prev.addons.find(a => a.name === addon.name)
      if (exists) {
        return {
          ...prev,
          addons: prev.addons.filter(a => a.name !== addon.name)
        }
      } else {
        return {
          ...prev,
          addons: [...prev.addons, addon]
        }
      }
    })
  }

  const calculateTotal = () => {
    const basePrice = dish.price
    const addonsPrice = customizations.addons.reduce((sum, addon) => sum + addon.price, 0)
    return (basePrice + addonsPrice) * quantity
  }

  const handleAddToCart = () => {
    addToCart({
      ...dish,
      customizations,
      quantity,
      totalPrice: calculateTotal()
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 modal-backdrop z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <div className="bg-black border border-gold/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="grid md:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-64 md:h-full min-h-[400px]">
                  <img
                    src={getImageUrl(dish.image)}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  
                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {dish.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-black/70 backdrop-blur-sm text-gold text-xs uppercase tracking-wider border border-gold/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Close Button Mobile */}
                  <button
                    className="absolute top-4 right-4 md:hidden w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                    onClick={onClose}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h2 className="text-3xl font-serif font-bold text-white">{dish.name}</h2>
                      <button
                        className="hidden md:block w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors"
                        onClick={onClose}
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <p className="text-gray-400">{dish.description}</p>
                    
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-bold gold-gradient">{dish.price} SAR</span>
                      {dish.calories && (
                        <div className="flex items-center gap-2 text-gray-400">
                          <Flame className="w-4 h-4" />
                          <span>{dish.calories} cal</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Customizations */}
                  <div className="space-y-6">
                    {/* Spice Level */}
                    {dish.customizations?.spiceLevel && (
                      <div>
                        <label className="text-gold text-sm uppercase tracking-wider mb-3 block">
                          Spice Level 🌶️
                        </label>
                        <div className="flex gap-2">
                          {['Mild', 'Medium', 'Hot', 'Extra Hot'].map((level) => (
                            <button
                              key={level}
                              className={`px-4 py-2 border ${
                                customizations.spiceLevel === level
                                  ? 'bg-gold text-black border-gold'
                                  : 'border-white/20 text-gray-400 hover:border-gold'
                              } transition-colors text-sm`}
                              onClick={() => setCustomizations(prev => ({ ...prev, spiceLevel: level }))}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Doneness */}
                    {dish.customizations?.doneness && (
                      <div>
                        <label className="text-gold text-sm uppercase tracking-wider mb-3 block">
                          Doneness 🥩
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {dish.customizations.doneness.map((level) => (
                            <button
                              key={level}
                              className={`px-4 py-2 border ${
                                customizations.doneness === level
                                  ? 'bg-gold text-black border-gold'
                                  : 'border-white/20 text-gray-400 hover:border-gold'
                              } transition-colors text-sm`}
                              onClick={() => setCustomizations(prev => ({ ...prev, doneness: level }))}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Temperature */}
                    {dish.customizations?.temperature && (
                      <div>
                        <label className="text-gold text-sm uppercase tracking-wider mb-3 block">
                          Temperature 🌡️
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {dish.customizations.temperature.map((temp) => (
                            <button
                              key={temp}
                              className={`px-4 py-2 border ${
                                customizations.temperature === temp
                                  ? 'bg-gold text-black border-gold'
                                  : 'border-white/20 text-gray-400 hover:border-gold'
                              } transition-colors text-sm`}
                              onClick={() => setCustomizations(prev => ({ ...prev, temperature: temp }))}
                            >
                              {temp}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Add-ons */}
                    {dish.customizations?.extras && dish.customizations.extras.length > 0 && (
                      <div>
                        <label className="text-gold text-sm uppercase tracking-wider mb-3 block">
                          Add-ons ✨
                        </label>
                        <div className="space-y-2">
                          {dish.customizations.extras.map((addon, index) => (
                            <button
                              key={index}
                              className={`w-full flex justify-between items-center p-3 border ${
                                customizations.addons.find(a => a.name === addon.name)
                                  ? 'bg-gold/10 border-gold'
                                  : 'border-white/20 hover:border-gold'
                              } transition-colors`}
                              onClick={() => handleToggleAddon(addon)}
                            >
                              <span className="text-white">{addon.name}</span>
                              <span className="text-gold">+{addon.price} SAR</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Quantity and Add to Cart */}
                  <div className="space-y-4 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-white">Quantity</span>
                      <div className="flex items-center gap-4">
                        <button
                          className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold transition-colors"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                        <button
                          className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold transition-colors"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-lg">
                      <span className="text-gray-400">Total</span>
                      <span className="text-2xl font-bold gold-gradient">{calculateTotal()} SAR</span>
                    </div>

                    <button
                      className="w-full btn-gold py-4 text-lg"
                      onClick={handleAddToCart}
                    >
                      Add to Order - {calculateTotal()} SAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default DishModal
