import { motion } from "framer-motion";

const lines = [
  "From the moment you came into my life...",
  "Everything changed.",
  "You made my days brighter.",
  "My heart happier.",
  "And my life more meaningful.",
];

const EmotionalBuildup = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-50" />
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: i * 0.3 }}
            className={`font-heading ${
              i === 0 ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            } ${i === lines.length - 1 ? "text-foreground font-semibold" : "text-foreground/70"} italic leading-relaxed`}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default EmotionalBuildup;
