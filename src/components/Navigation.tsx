import { useState, useEffect, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';
import { navigationConfig } from '@/config';

export function Navigation() {
  if (navigationConfig.links.length === 0) return null;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in navbar after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-circ',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-[#0A2540]/50 backdrop-blur-sm'
      )}
    >
      <div className="w-full px-4 lg:px-12 py-4">
        <div className="flex items-center justify-center">
          {/* Navigation Links - visible on all screen sizes */}
          {navigationConfig.links.length > 0 && (
            <div className="flex items-center gap-4 lg:gap-10">
              {navigationConfig.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "text-sm lg:text-base font-medium transition-colors duration-500 relative group whitespace-nowrap",
                    isScrolled ? "text-exvia-black/80 hover:text-exvia-black" : "text-white hover:text-white/80"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full",
                    isScrolled ? "bg-exvia-black" : "bg-white"
                  )} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
