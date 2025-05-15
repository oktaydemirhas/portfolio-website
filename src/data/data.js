const siteData = {
  en: {
    heroSection: {
      greeting: "Hi! 👋",
      nameIntro: "I'm Almila.",
      roleDescription: "I'm a Frontend Developer. I can craft solid and scalable frontend products.",
      invitation: "Let's meet!",
      socialLinks: [
        { name: "GitHub", url: "https://github.com/yourusername", iconKey: "githubIcon" },
        { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", iconKey: "linkedinIcon" },
      ],
      profileImage: "../assets/foto.png", // Adjusted path relative to Hero.jsx, or use absolute from src like '/src/assets/foto.png'
      status: {
        currently: "Currently",
        statusText: "Freelancing",
        forText: "for",
        projectDetails: "UX, UI, & Web Design Project.",
        invitationPrefix: "Invite me to join your team →",
        email: "your.email@example.com"
      },
      languageToggle: {
        vurguluKisim: "TÜRKÇE",
        kalanKisim: "'YE GEÇ"
      },
      ctaButtonText: "View My Projects",
    },
    skillsSection: {
      title: "Skills",
      skills: [
        { name: "JAVASCRIPT", iconKey: "JavascriptLogo" },
        { name: "REACT", iconKey: "ReactLogo" },
        { name: "REDUX", iconKey: "ReduxLogo" },
        { name: "NODE", iconKey: "NodeLogo" },
        { name: "VS CODE", iconKey: "VsCodeLogo" },
        { name: "FIGMA", iconKey: "FigmaLogo" },
      ],
    },
    profileSection: {
      title: "Profile",
      basicInfoTitle: "Basic Information",
      aboutMeTitle: "About me",
      details: [
        { label: "Birth Date", value: "24.03.1996" },
        { label: "City of Residence", value: "Ankara" },
        { label: "Education", value: "Hacettepe Uni. Biology (BSc), 2016" },
        { label: "Preferred Role", value: "Frontend, UI" },
      ],
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. <br /> <br /> Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
    },
    projectsSection: {
      title: "Projects",
      viewOnGithub: "View on Github",
      goToApp: "Go to app →",
      projects: [
        {
          id: "project1",
          name: "Random Jokes",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
          technologies: ["react", "vercel", "axios", "router"],
          imageUrl: "../assets/left-project.png",
          liveUrl: "#",
          repoUrl: "#",
          themeSpecificBg: { light: "bg-[#DDEEFE]", dark: "bg-[#2D3235]" }
        },
        {
          id: "project2",
          name: "Are you bored?",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
          technologies: ["react", "redux", "axios", "router", "vercel"],
          imageUrl: "../assets/right-project.png",
          liveUrl: "#",
          repoUrl: "#",
          themeSpecificBg: { light: "bg-[#D9F6F1]", dark: "bg-[#495351]" }
        },
      ]
    },
    footer: {
      title: "Let's work together on<br />your next product.",
      links: [
        { name: "Github", url: "#", styleLight: "text-[#1769FF]", styleDark: "text-[#82BBFF]" },
        { name: "Personal Blog", url: "#", styleLight: "text-[#0A0A14]", styleDark: "text-[#FFFFFF]" },
        { name: "Linkedin", url: "#", styleLight: "text-[#0077B5]", styleDark: "text-[#419CCB]" },
        { name: "Email", url: "#", styleLight: "text-[#AF0C48]", styleDark: "text-[#EA2678]" },
      ]
    }
  },
  tr: {
    heroSection: {
      greeting: "Merhaba! 👋",
      nameIntro: "Ben Almila.",
      roleDescription: "Frontend Developer'ım. Sağlam ve ölçeklenebilir frontend ürünleri geliştiriyorum.",
      invitation: "Hadi tanışalım!",
      socialLinks: [
        { name: "GitHub", url: "https://github.com/kullaniciadiniz", iconKey: "githubIcon" },
        { name: "LinkedIn", url: "https://linkedin.com/in/kullaniciadiniz", iconKey: "linkedinIcon" },
      ],
      profileImage: "../assets/foto.png", // Adjusted path
      status: {
        currently: "Şu anda",
        statusText: "Serbest Çalışıyorum",
        forText: "için",
        projectDetails: "UX, UI, & Web Tasarım Projesi.",
        invitationPrefix: "Beni takımınıza davet edin →",
        email: "mail.adresiniz@example.com"
      },
      languageToggle: {
        kalanKisim: "SWITCH TO ",
        vurguluKisim: "ENGLISH"
      },
      ctaButtonText: "Projelerimi Gör",
    },
    skillsSection: {
      title: "Yetenekler",
      skills: [
        { name: "JAVASCRIPT", iconKey: "JavascriptLogo" },
        { name: "REACT", iconKey: "ReactLogo" },
        { name: "REDUX", iconKey: "ReduxLogo" },
        { name: "NODE", iconKey: "NodeLogo" },
        { name: "VS CODE", iconKey: "VsCodeLogo" },
        { name: "FIGMA", iconKey: "FigmaLogo" },
      ],
    },
    profileSection: {
      title: "Profil",
      basicInfoTitle: "Temel Bilgiler",
      aboutMeTitle: "Hakkımda",
      details: [
        { label: "Doğum Tarihi", value: "24.03.1996" },
        { label: "İkamet Şehri", value: "Ankara" },
        { label: "Eğitim Durumu", value: "Hacettepe Ünv. Biyoloji Lisans, 2016" },
        { label: "Tercih Ettiğin Rol", value: "Frontend, UI" },
      ],
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. <br /> <br /> Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
    },
    projectsSection: {
      title: "Projeler",
      viewOnGithub: "Github\'da İncele",
      goToApp: "Uygulamaya Git →",
      projects: [
        {
          id: "project1",
          name: "Rastgele Şakalar",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
          technologies: ["react", "vercel", "axios", "router"],
          imageUrl: "../assets/left-project.png",
          liveUrl: "#",
          repoUrl: "#",
          themeSpecificBg: { light: "bg-[#DDEEFE]", dark: "bg-[#2D3235]" }
        },
        {
          id: "project2",
          name: "Sıkıldın mı?",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
          technologies: ["react", "redux", "axios", "router", "vercel"],
          imageUrl: "../assets/right-project.png",
          liveUrl: "#",
          repoUrl: "#",
          themeSpecificBg: { light: "bg-[#D9F6F1]", dark: "bg-[#495351]" }
        },
      ]
    },
    footer: {
      title: "Bir sonraki ürününüzü <br />birlikte hayata geçirelim.",
      links: [
        { name: "Github", url: "#", styleLight: "text-[#1769FF]", styleDark: "text-[#82BBFF]" },
        { name: "Kişisel Blog", url: "#", styleLight: "text-[#0A0A14]", styleDark: "text-[#FFFFFF]" },
        { name: "Linkedin", url: "#", styleLight: "text-[#0077B5]", styleDark: "text-[#419CCB]" },
        { name: "E-posta", url: "#", styleLight: "text-[#AF0C48]", styleDark: "text-[#EA2678]" },
      ]
    }
  },
};

export default siteData; 