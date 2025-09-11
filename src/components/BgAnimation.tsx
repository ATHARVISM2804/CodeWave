import React, { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  baseOpacity: number;
  pulse: number;
  color: [number, number, number];
}

interface GridLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity: number;
  isVertical: boolean;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const dots: Dot[] = [];
    const gridLines: GridLine[] = [];
    const maxDots = 25; // Reduced for subtlety
    const gridSpacing = 100;

    // Get theme-aware colors
    const getThemeColors = () => {
      const isDark = document.documentElement.classList.contains('dark');
      
      if (isDark) {
        return {
          primary: [100, 149, 237] as [number, number, number], // CornflowerBlue
          secondary: [147, 112, 219] as [number, number, number], // MediumPurple
          accent: [64, 224, 208] as [number, number, number], // Turquoise
          grid: [70, 85, 110] as [number, number, number], // Muted blue-gray
        };
      } else {
        return {
          primary: [99, 102, 241] as [number, number, number], // Indigo
          secondary: [139, 92, 246] as [number, number, number], // Violet
          accent: [34, 197, 94] as [number, number, number], // Green
          grid: [148, 163, 184] as [number, number, number], // Slate
        };
      }
    };

    // Create subtle grid
    const createGrid = () => {
      gridLines.length = 0;

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSpacing) {
        gridLines.push({
          x1: x,
          y1: 0,
          x2: x,
          y2: canvas.height,
          opacity: 0.02, // Even more subtle
          isVertical: true
        });
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSpacing) {
        gridLines.push({
          x1: 0,
          y1: y,
          x2: canvas.width,
          y2: y,
          opacity: 0.02,
          isVertical: false
        });
      }
    };

    // Create floating dots
    const createDot = (): Dot => {
      const colors = getThemeColors();
      const colorOptions = [colors.primary, colors.secondary, colors.accent];
      
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2, // Slower movement
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 2 + 1,
        opacity: 0,
        baseOpacity: Math.random() * 0.3 + 0.1, // Lower opacity
        pulse: Math.random() * Math.PI * 2,
        color: colorOptions[Math.floor(Math.random() * colorOptions.length)]
      };
    };

    // Initialize elements
    for (let i = 0; i < maxDots; i++) {
      dots.push(createDot());
    }
    createGrid();

    // Draw subtle grid
    const drawGrid = () => {
      const colors = getThemeColors();
      
      gridLines.forEach(line => {
        ctx.strokeStyle = `rgba(${colors.grid.join(',')}, ${line.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
      });
    };

    // Draw floating dot with subtle glow
    const drawDot = (dot: Dot, globalTime: number) => {
      // Gentle pulse animation
      const pulse = Math.sin(globalTime * 1.5 + dot.pulse) * 0.3 + 0.7;
      dot.opacity = dot.baseOpacity * pulse;

      // Draw dot with subtle gradient
      const gradient = ctx.createRadialGradient(
        dot.x, dot.y, 0,
        dot.x, dot.y, dot.radius * 4
      );
      gradient.addColorStop(0, `rgba(${dot.color.join(',')}, ${dot.opacity})`);
      gradient.addColorStop(0.5, `rgba(${dot.color.join(',')}, ${dot.opacity * 0.3})`);
      gradient.addColorStop(1, `rgba(${dot.color.join(',')}, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius * 2, 0, Math.PI * 2);
      ctx.fill();
    };

    // Draw subtle connections between nearby dots
    const drawConnections = () => {
      const colors = getThemeColors();
      const connectionDistance = 150;
      
      dots.forEach((dot, i) => {
        dots.slice(i + 1).forEach((otherDot) => {
          const dx = dot.x - otherDot.x;
          const dy = dot.y - otherDot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.05; // Very subtle
            
            ctx.strokeStyle = `rgba(${colors.primary.join(',')}, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(otherDot.x, otherDot.y);
            ctx.stroke();
          }
        });
      });
    };

    // Draw flowing data streams occasionally
    const drawDataStreams = (globalTime: number) => {
      const colors = getThemeColors();
      const streamCount = 3;
      
      for (let i = 0; i < streamCount; i++) {
        const streamY = (canvas.height / (streamCount + 1)) * (i + 1);
        const streamX = (globalTime * 30 + i * 200) % (canvas.width + 100) - 50;
        
        // Draw subtle moving line
        const gradient = ctx.createLinearGradient(streamX - 50, streamY, streamX + 50, streamY);
        gradient.addColorStop(0, `rgba(${colors.accent.join(',')}, 0)`);
        gradient.addColorStop(0.5, `rgba(${colors.accent.join(',')}, 0.15)`);
        gradient.addColorStop(1, `rgba(${colors.accent.join(',')}, 0)`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(streamX - 30, streamY);
        ctx.lineTo(streamX + 30, streamY);
        ctx.stroke();
      }
    };

    const animate = () => {
      time += 0.008; // Slower animation
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid first (background)
      drawGrid();

      // Draw data streams
      drawDataStreams(time);

      // Update and draw dots
      dots.forEach((dot) => {
        // Slow, gentle movement
        dot.x += dot.vx;
        dot.y += dot.vy;
        
        // Add subtle drift
        dot.x += Math.sin(time + dot.pulse) * 0.1;
        dot.y += Math.cos(time * 0.7 + dot.pulse) * 0.08;

        // Boundary wrapping
        if (dot.x < -20) dot.x = canvas.width + 20;
        if (dot.x > canvas.width + 20) dot.x = -20;
        if (dot.y < -20) dot.y = canvas.height + 20;
        if (dot.y > canvas.height + 20) dot.y = -20;

        drawDot(dot, time);
      });

      // Draw subtle connections
      drawConnections();

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
      createGrid();
      
      // Adjust dot positions for new canvas size
      dots.forEach(dot => {
        if (dot.x > canvas.width) dot.x = canvas.width;
        if (dot.y > canvas.height) dot.y = canvas.height;
      });
    };

    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ 
        opacity: document.documentElement.classList.contains('dark') ? 0.3 : 0.2,
        mixBlendMode: 'multiply'
      }}
    />
  );
};

export default ParticleBackground;