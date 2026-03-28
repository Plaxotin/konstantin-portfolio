import { useState, useEffect, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/i18n';

export function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const navLinks = [
    { label: t.navAbout, href: '#about' },
    { label: t.navServices, href: '#services' },
    { label: t.navPortfolio, href: '#portfolio' },
  ];

  useEffect(() => {
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
        <div className="flex items-center justify-between">
          <div className="w-16" />
          
          <div className="flex items-center gap-4 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
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
          
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLanguage('ru')}
              className={cn(
                'px-2 py-1 text-xs font-medium rounded transition-all duration-200',
                language === 'ru'
                  ? isScrolled ? 'bg-exvia-black text-white' : 'bg-white text-exvia-black'
                  : isScrolled ? 'text-exvia-black/60 hover:text-exvia-black' : 'text-white/60 hover:text-white'
              )}
              aria-label="Русский"
            >
              RU
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={cn(
                'px-2 py-1 text-xs font-medium rounded transition-all duration-200',
                language === 'en'
                  ? isScrolled ? 'bg-exvia-black text-white' : 'bg-white text-exvia-black'
                  : isScrolled ? 'text-exvia-black/60 hover:text-exvia-black' : 'text-white/60 hover:text-white'
              )}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
