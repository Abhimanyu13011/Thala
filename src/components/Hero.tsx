import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden z-0 bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070" 
          alt="Alpine Mountain Lake" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/80" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[10px] uppercase tracking-[0.5em] mb-6 text-[#40b0b0] font-medium"
        >
          Pure Alpine Spring Water
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="serif text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-none mb-8 text-[#1a1a1a]"
        >
          Alpinaia
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-[#1a1a1a]/20 to-transparent" />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={20} className="text-[#1a1a1a]/30" />
          </motion.div>
        </motion.div>
      </div>

      {/* Side Label */}
      <div className="absolute left-10 bottom-20 hidden lg:block">
        <p className="vertical-text text-[10px] uppercase tracking-[0.3em] text-[#1a1a1a]/20 rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Est. 1924 • Alpine Source
        </p>
      </div>
    </section>
  );
}
