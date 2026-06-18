import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "../data";
import { ProductCard } from "./ProductCard";

export function MenuSection() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeTab === "ALL" || p.category === activeTab;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayCategories = activeTab === "ALL" 
    ? CATEGORIES.filter(c => c !== "ALL") 
    : [activeTab];

  return (
    <section className="bg-urban-cream min-h-screen py-16" id="menu">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Sticky Tabs & Search */}
        <div className="sticky top-[104px] z-40 bg-urban-cream/90 backdrop-blur-md pt-4 pb-6 mx-[-1rem] px-[1rem]">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-6">
            
            {/* Category Tabs */}
            <div className="flex overflow-x-auto w-full md:w-auto hide-scrollbar gap-2 pb-2 md:pb-0">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`relative px-5 py-2 rounded-full font-heading font-bold uppercase tracking-wider text-sm transition-colors whitespace-nowrap
                    ${activeTab === category 
                      ? "bg-urban-black text-urban-gold" 
                      : "border border-urban-black/20 text-urban-black hover:border-urban-black"
                    }`}
                >
                  {category}
                  {activeTab === category && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-urban-gold rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-72">
              <input 
                type="text" 
                placeholder="Search your urban craving..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-urban-brown/20 rounded-full pl-10 pr-4 py-2.5 focus:outline-none focus:border-urban-gold font-sans text-sm"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-urban-brown/50" size={18} />
            </div>
          </div>

          {/* Discount Banner */}
          <div className="relative overflow-hidden bg-urban-black rounded-lg p-4 text-center group cursor-pointer">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(200,169,126,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-shimmer" />
            <span className="relative z-10 font-heading text-urban-gold font-bold text-lg md:text-xl tracking-widest uppercase">
              🔥 Flat 10% Off All Pickups This Month!
            </span>
          </div>
        </div>

        {/* Popular Items Showcase (Only raw if ALL is selected and no search) */}
        {activeTab === "ALL" && !searchQuery && (
          <div className="mb-16 mt-8">
            <h3 className="font-heading text-4xl font-bold text-urban-black uppercase flex items-center gap-3 mb-8">
              <span>🔥 Urban Favorites</span>
              <div className="h-0.5 flex-grow bg-urban-black/10"></div>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS.filter(p => p.isPopular).map(product => (
                <ProductCard key={`popular-${product.id}`} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* Menu Sections */}
        <div className="flex flex-col gap-16 mt-8">
          <AnimatePresence mode="popLayout">
            {displayCategories.map(tempCategory => {
              const categoryProducts = filteredProducts.filter(p => p.category === tempCategory);
              
              if (categoryProducts.length === 0) return null;

              return (
                <motion.div 
                  key={tempCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-urban-black rounded-xl p-4 mb-8 shadow-lg flex items-center">
                    <h3 className="font-heading text-3xl font-bold text-urban-gold italic uppercase tracking-widest">
                      {tempCategory}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categoryProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-heading text-2xl text-urban-black/50 uppercase">No urban cravings found for "{searchQuery}"</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
