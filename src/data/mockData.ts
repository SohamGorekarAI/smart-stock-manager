// Mock data for the inventory management system

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  subcategory: string;
  unit: string;
  image?: string;
  lowStockThreshold: number;
  lastRestocked?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: Subcategory[];
  productCount: number;
}

export interface Subcategory {
  id: string;
  name: string;
  parentId: string;
  productCount: number;
}

export interface RestockSuggestion {
  productId: string;
  productName: string;
  currentStock: number;
  suggestedRestock: number;
  reason: string;
  priority: "high" | "medium" | "low";
  predictedDemand: number;
}

export interface SalesTrend {
  name: string;
  sales: number;
  revenue: number;
}

export interface StockDistribution {
  category: string;
  value: number;
  fill: string;
}

// Categories data
export const categories: Category[] = [
  {
    id: "snacks",
    name: "Snacks",
    icon: "🍿",
    productCount: 156,
    subcategories: [
      { id: "biscuits", name: "Biscuits", parentId: "snacks", productCount: 45 },
      { id: "chips", name: "Chips", parentId: "snacks", productCount: 38 },
      { id: "chocolates", name: "Chocolates", parentId: "snacks", productCount: 52 },
      { id: "nuts", name: "Nuts & Dry Fruits", parentId: "snacks", productCount: 21 },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    icon: "🥤",
    productCount: 89,
    subcategories: [
      { id: "soft-drinks", name: "Soft Drinks", parentId: "beverages", productCount: 28 },
      { id: "juices", name: "Juices", parentId: "beverages", productCount: 35 },
      { id: "water", name: "Water", parentId: "beverages", productCount: 12 },
      { id: "energy-drinks", name: "Energy Drinks", parentId: "beverages", productCount: 14 },
    ],
  },
  {
    id: "dairy",
    name: "Dairy Products",
    icon: "🥛",
    productCount: 67,
    subcategories: [
      { id: "milk", name: "Milk", parentId: "dairy", productCount: 18 },
      { id: "cheese", name: "Cheese", parentId: "dairy", productCount: 24 },
      { id: "yogurt", name: "Yogurt", parentId: "dairy", productCount: 15 },
      { id: "butter", name: "Butter & Cream", parentId: "dairy", productCount: 10 },
    ],
  },
  {
    id: "bakery",
    name: "Bakery",
    icon: "🍞",
    productCount: 43,
    subcategories: [
      { id: "bread", name: "Bread", parentId: "bakery", productCount: 18 },
      { id: "cakes", name: "Cakes & Pastries", parentId: "bakery", productCount: 15 },
      { id: "cookies", name: "Cookies", parentId: "bakery", productCount: 10 },
    ],
  },
  {
    id: "fresh-produce",
    name: "Fresh Produce",
    icon: "🥬",
    productCount: 112,
    subcategories: [
      { id: "vegetables", name: "Vegetables", parentId: "fresh-produce", productCount: 58 },
      { id: "fruits", name: "Fruits", parentId: "fresh-produce", productCount: 42 },
      { id: "herbs", name: "Herbs", parentId: "fresh-produce", productCount: 12 },
    ],
  },
  {
    id: "frozen",
    name: "Frozen Foods",
    icon: "❄️",
    productCount: 78,
    subcategories: [
      { id: "ice-cream", name: "Ice Cream", parentId: "frozen", productCount: 32 },
      { id: "frozen-meals", name: "Frozen Meals", parentId: "frozen", productCount: 28 },
      { id: "frozen-vegetables", name: "Frozen Vegetables", parentId: "frozen", productCount: 18 },
    ],
  },
];

// Products data
export const products: Product[] = [
  // Chips
  { id: "p1", name: "Lay's Classic", description: "Original salted potato chips", price: 2.99, stock: 45, category: "snacks", subcategory: "chips", unit: "pack", lowStockThreshold: 20 },
  { id: "p2", name: "Doritos Nacho", description: "Nacho cheese flavored tortilla chips", price: 3.49, stock: 12, category: "snacks", subcategory: "chips", unit: "pack", lowStockThreshold: 15 },
  { id: "p3", name: "Pringles Original", description: "Stackable potato crisps", price: 2.79, stock: 38, category: "snacks", subcategory: "chips", unit: "can", lowStockThreshold: 20 },
  { id: "p4", name: "Cheetos Crunchy", description: "Crunchy cheese snacks", price: 3.29, stock: 8, category: "snacks", subcategory: "chips", unit: "pack", lowStockThreshold: 15 },
  { id: "p5", name: "Kettle Brand Sea Salt", description: "Kettle cooked potato chips", price: 4.29, stock: 25, category: "snacks", subcategory: "chips", unit: "pack", lowStockThreshold: 12 },
  
  // Biscuits
  { id: "p6", name: "Oreo Original", description: "Chocolate sandwich cookies", price: 3.99, stock: 5, category: "snacks", subcategory: "biscuits", unit: "pack", lowStockThreshold: 15 },
  { id: "p7", name: "Digestive Biscuits", description: "Whole wheat digestive biscuits", price: 2.49, stock: 42, category: "snacks", subcategory: "biscuits", unit: "pack", lowStockThreshold: 20 },
  { id: "p8", name: "Parle-G", description: "Classic glucose biscuits", price: 1.29, stock: 78, category: "snacks", subcategory: "biscuits", unit: "pack", lowStockThreshold: 30 },
  
  // Chocolates
  { id: "p9", name: "Dairy Milk", description: "Creamy milk chocolate bar", price: 1.99, stock: 3, category: "snacks", subcategory: "chocolates", unit: "bar", lowStockThreshold: 25 },
  { id: "p10", name: "KitKat", description: "Crispy wafer chocolate", price: 1.49, stock: 67, category: "snacks", subcategory: "chocolates", unit: "bar", lowStockThreshold: 30 },
  { id: "p11", name: "Ferrero Rocher", description: "Premium hazelnut chocolates", price: 8.99, stock: 18, category: "snacks", subcategory: "chocolates", unit: "box", lowStockThreshold: 10 },
  
  // Soft Drinks
  { id: "p12", name: "Coca-Cola", description: "Classic cola drink", price: 1.99, stock: 120, category: "beverages", subcategory: "soft-drinks", unit: "bottle", lowStockThreshold: 50 },
  { id: "p13", name: "Pepsi", description: "Refreshing cola beverage", price: 1.89, stock: 95, category: "beverages", subcategory: "soft-drinks", unit: "bottle", lowStockThreshold: 50 },
  { id: "p14", name: "Sprite", description: "Lemon-lime soda", price: 1.79, stock: 7, category: "beverages", subcategory: "soft-drinks", unit: "bottle", lowStockThreshold: 40 },
  
  // Milk
  { id: "p15", name: "Whole Milk", description: "Fresh whole milk", price: 3.99, stock: 45, category: "dairy", subcategory: "milk", unit: "gallon", lowStockThreshold: 20 },
  { id: "p16", name: "2% Reduced Fat", description: "Low fat milk", price: 3.79, stock: 38, category: "dairy", subcategory: "milk", unit: "gallon", lowStockThreshold: 20 },
  { id: "p17", name: "Almond Milk", description: "Plant-based milk alternative", price: 4.49, stock: 22, category: "dairy", subcategory: "milk", unit: "carton", lowStockThreshold: 15 },
  
  // Ice Cream
  { id: "p18", name: "Häagen-Dazs Vanilla", description: "Premium vanilla ice cream", price: 5.99, stock: 14, category: "frozen", subcategory: "ice-cream", unit: "pint", lowStockThreshold: 10 },
  { id: "p19", name: "Ben & Jerry's Cookie Dough", description: "Cookie dough ice cream", price: 5.49, stock: 9, category: "frozen", subcategory: "ice-cream", unit: "pint", lowStockThreshold: 10 },
];

// Restock suggestions (AI predictions)
export const restockSuggestions: RestockSuggestion[] = [
  {
    productId: "p9",
    productName: "Dairy Milk",
    currentStock: 3,
    suggestedRestock: 50,
    reason: "Critical low stock. High demand predicted due to upcoming holiday season.",
    priority: "high",
    predictedDemand: 48,
  },
  {
    productId: "p6",
    productName: "Oreo Original",
    currentStock: 5,
    suggestedRestock: 40,
    reason: "Stock depleting fast. 35% surge in sales trend detected this week.",
    priority: "high",
    predictedDemand: 38,
  },
  {
    productId: "p14",
    productName: "Sprite",
    currentStock: 7,
    suggestedRestock: 60,
    reason: "Below threshold. Summer season approaching - expect 40% demand increase.",
    priority: "high",
    predictedDemand: 55,
  },
  {
    productId: "p4",
    productName: "Cheetos Crunchy",
    currentStock: 8,
    suggestedRestock: 30,
    reason: "Trending item. Social media buzz driving sales up 25%.",
    priority: "medium",
    predictedDemand: 28,
  },
  {
    productId: "p2",
    productName: "Doritos Nacho",
    currentStock: 12,
    suggestedRestock: 25,
    reason: "Approaching low stock threshold. Weekend demand spike expected.",
    priority: "medium",
    predictedDemand: 22,
  },
  {
    productId: "p19",
    productName: "Ben & Jerry's Cookie Dough",
    currentStock: 9,
    suggestedRestock: 20,
    reason: "Popular item nearing threshold. Consistent demand pattern.",
    priority: "low",
    predictedDemand: 18,
  },
];

// Sales trend data (last 7 days)
export const salesTrends: SalesTrend[] = [
  { name: "Mon", sales: 145, revenue: 2840 },
  { name: "Tue", sales: 132, revenue: 2560 },
  { name: "Wed", sales: 168, revenue: 3280 },
  { name: "Thu", sales: 189, revenue: 3690 },
  { name: "Fri", sales: 234, revenue: 4520 },
  { name: "Sat", sales: 312, revenue: 6140 },
  { name: "Sun", sales: 278, revenue: 5420 },
];

// Stock distribution by category
export const stockDistribution: StockDistribution[] = [
  { category: "Snacks", value: 35, fill: "hsl(152, 60%, 40%)" },
  { category: "Beverages", value: 20, fill: "hsl(160, 55%, 45%)" },
  { category: "Dairy", value: 15, fill: "hsl(145, 50%, 50%)" },
  { category: "Frozen", value: 12, fill: "hsl(170, 45%, 55%)" },
  { category: "Fresh Produce", value: 10, fill: "hsl(180, 40%, 60%)" },
  { category: "Bakery", value: 8, fill: "hsl(190, 35%, 65%)" },
];

// Dashboard stats
export const dashboardStats = {
  totalProducts: 1247,
  lowStockItems: 23,
  totalCategories: 12,
  monthlyRevenue: 47850,
  revenueGrowth: 12.5,
  topSellingCategory: "Snacks",
  averageOrderValue: 28.45,
  stockTurnover: 4.2,
};
