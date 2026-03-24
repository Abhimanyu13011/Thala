import { motion } from "motion/react";
import { Menu, X, Droplets } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Droplets className="text-[#40b0b0]" size={24} />
          <span className="serif text-xl font-medium tracking-widest uppercase text-[#1a1a1a]">Alpinaia</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Source", "Sustainability", "Products", "Experience"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/70 hover:text-[#40b0b0] transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 border border-black/20 rounded-full text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all"
          >
            Shop Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#1a1a1a]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-b border-black/5 px-6 py-8 flex flex-col gap-6"
        >
          {["Source", "Sustainability", "Products", "Experience"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.2em] text-[#1a1a1a]"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
