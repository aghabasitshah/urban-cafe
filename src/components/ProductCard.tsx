import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Product } from "../types";
import { Key } from "react";

interface ProductCardProps {
  key?: Key;
  product: Product;
}


export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
      className="group relative bg-white border border-urban-brown/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden bg-urban-cream p-4 flex items-center justify-center">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
        />
        {product.isPopular && (
          <div className="absolute top-4 left-4 bg-urban-black text-urban-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            🔥 Popular
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h4 className="font-heading font-bold text-xl text-urban-black leading-tight uppercase">
            {product.name}
          </h4>
          <span className="font-bold text-lg text-urban-gold whitespace-nowrap">
            Rs {product.price}
          </span>
        </div>
        
        <p className="text-sm text-urban-black/60 mb-4 flex-grow line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs font-mono text-urban-brown/70 bg-urban-cream px-2 py-1 rounded">
            {product.calories} Cal
          </span>
          
          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: "#1A1A1A", color: "#C8A97E" }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-urban-cream flex items-center justify-center text-urban-black transition-colors"
          >
            <Plus size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
