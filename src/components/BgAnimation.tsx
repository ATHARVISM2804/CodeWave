import React, { useEffect, useRef } from "react";

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let w = canvas.width;
    let h = canvas.height;
    let time = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const colors = ["#3b82f6", "#06b6d4", "#9333ea"]; // Tailwind blue, cyan, purple
      colors.forEach((color, i) => {
        ctx.beginPath();
        ctx.moveTo(0, h / 2);

        for (let x = 0; x <= w; x++) {
          const y =
            h / 2 +
            Math.sin(x * 0.01 + time + i) * 40 +
            Math.sin(x * 0.005 + time * 0.5) * 20;
          ctx.lineTo(x, y + i * 30);
        }

        ctx.strokeStyle = color + "30"; // semi-transparent
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      time += 0.02;
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default BackgroundAnimation;



