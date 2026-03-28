import { type MouseEvent } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowUpRight, Linkedin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/i18n';

const socialLinks = [
  { iconName: 'Linkedin', href: 'https://www.linkedin.com/in/plakhotin/', label: 'LinkedIn', Icon: Linkedin },
  { iconName: 'Mail', href: 'mailto:plaxotin9@gmail.com', label: 'Email', Icon: Mail },
  { iconName: 'Phone', href: 'tel:+79299567550', label: 'Phone', Icon: Phone },
];

export function Footer() {
  const { t } = useLanguage();
  
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { label: t.navAbout, href: '#about' },
    { label: t.navServices, href: '#services' },
    { label: t.navPortfolio, href: '#portfolio' },
  ];

  const contactLinks = [
    { label: t.footerLocation, href: '#' },
    { label: '+7 929 956 7550', href: 'tel:+79299567550' },
    { label: 'plaxotin9@gmail.com', href: 'mailto:plaxotin9@gmail.com' },
  ];

  return (
    <footer ref={ref} className="w-full bg-exvia-black text-white py-12 lg:py-16">
      <div className="container-large px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div
            className={cn(
              'lg:col-span-4 space-y-6 transition-all duration-800 ease-out-quart',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            {t.footerLogo && (
              <a href="#" className="inline-block">
                <span className="text-2xl font-semibold tracking-tight">{t.footerLogo}</span>
              </a>
            )}
            {t.footerDescription && (
              <p className="text-sm text-white/60 max-w-xs leading-relaxed">
                {t.footerDescription}
              </p>
            )}

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-exvia-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div
            className={cn(
              'lg:col-span-2 transition-all duration-800 ease-out-quart',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '100ms' }}
          >
            <h4 className="text-xs font-geist-mono uppercase tracking-widest text-white/40 mb-4">
              {t.footerNavTitle}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={cn(
              'lg:col-span-2 transition-all duration-800 ease-out-quart',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <h4 className="text-xs font-geist-mono uppercase tracking-widest text-white/40 mb-4">
              {t.footerContactTitle}
            </h4>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
