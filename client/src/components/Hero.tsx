import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/abstract_dark_modern_geometric_background.png";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-widest text-primary uppercase border border-primary/20 rounded-full bg-primary/10">
            Available for work
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6">
            Refining the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 italic">
              Digital Presence
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
            Co-Founder & Strategy Head at Holymedia. Building purpose-driven brands through precision storytelling and strategic creative direction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 text-base font-semibold bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all hover:scale-105"
            >
              My Services
            </button>
            <button 
               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 text-base font-semibold border border-white/10 bg-white/5 rounded-full hover:bg-white/10 transition-all hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
