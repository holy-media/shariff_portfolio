import { motion } from "framer-motion";
import { 
  Target, 
  Palette, 
  Camera, 
  TrendingUp, 
  Film,
  Zap
} from "lucide-react";

const serviceCategories = [
  {
    title: "Brand Strategy & Positioning",
    icon: Target,
    items: ["Brand identity", "Messaging", "Market positioning", "Growth roadmap"],
    description: "Defining your unique space in the market and building the roadmap to get there."
  },
  {
    title: "Design & Visual Communication",
    icon: Palette,
    items: ["Brand design", "Social creatives", "Campaign assets", "Graphic systems"],
    description: "Crafting visual languages that communicate your brand values across every touchpoint."
  },
  {
    title: "Photography & Cinematography",
    icon: Camera,
    items: ["Events", "Concerts", "Commercial shoots", "Lifestyle visuals"],
    description: "Capturing moments and creating high-end visual content that tells your story."
  },
  {
    title: "Digital Marketing & Social Media",
    icon: TrendingUp,
    items: ["Paid Meta Ads & Google Ads", "Social Media Marketing", "Performance Marketing", "Content Marketing", "Email Marketing", "SMM"],
    description: "Driving growth through data-backed marketing and engaging social presence."
  },
  {
    title: "Content & Media Production",
    icon: Film,
    items: ["After-movies", "Short Format videos", "Promo videos", "Event coverage", "Visual storytelling", "Podcasts"],
    description: "Transforming events and ideas into compelling cinematic narratives, high-impact short-form content, and engaging audio-visual experiences."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 italic">What I Do</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 bg-card border border-white/5 rounded-3xl hover:border-primary/40 transition-all duration-500 overflow-hidden cursor-none"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 mb-8 flex items-center justify-center rounded-2xl bg-white/5 text-primary border border-white/10 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 cursor-none">
                  <service.icon className="w-7 h-7 cursor-none" />
                </div>
                
                <h3 className="text-2xl font-bold font-display mb-4 leading-tight cursor-none">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed cursor-none">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 cursor-none">
                  {service.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 text-white/60 group-hover:text-primary group-hover:bg-primary/5 transition-colors cursor-none"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group p-8 bg-primary rounded-3xl flex flex-col justify-between items-start text-primary-foreground hover:scale-[1.02] transition-transform duration-500"
          >
            <div>
              <Zap className="w-10 h-10 mb-6 fill-primary-foreground" />
              <h3 className="text-3xl font-bold font-display mb-4 leading-tight">Ready to launch your project?</h3>
              <p className="opacity-90 mb-8">Let's combine these strategies to build something iconic.</p>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-4 bg-black text-white font-bold rounded-2xl hover:bg-black/80 transition-colors flex items-center justify-center gap-2"
            >
              Get Started <Zap className="w-4 h-4 fill-white" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
