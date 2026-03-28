import { type ElementType } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/i18n';
import { Monitor, Layout, TrendingUp, Users, Circle } from 'lucide-react';
import { OptimizedImage } from '@/components/OptimizedImage';

const iconMap: Record<string, ElementType> = {
  Monitor,
  Layout,
  TrendingUp,
  Users,
  Circle,
};

function getIcon(iconName: string): ElementType {
  return iconMap[iconName] || Circle;
}

interface ServiceCardProps {
  service: { iconName: string; title: string; description: string; image: string };
}

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = getIcon(service.iconName);

  return (
    <div className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
        <OptimizedImage
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out-quad group-hover:scale-105"
          containerClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-exvia-black/0 group-hover:bg-exvia-black/10 transition-colors duration-300" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center border border-exvia-border rounded-lg bg-white flex-shrink-0">
            <Icon className="w-4 h-4 text-exvia-black" />
          </div>
          <h3 className="text-base font-semibold text-exvia-black leading-tight">{service.title}</h3>
        </div>
        <p className="text-sm text-exvia-black/60 leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  const { t } = useLanguage();
  
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="w-full py-16 lg:py-20 bg-white">
      <div className="container-large px-6 lg:px-12">
        <div ref={headerRef} className="max-w-2xl mb-10">
          {t.servicesLabel && (
            <div
              className={cn(
                'transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                {t.servicesLabel}
              </span>
            </div>
          )}

          {t.servicesHeading && (
            <h2
              className={cn(
                'text-h2 font-semibold text-exvia-black mt-3 transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              {t.servicesHeading}
            </h2>
          )}
        </div>

        {t.services.length > 0 && (
          <div
            ref={servicesRef}
            className={cn(
              'grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 transition-all duration-800 ease-out-quart',
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            {t.services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
