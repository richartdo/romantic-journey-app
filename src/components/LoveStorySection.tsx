import { motion } from "framer-motion";

const stories = [
  {
    title: "The Day I Met You",
    text: "Something shifted in my world that day. I didn't know it yet, but my heart had already chosen you. Every moment since has been a gift I never knew I needed.",
    emoji: "💫",
  },
  {
    title: "The Little Things You Do",
    text: "The way you laugh, the warmth in your eyes, the gentle way you hold my hand — these tiny moments are the ones I treasure most. They make ordinary days extraordinary.",
    emoji: "🌸",
  },
  {
    title: "Why You Mean Everything",
    text: "You are my calm in the chaos, my light in the dark, my reason to smile on the hardest days. With you, I found a love that feels like home.",
    emoji: "💖",
  },
];

const LoveStorySection = () => {
  return (
    <section className="py-24 px-6 relative">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-5xl sm:text-6xl text-center text-gradient mb-20"
      >
        Our Story
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {stories.map((story, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 sm:p-10"
          >
            <span className="text-4xl mb-4 block">{story.emoji}</span>
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              {story.title}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              {story.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LoveStorySection;
