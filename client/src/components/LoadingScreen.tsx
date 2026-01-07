import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Target, 
  Palette, 
  Camera, 
  TrendingUp, 
  Film
} from "lucide-react";

const shapes = [
  { icon: Target, label: "Strategy" },
  { icon: Palette, label: "Design" },
  { icon: Camera, label: "Photography" },
  { icon: TrendingUp, label: "Marketing" },
  { icon: Film, label: "Production" }
];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [shapeIndex, setShapeIndex] = useState(0);

  useEffect(() => {
    // Total loading duration approx 7-8 seconds
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return prev + 1.25; 
      });
    }, 100);

    // Fast rotation through all 5 service icons
    const shapeInterval = setInterval(() => {
      setShapeIndex(prev => (prev + 1) % shapes.length);
    }, 1200); // Slower interval to ensure all 5 are seen within ~6-7 seconds

    return () => {
      clearInterval(interval);
      clearInterval(shapeInterval);
    };
  }, []);

  const CurrentIcon = shapes[shapeIndex].icon;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
          className="fixed inset-0 z-[100] bg-background flex flex-center justify-center items-center perspective-1000"
        >
          <div className="relative w-full max-w-md px-10 text-center">
            {/* Morphing 3D Icon Container */}
            <motion.div
              className="w-32 h-32 mx-auto mb-16 relative flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={shapeIndex}
                  initial={{ rotateY: -180, opacity: 0, scale: 0.2, rotateX: 90 }}
                  animate={{ rotateY: 0, opacity: 1, scale: 1.2, rotateX: 0 }}
                  exit={{ rotateY: 180, opacity: 0, scale: 0.2, rotateX: -90 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative flex items-center justify-center"
                >
                  <CurrentIcon className="w-20 h-20 text-primary drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
                </motion.div>
              </AnimatePresence>

              {/* Orbital Backgrounds */}
              <motion.div
                animate={{ rotate: 360, rotateX: 60 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360, rotateY: 60 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-primary/10 rounded-full"
              />
            </motion.div>

            <div className="relative h-1 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_15px_rgba(220,38,38,0.8)]"
              />
            </div>

            <div className="mt-4 flex justify-between text-[10px] font-mono uppercase tracking-widest text-primary/60">
              <span>Synchronizing Digital Assets</span>
              <span>{Math.floor(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
