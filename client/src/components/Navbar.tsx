import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/40 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/20"
    >
      <Link href="/" className="text-xl font-display font-bold tracking-tight hover:text-primary transition-colors">
        UMAR SHARIFF
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {["About", "Services", "Contact"].map((item) => (
          <button
            key={item}
            onClick={() => {
              const id = item.toLowerCase();
              const element = document.getElementById(id);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {item}
          </button>
        ))}
      </div>

      <button 
        onClick={() => scrollToSection("contact")}
        className="hidden md:block px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
      >
        Let's Talk
      </button>
    </motion.nav>
  );
}
