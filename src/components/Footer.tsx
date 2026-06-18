import { MapPin, Phone, MessageCircle, Instagram, Code, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-urban-black text-white pt-20 pb-10 border-t border-urban-brown/20 relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Col 1: Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full border border-urban-gold flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-urban-gold">
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                  <line x1="6" y1="2" x2="6" y2="4"></line>
                  <line x1="10" y1="2" x2="10" y2="4"></line>
                  <line x1="14" y1="2" x2="14" y2="4"></line>
               </svg>
            </div>
            <h2 className="font-heading text-3xl font-bold uppercase tracking-tighter text-urban-gold">
              Urban Drip
            </h2>
          </div>
          <p className="font-script text-xl text-urban-cream/80">Brewed bold. Served smooth.</p>
          <p className="text-sm font-sans text-urban-cream/60 leading-relaxed max-w-xs">
            Karachi's Boldest Coffee. A premium Gen-Z destination for street culture and serious caffeine.
          </p>
          
          <button className="bg-urban-gold text-urban-black font-heading font-bold px-6 py-2 rounded-full uppercase tracking-widest hover:bg-white transition-colors w-max mt-4">
            Order Now
          </button>
        </div>

        {/* Col 2: Info */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-xl font-bold uppercase text-urban-gold mb-2">Find Us</h3>
          <div className="flex items-start gap-3 text-urban-cream/80 text-sm">
            <MapPin size={18} className="text-urban-accent shrink-0 mt-0.5" />
            <p>Khalid Commercial Area,<br/>Phase 7 Ext, Defence Housing Authority,<br/>Karachi, Pakistan</p>
          </div>
          <div className="flex items-center gap-3 text-urban-cream/80 text-sm mt-2">
            <Phone size={18} className="text-urban-accent shrink-0" />
            <a href="tel:+923321774261" className="hover:text-urban-gold">+92 332 1774261</a>
          </div>
          <div className="flex items-center gap-3 text-urban-cream/80 text-sm">
            <MessageCircle size={18} className="text-urban-accent shrink-0" />
            <a href="https://wa.me/923701931792" className="hover:text-urban-gold">+92 370 1931792</a>
          </div>
        </div>

        {/* Col 3: Hours  */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-xl font-bold uppercase text-urban-gold mb-2">Hours</h3>
          <div className="bg-urban-brown/10 border border-urban-brown/20 rounded-lg p-4 text-center">
            <div className="inline-block px-3 py-1 bg-urban-accent/20 text-urban-gold rounded-full text-xs font-bold uppercase tracking-widest mb-3 border border-urban-accent/30">
              Status
            </div>
            <p className="font-heading text-2xl uppercase tracking-wider text-white">Opening Soon</p>
            <p className="text-xs text-urban-cream/60 mt-2">Stay tuned to our IG for the launch date</p>
          </div>
        </div>

        {/* Col 4: Social Proof */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-xl font-bold uppercase text-urban-gold mb-2">Socials</h3>
          <a href="https://instagram.com/urbandrip.coffee" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between bg-urban-cream/5 hover:bg-urban-cream/10 border border-urban-cream/10 rounded-lg p-3 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-2 rounded-full text-white">
                <Instagram size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm">@urbandrip.coffee</span>
                <span className="text-xs text-urban-cream/50">607+ Followers</span>
              </div>
            </div>
            <span className="text-urban-gold font-bold group-hover:translate-x-1 transition-transform">→</span>
          </a>
          
          <div className="mt-4 p-4 border border-urban-gold/20 rounded-lg bg-urban-gold/5 flex flex-col items-center justify-center text-center">
             <Code size={20} className="text-urban-gold mb-2" />
             <p className="font-mono text-xs text-urban-cream/60">Subscribe to our newsletter for secret menu drops.</p>
             <div className="flex w-full mt-3">
               <input type="email" placeholder="ENTER EMAIL" className="bg-urban-black border border-urban-brown/50 outline-none text-xs px-3 py-2 w-full rounded-l uppercase font-mono text-white focus:border-urban-gold" />
               <button className="bg-urban-gold text-urban-black font-bold text-xs px-3 py-2 rounded-r hover:bg-white transition-colors uppercase">Join</button>
             </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-urban-brown/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-urban-cream/40 text-xs font-mono">
          © {new Date().getFullYear()} Urban Drip Coffee. All Rights Reserved.
        </p>
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-urban-gold hover:text-white text-xs font-bold uppercase tracking-widest transition-colors group"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
