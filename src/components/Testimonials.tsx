import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "../data";
import { Quote } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="bg-urban-black py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-urban-gold uppercase tracking-widest mb-16">
          The Word on the Street
        </h2>

        <div 
          className="relative h-64 flex flex-col items-center justify-center cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Quote size={48} className="text-urban-brown/30 absolute top-0 left-1/2 -translate-x-1/2" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-8 px-4"
            >
              <p className="font-sans text-xl md:text-3xl text-white font-light italic leading-relaxed text-shadow-hero">
                {TESTIMONIALS[currentIndex].text}
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-1 w-8 bg-urban-gold"></div>
                <span className="font-heading text-urban-gold font-bold uppercase tracking-widest text-lg">
                  {TESTIMONIALS[currentIndex].name}
                </span>
                <div className="flex gap-1 text-urban-gold">
                  {[...Array(Math.floor(TESTIMONIALS[currentIndex].rating))].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-urban-gold" : "w-2 bg-urban-brown/50 hover:bg-urban-brown"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
