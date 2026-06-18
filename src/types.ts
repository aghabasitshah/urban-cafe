export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    calories: number;
    image: string;
    category: string;
    isPopular?: boolean;
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    text: string;
    rating: number;
  }
  
