export type Language = 'ru' | 'en';

export interface Translations {
  // Site
  siteTitle: string;
  siteDescription: string;
  
  // Navigation
  navAbout: string;
  navServices: string;
  navPortfolio: string;
  
  // Hero
  heroName: string;
  heroSubtitle: string;
  heroRoles: string[];
  
  // About
  aboutLabel: string;
  aboutDescription: string;
  aboutExperienceValue: string;
  aboutExperienceLabel: string;
  aboutStats: { value: string; label: string }[];
  aboutImages: { src: string; alt: string }[];
  
  // Services
  servicesLabel: string;
  servicesHeading: string;
  services: {
    iconName: string;
    title: string;
    description: string;
    image: string;
  }[];
  
  // Portfolio
  portfolioLabel: string;
  portfolioHeading: string;
  portfolioDescription: string;
  portfolioViewAll: string;
  portfolioLearnMore: string;
  projects: {
    title: string;
    category: string;
    year: string;
    image: string;
    images?: string[];
    featured?: boolean;
    link?: string;
    linkLabel?: string;
    industry?: string;
  }[];
  
  // Testimonials
  testimonialsLabel: string;
  testimonialsHeading: string;
  testimonials: {
    quote: string;
    author: string;
    role: string;
    company: string;
    image: string;
    rating: number;
  }[];
  
  // CTA
  ctaTags: string[];
  ctaHeading: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaEmail: string;
  
  // Footer
  footerLogo: string;
  footerDescription: string;
  footerNavTitle: string;
  footerContactTitle: string;
  footerLocation: string;
}

