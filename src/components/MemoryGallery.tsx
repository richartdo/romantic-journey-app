import { motion } from "framer-motion";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";

const memories = [
  { src: memory1, caption: "Sunset walks with you", alt: "Couple walking at sunset" },
  { src: memory2, caption: "Our special moments", alt: "Romantic dinner setting" },
  { src: memory3, caption: "Holding you close", alt: "Holding hands" },
];

const MemoryGallery = () => {
  return (
    <section className="py-24 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-4xl sm:text-6xl text-center text-gradient mb-6"
      >
        Our Memories
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center font-heading italic text-muted-foreground text-base sm:text-lg mb-16"
      >
        "Every memory with you is my favorite."
      </motion.p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {memories.map((mem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
            className="glass-card overflow-hidden group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={mem.src}
                alt={mem.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <p className="p-4 text-center font-heading italic text-foreground/80">
              {mem.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemoryGallery;
