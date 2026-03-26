// Site configuration
// Конфигурация сайта-визитки Константина Плахотина

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "ru",
  title: "Константин Плахотин — Руководитель по цифровой трансформации",
  description: "Руководитель по цифровой трансформации с 11 годами опыта. Эксперт по внедрению ERP, MES, APS, BI, AI решений. Спикер и ментор по лидерству и управлению проектами.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
}

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "Обо мне", href: "#about" },
    { label: "Экспертиза", href: "#services" },
    { label: "Проекты", href: "#portfolio" },
  ],
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "КОНСТАНТИН\nПЛАХОТИН",
  roles: [
    "Цифровая трансформация",
    "Проектное лидерство",
    "Обучение и менторство"
  ],
  backgroundImage: "",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "ОБО МНЕ",
  description: "Руководитель по цифровой трансформации с 11 годами опыта в капиталоёмких отраслях — горнодобыча, нефтегаз, производство, логистика. Эксперт по стабилизации проектов с высоким уровнем риска, внедрению корпоративных решений класса ERP, MES, APS, BI, AI, OT/SCADA.",
  experienceValue: "11+",
  experienceLabel: "ЛЕТ\nОПЫТА",
  stats: [
    { value: "20+", label: "УСПЕШНЫХ ПРОЕКТОВ" },
    { value: "200+", label: "ЧЕЛОВЕК В КОМАНДАХ" },
    { value: "4", label: "ОТРАСЛИ" },
  ],
  images: [
    { src: "/images/photo-1.jpg", alt: "Константин Плахотин" },
    { src: "/images/photo-3.jpg", alt: "Выступление на семинаре" },
    { src: "/images/photo-4.jpg", alt: "На производстве" },
    { src: "/images/photo-6.jpg", alt: "На конференции" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "ЭКСПЕРТИЗА",
  heading: "Ключевые компетенции",
  services: [
    {
      iconName: "Monitor",
      title: "Цифровая трансформация",
      description: "Внедрение решений BI, ERP, MES, APS, AI, OT/SCADA. Создание цифровой стратегии развития. Реинжиниринг бизнес-процессов без остановки производства.",
      image: "/images/service-1.jpg",
    },
    {
      iconName: "Layout",
      title: "Управление проектами",
      description: "Управление мультивендорными программами цифровизации, выстраивание доверительных отношений с заказчиком, стабилизация проектов в кризисе. Команды до 200+ специалистов.",
      image: "/images/service-2.jpg",
    },
    {
      iconName: "TrendingUp",
      title: "Операционная эффективность",
      description: "Увеличение производительности, оптимизация производства и логистики, повышение эффективности и прозрачности бизнес-процессов, сокращение операционных затрат.",
      image: "/images/service-3.jpg",
    },
    {
      iconName: "Users",
      title: "Обучение и менторство",
      description: "Проведение семинаров по лидерству, проектному управлению, риск-менеджменту, наращиванию влияния без формальной власти, формированию устойчивых проектных команд.",
      image: "/images/photo-2.jpg",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  images?: string[];
  featured?: boolean;
  link?: string;
  linkLabel?: string;
  industry?: string;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "ПРОЕКТЫ",
  heading: "Ключевые проекты",
  description: "Реализация масштабных инициатив в различных отраслях",
  projects: [
    {
      title: "Внедрение MES для угледобывающей компании",
      category: "Производство, Горнодобывающая промышленность",
      year: "2024",
      image: "/images/portfolio-1.jpg",
      images: ["/images/portfolio-1.jpg", "/images/portfolio-1b.jpg", "/images/portfolio-1c.jpg"],
      featured: true,
      link: "https://rfrit.ru/novaya_gornaya",
      linkLabel: "Подробнее на сайте РФРИТ",
      industry: "Угледобывающая промышленность",
    },
    {
      title: "SAP S/4HANA для одной из крупнейших мировых вертикально интегрированных нефтегазовых компаний",
      category: "Нефтегазовая отрасль",
      year: "2023",
      image: "/images/portfolio-2.jpg",
      industry: "Нефтегазовая отрасль",
    },
    {
      title: "Оптимизация логистики на базе 1С и SAP для крупнейшего золотодобытчика в России",
      category: "Логистика, Золотодобывающая промышленность",
      year: "2021",
      image: "/images/portfolio-3a.jpg",
      images: ["/images/portfolio-3a.jpg", "/images/portfolio-3b.jpg", "/images/portfolio-3c.jpg"],
      industry: "Золотодобывающая промышленность",
    },
    {
      title: "Развитие и масштабирование сервиса логистики ПЭК:EASYWAY",
      category: "Логистика, E-commerce",
      year: "2020",
      image: "/images/portfolio-4.jpg",
      images: ["/images/portfolio-4.jpg", "/images/portfolio-4b.jpg"],
      industry: "Логистика, E-commerce",
    },
  ],
  cta: {
    label: "Сотрудничество",
    heading: "Есть проект для обсуждения?",
    linkText: "Написать мне →",
    linkHref: "mailto:plaxotin9@gmail.com",
  },
  viewAllLabel: "Все проекты",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "ОТЗЫВЫ",
  heading: "Рекомендации коллег",
  testimonials: [
    {
      quote: "Константин обладает развитыми навыками управления распределенными проектными командами и взаимодействия с заказчиком.",
      author: "Артем Цыганок",
      role: "Руководитель департамента маркетинга и продаж",
      company: "КОНСОМ ГРУПП",
      image: "",
      rating: 5,
    },
    {
      quote: "Константин обладает большим опытом в управлении сложными ИТ-проектами. Он отлично коммуницирует и управляет ожиданиями заказчика, а также координацией проектной команды. На него можно положиться в очень сложных ситуациях и быть уверенным, что его навыки принесут успех команде.",
      author: "Михаил Макеев",
      role: "CEO",
      company: "Piklema",
      image: "",
      rating: 5,
    },
    {
      quote: "Настоятельно рекомендую Константина для руководящих позиций в цифровой трансформации, трансформации корпоративных систем и реализации сложных программ. Он высокоструктурированный профессионал, ориентированный на результат, который привносит ясность, дисциплину и подотчётность в сложные среды. Уверенно действует под давлением, прозрачно коммуницирует на всех уровнях и обеспечивает достижение результатов с сильным фокусом на измеримые бизнес-результаты.",
      author: "Андрей Горшков",
      role: "Руководитель отдела проектов по трансформации бизнеса",
      company: "УК ПОЛЮС",
      image: "",
      rating: 5,
    },
    {
      quote: "Константин постоянно демонстрирует исключительные лидерские качества и навыки управления проектами. Его способность справляться со сложными задачами и продвигать инициативы по трансформации корпоративных систем впечатляет. Обладает уникальным сочетанием технической экспертизы и стратегического видения, что позволяет эффективно согласовывать цели проекта с целями организации.",
      author: "Кирилл Сергеев",
      role: "CIO",
      company: "Сервисная компания Банка России",
      image: "",
      rating: 5,
    },
    {
      quote: "Константин обладает хорошими организационными, аналитическими и презентационными навыками. Способен свободно общаться с бизнес-заказчиком высокого уровня. Зарекомендовал себя как уверенный и эффективный руководитель проектов. Было приятно работать с ним плечом к плечу.",
      author: "Кирилл Бессонов",
      role: "ИТ Консультант",
      company: "УК ПОЛЮС",
      image: "",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Digital Transformation Expert", "Project Leader", "Speaker"],
  heading: "Готов обсудить ваш проект",
  description: "",
  buttonText: "Связаться со мной",
  buttonHref: "mailto:plaxotin9@gmail.com",
  email: "plaxotin9@gmail.com",
  backgroundImage: "",
};

// Footer configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "К.ПЛАХОТИН",
  description: "Руководитель по цифровой трансформации. Помогаю компаниям внедрять технологические решения.",
  columns: [
    {
      title: "Навигация",
      links: [
        { label: "Обо мне", href: "#about" },
        { label: "Экспертиза", href: "#services" },
        { label: "Проекты", href: "#portfolio" },
      ],
    },
    {
      title: "Контакты",
      links: [
        { label: "Москва", href: "#" },
        { label: "+7 929 956 7550", href: "tel:+79299567550" },
        { label: "plaxotin9@gmail.com", href: "mailto:plaxotin9@gmail.com" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Linkedin", href: "https://www.linkedin.com/in/plakhotin/", label: "LinkedIn" },
    { iconName: "Mail", href: "mailto:plaxotin9@gmail.com", label: "Email" },
    { iconName: "Phone", href: "tel:+79299567550", label: "Phone" },
  ],
  newsletterHeading: "",
  newsletterDescription: "",
  newsletterButtonText: "",
  newsletterPlaceholder: "",
  copyright: "",
  credit: "",
};
