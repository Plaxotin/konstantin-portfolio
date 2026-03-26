import { } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AnimatedButton } from '@/components/AnimatedButton';
import { ArrowRight, Mail } from 'lucide-react';
import { ctaConfig } from '@/config';

export function CTA() {
  if (!ctaConfig.heading && !ctaConfig.description) return null;

  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="contact" className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#0A2540]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0d2f4f] to-[#0A2540]" />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Content */}
      <div ref={sectionRef} className="relative z-10 container-large px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Role Tags */}
          {ctaConfig.tags.length > 0 && (
            <div
              className={cn(
                'flex flex-wrap justify-center gap-3 mb-8 transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              {ctaConfig.tags.map((tag, index) => (
                <span key={index} className="px-4 py-2 text-xs font-geist-mono text-white/80 border border-white/20 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Main Heading */}
          {ctaConfig.heading && (
            <h2
              className={cn(
                'text-3xl lg:text-5xl font-semibold text-white leading-tight transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              {ctaConfig.heading}
            </h2>
          )}

          {/* Subtext */}
          {ctaConfig.description && (
            <p
              className={cn(
                'mt-6 text-lg text-white/70 max-w-xl mx-auto transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              {ctaConfig.description}
            </p>
          )}

          {/* CTA Buttons */}
          <div
            className={cn(
              'flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-all duration-800 ease-out-quart',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '300ms' }}
          >
            {ctaConfig.buttonText && (
              <AnimatedButton
                href={ctaConfig.buttonHref}
                variant="primary"
                size="lg"
                showIcon
                className="bg-white text-[#0A2540] hover:bg-white/90"
              >
                {ctaConfig.buttonText}
              </AnimatedButton>
            )}

            {ctaConfig.email && (
              <a
                href={`mailto:${ctaConfig.email}`}
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span>{ctaConfig.email}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
