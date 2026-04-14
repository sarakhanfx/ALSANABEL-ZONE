import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Load environment variables
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
  }
})

// Middleware
app.use(cors())
app.use(helmet({
  contentSecurityPolicy: false // Disable for development
}))
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')))
}

// In-memory data stores (replace with database in production)
const orders = []
const reservations = []
const menuItems = []

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id)

  // Join different rooms based on user role
  socket.on('join-room', (room) => {
    socket.join(room)
    console.log(`User ${socket.id} joined room: ${room}`)
  })

  // Kitchen staff specific events
  socket.on('kitchen:ready', () => {
    console.log('Kitchen ready to receive orders')
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id)
  })
})

// API Routes

// Get all menu items
app.get('/api/menu', (req, res) => {
  res.json(menuItems)
})

// Create new order
app.post('/api/orders', (req, res) => {
  const { items, customer, orderType, total, notes } = req.body
  
  const newOrder = {
    id: Date.now(),
    items,
    customer,
    orderType,
    total,
    notes,
    status: 'pending',
    createdAt: new Date().toISOString()
  }
  
  orders.push(newOrder)
  
  // Emit real-time notification to kitchen and admin
  io.to('kitchen').emit('order:new', newOrder)
  io.to('admin').emit('order:new', newOrder)
  
  // Play sound notification
  io.to('kitchen').emit('notification:sound', { type: 'new-order' })
  
  res.status(201).json({ success: true, order: newOrder })
})

// Get all orders
app.get('/api/orders', (req, res) => {
  res.json(orders)
})

// Update order status
app.patch('/api/orders/:id/status', (req, res) => {
  const { id } = req.params
  const { status } = req.body
  
  const order = orders.find(o => o.id === parseInt(id))
  if (!order) {
    return res.status(404).json({ error: 'Order not found' })
  }
  
  order.status = status
  order.updatedAt = new Date().toISOString()
  
  // Emit status update
  io.emit('order:update', order)
  
  res.json({ success: true, order })
})

// Mark order as prepared (Kitchen)
app.patch('/api/orders/:id/prepare', (req, res) => {
  const { id } = req.params
  
  const order = orders.find(o => o.id === parseInt(id))
  if (!order) {
    return res.status(404).json({ error: 'Order not found' })
  }
  
  order.status = 'prepared'
  order.preparedAt = new Date().toISOString()
  
  // Notify admin
  io.to('admin').emit('order:prepared', order)
  
  res.json({ success: true, order })
})

// Create reservation
app.post('/api/reservations', (req, res) => {
  const { name, phone, guests, date, time, notes } = req.body
  
  const newReservation = {
    id: Date.now(),
    name,
    phone,
    guests,
    date,
    time,
    notes,
    status: 'pending',
    createdAt: new Date().toISOString()
  }
  
  reservations.push(newReservation)
  
  // Notify admin
  io.to('admin').emit('reservation:new', newReservation)
  
  res.status(201).json({ success: true, reservation: newReservation })
})

// Get all reservations
app.get('/api/reservations', (req, res) => {
  res.json(reservations)
})

// Update reservation status
app.patch('/api/reservations/:id/status', (req, res) => {
  const { id } = req.params
  const { status } = req.body
  
  const reservation = reservations.find(r => r.id === parseInt(id))
  if (!reservation) {
    return res.status(404).json({ error: 'Reservation not found' })
  }
  
  reservation.status = status
  reservation.updatedAt = new Date().toISOString()
  
  res.json({ success: true, reservation })
})

// Update menu item
app.patch('/api/menu/:id', (req, res) => {
  const { id } = req.params
  const updates = req.body
  
  const index = menuItems.findIndex(item => item.id === parseInt(id))
  if (index === -1) {
    return res.status(404).json({ error: 'Menu item not found' })
  }
  
  menuItems[index] = { ...menuItems[index], ...updates }
  
  // Broadcast menu update
  io.emit('menu:update', menuItems[index])
  
  res.json({ success: true, item: menuItems[index] })
})

// Add new menu item
app.post('/api/menu', (req, res) => {
  const newItem = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date().toISOString()
  }
  
  menuItems.push(newItem)
  
  // Broadcast new menu item
  io.emit('menu:new', newItem)
  
  res.status(201).json({ success: true, item: newItem })
})

// Analytics endpoint
app.get('/api/analytics/summary', (req, res) => {
  const today = new Date().toDateString()
  
  const todayOrders = orders.filter(o => 
    new Date(o.createdAt).toDateString() === today
  )
  
  const totalRevenue = todayOrders.reduce((sum, order) => sum + order.total, 0)
  const completedOrders = todayOrders.filter(o => o.status === 'completed').length
  
  // Top dishes
  const dishCount = {}
  todayOrders.forEach(order => {
    order.items.forEach(item => {
      dishCount[item.name] = (dishCount[item.name] || 0) + item.quantity
    })
  })
  
  const topDishes = Object.entries(dishCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, count]) => ({ name, count }))
  
  res.json({
    date: today,
    totalRevenue,
    totalOrders: todayOrders.length,
    completedOrders,
    pendingOrders: todayOrders.filter(o => o.status === 'pending').length,
    topDishes
  })
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Serve React app in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  })
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

// Start server
const PORT = process.env.PORT || 5000
httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`)
})

export { io }
