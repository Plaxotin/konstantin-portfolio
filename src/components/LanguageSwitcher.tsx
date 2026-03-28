import { useLanguage } from '@/i18n';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'default' | 'minimal';
}

export function LanguageSwitcher({ className, variant = 'default' }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === 'minimal') {
    return (
      <button
        onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
        className={cn(
          'text-sm font-medium transition-colors hover:text-exvia-black/70',
          className
        )}
        aria-label={language === 'ru' ? 'Switch to English' : 'Переключить на русский'}
      >
        {language === 'ru' ? 'EN' : 'RU'}
      </button>
    );
  }

  return (
    <div className={cn('flex items-center gap-1 rounded-full border border-exvia-border p-0.5', className)}>
      <button
        onClick={() => setLanguage('ru')}
        className={cn(
          'px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200',
          language === 'ru'
            ? 'bg-exvia-black text-white'
            : 'text-exvia-black/60 hover:text-exvia-black'
        )}
        aria-label="Русский"
        aria-pressed={language === 'ru'}
      >
        RU
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200',
          language === 'en'
            ? 'bg-exvia-black text-white'
            : 'text-exvia-black/60 hover:text-exvia-black'
        )}
        aria-label="English"
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
}
