import { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX, Radius } from "lucide-react";

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '80vh',
    overflow: 'hidden',
    borderRadius: '20px',   // added
  },
  video: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '20px',   // added
  },

  controls: {
    display: 'flex',
    gap: '1rem',
    animation: 'slideUp 0.8s ease-out forwards',
    animationDelay: '0.2s',
    opacity: 0,
    animationFillMode: 'forwards'
  },
};


const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <div style={styles.container}>
        {/* Video Element */}
        <video
          ref={videoRef}
          style={styles.video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/assets/img/hero/hero-video.mp4"
            type="video/mp4"
          />
        </video>
        
      </div>
    </>
  );
};

export default Video;