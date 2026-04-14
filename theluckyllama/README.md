# Theluckyllama - Luxury Nikkei Restaurant

A full-stack web application for a luxury Japanese-Peruvian fusion restaurant in Jeddah.

## 🌟 Features

### Customer-Facing Website
- **Hero Section**: Stunning animated hero with floating plate effect and parallax scrolling
- **Menu System**: Categorized menu with dish cards, hover effects, and detailed modals
- **Dish Customization**: Spice level, doneness, temperature, and add-on options
- **Shopping Cart**: Real-time cart management with order type selection (Dine-in/Pickup/Delivery)
- **Reservation System**: Form-based and WhatsApp reservation options
- **Location & Hours**: Google Maps integration with contact information
- **Reviews Section**: Customer testimonials with ratings
- **Floating Buttons**: WhatsApp chat and cart access from anywhere

### Admin Panel (Backend)
- **Real-time Order Management**: WebSocket-powered order notifications
- **Kitchen Display System**: Large card interface for kitchen staff
- **Reservation Manager**: View and manage bookings
- **Menu Manager**: Add/edit dishes with pricing
- **Analytics Dashboard**: Revenue tracking and top dishes
- **Sound Alerts**: Audio notifications for new orders

## 🎨 Design System

### Colors
- **Black**: #0B0B0B (Background)
- **Gold**: #D4AF37 (Primary accent)
- **Gold Light**: #FFD700 (Gradient highlight)

### Typography
- **Headings**: Playfair Display (Luxury Serif)
- **Body**: Poppins (Clean Sans-serif)

### Animations
- Floating plate effect
- Parallax scrolling
- Hover zoom on dish cards
- Smooth modal transitions
- Particle effects

## 🚀 Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Zustand (State Management)
- Socket.IO Client
- Lucide Icons

### Backend
- Node.js
- Express
- Socket.IO
- CORS
- Helmet
- Compression

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Clone the repository**
```bash
cd theluckyllama
```

2. **Install all dependencies**
```bash
npm run install:all
```

Or install manually:
```bash
# Root
npm install

# Client
cd client && npm install

# Server
cd ../server && npm install
```

3. **Configure environment variables**
```bash
# Edit server/.env with your settings
PORT=5000
NODE_ENV=development
WHATSAPP_NUMBER=966500000000
```

4. **Start development servers**
```bash
# From root directory
npm run dev
```

This will start both:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## 🏗️ Project Structure

```
theluckyllama/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── MenuSection.jsx
│   │   │   ├── DishCard.jsx
│   │   │   ├── DishModal.jsx
│   │   │   ├── CartSidebar.jsx
│   │   │   ├── ReservationSection.jsx
│   │   │   ├── LocationSection.jsx
│   │   │   ├── ReviewsSection.jsx
│   │   │   └── FloatingButtons.jsx
│   │   ├── store/         # Zustand state management
│   │   │   └── cartStore.js
│   │   ├── utils/         # Helper functions & data
│   │   │   └── menuData.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
├── server/                # Express backend
│   ├── server.js         # Main server file
│   ├── .env              # Environment variables
│   └── package.json
├── package.json          # Root package.json
└── README.md
```

## 🍽️ Menu Categories

1. **Starters** - Edamame Truffle, Tuna Tataki
2. **Nigiri** - Otoro, Salmon
3. **Maki Rolls** - Dragon Roll, Rainbow Roll
4. **Salads** - Wagyu Beef Salad
5. **Cold Bites** - Ceviche Nikkei
6. **Hot Bites** - Gyoza
7. **Mains** - Wagyu Rib Eye, Miso Black Seabass
8. **Desserts** - Matcha Tiramisu, Yuzu Cheesecake
9. **Drinks** - Yuzu Mojito, Sake Selection

## 🔌 API Endpoints

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create new order
- `PATCH /api/orders/:id/status` - Update order status
- `PATCH /api/orders/:id/prepare` - Mark as prepared (Kitchen)

### Reservations
- `GET /api/reservations` - Get all reservations
- `POST /api/reservations` - Create reservation
- `PATCH /api/reservations/:id/status` - Update status

### Menu
- `GET /api/menu` - Get all menu items
- `POST /api/menu` - Add new item
- `PATCH /api/menu/:id` - Update item

### Analytics
- `GET /api/analytics/summary` - Get daily analytics

## 📡 Real-time Events (Socket.IO)

### Client → Server
- `join-room` - Join a room (kitchen/admin)
- `kitchen:ready` - Kitchen ready notification

### Server → Client
- `order:new` - New order notification
- `order:update` - Order status update
- `order:prepared` - Order prepared notification
- `reservation:new` - New reservation
- `menu:update` - Menu item updated
- `notification:sound` - Play sound alert

## 🎯 Key Features Implementation

### Cart System
- Zustand for global state
- Persistent cart across pages
- Customization support
- Live price calculation
- Tax computation (15%)

### Dish Modal
- Large image display
- Full customization options
- Spice level selector
- Doneness options (for meat)
- Add-ons with pricing
- Quantity adjustment

### WhatsApp Integration
- Floating button on all pages
- Direct reservation link
- Pre-filled message template
- Works on mobile and desktop

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile
- Touch-friendly buttons
- Optimized images

## 🔐 Security Features

- Helmet.js for HTTP headers
- CORS configuration
- Input validation ready
- Environment variable protection

## 📈 Performance Optimizations

- Lazy loading images
- CSS animations instead of heavy 3D
- Code splitting with Vite
- Compression middleware
- Efficient re-renders with React

## 🚀 Deployment

### Build for Production
```bash
# Build client
cd client && npm run build

# Start production server
cd ../server && npm start
```

### Environment Variables for Production
```bash
NODE_ENV=production
PORT=5000
CLIENT_URL=https://yourdomain.com
```

## 📱 Future Enhancements

- [ ] Table QR code ordering system
- [ ] Tablet menu for in-restaurant use
- [ ] MongoDB database integration
- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Multi-language support (AR/EN)
- [ ] Loyalty program
- [ ] Gift cards

## 👥 Staff Roles

1. **Admin** - Full access to all features
2. **Manager** - Orders, reservations, analytics
3. **Kitchen** - Kitchen display only

## 📞 Contact

- **Address**: 4056 Ibrahim Al-Anqari, Jeddah
- **Phone**: +966 12 XXX XXXX
- **Email**: reservations@theluckyllama.com

---

**Built with ❤️ for Theluckyllama Restaurant**
