import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { heroConfig } from '@/config';

export function Hero() {
  if (!heroConfig.name && heroConfig.roles.length === 0) return null;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] lg:min-h-[80vh] overflow-hidden bg-[#0A2540]"
    >
      {/* Clean background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0d2f4f] to-[#0A2540]" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] lg:min-h-[80vh] px-6 lg:px-12 pt-24 pb-20">
        {/* Main Heading */}
        <div
          className={cn(
            'text-center transition-all duration-1000 ease-out',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '200ms' }}
        >
          <h1 className="text-[clamp(2rem,8vw,6rem)] font-black text-white tracking-[-0.03em] leading-[0.95] whitespace-pre-line">
            {heroConfig.name}
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={cn(
            'mt-6 lg:mt-8 text-center transition-all duration-700',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-base lg:text-xl text-white/70 max-w-3xl">
            Руководитель по цифровой трансформации с 11-летним опытом внедрения корпоративных решений класса BI, ERP, MES, APS, WMS, SCADA
          </p>
        </div>

        {/* Scroll indicator */}
        <div 
          className={cn(
            'mt-10 lg:mt-12 transition-all duration-700',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>

        {/* Role labels */}
        <div 
          className={cn(
            'mt-8 lg:mt-10 flex flex-wrap justify-center gap-2 lg:gap-3 transition-all duration-700',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
          style={{ transitionDelay: '800ms' }}
        >
          {heroConfig.roles.slice(0, 4).map((role, index) => (
            <span 
              key={index}
              className="px-3 py-1.5 text-[10px] lg:text-xs font-geist-mono uppercase tracking-[0.1em] text-white/50 border border-white/15 rounded-full"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
