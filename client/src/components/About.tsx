import { motion } from "framer-motion";
import { Camera, Film, Palette, Zap, Award, Globe, Users } from "lucide-react";
import myPhoto from "@assets/Airbrush-IMAGE-ENHANCER-1767770789192-1767770789192_1767772223802.jpg";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "3+", icon: Globe },
    { label: "Projects Completed", value: "100+", icon: Award },
    { label: "Happy Clients", value: "50+", icon: Users },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[3/5] rounded-3xl overflow-hidden border border-white/10 group">
              <img
                src={myPhoto}
                alt="Umar Shariff - Co-founder of Holymedia"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full">CO-FOUNDER</div>
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold rounded-full border border-white/10">STRATEGY HEAD</div>
                  </div>
                  <div className="text-white font-display font-bold text-xl tracking-tight">HOLYMEDIA</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">Co-founder & Strategy Head</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              I am <span className="text-primary italic">Umar Shariff</span>, driving impact at Holymedia.
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                I am the Co-Founder and Strategy Head of <strong className="text-white">Holymedia</strong> — a global creative studio built on purpose, precision, and refined storytelling. I’ve led creative and strategic collaborations across concerts, hospitality, real estate and artist ecosystems — delivering 100+ completed projects for 50+ passionate and growth-driven clients, with a focus on identity, emotion, and long-term brand value.
              </p>
              <p>
                At Holymedia, I lead the strategic and creative bridge — bringing together brand strategy, visual identity, media production, and digital growth into a cohesive ecosystem designed for measurable impact. My work is guided by clarity, craftsmanship, and intention — helping brands strengthen trust, elevate perception, and build timeless, meaningful presence.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
               <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2"
              >
                Let's Collaborate <Zap className="w-4 h-4 fill-current" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
