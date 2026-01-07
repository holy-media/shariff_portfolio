import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const musicUrl = "/background-music.mp3"; 

  useEffect(() => {
    audioRef.current = new Audio(musicUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Try to auto-play
    audioRef.current.play().catch(err => {
      console.log("Auto-play blocked by browser. User must interact first.", err);
      setIsPlaying(false);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.muted = true; // Explicitly mute
      } else {
        audioRef.current.muted = false; // Explicitly unmute
        audioRef.current.play().catch(err => console.log("Audio play blocked by browser", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 p-3 bg-primary/20 hover:bg-primary/40 backdrop-blur-md border border-primary/30 rounded-full transition-all group shadow-lg shadow-primary/10"
      aria-label="Toggle Background Music"
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 text-primary animate-pulse" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      )}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-[10px] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
        {isPlaying ? "Mute Music" : "Play Soothing Music"}
      </span>
    </button>
  );
}
