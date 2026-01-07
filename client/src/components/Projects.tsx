import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@assets/stock_images/modern_minimalist_di_ba8d2839.jpg";
import project2 from "@assets/stock_images/abstract_3d_digital__19889d10.jpg";
import project3 from "@assets/stock_images/sleek_mobile_app_des_edb982b5.jpg";

const projects = [
  {
    id: 1,
    title: "Lumina Dashboard",
    category: "UI/UX Design",
    image: project1,
    description: "A comprehensive analytics dashboard for modern SaaS applications, featuring dark mode and real-time data visualization.",
    tech: ["React", "Tailwind", "Recharts"],
  },
  {
    id: 2,
    title: "Nebula Art Platform",
    category: "Web Development",
    image: project2,
    description: "An immersive digital art marketplace built with WebGL and Three.js, allowing users to explore galleries in 3D.",
    tech: ["Three.js", "WebGL", "Next.js"],
  },
  {
    id: 3,
    title: "Flow Mobile App",
    category: "Mobile Design",
    image: project3,
    description: "A productivity application focused on deep work and flow state, featuring a minimalist interface and gestural navigation.",
    tech: ["React Native", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Selected Work</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-medium text-primary mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-bold font-display">{project.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs bg-white/5 rounded border border-white/5 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
