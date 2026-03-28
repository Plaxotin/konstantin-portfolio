import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/i18n';
import { OptimizedImage } from '@/components/OptimizedImage';

function ProjectCard({ project, index, isVisible }: { project: { title: string; category: string; year: string; image: string; images?: string[]; featured?: boolean; link?: string; linkLabel?: string; industry?: string }; index: number; isVisible: boolean }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const currentImage = images[currentImageIndex];

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className={cn(
        'group cursor-pointer transition-all duration-700 ease-out-quart block',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden bg-exvia-subtle rounded-lg">
        <div className="aspect-[16/10]">
          <OptimizedImage
            src={currentImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out-cubic group-hover:scale-105"
            containerClassName="w-full h-full"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-exvia-black/0 group-hover:bg-exvia-black/20 transition-colors duration-500" />

        {/* Year Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 text-xs font-geist-mono bg-white/90 backdrop-blur-sm rounded-full text-exvia-black">
            {project.year}
          </span>
        </div>

        {/* Image Navigation Arrows - show when multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 text-exvia-black" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 text-exvia-black" />
            </button>
            {/* Image counter dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(i);
                  }}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    i === currentImageIndex ? 'bg-white w-4' : 'bg-white/60 hover:bg-white/80'
                  )}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}


        {/* Arrow Icon - shows on hover for non-link projects without multiple images */}
        {!project.link && images.length === 1 && (
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-exvia-black" />
            </div>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="mt-3 space-y-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-exvia-black group-hover:text-exvia-black/80 transition-colors leading-tight">
            {project.title}
          </h3>
          {project.link && project.linkLabel && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-exvia-black/60 hover:text-exvia-black transition-colors whitespace-nowrap flex-shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              {project.linkLabel}
            </a>
          )}
        </div>
        <p className="text-sm text-exvia-black/50 truncate">{project.category}</p>
      </div>
    </div>
  );
}

export function Portfolio() {
  const { t } = useLanguage();
  
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef: gridRef, visibleItems } = useStaggerAnimation(t.projects.length, 120);

  return (
    <section id="portfolio" className="w-full py-16 lg:py-20 bg-exvia-subtle/30">
      <div className="container-large px-6 lg:px-12">
        <div ref={headerRef} className="max-w-3xl mb-10">
          {t.portfolioLabel && (
            <div
              className={cn(
                'transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                {t.portfolioLabel}
              </span>
            </div>
          )}

          {t.portfolioHeading && (
            <h2
              className={cn(
                'text-h2 font-semibold text-exvia-black mt-3 transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              {t.portfolioHeading}
            </h2>
          )}

          {t.portfolioDescription && (
            <p
              className={cn(
                'mt-3 text-base text-exvia-black/60 leading-relaxed transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              {t.portfolioDescription}
            </p>
          )}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6">
          {t.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isVisible={visibleItems[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
