import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, User, Calendar } from 'lucide-react'

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'Ahmed Al-Rashid',
      rating: 5,
      date: '2 weeks ago',
      text: 'Exceptional dining experience! The Wagyu Rib Eye was perfectly cooked and the Nikkei fusion flavors were extraordinary. Worth every riyal.',
      avatar: 'A'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      rating: 5,
      date: '1 month ago',
      text: 'The Miso Black Seabass is a masterpiece. Beautiful ambiance, impeccable service, and the fusion of Japanese and Peruvian cuisine is executed flawlessly.',
      avatar: 'S'
    },
    {
      id: 3,
      name: 'Mohammed Al-Otaibi',
      rating: 4,
      date: '3 weeks ago',
      text: 'Great food and presentation. The Salmon Crispy Rice is a must-try. Slightly pricey but the quality justifies it. Will definitely return.',
      avatar: 'M'
    },
    {
      id: 4,
      name: 'Fatima Hassan',
      rating: 5,
      date: '1 week ago',
      text: 'Best fine dining experience in Jeddah! The attention to detail is remarkable. Perfect for special occasions.',
      avatar: 'F'
    },
    {
      id: 5,
      name: 'David Chen',
      rating: 5,
      date: '2 months ago',
      text: 'As someone who has dined at top Nikkei restaurants worldwide, Theluckyllama stands out. Authentic flavors with a luxury touch.',
      avatar: 'D'
    },
    {
      id: 6,
      name: 'Nora Abdullah',
      rating: 4,
      date: '4 days ago',
      text: 'Beautiful presentation and excellent taste. The staff was very attentive. Reservation recommended as it gets busy.',
      avatar: 'N'
    }
  ]

  return (
    <section className="py-24 bg-black relative">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
          backgroundSize: '50px 50px'
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
          <h2 className="text-gold text-lg tracking-[0.3em] uppercase mb-4">Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            What Our Guests Say
          </h3>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="text-center">
              <div className="text-5xl font-bold gold-gradient">4.5</div>
              <div className="flex gap-1 my-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-gray-400">Based on 980 reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-black/50 backdrop-blur-sm border border-white/10 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold text-lg">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{review.name}</h4>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-3 h-3" />
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating ? 'text-gold fill-gold' : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="#reservations"
            className="inline-block btn-gold px-12 py-4"
          >
            Write Your Review
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ReviewsSection
