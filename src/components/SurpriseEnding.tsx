import { motion } from "framer-motion";

const SurpriseEnding = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-5xl sm:text-7xl text-gradient"
        >
          Happy Valentine's, My Love ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-heading italic text-xl sm:text-2xl text-foreground/70"
        >
          Forever grateful for you ✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="pt-12"
        >
          <p className="font-body text-sm text-muted-foreground tracking-widest uppercase mb-2">
            With all my love
          </p>
          <p className="font-display text-4xl text-gradient">
            Yours Forever 💕
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SurpriseEnding;
