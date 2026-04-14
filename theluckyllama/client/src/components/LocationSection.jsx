import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, MessageCircle, Navigation } from 'lucide-react'

const LocationSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/966500000000', '_blank')
  }

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-gold text-lg tracking-[0.3em] uppercase mb-4">Visit Us</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Location & Hours
              </h3>
              <p className="text-gray-400 max-w-md">
                Experience luxury Nikkei dining in the heart of Jeddah. 
                Reserve your table for an unforgettable culinary journey.
              </p>
            </div>

            {/* Address */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Address</h4>
                  <p className="text-gray-400">4056 Ibrahim Al-Anqari</p>
                  <p className="text-gray-400">Jeddah, Saudi Arabia</p>
                  <button className="text-gold text-sm mt-2 flex items-center gap-2 hover:underline">
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Opening Hours</h4>
                  <p className="text-gray-400">Daily: 6:00 PM - 12:00 AM</p>
                  <p className="text-gold text-sm mt-1">Last order at 11:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Contact</h4>
                  <p className="text-gray-400">+966 12 XXX XXXX</p>
                  <p className="text-gray-400">reservations@theluckyllama.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">WhatsApp</h4>
                  <p className="text-gray-400 mb-2">Quick reservations & inquiries</p>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="border border-green-500 text-green-500 px-6 py-2 hover:bg-green-500 hover:text-black transition-all inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] border border-white/10"
          >
            {/* Placeholder for Google Maps Embed */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.123456789!2d39.123456!3d21.543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMyJzM1LjYiTiAzOcKwMDcnMzAuMCJF!5e0!3m2!1sen!2ssa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Theluckyllama Location"
              />
            </div>

            {/* Overlay Card */}
            <motion.div 
              className="absolute bottom-6 left-6 right-6 bg-black/90 backdrop-blur-sm p-6 border border-gold/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-lg">Theluckyllama</h4>
                  <p className="text-gray-400 text-sm">Luxury Nikkei Dining</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-gold">
                    <span className="text-lg font-bold">4.5</span>
                    <span>⭐</span>
                  </div>
                  <p className="text-gray-400 text-xs">980 reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
