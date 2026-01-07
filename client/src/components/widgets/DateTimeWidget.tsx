import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, ChevronDown } from "lucide-react";

const timezones = [
  { label: "India", value: "Asia/Kolkata", country: "IN" },
  { label: "London", value: "Europe/London", country: "GB" },
  { label: "New York", value: "America/New_York", country: "US" },
  { label: "Dubai", value: "Asia/Dubai", country: "AE" },
  { label: "Singapore", value: "Asia/Singapore", country: "SG" },
  { label: "Tokyo", value: "Asia/Tokyo", country: "JP" },
  { label: "Paris", value: "Europe/Paris", country: "FR" },
  { label: "Sydney", value: "Australia/Sydney", country: "AU" },
  { label: "Moscow", value: "Europe/Moscow", country: "RU" },
  { label: "Hong Kong", value: "Asia/Hong_Kong", country: "HK" },
  { label: "Seoul", value: "Asia/Seoul", country: "KR" },
  { label: "Berlin", value: "Europe/Berlin", country: "DE" },
];

export default function DateTimeWidget() {
  const [time, setTime] = useState(new Date());
  const [isMinimized, setIsMinimized] = useState(false);
  const [selectedTZ, setSelectedTZ] = useState(timezones[0]);
  const [showTZList, setShowTZList] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      timeZone: selectedTZ.value,
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).toUpperCase();
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      timeZone: selectedTZ.value,
      month: "long",
      day: "numeric",
      year: "numeric",
    }).toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute top-24 right-4 md:right-6 z-40 w-36 md:w-52 bg-card/80 backdrop-blur-md border border-primary/20 rounded-lg overflow-hidden font-display shadow-2xl shadow-primary/5 cursor-none"
    >
      <div className="flex items-center justify-between px-2 md:px-3 py-1.5 md:py-2 border-b border-primary/10 bg-primary/5 cursor-none">
        <span className="text-[7px] md:text-[9px] uppercase tracking-[0.15em] font-bold text-primary/80 cursor-none">Time</span>
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
            <div className="relative cursor-none">
              <button 
                onClick={() => setShowTZList(!showTZList)}
                className="flex items-center justify-between w-full group cursor-none"
              >
                <div className="flex items-center gap-1 md:gap-2 cursor-none">
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-primary animate-pulse cursor-none" />
                  <span className="text-[7px] md:text-[9px] text-muted-foreground uppercase tracking-widest font-bold group-hover:text-primary transition-colors cursor-none truncate max-w-[60px] md:max-w-none">
                    {selectedTZ.label}
                  </span>
                </div>
                <ChevronDown className={`w-2.5 h-2.5 md:w-3 md:h-3 text-primary/40 transition-transform cursor-none ${showTZList ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showTZList && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-card border border-primary/10 rounded-md shadow-xl z-50 overflow-y-auto max-h-32 cursor-none"
                  >
                    {timezones.map((tz) => (
                      <button
                        key={tz.value}
                        onClick={() => {
                          setSelectedTZ(tz);
                          setShowTZList(false);
                        }}
                        className="w-full text-left px-2 py-1 md:py-1.5 text-[7px] md:text-[9px] uppercase tracking-widest hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors cursor-none"
                      >
                        {tz.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="space-y-0 cursor-none">
              <div className="text-sm md:text-2xl font-bold text-foreground tabular-nums tracking-tighter cursor-none">
                {formatTime(time)}
              </div>
              <div className="text-[6px] md:text-[9px] text-muted-foreground tracking-[0.1em] font-medium uppercase cursor-none">
                {formatDate(time)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
