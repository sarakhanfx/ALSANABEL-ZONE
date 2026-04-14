export const menuCategories = [
  {
    id: 'starters',
    name: 'Starters',
    icon: '🍤'
  },
  {
    id: 'nigiri',
    name: 'Nigiri',
    icon: '🍣'
  },
  {
    id: 'maki',
    name: 'Maki Rolls',
    icon: '🍱'
  },
  {
    id: 'salads',
    name: 'Salads',
    icon: '🥗'
  },
  {
    id: 'cold-bites',
    name: 'Cold Bites',
    icon: '🦐'
  },
  {
    id: 'hot-bites',
    name: 'Hot Bites',
    icon: '🔥'
  },
  {
    id: 'mains',
    name: 'Mains',
    icon: '🥩'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: '🍰'
  },
  {
    id: 'drinks',
    name: 'Drinks',
    icon: '🍹'
  }
]

export const signatureDishes = [
  {
    id: 1,
    name: 'Wagyu Rib Eye',
    price: 399,
    description: 'Premium A5 Wagyu with truffle ponzu',
    image: 'wagyu-ribeye-steak',
    tags: ['Signature', 'Premium']
  },
  {
    id: 2,
    name: 'Miso Black Seabass',
    price: 185,
    description: 'Chilean seabass with sweet miso glaze',
    image: 'miso-black-seabass',
    tags: ['Chef Special', 'Seafood']
  },
  {
    id: 3,
    name: 'Salmon Crispy Rice',
    price: 95,
    description: 'Spicy salmon tartare on crispy rice',
    image: 'salmon-crispy-rice',
    tags: ['Popular', 'Spicy']
  },
  {
    id: 4,
    name: 'Sushi Platter',
    price: 275,
    description: 'Chef\'s selection of premium nigiri and maki',
    image: 'sushi-platter',
    tags: ['Sharing', 'Variety']
  }
]

