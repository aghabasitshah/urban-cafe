import { Product, Testimonial } from './types';

export const CATEGORIES = [
  'ALL', 'COFFEE', 'STEAK', 'WRAPWICH', 'DESSERTS', 'BEVERAGES'
];

export const PRODUCTS: Product[] = [
  // COFFEE
  {
    id: 'c1',
    name: 'Karachi Concrete',
    description: 'Our signature dark roast. Bold, intense, unforgettable.',
    price: 850,
    calories: 120,
    category: 'COFFEE',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: 'c2',
    name: 'Silk Road Latte',
    description: 'Smooth espresso cut with velvety textured milk.',
    price: 950,
    calories: 220,
    category: 'COFFEE',
    image: 'https://images.unsplash.com/photo-1509785307050-d4066910cac1?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: 'c3',
    name: 'Urban Drip Cold Brew',
    description: 'Slow-steeped for 24 hours. Served over ice.',
    price: 900,
    calories: 15,
    category: 'COFFEE',
    image: 'https://images.unsplash.com/photo-1461023058943-0708a56336ea?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'c4',
    name: 'Gold Rush Cortado',
    description: 'Equal parts espresso and steamed milk. Potent.',
    price: 750,
    calories: 110,
    category: 'COFFEE',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
  },

  // STEAK
  {
    id: 's1',
    name: 'The Boss Ribeye',
    description: 'Prime cut, flame-grilled, herb butter finish.',
    price: 4500,
    calories: 850,
    category: 'STEAK',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: 's2',
    name: 'Alleyway Striploin',
    description: 'Lean, mean, and perfectly seared. Served with house fries.',
    price: 3800,
    calories: 720,
    category: 'STEAK',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800',
  },

  // WRAPWICH
  {
    id: 'w1',
    name: 'Streetside Chicken Wrap',
    description: 'Spicy grilled chicken, urban slaw, garlic mayo.',
    price: 1200,
    calories: 550,
    category: 'WRAPWICH',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800',
    isPopular: true
  },
  {
    id: 'w2',
    name: 'The Hustle Beef Brisket',
    description: 'Slow-cooked brisket, caramelized onions, melted cheese.',
    price: 1800,
    calories: 680,
    category: 'WRAPWICH',
    image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0224?auto=format&fit=crop&q=80&w=800',
  },

  // DESSERTS
  {
    id: 'd1',
    name: 'Midnight Brownie',
    description: 'Dark chocolate fudge, sea salt, served warm.',
    price: 850,
    calories: 450,
    category: 'DESSERTS',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'd2',
    name: 'Gold Leaf Cheesecake',
    description: 'New York style, caramel drizzle, edible gold.',
    price: 1100,
    calories: 520,
    category: 'DESSERTS',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&q=80&w=800',
  },

  // BEVERAGES
  {
    id: 'b1',
    name: 'Phase 7 Lemonade',
    description: 'Fresh pressed, mint infused, highly refreshing.',
    price: 600,
    calories: 180,
    category: 'BEVERAGES',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'b2',
    name: 'Urban Iced Tea',
    description: 'Peach infused black tea, sweet and sharp.',
    price: 650,
    calories: 140,
    category: 'BEVERAGES',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ali H.',
    text: '"Finally, a coffee spot in Phase 7 that actually cares about the roast. The Concrete is elite."',
    rating: 5
  },
  {
    id: 't2',
    name: 'Sara M.',
    text: '"The aesthetic is insane, but the Silk Road Latte is why I keep coming back. Total vibe."',
    rating: 5
  },
  {
    id: 't3',
    name: 'Zain K.',
    text: '"Best steaks in the area, hands down. The Boss Ribeye lives up to its name."',
    rating: 4.5
  }
];
