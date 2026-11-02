export type Project = {
  slug: string

  number: string

  title: string

  client: string

  year: string

  period?: string

  subtitle: string

  description: string

  tags: string[]

  tools: {
    name: string
    role: string
  }[]

  color: string

  hero: string

  gallery: string[]

  mobileImage?: string

  narrative: {
    context: string
    task: string
    solution: string
    process: string
    outcome: string
  }
}

export const projects: Project[] = [
  {
    slug: "simoneva-berani",

    number: "01",

    title: "SIMONEVA BERANI",

    client: "Pemerintah Provinsi Sulawesi Tengah",

    year: "2026",

    period: "Jan–Jun 2026",

    subtitle: "Government Work Program Monitoring System",

    description:
      "A government monitoring dashboard that brings provincial work program progress and results into one structured view.",

    tags: [
      "Information Architecture",
      "Wireframing",
      "Design System",
      "Dashboard UI",
    ],

    tools: [
      { name: "Figma", role: "Interface design & prototyping" },
      { name: "FigJam", role: "User flows & information mapping" },
      { name: "Canva", role: "Visual presentation" },
      { name: "Zoom", role: "Project discussions" },
      { name: "Google Meet", role: "Remote collaboration" },
      { name: "Pinterest", role: "Visual references" },
      { name: "Dribbble", role: "Design references" },
    ],

    color: "#1848a0",

    hero: "/assets/simoneva-hero.jpg",

    mobileImage: "/assets/mobilesimoneva.png",

    gallery: [
      "/assets/simoneva-hero.jpg",

      "/assets/simoneva-01.jpg",

      "/assets/simoneva-02.jpg",

      "/assets/simoneva-03.jpg",
    ],

    narrative: {
      context:
        "Across government agencies, hundreds of work programs need to be monitored and evaluated. Without one accessible view, progress and performance are difficult to follow consistently.",
      task: "My task was to translate the needs of government users and stakeholders into a clear monitoring experience, making program status and information easier to find.",
      solution:
        "A responsive dashboard brings program information, progress indicators, and data visualizations into one structured workspace.",
      process:
        "I mapped the information architecture and user flows, shaped the dashboard hierarchy, and developed low- and high-fidelity prototypes alongside a reusable design system.",
      outcome:
        "The result is a structured interface for reviewing program progress and results. The project focused on balancing dense government data with clear paths to the information users need.",
    },
  },

  {
    slug: "e-monitor",

    number: "02",

    title: "E-MONITOR",

    client: "Pemerintah Provinsi Sulawesi Selatan",

    year: "2026",

    period: "Feb–Apr 2026",

    subtitle: "Cross-OPD Work Program Monitoring System",

    description:
      "A cross-agency monitoring dashboard designed to make work program progress and shared information easier to follow.",

    tags: ["User Flow", "Dashboard UI", "Data Visualization", "Prototyping"],

    tools: [
      { name: "Figma", role: "Interface design & prototyping" },
      { name: "FigJam", role: "Workflow & user-flow mapping" },
      { name: "Canva", role: "Visual presentation" },
      { name: "Zoom", role: "Project discussions" },
      { name: "Google Meet", role: "Remote collaboration" },
      { name: "Pinterest", role: "Visual references" },
      { name: "Dribbble", role: "Design references" },
    ],

    color: "#b92d20",

    hero: "/assets/emonitor-hero.jpg",

    gallery: [
      "/assets/emonitor-hero.jpg",

      "/assets/emonitor-01.jpg",

      "/assets/emonitor-02.jpg",

      "/assets/emonitor-03.jpg",
    ],

    narrative: {
      context:
        "Work program information and workflows were handled across multiple government units, making it difficult to see how progress and information moved between them.",
      task: "My task was to make cross-unit progress and shared information easier to follow through a clearer monitoring experience.",
      solution:
        "A unified dashboard organizes program updates and data visualizations so users can review progress across units in one place.",
      process:
        "I mapped the information architecture and user flows, then developed wireframes, prototypes, dashboard components, and data visualizations around the monitoring workflow.",
      outcome:
        "The interface gives users a more structured way to follow program progress and understand cross-unit information. The work focused on making shared data easier to navigate without losing context.",
    },
  },

  {
    slug: "monitoring-media",

    number: "03",

    title: "MONITORING MEDIA",

    client: "Diskominfo Provinsi Sulawesi Selatan",

    year: "2026",

    period: "Mar–May 2026",

    subtitle: "News & Social Media Monitoring Dashboard",

    description:
      "A media monitoring dashboard that brings news coverage and social data together for government communications teams.",

    tags: [
      "Dashboard UI",
      "Data Visualization",
      "Media Monitoring",
      "UX Research",
    ],

    tools: [
      { name: "Figma", role: "Dashboard design & prototyping" },
      { name: "FigJam", role: "Research & information mapping" },
      { name: "Canva", role: "Visual presentation" },
      { name: "Zoom", role: "Project discussions" },
      { name: "Google Meet", role: "Remote collaboration" },
      { name: "Pinterest", role: "Visual references" },
      { name: "Dribbble", role: "Design references" },
    ],

    color: "#286544",

    hero: "/assets/media-hero.jpg",

    gallery: [
      "/assets/media-hero.jpg",

      "/assets/media-01.jpg",

      "/assets/media-02.jpg",

      "/assets/media-03.jpg",
    ],

    narrative: {
      context:
        "The communications team tracked news manually across scattered sources, making it difficult to spot coverage trends, public sentiment, and emerging issues quickly.",
      task: "My task was to create a clearer way for the team to review media coverage and find the signals most relevant to its communications work.",
      solution:
        "A media monitoring dashboard brings online news and social data together with views for sentiment, issue trends, and coverage rankings.",
      process:
        "I organized the monitoring information into a dashboard structure, then shaped the filters, trend views, sentiment indicators, and news rankings around the team's review needs.",
      outcome:
        "The dashboard gives communications teams one place to explore sentiment, emerging issues, and media coverage. It turns a scattered review task into a more organized view for decision-making.",
    },
  },

  {
    slug: "berani-bersinar",

    number: "04",

    title: "BERANI BERSINAR",

    client: "Dinas Sosial Provinsi Sulawesi Tengah",

    year: "2026",

    period: "Jun–Jul 2026",

    subtitle: "Social Assistance & Field Survey Platform",

    description:
      "A web and mobile field-survey platform for collecting and reviewing data on residents experiencing poverty and hardship.",

    tags: ["UI Redesign", "Responsive Design", "Prototyping", "User Research"],

    tools: [
      { name: "Figma", role: "Web & mobile interface design" },
      { name: "FigJam", role: "Interview flow & journey mapping" },
      { name: "Canva", role: "Visual presentation" },
      { name: "Zoom", role: "Project discussions" },
      { name: "Google Meet", role: "Remote collaboration" },
      { name: "Pinterest", role: "Visual references" },
      { name: "Dribbble", role: "Design references" },
    ],

    color: "#17226f",

    hero: "/assets/loginbersinar.png",

    mobileImage: "/assets/haldetailwarga.png",

    gallery: [
      "/assets/bersinar-hero.jpg",

      "/assets/bersinar-01.jpg",

      "/assets/bersinar-02.jpg",

      "/assets/bersinar-03.jpg",
    ],

    narrative: {
      context:
        "Field survey data was consolidated manually, making timely validation and accurate regional aid targeting difficult.",
      task: "My task was to make in-depth interviews easier to carry out in the field and make collected information easier for administrators to review.",
      solution:
        "A connected web and mobile experience supports enumerators through data entry while giving district, city, and provincial administrators a shared place to access collected information.",
      process:
        "I shaped the interview questionnaire flow, created wireframes and prototypes, and designed the web and mobile experience around the steps enumerators follow when recording field data.",
      outcome:
        "The platform was used by 159 enumerators and district, city, and provincial administrators for data collection. The project focused on making field entry more straightforward while supporting a more organized review process.",
    },
  },

  {
    slug: "bajika-wedding",

    number: "05",

    title: "BAJIKA WEDDING",

    client: "Bajika Wedding Organizer · Final Research",

    year: "2026",

    subtitle: "Integrated Wedding Organizer Website & Staff Dashboard",

    description:
      "A research-led wedding organizer platform that connects client service information with a shared workspace for staff.",

    tags: [
      "Design Thinking",
      "UX Research",
      "Usability Testing",
      "Design System",
    ],

    tools: [
      { name: "Figma", role: "Interface design & prototyping" },
      { name: "Maze", role: "Usability testing" },
      { name: "UEQ", role: "User experience evaluation" },
      { name: "Canva", role: "Visual presentation" },
      { name: "Zoom", role: "Project discussions" },
      { name: "Google Meet", role: "Remote collaboration" },
      { name: "Pinterest", role: "Visual references" },
      { name: "Dribbble", role: "Design references" },
    ],

    color: "#8b6a50",

    hero: "/assets/herosection.png",

    gallery: [
      "/assets/main.jpg",

      "/assets/designsistem.jpg",

      "/assets/staffsection.jpg",

      "/assets/bajika-about.jpg",

      "/assets/bajika-services.jpg",

      "/assets/bajika-portfolio.jpg",
    ],

    narrative: {
      context:
        "Clients had to ask repeatedly for package, pricing, process, and date availability details, while staff managed bookings and records across separate chats and tools.",
      task: "My task was to understand both client and staff needs, then shape a connected experience that makes service information easier to find and daily operations easier to manage.",
      solution:
        "The project brings together a public website for prospective clients and an internal workspace for staff, with clearer service discovery and more organized booking information.",
      process:
        "Using five Design Thinking stages, I observed workflows, gathered open-ended responses from six staff members, mapped user needs, built a shared design system, and tested high-fidelity prototypes in Maze.",
      outcome:
        "Testing resulted in SUS scores of 84 for staff and 80.75 for clients; all six UEQ dimensions were positive, and client MAUS reached the high usability range. The results also showed that complex staff tasks need more attention in the next iteration.",
    },
  },
]
