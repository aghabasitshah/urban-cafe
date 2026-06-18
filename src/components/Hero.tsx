import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] bg-urban-black overflow-hidden flex items-center justify-center">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A97E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center">
        
        {/* Massive Layered Typography */}
        <div className="relative w-full flex flex-col items-center select-none">
          <motion.h2 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-heading text-[12vw] md:text-[8rem] lg:text-[10rem] leading-none text-urban-gold font-bold tracking-tighter text-shadow-hero ml-[-20%] md:ml-[-30%]"
          >
            BREWED
          </motion.h2>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="font-heading text-[15vw] md:text-[10rem] lg:text-[12rem] leading-none text-urban-white font-bold tracking-tighter text-shadow-hero z-20"
          >
            BOLD
          </motion.h2>
          
          <motion.h2 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="font-heading text-[12vw] md:text-[8rem] lg:text-[10rem] leading-none text-urban-gold font-bold tracking-tighter text-shadow-hero mr-[-20%] md:mr-[-30%] z-10"
          >
            SERVED
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
            className="font-script text-5xl md:text-7xl lg:text-8xl text-urban-white mt-[-2rem] md:mt-[-4rem] z-30"
          >
            Smooth
          </motion.h3>
        </div>

        {/* Floating Coffee Cup Image with Parallax */}
        <motion.div
           initial={{ opacity: 0, y: 100 }}
           animate={{ 
             opacity: 1, 
             y: [0, -15, 0],
             x: mousePosition.x,
             rotate: mousePosition.x * 0.5
           }}
           transition={{ 
             opacity: { duration: 1, delay: 1.5 },
             y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
             x: { type: "spring", stiffness: 50, damping: 20 },
             rotate: { type: "spring", stiffness: 50, damping: 20 }
           }}
           className="absolute pointer-events-none drop-shadow-2xl z-20 w-64 md:w-96"
        >
          {/* Using a highly stylized, clean coffee cup image */}
          <img 
            src="https://images.unsplash.com/photo-1551887196-72e32bfc7bf3?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3" 
            alt="Urban Drip Coffee" 
            className="w-full h-auto object-cover rounded-full shadow-[0_0_50px_rgba(200,169,126,0.3)]"
            style={{ mixBlendMode: 'screen' }} // To blend dark backgrounds if any
          />
        </motion.div>

        {/* Offers Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="absolute bottom-24 lg:bottom-12 w-full max-w-4xl px-4 flex flex-col sm:flex-row gap-4 justify-center items-center z-40"
        >
          <div className="bg-urban-white/10 backdrop-blur-md border border-urban-gold/30 px-6 py-3 rounded-none lg:rounded-l-2xl text-center w-full sm:w-1/2">
            <span className="text-urban-gold font-bold font-heading tracking-widest text-sm md:text-base">BUY 3 GET 1 FREE</span>
            <p className="text-urban-cream/80 text-xs mt-1 font-sans">Every Tuesday</p>
          </div>
          <div className="bg-urban-white/10 backdrop-blur-md border border-urban-gold/30 px-6 py-3 rounded-none lg:rounded-r-2xl text-center w-full sm:w-1/2">
            <span className="text-urban-accent font-bold font-heading tracking-widest text-sm md:text-base">BUY 1 GET 1 FREE</span>
            <p className="text-urban-cream/80 text-xs mt-1 font-sans">First App Order</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#1A1A1A" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-8 lg:bottom-12 right-4 lg:right-12 bg-urban-gold text-urban-black font-heading font-bold text-xl px-10 py-4 rounded-full uppercase tracking-widest shadow-[0_0_30px_rgba(200,169,126,0.5)] z-40"
        >
          Order Now
        </motion.button>
      </div>
    </section>
  );
}
