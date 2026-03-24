import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function ProductDetail() {
  const features = [
    "Zero impurities",
    "Natural minerals",
    "Eco-friendly packaging"
  ];

  return (
    <section id="product-detail" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="space-y-4">
            <h2 className="serif text-4xl md:text-5xl text-[#1a1a1a]">
              Alpiniaa
            </h2>
            <p className="text-[#40b0b0] font-medium tracking-wide">
              Still Water • 500ml
            </p>
          </div>

          {/* Description */}
          <p className="text-[#666] text-lg leading-relaxed max-w-3xl">
            Pure Alpine spring water in an ornate crystalline vessel adorned with 
            traditional mountain motifs. A celebration of alpine heritage.
          </p>

          {/* Specifications Box */}
          <div className="bg-[#fffcf0] border border-[#f0e6d2] rounded-xl p-8 space-y-6">
            <h3 className="serif text-xl text-[#1a1a1a]">Specifications</h3>
            <div className="space-y-4">
              <p className="text-[#444]">
                <span className="font-bold text-[#1a1a1a]">Mineral Content:</span> TDS: 120-150 mg/L
              </p>
              <p className="text-[#444]">
                <span className="font-bold text-[#1a1a1a]">pH Level:</span> 7.8 - 8.2
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h3 className="serif text-xl text-[#1a1a1a]">Features</h3>
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-[#666]"
                >
                  <CheckCircle2 className="text-[#40b0b0] fill-[#40b0b0]/10" size={24} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