export const menuItems = [
  // Starters
  {
    id: 101,
    categoryId: 'starters',
    name: 'Edamame Truffle',
    price: 45,
    description: 'Steamed edamame with truffle oil and sea salt',
    image: 'edamame-truffle',
    tags: ['Vegetarian'],
    calories: 180,
    customizations: {
      spiceLevel: false,
      extras: [
        { name: 'Extra Truffle Oil', price: 10 },
        { name: 'Garlic Salt', price: 5 }
      ]
    }
  },
  {
    id: 102,
    categoryId: 'starters',
    name: 'Tuna Tataki',
    price: 85,
    description: 'Seared yellowfin tuna with ponzu and microgreens',
    image: 'tuna-tataki',
    tags: ['Raw', 'Seafood'],
    calories: 220,
    customizations: {
      spiceLevel: true,
      extras: [
        { name: 'Extra Ponzu', price: 5 },
        { name: 'Wasabi', price: 5 }
      ]
    }
  },
  
  // Nigiri
  {
    id: 201,
    categoryId: 'nigiri',
    name: 'Otoro Nigiri',
    price: 65,
    description: 'Fatty tuna belly, 2 pieces',
    image: 'otoro-nigiri',
    tags: ['Premium', 'Raw'],
    calories: 140,
    customizations: {
      spiceLevel: false,
      extras: [
        { name: 'Gold Leaf', price: 50 },
        { name: 'Caviar', price: 75 }
      ]
    }
  },
  {
    id: 202,
    categoryId: 'nigiri',
    name: 'Salmon Nigiri',
    price: 35,
    description: 'Fresh Norwegian salmon, 2 pieces',
    image: 'salmon-nigiri',
    tags: ['Raw', 'Seafood'],
    calories: 120,
    customizations: {
      spiceLevel: false,
      extras: [
        { name: 'Truffle Oil', price: 10 }
      ]
    }
  },
  
  // Maki Rolls
  {
    id: 301,
    categoryId: 'maki',
    name: 'Dragon Roll',
    price: 95,
    description: 'Eel, cucumber, topped with avocado and eel sauce',
    image: 'dragon-roll',
    tags: ['Cooked', 'Signature'],
    calories: 380,
    customizations: {
      spiceLevel: true,
      extras: [
        { name: 'Extra Eel', price: 40 },
        { name: 'Spicy Mayo', price: 5 }
      ]
    }
  },
  {
    id: 302,
    categoryId: 'maki',
    name: 'Rainbow Roll',
    price: 85,
    description: 'California roll topped with assorted fish',
    image: 'rainbow-roll',
    tags: ['Raw', 'Variety'],
    calories: 350,
    customizations: {
      spiceLevel: false,
      extras: [
        { name: 'Extra Fish', price: 35 }
      ]
    }
  },
  
  // Salads
  {
    id: 401,
    categoryId: 'salads',
    name: 'Wagyu Beef Salad',
    price: 125,
    description: 'Grilled wagyu strips with mixed greens and sesame dressing',
    image: 'wagyu-salad',
    tags: ['Premium', 'Healthy'],
    calories: 420,
    customizations: {
      spiceLevel: false,
      extras: [
        { name: 'Extra Wagyu', price: 80 },
        { name: 'Avocado', price: 25 }
      ]
    }
  },
  
  // Cold Bites
  {
    id: 501,
    categoryId: 'cold-bites',
    name: 'Ceviche Nikkei',
    price: 75,
    description: 'Fresh sea bass cured in citrus with aji amarillo',
    image: 'ceviche-nikkei',
    tags: ['Raw', 'Peruvian', 'Spicy'],
    calories: 180,
    customizations: {
      spiceLevel: true,
      extras: [
        { name: 'Extra Corn', price: 10 },
        { name: 'Sweet Potato', price: 10 }
      ]
    }
  },
  
  // Hot Bites
  {
    id: 601,
    categoryId: 'hot-bites',
    name: 'Gyoza',
    price: 55,
    description: 'Pan-fried dumplings with pork and vegetables',
    image: 'gyoza',
    tags: ['Cooked', 'Popular'],
    calories: 280,
    customizations: {
      spiceLevel: true,
      extras: [
        { name: 'Extra Gyoza (3pcs)', price: 30 },
        { name: 'Spicy Dipping Sauce', price: 5 }
      ]
    }
  },
  
  // Mains
  {
    id: 701,
    categoryId: 'mains',
    name: 'Wagyu Rib Eye',
    price: 399,
    description: 'A5 Japanese Wagyu 300g with truffle ponzu and grilled vegetables',
    image: 'wagyu-ribeye',
    tags: ['Signature', 'Premium', 'Grilled'],
    calories: 850,
    customizations: {
      spiceLevel: false,
      doneness: ['Rare', 'Medium Rare', 'Medium', 'Well Done'],
      extras: [
        { name: 'Truffle Butter', price: 35 },
        { name: 'Foie Gras', price: 95 },
        { name: 'Extra Vegetables', price: 25 }
      ]
    }
  },
  {
    id: 702,
    categoryId: 'mains',
    name: 'Miso Black Seabass',
    price: 185,
    description: 'Chilean seabass marinated in sweet miso for 72 hours',
    image: 'miso-seabass',
    tags: ['Chef Special', 'Seafood', 'Grilled'],
    calories: 520,
    customizations: {
      spiceLevel: false,
      extras: [
        { name: 'Steamed Rice', price: 20 },
        { name: 'Miso Soup', price: 25 }
      ]
    }
  },
  {
    id: 703,
    categoryId: 'mains',
    name: 'Salmon Crispy Rice',
    price: 95,
    description: 'Spicy salmon tartare on crispy sushi rice with jalapeño',
    image: 'salmon-crispy-rice',
    tags: ['Popular', 'Spicy', 'Signature'],
    calories: 450,
    customizations: {
      spiceLevel: true,
      extras: [
        { name: 'Extra Salmon', price: 45 },
        { name: 'Avocado', price: 25 }
      ]
    }
  },
  
  // Desserts
  {
    id: 801,
    categoryId: 'desserts',
    name: 'Matcha Tiramisu',
    price: 55,
    description: 'Japanese twist on classic Italian dessert',
    image: 'matcha-tiramisu',
    tags: ['Vegetarian', 'Fusion'],
    calories: 380,
    customizations: {
      spiceLevel: false,
      extras: [
        { name: 'Gold Flake', price: 25 }
      ]
    }
  },
  {
    id: 802,
    categoryId: 'desserts',
    name: 'Yuzu Cheesecake',
    price: 48,
    description: 'Light and tangy Japanese cheesecake with yuzu curd',
    image: 'yuzu-cheesecake',
    tags: ['Vegetarian', 'Citrus'],
    calories: 320,
    customizations: {
      spiceLevel: false,
      extras: [
        { name: 'Berry Compote', price: 15 }
      ]
    }
  },
  
  // Drinks
  {
    id: 901,
    categoryId: 'drinks',
    name: 'Yuzu Mojito',
    price: 45,
    description: 'Classic mojito with Japanese yuzu twist',
    image: 'yuzu-mojito',
    tags: ['Mocktail', 'Refreshing'],
    calories: 120,
    customizations: {
      spiceLevel: false,
      extras: [
        { name: 'Make it Alcoholic (+Rum)', price: 35 }
      ]
    }
  },
  {
    id: 902,
    categoryId: 'drinks',
    name: 'Sake Selection',
    price: 85,
    description: 'Premium junmai sake served warm or cold',
    image: 'sake',
    tags: ['Alcoholic', 'Traditional'],
    calories: 180,
    customizations: {
      spiceLevel: false,
      temperature: ['Warm', 'Cold', 'Room Temperature']
    }
  }
]

// Helper function to get image URL
export const getImageUrl = (imageName) => {
  return `https://source.unsplash.com/800x600/?${imageName.replace(/\s+/g, ',')},food,luxury`
}

// Helper function to search for dish images
export const searchDishImage = async (dishName) => {
  try {
    const query = encodeURIComponent(`${dishName} high quality black background luxury food`)
    const response = await fetch(`https://source.unsplash.com/800x600/?${query}`)
    return response.url
  } catch (error) {
    console.error('Error fetching image:', error)
    return null
  }
}
