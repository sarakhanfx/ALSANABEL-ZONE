import { useState } from 'react'
import { motion } from 'framer-motion'
import { Utensils, ChevronDown } from 'lucide-react'
import { menuCategories, menuItems, signatureDishes, getImageUrl } from '../utils/menuData'
import DishCard from './DishCard'
import DishModal from './DishModal'

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('mains')
  const [selectedDish, setSelectedDish] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredItems = menuItems.filter(item => item.categoryId === activeCategory)

  const handleDishClick = (dish) => {
    setSelectedDish(dish)
    setIsModalOpen(true)
  }

  return (
    <section className="py-24 bg-black relative" id="menu">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-gold text-lg tracking-[0.3em] uppercase mb-4">Discover</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Our Menu
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the perfect fusion of Japanese precision and Peruvian passion. 
            Each dish is crafted with premium ingredients and artistic presentation.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-3 border transition-all flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-gold text-black border-gold'
                  : 'border-white/20 text-gray-400 hover:border-gold hover:text-white'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span>{category.icon}</span>
              <span className="hidden md:inline">{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <DishCard dish={item} onClick={handleDishClick} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Items Message */}
        {filteredItems.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Utensils className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg">No items in this category yet</p>
            <p className="text-gray-500 text-sm mt-2">Please check back soon for new additions</p>
          </motion.div>
        )}
      </div>

      {/* Dish Modal */}
      <DishModal
        dish={selectedDish}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setTimeout(() => setSelectedDish(null), 300)
        }}
      />
    </section>
  )
}

export default MenuSection
