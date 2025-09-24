import React, { useEffect, useState } from "react";

interface LoadingAnimationProps {
  duration?: number; // in ms
  onComplete?: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  duration = 800,
  onComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();
    let raf: number;

    const step = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        raf = requestAnimationFrame(step);
      } else {
        // Fade out + call complete
        setTimeout(() => {
          setIsVisible(false);
          onComplete?.();
        }, 400);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [duration, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Logo container */}
      <div className="relative mb-8">
        <div className="w-32 h-32 relative flex items-center justify-center mx-auto">
          {/* Gradient overlay */}
          <div className="absolute inset-0 rounded-full overflow-hidden z-10 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-br from-transparent via-[var(--accent-primary)]/20 to-transparent animate-pulse-premium" />
          </div>

          {/* Background circle for visibility in both themes */}
          <div className="absolute w-24 h-24 rounded-full z-10 bg-white dark:bg-black shadow-md shadow-black/20 dark:shadow-white/10" />

          {/* Logo */}
          <img
            src="/src/assets/logo.png"
            alt="CodeWave logo"
            className="w-20 h-20 object-contain z-20 animate-pulse-premium"
            onError={(e) => {
              e.currentTarget.src =
                "https://res.cloudinary.com/dikisauij/image/upload/v1756993391/logo_ycihzq.png";
            }}
          />

          {/* Spinning rings */}
          <div
            className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              border: "2px solid transparent",
              borderTopColor: "var(--accent-primary)",
              borderLeftColor: "var(--accent-secondary)",
              width: "110%",
              height: "110%",
              top: "-5%",
              left: "-5%",
              opacity: 0.85,
            }}
          />
          <div
            className="absolute inset-0 rounded-full animate-spin-reverse"
            style={{
              border: "1px solid transparent",
              borderRightColor: "var(--accent-secondary)",
              borderBottomColor: "var(--accent-primary)",
              width: "120%",
              height: "120%",
              top: "-10%",
              left: "-10%",
              opacity: 0.7,
            }}
          />
        </div>

        {/* Outer pulsing ring */}
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            border: "2px solid var(--accent-primary)",
            opacity: 0.3,
            width: "140%",
            height: "140%",
            top: "-20%",
            left: "-20%",
          }}
        />
      </div>

      {/* Progress bar */}
      <div
        className="w-64 h-1.5 bg-opacity-20 rounded-full overflow-hidden mb-2"
        style={{ background: "var(--glass-bg)" }}
      >
        <div
          className="h-full rounded-full transition-[width] duration-200 ease-out"
          style={{
            width: `${progress}%`,
            background:
              "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))",
            boxShadow: "0 0 15px var(--accent-primary)",
          }}
        />
      </div>

      {/* Text */}
      <div
        className="text-sm font-medium mb-2"
        style={{ color: "var(--accent-primary)" }}
      >
        {progress < 100 ? "Loading..." : "Ready!"}
      </div>

      {/* Animated dots */}
      <div className="flex space-x-2 mt-1">
        {["var(--accent-primary)", "var(--accent-secondary)", "var(--accent-primary)"].map(
          (color, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                background: color,
                animationDelay: `${i * 150}ms`,
                animationDuration: "1s",
              }}
            />
          )
        )}
      </div>

      {/* Branding */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
          CODEWAVE<span style={{ color: "var(--accent-primary)" }}>.it</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
