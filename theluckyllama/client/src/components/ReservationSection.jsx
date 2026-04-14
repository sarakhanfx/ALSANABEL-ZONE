import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Phone, User, MessageCircle } from 'lucide-react'

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    notes: ''
  })

  const handleWhatsAppRedirect = () => {
    const message = `Hi, I want to reserve a table at Theluckyllama\n\nName: ${formData.name}\nGuests: ${formData.guests}\nDate: ${formData.date}\nTime: ${formData.time}\nPhone: ${formData.phone}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/966500000000?text=${encodedMessage}`, '_blank')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would integrate with your backend
    alert('Reservation request sent! We will confirm shortly.')
    handleWhatsAppRedirect()
  }

  return (
    <section className="py-24 bg-black relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold text-lg tracking-[0.3em] uppercase mb-4">Reservations</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Book Your Table
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Secure your spot at Theluckyllama for an unforgettable Nikkei dining experience. 
              For parties larger than 10, please contact us directly.
            </p>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-white/10 p-8 md:p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gold text-sm uppercase tracking-wider">
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black/50 border border-white/20 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gold text-sm uppercase tracking-wider">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-black/50 border border-white/20 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                    placeholder="+966 5X XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gold text-sm uppercase tracking-wider">
                    <Users className="w-4 h-4" />
                    Number of Guests
                  </label>
                  <select
                    className="w-full bg-black/50 border border-white/20 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="10+">10+ (Contact us)</option>
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gold text-sm uppercase tracking-wider">
                      <Calendar className="w-4 h-4" />
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full bg-black/50 border border-white/20 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gold text-sm uppercase tracking-wider">
                      <Clock className="w-4 h-4" />
                      Time
                    </label>
                    <select
                      required
                      className="w-full bg-black/50 border border-white/20 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    >
                      <option value="">Select</option>
                      {['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'].map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gold text-sm uppercase tracking-wider">
                  <MessageCircle className="w-4 h-4" />
                  Special Requests (Optional)
                </label>
                <textarea
                  rows="3"
                  className="w-full bg-black/50 border border-white/20 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Birthday celebration, allergies, seating preference..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col md:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 btn-gold py-4"
                >
                  Request Reservation
                </button>
                
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="flex-1 border border-green-500 text-green-500 py-4 hover:bg-green-500 hover:text-black transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Reserve via WhatsApp
                </button>
              </div>

              {/* Info */}
              <div className="text-center text-gray-400 text-sm pt-6 border-t border-white/10">
                <p>Opening Hours: Daily from 6:00 PM</p>
                <p className="mt-2">For immediate assistance, call us at +966 12 XXX XXXX</p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ReservationSection
