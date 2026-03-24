import { motion } from "motion/react";
import { Mountain, ShieldCheck, Leaf } from "lucide-react";

const features = [
  {
    icon: <Mountain size={32} strokeWidth={1} />,
    title: "Himalayan Source",
    desc: "Sourced from the pristine, untouched aquifers deep within the Himalayan range."
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1} />,
    title: "Heritage Purity",
    desc: "Bottled with zero impurities, preserving the natural mineral balance of the mountains."
  },
  {
    icon: <Leaf size={32} strokeWidth={1} />,
    title: "Cultural Legacy",
    desc: "A celebration of Indian heritage through sustainable and ethical sourcing."
  }
];

export default function Features() {
  return (
    <section id="source" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-8 text-[#40b0b0]">{f.icon}</div>
              <h3 className="serif text-2xl mb-4 font-light tracking-wide text-[#1a1a1a]">{f.title}</h3>
              <p className="text-sm text-[#666] leading-relaxed font-light max-w-xs">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
