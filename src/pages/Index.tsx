import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import LoveStorySection from "@/components/LoveStorySection";
import MemoryGallery from "@/components/MemoryGallery";
import EmotionalBuildup from "@/components/EmotionalBuildup";
import ValentineQuestion from "@/components/ValentineQuestion";
import SurpriseEnding from "@/components/SurpriseEnding";

const Index = () => {
  const [started, setStarted] = useState(false);

  return (
    <main className="relative bg-background overflow-hidden">
      <title>Will You Be My Valentine? 💖</title>
      <meta name="description" content="A special romantic message, just for you. Open this to discover something beautiful." />

      <FloatingHearts />

      <AnimatePresence mode="wait">
        {!started ? (
          <motion.div
            key="hero"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <HeroSection onStart={() => setStarted(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <LoveStorySection />
            <MemoryGallery />
            <EmotionalBuildup />
            <ValentineQuestion />
            <SurpriseEnding />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Index;
