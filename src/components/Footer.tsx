import { motion } from "motion/react";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="serif text-3xl mb-6 tracking-widest uppercase">Alpiniaa</h2>
            <p className="text-sm text-white/40 max-w-sm leading-relaxed">
              Crafting the world's most refined hydration experience since 1924. 
              Sourced from the heart of the Himalayas, bottled with respect for heritage.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-6">Explore</h4>
            <ul className="flex flex-col gap-4 text-xs tracking-widest text-white/40 uppercase">
              <li><a href="#" className="hover:text-white transition-colors">Our Source</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stockists</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-6">Connect</h4>
            <div className="flex gap-6 text-white/40">
              <Instagram size={18} className="hover:text-white cursor-pointer" />
              <Twitter size={18} className="hover:text-white cursor-pointer" />
              <Facebook size={18} className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            © 2026 Alpiniaa. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-white/20">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
