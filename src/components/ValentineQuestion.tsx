import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "@/components/ui/sonner";

const ValentineQuestion = () => {
  const [answered, setAnswered] = useState(false);

  const createConfetti = useCallback(() => {
    const colors = [
      "hsl(340,100%,50%)",
      "hsl(347,80%,88%)",
      "hsl(267,100%,78%)",
      "hsl(30,100%,95%)",
      "hsl(346,100%,70%)",
    ];

    for (let i = 0; i < 80; i++) {
      const el = document.createElement("div");
      el.className = "confetti-piece";
      el.style.left = `${Math.random() * 100}vw`;
      el.style.top = `-10px`;
      el.style.width = `${Math.random() * 12 + 6}px`;
      el.style.height = `${Math.random() * 12 + 6}px`;
      el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      el.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
      el.style.animationDelay = `${Math.random() * 2}s`;
      el.style.animationDuration = `${Math.random() * 2 + 2}s`;
      el.style.zIndex = "9999";
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 5000);
    }
  }, []);

  const handleYes = () => {
    setAnswered(true);
    createConfetti();
  };

  const handleDefinitelyYes = () => {
    handleYes();
    const message = "Yes I will be your valentine";
    const phone = "254795594142";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast("Go back to the website 😊");
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-bg" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-glow)" }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <motion.h2
                className="font-display text-4xl sm:text-7xl text-gradient mb-12"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                Will you be my Valentine? 💖
              </motion.h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleYes}
                  className="glow-button text-base sm:text-xl w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-5"
                >
                  Yes ❤️
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDefinitelyYes}
                  className="glow-button text-base sm:text-xl w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-5"
                >
                  Definitely Yes 💕
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="answer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="space-y-6"
            >
              <motion.div
                className="text-6xl sm:text-8xl mb-8"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                💖
              </motion.div>
              <h2 className="font-display text-4xl sm:text-7xl text-gradient">
                You just made me the happiest person alive
              </h2>
              <p className="font-heading italic text-base sm:text-xl text-muted-foreground mt-6">
                I promise to make every day special for you ✨
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ValentineQuestion;
