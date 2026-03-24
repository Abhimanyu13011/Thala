import { motion } from "motion/react";
import { Leaf, Droplets, RefreshCw, Heart } from "lucide-react";

const initiatives = [
  {
    icon: <Leaf size={24} />,
    title: "Eco-Friendly Packaging",
    desc: "Our artisan vessels are 100% recyclable and designed for reuse. Beauty that doesn't burden the planet."
  },
  {
    icon: <Droplets size={24} />,
    title: "Source Protection",
    desc: "We protect our Alpine sources through sustainable extraction practices and ecosystem preservation programs."
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Carbon Neutral Operations",
    desc: "From source to delivery, our operations are carbon neutral. Premium quality without environmental compromise."
  },
  {
    icon: <Heart size={24} />,
    title: "Community Support",
    desc: "Supporting local artisan communities who craft our heritage-inspired vessels, preserving traditional craftsmanship."
  }
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-32 px-6 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="serif text-4xl md:text-5xl text-[#1a1a1a] mb-4"
          >
            Sustainability at Heart
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8b8b6b] text-sm uppercase tracking-[0.2em]"
          >
            Luxury with Responsibility
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2013" 
              alt="Sustainability - Hands holding plant" 
              className="w-full h-full object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {initiatives.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#40b0b0]/80 rounded-xl flex items-center justify-center text-white mb-6">
                  {item.icon}
                </div>
                <h3 className="serif text-xl text-[#1a1a1a] mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
