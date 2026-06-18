import { Phone, MessageCircle, MapPin, ShoppingCart } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-urban-black text-urban-gold py-2 px-4 text-xs md:text-sm font-medium tracking-wide">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 hidden md:flex">
            <MapPin size={14} />
            <span>Khalid Commercial Area, Phase 7, Karachi</span>
          </div>
          <a href="tel:+923321774261" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={14} />
            <span>+92 332 1774261</span>
          </a>
          <a href="https://wa.me/923701931792" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MessageCircle size={14} />
            <span>+92 370 1931792</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-urban-gold text-urban-black px-3 py-1 rounded-full hover:bg-white transition-colors font-bold">
            <ShoppingCart size={14} />
            <span>Cart (0)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
