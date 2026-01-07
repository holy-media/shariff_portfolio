import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import AudioPlayer from "@/components/AudioPlayer";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursorWidget from "@/components/widgets/CustomCursorWidget";
import DateTimeWidget from "@/components/widgets/DateTimeWidget";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground bg-ambient">
      <CustomCursorWidget />
      <LoadingScreen />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          style={{ perspective: "1000px" }}
        >
          <Hero />
          <About />
          <Services />
          <Experience />
          <Contact />
          <DateTimeWidget />
        </motion.div>
      </main>
      <AudioPlayer />
    </div>
  );
}
