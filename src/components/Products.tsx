import { motion } from "motion/react";

const products = [
  {
    id: 1,
    title: "Alpinaia",
    description: "Still Water • 500ml",
    selected: true,
  },
  {
    id: 2,
    title: "Summit Heritage Edition",
    description: "Glacier Source • 500ml",
    selected: false,
  },
  {
    id: 3,
    title: "Glacier Heritage Edition",
    description: "Still Water • 500ml",
    selected: false,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8e8df] text-[#8b8b6b] text-[10px] uppercase tracking-[0.2em] mb-6"
          >
            <span className="text-xs">✨</span> HERITAGE COLLECTION
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="serif text-4xl md:text-5xl text-[#1a1a1a] mb-6"
          >
            Our Heritage Collection
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#666] max-w-2xl mx-auto leading-relaxed"
          >
            Three exceptional editions, each a masterpiece of purity and craftsmanship
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative bg-white rounded-2xl overflow-hidden border transition-all duration-500 ${
                product.selected 
                  ? "border-[#40b0b0] shadow-xl shadow-[#40b0b0]/10" 
                  : "border-transparent hover:border-[#40b0b0]/30 shadow-sm hover:shadow-lg"
              }`}
            >
              {product.selected && (
                <div className="absolute top-6 right-6 z-10">
                  <span className="px-4 py-1.5 bg-[#40b0b0] text-white text-[10px] font-medium uppercase tracking-wider rounded-lg shadow-lg">
                    Selected
                  </span>
                </div>
              )}
              
              <div className="aspect-[4/3] overflow-hidden p-4">
                <img
                  src="https://picsum.photos/seed/alpinaia-heritage/800/600"
                  alt={product.title}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 pt-2">
                <h3 className="serif text-xl text-[#1a1a1a] mb-2 group-hover:text-[#40b0b0] transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-[#888] font-light tracking-wide">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
