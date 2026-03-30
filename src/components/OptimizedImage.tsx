import { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  className,
  containerClassName,
  priority = false,
  onLoad,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    });
  }, []);

  useEffect(() => {
    if (priority || isInView) {
      return;
    }

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '100px',
      threshold: 0.01,
    });

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [priority, isInView, handleIntersection]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  return (
    <div ref={containerRef} className={cn('relative overflow-hidden', containerClassName)}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100 animate-pulse"
          aria-hidden="true"
        />
      )}
      
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          className={cn(
            'transition-opacity duration-500',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
        />
      )}
    </div>
  );
}
