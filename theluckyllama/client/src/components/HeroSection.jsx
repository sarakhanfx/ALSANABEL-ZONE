import { motion, useScroll, useTransform } from 'framer-motion'
import { ChefHat, Utensils, MapPin, Clock, Star, Phone } from 'lucide-react'
import { signatureDishes, getImageUrl } from '../utils/menuData'
import DishCard from './DishCard'

const HeroSection = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])
  const y2 = useTransform(scrollY, [0, 500], [0, -50])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              y: [null, Math.random() * -100],
              opacity: [0.3, 0]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div 
            className="text-left space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-gold text-lg tracking-[0.3em] uppercase mb-4 font-light">
                Theluckyllama
              </h2>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A Premium And
              <br />
              <span className="gold-gradient">Authentic Experience</span>
            </motion.h1>

            <motion.p 
              className="text-gray-300 text-lg md:text-xl max-w-lg font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Discover the art of Nikkei cuisine - where Japanese precision meets Peruvian passion in an unforgettable luxury dining experience.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <button className="btn-gold group">
                <span className="flex items-center gap-2">
                  Book A Table
                  <Utensils className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
              
              <button className="border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-black transition-all duration-300 uppercase tracking-wider">
                View Menu
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex items-center gap-8 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gold fill-gold" />
                <span className="text-2xl font-serif font-bold">4.5</span>
                <span className="text-gray-400 text-sm">(980 reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-gold" />
                <span>Jeddah, Ibrahim Al-Anqari</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Floating Plate */}
          <motion.div 
            className="relative hidden md:block"
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full glow-effect" />
              
              {/* Main Dish Image */}
              <motion.img
                src={getImageUrl('wagyu-ribeye-steak')}
                alt="Signature Dish"
                className="relative z-10 w-full h-full object-cover float-animation"
                style={{ y: y2 }}
              />

              {/* Floating Ingredients */}
              <motion.div 
                className="absolute top-10 right-10 w-20 h-20 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gold/30"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-3xl">🌿</span>
              </motion.div>

              <motion.div 
                className="absolute bottom-20 left-0 w-16 h-16 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gold/30"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, -8, 8, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <span className="text-2xl">🍋</span>
              </motion.div>

              <motion.div 
                className="absolute top-1/2 right-0 w-14 h-14 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gold/30"
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <span className="text-xl">🌶️</span>
              </motion.div>

              {/* Price Tag */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-gold to-gold-light text-black px-6 py-3 font-bold text-xl shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                From 399 SAR
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
          <motion.div 
            className="w-1 h-3 bg-gold rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
