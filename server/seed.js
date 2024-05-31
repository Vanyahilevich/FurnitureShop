const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.DB_URI;
console.log(uri)
const products = [{
    "id": "1",
    "name": "Comfortable Sofa",
    "price": 599.99,
    "currency": "$",
    "description": "A stylish and comfortable sofa for your living room.",
    "quantity": 0,
    "image": "comfortable-sofa.jpg",
    "category": "Furniture",
    "material": "Fabric",
    "rating": 4.5
  },
  {
    "id": "2",
    "name": "Modern Dining Table",
    "price": 299.99,
    "currency": "$",
    "description": "A sleek and modern dining table for your dining area.",
    "quantity": 6,
    "image": "modern-dining-table.jpg",
    "category": "Furniture",
    "material": "Wood",
    "rating": 3.8
  },
  {
    "id": "3",
    "name": "Bedroom Wardrobe",
    "price": 499.99,
    "currency": "$",
    "description": "A spacious wardrobe for your bedroom storage needs.",
    "quantity": 8,
    "image": "bedroom-wardrobe.jpg",
    "category": "Furniture",
    "material": "Wood",
    "rating": 4.2
  },
  {
    "id": "4",
    "name": "Leather Recliner Chair",
    "price": 399.99,
    "currency": "$",
    "description": "A luxurious leather recliner chair for ultimate relaxation.",
    "quantity": 3,
    "image": "leather-recliner-chair.jpg",
    "category": "Furniture",
    "material": "Leather",
    "rating": 4
  },
  {
    "id": "5",
    "name": "Classic Coffee Table",
    "price": 149.99,
    "currency": "$",
    "description": "A timeless coffee table to complement your living room decor.",
    "quantity": 14,
    "image": "classic-coffee-table.jpg",
    "category": "Furniture",
    "material": "Wood",
    "rating": 4.8
  },
  {
    "id": "6",
    "name": "Elegant Bedroom Set",
    "price": 899.99,
    "currency": "$",
    "description": "An elegant bedroom set for a luxurious sleep environment.",
    "quantity": 8,
    "image": "elegant-bedroom-set.jpg",
    "category": "Furniture",
    "material": "Wood",
    "rating": 4.6
  },
  {
    "id": "7",
    "name": "Cozy Armchair",
    "price": 249.99,
    "currency": "$",
    "description": "A cozy armchair to add warmth to your home.",
    "quantity": 12,
    "image": "cozy-armchair.jpg",
    "category": "Furniture",
    "material": "Fabric",
    "rating": 3.5
  },
  {
    "id": "8",
    "name": "Wooden Bookshelf",
    "price": 179.99,
    "currency": "$",
    "description": "A sturdy wooden bookshelf for organizing your book collection.",
    "quantity": 9,
    "image": "wooden-bookshelf.jpg",
    "category": "Furniture",
    "material": "Wood",
    "rating": 4.1
  },
  {
    "id": "9",
    "name": "Sleek Office Desk",
    "price": 349.99,
    "currency": "$",
    "description": "A sleek office desk for a modern and productive workspace.",
    "quantity": 14,
    "image": "sleek-office-desk.jpg",
    "category": "Furniture",
    "material": "Metal",
    "rating": 4.3
  },
  {
    "id": "10",
    "name": "Rustic Dining Chairs (Set of 4)",
    "price": 199.99,
    "currency": "$",
    "description": "Rustic dining chairs to complete your dining set.",
    "quantity": 0,
    "image": "rustic-Dining-chairs.jpg",
    "category": "Furniture",
    "material": "Wood",
    "rating": 3.9
  },
  {
    "id": "11",
    "name": "Contemporary Bedside Table",
    "price": 79.99,
    "currency": "$",
    "description": "A contemporary bedside table for your bedroom essentials.",
    "quantity": 14,
    "image": "contemporary-bedside-table.jpg",
    "category": "Furniture",
    "material": "Wood",
    "rating": 4
  },
  {
    "id": "12",
    "name": "Lounge Sectional Sofa",
    "price": 799.99,
    "currency": "$",
    "description": "A spacious lounge sectional sofa for entertaining guests.",
    "quantity": 4,
    "image": "lounge-sectional-sofa.jpg",
    "category": "Furniture",
    "material": "Fabric",
    "rating": 4.7
  },
  {
    "id": "13",
    "name": "Outdoor Patio Set",
    "price": 599.99,
    "currency": "$",
    "description": "An outdoor patio set for enjoying the sunshine.",
    "quantity": 8,
    "image": "outdoor-patio-set.jpg",
    "category": "Outdoor",
    "material": "Metal",
    "rating": 4.5
  },
  {
    "id": "14",
    "name": "Foldable Desk",
    "price": 129.99,
    "currency": "$",
    "description": "A foldable desk for flexible workspace solutions.",
    "quantity": 10,
    "image": "foldable-desk.jpg",
    "category": "Furniture",
    "material": "Wood",
    "rating": 4.2
  },
  {
    "id": "15",
    "name": "Plush Throw Pillows (Set of 2)",
    "price": 29.99,
    "currency": "$",
    "description": "Plush throw pillows to add a touch of comfort to your sofa.",
    "quantity": 20,
    "image": "plush-throw-pillows.jpg",
    "category": "Home Decor",
    "material": "Fabric",
    "rating": 4.8
  },
  {
    "id": "16",
    "name": "Antique Vanity Table",
    "price": 499.99,
    "currency": "$",
    "description": "An antique vanity table for your dressing room.",
    "quantity": 1,
    "image": "antique-vanity-table.jpg",
    "category": "Furniture",
    "material": "Wood",
    "rating": 4.3
  },
  {
    "id": "17",
    "name": "Compact TV Stand",
    "price": 179.99,
    "currency": "$",
    "description": "A compact TV stand for your entertainment setup.",
    "quantity": 9,
    "image": "compact-TV-stand.jpg",
    "category": "Furniture",
    "material": "Wood",
    "rating": 4
  },
  {
    "id": "18",
    "name": "Artistic Wall Mirror",
    "price": 89.99,
    "currency": "$",
    "description": "An artistic wall mirror to enhance your home decor.",
    "quantity": 15,
    "image": "artistic-wall-mirror.jpg",
    "category": "Home Decor",
    "material": "Glass",
    "rating": 4.7
  },
  {
    "id": "19",
    "name": "Mid-Century Modern Chair",
    "price": 299.99,
    "currency": "$",
    "description": "A mid-century modern chair for a touch of retro style.",
    "quantity": 7,
    "image": "mid-century-modern-chair.jpg",
    "category": "Furniture",
    "material": "Fabric",
    "rating": 4.2
  },
  {
    "id": "20",
    "name": "Rattan Outdoor Lounge Set",
    "price": 649.99,
    "currency": "$",
    "description": "A rattan outdoor lounge set for comfortable outdoor seating.",
    "quantity": 6,
    "image": "rattan-outdoor-lounge-set.jpg",
    "category": "Outdoor",
    "material": "Rattan",
    "rating": 4.6
  },
  {
    "id": "21",
    "name": "Classic Table Lamp",
    "price": 49.99,
    "currency": "$",
    "description": "A classic table lamp to illuminate your workspace.",
    "quantity": 18,
    "image": "classic-table-lamp.jpg",
    "category": "Home Decor",
    "material": "Metal",
    "rating": 4.3
  },
  {
    "id": "22",
    "name": "Chic Ottoman Pouf",
    "price": 69.99,
    "currency": "$",
    "description": "A chic ottoman pouf for versatile seating options.",
    "quantity": 12,
    "image": "chic-ottoman-pouf.jpg",
    "category": "Furniture",
    "material": "Fabric",
    "rating": 3.9
  },
  {
    "id": "23",
    "name": "Industrial Bar Stools (Set of 2)",
    "price": 149.99,
    "currency": "$",
    "description": "Industrial bar stools for a stylish bar area.",
    "quantity": 7,
    "image": "industrial-bar-stools.jpg",
    "category": "Furniture",
    "material": "Metal",
    "rating": 4.1
  },
  {
    "id": "24",
    "name": "Velvet Accent Chair",
    "price": 219.99,
    "currency": "$",
    "description": "A velvet accent chair for a touch of luxury.",
    "quantity": 9,
    "image": "velvet-accent-chair.jpg",
    "category": "Furniture",
    "material": "Velvet",
    "rating": 4.5
  },
  {
    "id": "25",
    "name": "Classic Wooden Bench",
    "price": 129.99,
    "currency": "$",
    "description": "A classic wooden bench for additional seating.",
    "quantity": 14,
    "image": "classic-wooden-bench.jpg",
    "category": "Furniture",
    "material": "Wood",
    "rating": 4.2
  },
  {
    "id": "26",
    "name": "Glass Coffee Table",
    "price": 179.99,
    "currency": "$",
    "description": "A sleek glass coffee table for a modern living room.",
    "quantity": 11,
    "image": "glass-coffee-table.jpg",
    "category": "Furniture",
    "material": "Glass",
    "rating": 4.3
  },
  {
    "id": "27",
    "name": "Rustic Wall Shelf",
    "price": 59.99,
    "currency": "$",
    "description": "A rustic wall shelf for displaying your favorite decor items.",
    "quantity": 16,
    "image": "rustic-wall-shelf.jpg",
    "category": "Home Decor",
    "material": "Wood",
    "rating": 4
  },
  {
    "id": "28",
    "name": "Leather Barcalounger",
    "price": 699.99,
    "currency": "$",
    "description": "A luxurious leather barcalounger for ultimate comfort.",
    "quantity": 5,
    "image": "leather-barcalounger.jpg",
    "category": "Furniture",
    "material": "Leather",
    "rating": 4.7
  },
  {
    "id": "29",
    "name": "Round Dining Table",
    "price": 349.99,
    "currency": "$",
    "description": "A round dining table for intimate family gatherings.",
    "quantity": 7,
    "image": "round-dining-table.jpg",
    "category": "Furniture",
    "material": "Wood",
    "rating": 4.2
  },
  {
    "id": "30",
    "name": "Coastal Throw Blanket",
    "price": 34.99,
    "currency": "$",
    "description": "A coastal-themed throw blanket for cozy evenings.",
    "quantity": 22,
    "image": "coastal-throw-blanket.jpg",
    "category": "Home Decor",
    "material": "Cotton",
    "rating": 4.5
  },
  {
    "id": "31",
    "name": "Vintage Dresser",
    "price": 449.99,
    "currency": "$",
    "description": "A vintage dresser to add charm to your bedroom.",
    "quantity": 6,
    "image": "vintage-dresser.jpg",
    "category": "Furniture",
    "material": "Wood",
    "rating": 4.3
  },
  {
    "id": "32",
    "name": "Sleek Floor Lamp",
    "price": 129.99,
    "currency": "$",
    "description": "A sleek floor lamp to brighten up your living space.",
    "quantity": 10,
    "image": "sleek-floor-lamp.jpg",
    "category": "Home Decor",
    "material": "Metal",
    "rating": 4.1
  },
  {
    "id": "33",
    "name": "Accent Wall Clock",
    "price": 39.99,
    "currency": "$",
    "description": "An accent wall clock to enhance your home decor.",
    "quantity": 17,
    "image": "accent-wall-clock.jpg",
    "category": "Home Decor",
    "material": "Metal",
    "rating": 4.2
  },
  {
    "id": "34",
    "name": "Faux Leather Loveseat",
    "price": 549.99,
    "currency": "$",
    "description": "A faux leather loveseat for compact and stylish seating.",
    "quantity": 8,
    "image": "loveseat.jpg",
    "category": "Furniture",
    "material": "Leather",
    "rating": 4.4
  },
  {
    "id": "35",
    "name": "Cotton Bedding Set",
    "price": 89.99,
    "currency": "$",
    "description": "A cozy cotton bedding set for a good night's sleep.",
    "quantity": 13,
    "image": "cotton-bedding-set.jpg",
    "category": "Bedding",
    "material": "Cotton",
    "rating": 4.7
  },
  {
    "id": "36",
    "name": "Marble Top Side Table",
    "price": 129.99,
    "currency": "$",
    "description": "A marble top side table for an elegant touch to your space.",
    "quantity": 11,
    "image": "marble-top-side-table.jpg",
    "category": "Furniture",
    "material": "Marble",
    "rating": 4.6
  },
  {
    "id": "37",
    "name": "Convertible Sofa Bed",
    "price": 799.99,
    "currency": "$",
    "description": "A convertible sofa bed for versatile living room furniture.",
    "quantity": 4,
    "image": "convertible-sofa-bed.jpg",
    "category": "Furniture",
    "material": "Fabric",
    "rating": 4.3
  },
  {
    "id": "38",
    "name": "Rustic Wall Art",
    "price": 49.99,
    "currency": "$",
    "description": "Rustic wall art to adorn your walls with natural beauty.",
    "quantity": 20,
    "image": "rustic-wall-art.jpg",
    "category": "Home Decor",
    "material": "Wood",
    "rating": 4.5
  },
  {
    "id": "39",
    "name": "Stylish Desk Organizer",
    "price": 19.99,
    "currency": "$",
    "description": "A stylish desk organizer to keep your workspace tidy.",
    "quantity": 15,
    "image": "stylish-desk-organizer.jpg",
    "category": "Office Supplies",
    "material": "Metal",
    "rating": 4
  },
  {
    "id": "40",
    "name": "Modern Plant Stand",
    "price": 69.99,
    "currency": "$",
    "description": "A modern plant stand for showcasing your favorite plants.",
    "quantity": 10,
    "image": "modern-plant-stand.jpg",
    "category": "Home Decor",
    "material": "Metal",
    "rating": 4.2
  }]
  

async function seedDB() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db(process.env.DB_NAME);
    const collectionProducts = database.collection('products');
    const collectionBasket = database.collection('basket');
    const collectionDelivery = database.collection('delivery');
    const collectionSessions = database.collection('sessions');
    const collectionUsers = database.collection('users');



    // Clear the collection
    await collectionProducts.deleteMany({});
    console.log('Products collection cleared');

    await collectionBasket.deleteMany({});
    console.log('Basket collection cleared');

    await collectionDelivery.deleteMany({});
    console.log('Delivery collection cleared');
    
    await collectionSessions.deleteMany({});
    console.log('Sessions collection cleared');

    await collectionUsers.deleteMany({});
    console.log('Users collection cleared');

    
    // Insert new data
    await collectionProducts.insertMany(products);
    console.log('Products collection seeded');

  } catch (err) {
    console.error('Error seeding database', err);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

seedDB();