export const translations: Record<Language, Translations> = {
  ru: {
    // Site
    siteTitle: "Константин Плахотин — Руководитель по цифровой трансформации",
    siteDescription: "Руководитель по цифровой трансформации с 11 годами опыта. Эксперт по внедрению ERP, MES, APS, BI, AI решений.",
    
    // Navigation
    navAbout: "Обо мне",
    navServices: "Экспертиза",
    navPortfolio: "Проекты",
    
    // Hero
    heroName: "КОНСТАНТИН\nПЛАХОТИН",
    heroSubtitle: "Формирую устойчивые проектные команды, внедряю корпоративные ИТ-решения, реализую масштабные цифровые инициативы для крупного бизнеса.",
    heroRoles: [
      "Эксперт по цифровой трансформации",
      "Проектное лидерство",
      "Обучение и менторство"
    ],
    
    // About
    aboutLabel: "ОБО МНЕ",
    aboutDescription: "Руководитель по цифровой трансформации с 11 годами опыта в капиталоёмких отраслях — горнодобыча, нефтегаз, производство, логистика. Эксперт по стабилизации проектов с высоким уровнем риска, внедрению корпоративных решений класса ERP, MES, APS, BI, AI, OT/SCADA.",
    aboutExperienceValue: "11+",
    aboutExperienceLabel: "ЛЕТ\nОПЫТА",
    aboutStats: [
      { value: "20+", label: "УСПЕШНЫХ ПРОЕКТОВ" },
      { value: "200+", label: "ЧЕЛОВЕК В КОМАНДАХ" },
      { value: "4", label: "ОТРАСЛИ" },
    ],
    aboutImages: [
      { src: "./images/photo-3.jpg", alt: "Выступление на семинаре" },
      { src: "./images/photo-6.jpg", alt: "На конференции" },
      { src: "./images/photo-4.jpg", alt: "На производстве" },
    ],
    
    // Services
    servicesLabel: "ЭКСПЕРТИЗА",
    servicesHeading: "Ключевые компетенции",
    services: [
      {
        iconName: "Monitor",
        title: "Цифровая трансформация",
        description: "Внедрение решений BI, ERP, MES, APS, AI, OT/SCADA. Создание цифровой стратегии развития. Реинжиниринг бизнес-процессов без остановки производства.",
        image: "./images/transformation2.png",
      },
      {
        iconName: "Layout",
        title: "Управление проектами",
        description: "Управление мультивендорными программами цифровизации, выстраивание доверительных отношений с заказчиком, стабилизация проектов в кризисе. Команды до 200+ специалистов.",
        image: "./images/istockphoto-861911620-612x612.jpg",
      },
      {
        iconName: "TrendingUp",
        title: "Операционная эффективность",
        description: "Повышение производительности и снижение затрат за счёт автоматизации и оптимизации процессов. Внедрение механизмов контроля качества и инструментов оперативного управления.",
        image: "./images/Dashbord.png",
      },
      {
        iconName: "Users",
        title: "Обучение и менторство",
        description: "Проведение семинаров по лидерству, проектному управлению, риск-менеджменту, наращиванию влияния без формальной власти, формированию устойчивых проектных команд.",
        image: "./images/photo-2.jpg",
      },
    ],
    
    // Portfolio
    portfolioLabel: "ПРОЕКТЫ",
    portfolioHeading: "Ключевые проекты",
    portfolioDescription: "Реализация масштабных инициатив в различных отраслях",
    portfolioViewAll: "Все проекты",
    portfolioLearnMore: "Подробнее",
    projects: [
      {
        title: "Внедрение MES для угледобывающей компании",
        category: "Производство, Горнодобывающая промышленность",
        year: "2024",
        image: "./images/43.png",
        images: ["./images/43.png", "./images/portfolio-1b.jpg", "./images/portfolio-1c.jpg"],
        featured: true,
        link: "https://rfrit.ru/novaya_gornaya",
        linkLabel: "Подробнее",
        industry: "Угледобывающая промышленность",
      },
      {
        title: "Переход на SAP S/4HANA для одной из крупнейших нефтегазовых компаний РФ",
        category: "Нефтегазовая отрасль",
        year: "2023",
        image: "./images/42.jpg",
        industry: "Нефтегазовая отрасль",
      },
      {
        title: "Оптимизация логистики на 4-х основных активах крупнейшего золотодобытчика РФ на базе 1С и SAP",
        category: "Логистика, Золотодобывающая промышленность",
        year: "2021",
        image: "./images/polus-logistics.jpg",
        industry: "Золотодобывающая промышленность",
      },
      {
        title: "Развитие и масштабирование сервиса логистики ПЭК:EASYWAY",
        category: "Логистика, E-commerce",
        year: "2020",
        image: "./images/portfolio-4b.jpg",
        link: "https://pecom.ru/easyway/",
        linkLabel: "Подробнее",
        industry: "Логистика, E-commerce",
      },
    ],
    
    // Testimonials
    testimonialsLabel: "ОТЗЫВЫ",
    testimonialsHeading: "Рекомендации коллег",
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
        quote: "Настоятельно рекомендую Константина для руководящих позиций в цифровой трансформации, трансформации корпоративных систем и реализации сложных программ. Он высокоструктурированный профессионал, ориентированный на результат, который привносит ясность, дисциплину и подотчётность в сложные среды.",
        author: "Андрей Горшков",
        role: "Руководитель отдела проектов по трансформации бизнеса",
        company: "УК ПОЛЮС",
        image: "",
        rating: 5,
      },
      {
        quote: "Константин постоянно демонстрирует исключительные лидерские качества и навыки управления проектами. Его способность справляться со сложными задачами и продвигать инициативы по трансформации корпоративных систем впечатляет.",
        author: "Кирилл Сергеев",
        role: "CIO",
        company: "Сервисная компания Банка России",
        image: "",
        rating: 5,
      },
      {
        quote: "Константин обладает хорошими организационными, аналитическими и презентационными навыками. Способен свободно общаться с бизнес-заказчиком высокого уровня. Зарекомендовал себя как уверенный и эффективный руководитель проектов.",
        author: "Кирилл Бессонов",
        role: "ИТ Консультант",
        company: "УК ПОЛЮС",
        image: "",
        rating: 5,
      },
    ],
    
    // CTA
    ctaTags: ["Руководитель цифровой трансформации", "Управление программами и проектами", "Эксперт-спикер"],
    ctaHeading: "Открыт для сотрудничества",
    ctaDescription: "",
    ctaButtonText: "Связаться со мной",
    ctaEmail: "plaxotin9@gmail.com",
    
    // Footer
    footerLogo: "К.ПЛАХОТИН",
    footerDescription: "Помогаю компаниям внедрять технологические решения.",
    footerNavTitle: "Навигация",
    footerContactTitle: "Контакты",
    footerLocation: "Москва",
  },
  
  en: {
    // Site
    siteTitle: "Konstantin Plakhotin — Digital Transformation Leader",
    siteDescription: "Digital Transformation Leader with 11+ years of experience. Expert in ERP, MES, APS, BI, AI solutions implementation.",
    
    // Navigation
    navAbout: "About",
    navServices: "Expertise",
    navPortfolio: "Projects",
    
    // Hero
    heroName: "KONSTANTIN\nPLAKHOTIN",
    heroSubtitle: "Building resilient project teams, implementing enterprise IT solutions, delivering large-scale digital initiatives for major enterprises.",
    heroRoles: [
      "Digital Transformation Expert",
      "Project Leadership",
      "Training & Mentorship"
    ],
    
    // About
    aboutLabel: "ABOUT ME",
    aboutDescription: "Digital Transformation Leader with 11+ years of experience in capital-intensive industries — mining, oil & gas, manufacturing, logistics. Expert in stabilizing high-risk projects, implementing enterprise solutions including ERP, MES, APS, BI, AI, OT/SCADA.",
    aboutExperienceValue: "11+",
    aboutExperienceLabel: "YEARS OF\nEXPERIENCE",
    aboutStats: [
      { value: "20+", label: "SUCCESSFUL PROJECTS" },
      { value: "200+", label: "TEAM MEMBERS LED" },
      { value: "4", label: "INDUSTRIES" },
    ],
    aboutImages: [
      { src: "./images/photo-3.jpg", alt: "Speaking at seminar" },
      { src: "./images/photo-6.jpg", alt: "At conference" },
      { src: "./images/photo-4.jpg", alt: "On-site at production" },
    ],
    
    // Services
    servicesLabel: "EXPERTISE",
    servicesHeading: "Core Competencies",
    services: [
      {
        iconName: "Monitor",
        title: "Digital Transformation",
        description: "Implementation of BI, ERP, MES, APS, AI, OT/SCADA solutions. Digital strategy development. Business process reengineering without production downtime.",
        image: "./images/transformation2.png",
      },
      {
        iconName: "Layout",
        title: "Project Management",
        description: "Managing multi-vendor digitalization programs, building trusted relationships with stakeholders, stabilizing projects in crisis. Teams up to 200+ specialists.",
        image: "./images/istockphoto-861911620-612x612.jpg",
      },
      {
        iconName: "TrendingUp",
        title: "Operational Efficiency",
        description: "Productivity growth, quality improvement and cost reduction through automation and business process reengineering. Creating new products and enhancing customer experience.",
        image: "./images/Dashbord.png",
      },
      {
        iconName: "Users",
        title: "Training & Mentorship",
        description: "Conducting seminars on leadership, project management, risk management, influence without authority, building resilient project teams.",
        image: "./images/photo-2.jpg",
      },
    ],
    
    // Portfolio
    portfolioLabel: "PROJECTS",
    portfolioHeading: "Key Projects",
    portfolioDescription: "Delivering large-scale initiatives across industries",
    portfolioViewAll: "All Projects",
    portfolioLearnMore: "Learn More",
    projects: [
      {
        title: "MES Implementation for Coal Mining Company",
        category: "Manufacturing, Mining Industry",
        year: "2024",
        image: "./images/43.png",
        images: ["./images/43.png", "./images/portfolio-1b.jpg", "./images/portfolio-1c.jpg"],
        featured: true,
        link: "https://rfrit.ru/novaya_gornaya",
        linkLabel: "Learn More",
        industry: "Coal Mining Industry",
      },
      {
        title: "SAP S/4HANA Migration for Major Russian Oil & Gas Company",
        category: "Oil & Gas Industry",
        year: "2023",
        image: "./images/42.jpg",
        industry: "Oil & Gas Industry",
      },
      {
        title: "Logistics Optimization at 4 Major Assets of Russia's Largest Gold Miner using 1C and SAP",
        category: "Logistics, Gold Mining Industry",
        year: "2021",
        image: "./images/polus-logistics.jpg",
        industry: "Gold Mining Industry",
      },
      {
        title: "Development and Scaling of PEK:EASYWAY Logistics Service",
        category: "Logistics, E-commerce",
        year: "2020",
        image: "./images/portfolio-4b.jpg",
        link: "https://pecom.ru/easyway/",
        linkLabel: "Learn More",
        industry: "Logistics, E-commerce",
      },
    ],
    
    // Testimonials
    testimonialsLabel: "TESTIMONIALS",
    testimonialsHeading: "Recommendations",
    testimonials: [
      {
        quote: "Konstantin has well-developed skills in managing distributed project teams and interacting with clients.",
        author: "Artem Tsyganok",
        role: "Head of Marketing and Sales Department",
        company: "KONSOM GROUP",
        image: "",
        rating: 5,
      },
      {
        quote: "Konstantin has extensive experience managing complex IT projects. He excels at communication and managing client expectations, as well as coordinating project teams. You can rely on him in very difficult situations and be confident that his skills will bring success to the team.",
        author: "Mikhail Makeev",
        role: "CEO",
        company: "Piklema",
        image: "",
        rating: 5,
      },
      {
        quote: "I highly recommend Konstantin for leadership positions in digital transformation, enterprise systems transformation, and complex program delivery. He is a highly structured, results-oriented professional who brings clarity, discipline, and accountability to complex environments.",
        author: "Andrey Gorshkov",
        role: "Head of Business Transformation Projects",
        company: "Polyus Management Company",
        image: "",
        rating: 5,
      },
      {
        quote: "Konstantin consistently demonstrates exceptional leadership qualities and project management skills. His ability to handle complex challenges and drive enterprise systems transformation initiatives is impressive.",
        author: "Kirill Sergeev",
        role: "CIO",
        company: "Bank of Russia Service Company",
        image: "",
        rating: 5,
      },
      {
        quote: "Konstantin has strong organizational, analytical, and presentation skills. He can freely communicate with high-level business stakeholders. He has proven himself as a confident and effective project manager.",
        author: "Kirill Bessonov",
        role: "IT Consultant",
        company: "Polyus Management Company",
        image: "",
        rating: 5,
      },
    ],
    
    // CTA
    ctaTags: ["Digital Transformation Leader", "Program & Project Management", "Expert Speaker"],
    ctaHeading: "Open for Collaboration",
    ctaDescription: "",
    ctaButtonText: "Contact Me",
    ctaEmail: "plaxotin9@gmail.com",
    
    // Footer
    footerLogo: "K.PLAKHOTIN",
    footerDescription: "Helping companies implement technology solutions.",
    footerNavTitle: "Navigation",
    footerContactTitle: "Contact",
    footerLocation: "Moscow",
  },
};
