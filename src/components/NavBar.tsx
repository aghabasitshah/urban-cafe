import { motion } from "framer-motion";

export function NavBar() {
  return (
    <nav className="w-full bg-urban-cream py-6 sticky top-0 z-50 border-b border-urban-brown/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
        {/* LOGO */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center cursor-pointer"
        >
          <div className="flex items-center justify-center gap-3 relative">
            {/* Minimalist SVG representation of the logo */}
            <div className="w-12 h-12 rounded-full border-2 border-urban-black flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-urban-black scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full z-0"></div>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-urban-black group-hover:text-urban-gold relative z-10 transition-colors duration-500">
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                  <line x1="6" y1="2" x2="6" y2="4"></line>
                  <line x1="10" y1="2" x2="10" y2="4"></line>
                  <line x1="14" y1="2" x2="14" y2="4"></line>
               </svg>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter uppercase text-urban-black">
              Urban Drip
            </h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-2 font-script text-xl md:text-2xl text-urban-brown"
          >
            Brewed bold. Served smooth.
          </motion.p>
        </motion.div>
      </div>
    </nav>
  );
}
