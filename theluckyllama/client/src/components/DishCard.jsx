import { motion } from 'framer-motion'
import { X, Plus, Minus, Trash2, Flame } from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import { getImageUrl } from '../utils/menuData'

const DishCard = ({ dish, onClick }) => {
  return (
    <motion.div
      className="dish-card relative bg-black/50 backdrop-blur-sm border border-white/10 overflow-hidden cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => onClick(dish)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={getImageUrl(dish.image)}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        
        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {dish.tags?.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-black/70 backdrop-blur-sm text-gold text-xs uppercase tracking-wider border border-gold/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Quick Add Button */}
        <motion.button
          className="absolute bottom-4 right-4 w-12 h-12 bg-gold text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation()
            onClick(dish)
          }}
        >
          <Plus className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-serif font-bold text-white">{dish.name}</h3>
          <span className="text-gold font-bold text-lg">{dish.price} SAR</span>
        </div>
        
        <p className="text-gray-400 text-sm line-clamp-2">{dish.description}</p>
        
        {dish.calories && (
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Flame className="w-4 h-4" />
            <span>{dish.calories} cal</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default DishCard
