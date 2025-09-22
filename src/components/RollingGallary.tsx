import React, { useEffect, useState, useMemo } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
  ResolvedValues,
} from "motion/react";

const DEFAULT_IMGS: string[] = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
];


interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  const galleryImages = images.length > 0 ? images : DEFAULT_IMGS;

  const [isSm, setIsSm] = useState(window.innerWidth <= 640);
  useEffect(() => {
    const handleResize = () => setIsSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sizing
  const faceCount = galleryImages.length;
  const cylinderWidth = isSm ? 1000 : 1800;
  const faceWidth = isSm ? 180 : (cylinderWidth / faceCount) * 1.5;
  const radius = cylinderWidth / (2 * Math.PI);
  const imageWidth = isSm ? 140 : 220;
  const imageHeight = isSm ? 90 : 100;
  const imagePadding = isSm ? "3%" : "6%";

  // Motion setup
  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const transform = useTransform(rotation, (val) => `rotate3d(0,1,0,${val}deg)`);

  // Precompute face angles for transforms
  const faceAngles = useMemo(
    () => Array.from({ length: faceCount }, (_, i) => (360 / faceCount) * i),
    [faceCount]
  );

  // Blur & opacity helpers
  const getRelativeAngle = (rotationValue: number, faceAngle: number) => {
    const normalized = ((-rotationValue % 360) + 360) % 360;
    let relative = (faceAngle - normalized + 360) % 360;
    return relative > 180 ? 360 - relative : relative;
  };

  const createBlurTransform = (faceAngle: number) =>
    useTransform(rotation, (r) => {
      const rel = getRelativeAngle(r, faceAngle);
      if (rel <= 30) return "blur(0px)";
      const blurFactor = Math.min((rel - 30) / 120, 1);
      return `blur(${blurFactor * 3}px)`;
    });

  const createOpacityTransform = (faceAngle: number) =>
    useTransform(rotation, (r) => {
      const rel = getRelativeAngle(r, faceAngle);
      if (rel > 90) {
        return Math.max(0.4, 1 - ((rel - 90) / 90) * 0.6);
      }
      return 1;
    });

  // Autoplay spin
  const startInfiniteSpin = (start: number) => {
    controls.start({
      rotateY: [start, start - 360],
      transition: { duration: 20, ease: "linear", repeat: Infinity },
    });
  };

  useEffect(() => {
    if (autoplay) {
      startInfiniteSpin(rotation.get());
    } else {
      controls.stop();
    }
  }, [autoplay]);

  // Drag controls
  const normalize = (angle: number) => ((angle % 360) + 360) % 360;

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    controls.stop();
    rotation.set(normalize(rotation.get() + info.offset.x * dragFactor));
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const final = normalize(rotation.get() + info.velocity.x * dragFactor);
    rotation.set(final);
    if (autoplay) startInfiniteSpin(final);
  };

  // Hover pause
  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) controls.stop();
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) startInfiniteSpin(rotation.get());
  };

  return (
    <section className="relative py-12 sm:py-16 px-2 sm:px-4 w-full flex flex-col items-center overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full sm:w-[600px] h-40 opacity-10 rounded-full blur-3xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"></div>
      </div>

      {/* Badge */}
      <div
        className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm shadow-lg mb-4"
        style={{
          borderColor: "var(--accent-primary)",
          background: "var(--card-bg)",
          boxShadow: "0 4px 15px rgba(var(--accent-primary-rgb), 0.10)",
        }}
      >
        <span className="font-semibold" style={{ color: "var(--accent-primary)" }}>
          Tech Stack
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-extrabold tracking-tight mb-3 leading-tight">
        <span style={{ color: "var(--text-primary)" }}>Technologies</span>{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
          We Use
        </span>
      </h2>
      <div className="w-24 sm:w-28 h-1.5 mx-auto mb-6 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]" />

      <p
        className="text-base sm:text-lg md:text-xl text-center mb-10 max-w-[95%] sm:max-w-md md:max-w-2xl mx-auto"
        style={{ color: "var(--text-secondary)" }}
      >
        Our solutions are built on the most modern, scalable, and robust technologies in the
        industry.
      </p>

      {/* Gallery */}
      <div className="w-full flex items-center justify-center [perspective:1400px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={(latest: ResolvedValues) =>
            typeof latest.rotateY === "number" && rotation.set(latest.rotateY)
          }
          style={{ transform, rotateY: rotation, width: cylinderWidth, transformStyle: "preserve-3d" }}
          className="flex h-[200px] sm:h-[240px] md:min-h-[260px] lg:min-h-[300px] cursor-grab items-center justify-center"
        >
          {galleryImages.map((url, i) => {
            const blurTransform = createBlurTransform(faceAngles[i]);
            const opacityTransform = createOpacityTransform(faceAngles[i]);

            return (
              <motion.div
                key={i}
                className="group absolute flex items-center justify-center p-2 sm:p-6"
                style={{
                  width: `${faceWidth}px`,
                  padding: imagePadding,
                  transform: `rotateY(${faceAngles[i]}deg) translateZ(${radius}px)`,
                  filter: blurTransform,
                  opacity: opacityTransform,
                }}
              >
                <img
                  src={url}
                  alt="gallery"
                  className="pointer-events-none rounded-lg object-contain transition-transform duration-300 ease-out group-hover:scale-105 shadow-md border"
                  style={{
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                    background: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                    padding: "8px",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default RollingGallery;
