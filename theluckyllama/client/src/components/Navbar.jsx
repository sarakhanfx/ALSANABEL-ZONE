import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ShoppingBag, Utensils } from 'lucide-react'
import { useCartStore } from '../store/cartStore'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getItemCount } = useCartStore()
  const itemCount = getItemCount()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Location', href: '#location' },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-4'
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-2xl font-serif font-bold gold-gradient"
              whileHover={{ scale: 1.05 }}
            >
              Theluckyllama
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-gold transition-colors uppercase tracking-wider text-sm"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Cart Button */}
              <motion.button
                className="relative text-white hover:text-gold transition-colors"
                onClick={() => useCartStore.getState().toggleCart()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingBag className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </motion.button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25 }}
          >
            <div className="flex flex-col h-full p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-12">
                <a href="#home" className="text-2xl font-serif font-bold gold-gradient">
                  Theluckyllama
                </a>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-6 flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-2xl text-gray-300 hover:text-gold transition-colors uppercase tracking-wider"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Footer Info */}
              <div className="border-t border-white/10 pt-6 space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Utensils className="w-5 h-5 text-gold" />
                  <span>Opens at 6:00 PM</span>
                </div>
                <p className="text-gray-500 text-sm">
                  4056 Ibrahim Al-Anqari, Jeddah
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
