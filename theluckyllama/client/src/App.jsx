import { Navbar, HeroSection, MenuSection, ReservationSection, LocationSection, ReviewsSection, FloatingButtons } from './components'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
        <ReviewsSection />
        <ReservationSection />
        <LocationSection />
      </main>
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-serif font-bold gold-gradient mb-4">Theluckyllama</h3>
              <p className="text-gray-400 text-sm">
                Luxury Nikkei dining experience in the heart of Jeddah. 
                Where Japanese precision meets Peruvian passion.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-gold uppercase tracking-wider text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
                <li><a href="#menu" className="hover:text-gold transition-colors">Menu</a></li>
                <li><a href="#reservations" className="hover:text-gold transition-colors">Reservations</a></li>
                <li><a href="#location" className="hover:text-gold transition-colors">Location</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-gold uppercase tracking-wider text-sm mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>4056 Ibrahim Al-Anqari, Jeddah</li>
                <li>+966 12 XXX XXXX</li>
                <li>reservations@theluckyllama.com</li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-gold uppercase tracking-wider text-sm mb-4">Hours</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Sunday - Thursday</li>
                <li>6:00 PM - 12:00 AM</li>
                <li className="pt-2">Friday - Saturday</li>
                <li>6:00 PM - 1:00 AM</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Theluckyllama. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      <FloatingButtons />
    </div>
  )
}

export default App
