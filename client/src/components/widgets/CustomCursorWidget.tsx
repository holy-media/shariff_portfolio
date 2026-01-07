import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Check, Minus } from "lucide-react";

export default function CustomCursorWidget() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.style.cursor = "auto";
    };
  }, []);

  const handleSave = () => {
    setName(inputValue);
  };

  return (
    <>
      {/* Animated Custom Cursor */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center gap-2 will-change-transform"
        style={{ 
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
          transition: 'none'
        }}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]"
          style={{ transform: "translate(0, 0)" }}
        >
          <path 
            d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z" 
            fill="#dc2626" 
            stroke="white" 
            strokeWidth="1.5"
          />
        </svg>
        <AnimatePresence>
          {name && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.5, x: -10 }}
              className="bg-[#dc2626] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg whitespace-nowrap"
            >
              {name}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Customize Cursor Box (Top Left) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-24 left-4 md:left-6 z-40 w-36 md:w-52 bg-card/80 backdrop-blur-md border border-primary/20 rounded-lg overflow-hidden font-display shadow-2xl shadow-primary/5 cursor-none"
      >
        <div className="flex items-center justify-between px-2 md:px-3 py-1.5 md:py-2 border-b border-primary/10 bg-primary/5 cursor-none">
          <span className="text-[7px] md:text-[9px] uppercase tracking-[0.15em] font-bold text-primary/80 cursor-none">Tag</span>
          <button onClick={() => setIsMinimized(!isMinimized)} className="text-primary/40 hover:text-primary transition-colors cursor-none">
            <Minus className="w-3 h-3 md:w-3.5 md:h-3.5 cursor-none" />
          </button>
        </div>

        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-2 md:p-3 space-y-2 md:space-y-3 cursor-none"
            >
              <div className="flex items-center gap-1.5 md:gap-2 cursor-none">
                <div className="p-1 md:p-1.5 bg-primary/10 rounded-md cursor-none">
                  <User className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary cursor-none" />
                </div>
                <span className="text-[7px] md:text-[9px] text-muted-foreground uppercase tracking-widest font-bold cursor-none">
                  Tag
                </span>
              </div>
              
              <div className="flex gap-1.5 md:gap-2 cursor-none">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Name..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-md px-1.5 md:px-2 py-1 md:py-1.5 text-[8px] md:text-[10px] outline-none focus:border-primary/50 transition-colors uppercase tracking-widest font-mono text-white cursor-none w-0"
                  onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                />
                <button 
                  onClick={handleSave}
                  className="p-1 md:p-1.5 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors cursor-none"
                >
                  <Check className="w-3 h-3 md:w-3.5 md:h-3.5 cursor-none" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
