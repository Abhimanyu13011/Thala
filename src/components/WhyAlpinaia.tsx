import { motion } from "motion/react";

const reasons = [
  {
    number: "1",
    title: "Uncompromising Purity",
    desc: "Sourced from glacial springs at 4,500m altitude. Every drop is naturally filtered through ancient rock formations, ensuring zero impurities and pristine taste.",
    color: "border-[#40b0b0]"
  },
  {
    number: "2",
    title: "Heritage Craftsmanship",
    desc: "Each vessel is an artisan masterpiece, featuring traditional motifs that honor timeless cultural richness and alpine heritage.",
    color: "border-[#d4af37]"
  },
  {
    number: "3",
    title: "Optimal Mineral Balance",
    desc: "Natural pH of 7.8-8.2 with balanced TDS (120-150 mg/L). Essential minerals that support wellness without artificial enhancement.",
    color: "border-[#40b0b0]"
  },
  {
    number: "4",
    title: "Sustainable Luxury",
    desc: "Premium quality meets environmental responsibility. 100% recyclable packaging, carbon-neutral operations, and source protection commitments.",
    color: "border-[#40b0b0]"
  }
];

export default function WhyAlpinaia() {
  return (
    <section className="py-24 px-6 bg-[#fcfcf9]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="serif text-4xl md:text-5xl text-[#1a1a1a] text-center mb-20"
        >
          Why Alpinaia
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white p-8 rounded-2xl border-t-4 ${reason.color} shadow-sm hover:shadow-md transition-shadow flex flex-col items-start h-full`}
            >
              <div className="w-12 h-12 bg-[#40b0b0]/80 rounded-xl flex items-center justify-center text-white font-serif text-lg mb-8 shadow-inner">
                {reason.number}
              </div>
              <h3 className="serif text-2xl text-[#1a1a1a] mb-6 leading-tight">
                {reason.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed font-light">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
