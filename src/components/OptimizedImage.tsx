import { useEffect, useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
  onLoad?: () => void;
}

/**
 * OptimizedImage component for better image loading performance
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle image load
  const handleImageLoaded = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <div className={`relative ${className} ${isLoaded ? '' : 'bg-gray-800/20'}`} style={{ width, height }}>
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleImageLoaded}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default OptimizedImage;