import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/i18n';
import { OptimizedImage } from '@/components/OptimizedImage';

export function About() {
  const { t } = useLanguage();
  
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef: imagesRef, visibleItems } = useStaggerAnimation(t.aboutImages.length || 4, 150);

  return (
    <section id="about" className="w-full py-16 lg:py-24 bg-white">
      <div className="container-large px-6 lg:px-12">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-8">
            {t.aboutLabel && (
              <div
                className={cn(
                  'transition-all duration-800 ease-out-quart',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
              >
                <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                  {t.aboutLabel}
                </span>
              </div>
            )}

            {t.aboutDescription && (
              <div
                className={cn(
                  'transition-all duration-800 ease-out-quart',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '100ms' }}
              >
                <p className="text-xl lg:text-2xl text-exvia-black leading-relaxed">
                  {t.aboutDescription}
                </p>
              </div>
            )}

            {t.aboutExperienceValue && (
              <div
                className={cn(
                  'flex items-end gap-3 pt-4 transition-all duration-800 ease-out-quart',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '200ms' }}
              >
                <span className="text-7xl lg:text-8xl font-black text-exvia-black leading-none">
                  {t.aboutExperienceValue}
                </span>
                {t.aboutExperienceLabel && (
                  <span className="text-sm text-exvia-black/60 pb-3 whitespace-pre-line">
                    {t.aboutExperienceLabel}
                  </span>
                )}
              </div>
            )}

            {t.aboutStats.length > 0 && (
              <div
                className={cn(
                  'grid grid-cols-3 gap-8 pt-8 border-t border-exvia-border transition-all duration-800 ease-out-quart',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '300ms' }}
              >
                {t.aboutStats.map((stat, index) => (
                  <div key={index}>
                    <span className="block text-3xl font-semibold text-exvia-black">{stat.value}</span>
                    <span className="text-sm text-exvia-black/60">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {t.aboutImages.length > 0 && (
            <div ref={imagesRef} className="grid grid-cols-3 gap-4">
              {t.aboutImages.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    'relative overflow-hidden transition-all duration-700 ease-out-quart',
                    visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                >
                  <div className="aspect-[3/4] relative group cursor-pointer overflow-hidden rounded-lg">
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out-quad group-hover:scale-105"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-exvia-black/0 group-hover:bg-exvia-black/10 transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
