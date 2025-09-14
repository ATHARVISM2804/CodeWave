import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimation, useTransform, PanInfo, ResolvedValues } from 'motion/react';

const IMGS: string[] = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
  'https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png',
  'https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png',
  'https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png',
  'https://icon2.cleanpng.com/20240131/ia/transparent-python-logo-python-icon-symbolizes-flexibility-1710891761988.webp',
  'https://www.php.net/images/logos/new-php-logo.svg',
  'https://irislogic.com/wp-content/uploads/2024/07/Digital-Transformation.png',
  'https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-adobe-illustrator-ai-icon-png-image_4899504.png'
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  const galleryImages = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(window.innerWidth <= 640);
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive cylinder and image sizes
  const cylinderWidth: number = isScreenSizeSm ? 600 : 1800;
  const faceCount: number = galleryImages.length;
  const faceWidth: number = isScreenSizeSm ? 120 : (cylinderWidth / faceCount) * 1.5;
  const radius: number = cylinderWidth / (2 * Math.PI);
  const imageWidth = isScreenSizeSm ? 90 : 220;
  const imageHeight = isScreenSizeSm ? 50 : 100;
  const imagePadding = isScreenSizeSm ? '4%' : '6%';

  const dragFactor: number = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(rotation, (val: number) => `rotate3d(0,1,0,${val}deg)`);

  // Create blur transforms for each face
  const createBlurTransform = (faceIndex: number) => {
    return useTransform(rotation, (rotationValue) => {
      const faceAngle = (360 / faceCount) * faceIndex;
      // Normalize rotation to 0-360 range
      const normalizedRotation = ((-rotationValue % 360) + 360) % 360;
      // Calculate relative angle (how far this face is from the front)
      let relativeAngle = ((faceAngle - normalizedRotation + 360) % 360);

      // Convert to shortest distance from front (0-180 range)
      if (relativeAngle > 180) {
        relativeAngle = 360 - relativeAngle;
      }

      // Create smooth blur based on angle from front
      // Front faces (0-30 degrees): No blur
      // Side faces (30-150 degrees): Gradual blur increase
      // Back faces (150-180 degrees): Maximum blur
      let blurAmount = 0;
      if (relativeAngle > 30) {
        const blurFactor = Math.min((relativeAngle - 30) / 120, 1); // 0 to 1
        blurAmount = blurFactor * 3; // Max 3px blur
      }

      return `blur(${blurAmount}px)`;
    });
  };

  // Create opacity transforms for each face
  const createOpacityTransform = (faceIndex: number) => {
    return useTransform(rotation, (rotationValue) => {
      const faceAngle = (360 / faceCount) * faceIndex;
      const normalizedRotation = ((-rotationValue % 360) + 360) % 360;
      let relativeAngle = ((faceAngle - normalizedRotation + 360) % 360);

      if (relativeAngle > 180) {
        relativeAngle = 360 - relativeAngle;
      }

      // Reduce opacity for faces that are more than 90 degrees from front
      if (relativeAngle > 90) {
        const opacityFactor = Math.max(0.4, 1 - ((relativeAngle - 90) / 90) * 0.6);
        return opacityFactor;
      }

      return 1;
    });
  };

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity
      }
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest: ResolvedValues) => {
    if (typeof latest.rotateY === 'number') {
      rotation.set(latest.rotateY);
    }
  };

  // Helper to normalize angle to 0-360
  const normalizeAngle = (angle: number) => ((angle % 360) + 360) % 360;

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    controls.stop();
    const newAngle = rotation.get() + info.offset.x * dragFactor;
    rotation.set(normalizeAngle(newAngle));
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    const normalized = normalizeAngle(finalAngle);
    rotation.set(normalized);
    if (autoplay) {
      startInfiniteSpin(normalized);
    }
  };

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className={`relative mt-20  w-full  overflow-x-hidden overflow-y-hidden`}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}>
      <h1 className='text-3xl md:text-5xl text-center mb-5 font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]' >Techstack We use</h1>


      <div className="flex items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d'
          }}
          className="flex h-[200px] sm:min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {galleryImages.map((url, i) => {
            const blurTransform = createBlurTransform(i);
            const opacityTransform = createOpacityTransform(i);

            return (
              <motion.div
                key={i}
                className="group absolute p-10 flex h-fit items-center justify-center"
                style={{
                  width: `${faceWidth}px`,
                  padding: imagePadding,
                  transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
                  filter: blurTransform,
                  opacity: opacityTransform
                }}
              >
                <img
                  src={url}
                  alt="gallery"
                  className="pointer-events-none rounded-[12px] object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                  style={{
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                    background: 'var(--card-bg)',
                    border: '2px solid var(--card-border)',
                    padding: '8px',
                    minWidth: '60px',
                    minHeight: '30px'
                  }}
                />

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
