
import { Project, ProjectStatus, ProjectType, NewsItem, StatsSummary } from "../types";

export const mockProjects: Project[] = [
  {
    id: "p1",
    name: "Shanghai-Jiangsu High-Speed Rail",
    description: "A high-speed rail line connecting Shanghai and Jiangsu province, designed to reduce travel time and boost economic connectivity.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 12500000000,
    budgetCurrency: "CNY",
    location: {
      country: "China",
      city: "Shanghai",
      coordinates: {
        lat: 31.2304,
        lng: 121.4737
      }
    },
    timeline: {
      start: "2022-03-15",
      estimatedCompletion: "2025-06-30"
    },
    stakeholders: ["China Railway Corporation", "Shanghai Municipal Government", "Jiangsu Provincial Government"],
    tags: ["rail", "high-speed", "infrastructure", "public transport"],
    lastUpdated: "2023-11-12"
  },
  {
    id: "p2",
    name: "Grand Paris Express",
    description: "The largest transport project in Europe, adding 200km of new metro lines to connect Paris suburbs.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 35200000000,
    budgetCurrency: "EUR",
    location: {
      country: "France",
      city: "Paris",
      coordinates: {
        lat: 48.8566,
        lng: 2.3522
      }
    },
    timeline: {
      start: "2015-06-20",
      estimatedCompletion: "2030-12-31"
    },
    stakeholders: ["Société du Grand Paris", "RATP", "Île-de-France Mobilités"],
    tags: ["metro", "public transport", "urban development"],
    lastUpdated: "2023-10-05"
  },
  {
    id: "p3",
    name: "Three Gorges Dam Maintenance",
    description: "Comprehensive maintenance and upgrade project for the world's largest hydroelectric power station.",
    status: ProjectStatus.PLANNED,
    type: ProjectType.ENERGY,
    budget: 2800000000,
    budgetCurrency: "CNY",
    location: {
      country: "China",
      city: "Yichang",
      coordinates: {
        lat: 30.8262,
        lng: 111.0046
      }
    },
    timeline: {
      start: "2024-04-10",
      estimatedCompletion: "2026-09-30"
    },
    stakeholders: ["China Three Gorges Corporation", "National Energy Administration"],
    tags: ["dam", "hydroelectric", "maintenance", "energy"],
    lastUpdated: "2023-12-01"
  },
  {
    id: "p4",
    name: "Riyadh Metro",
    description: "A rapid transit system with six lines totaling 176 km and 85 stations across Riyadh.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.TRANSPORT,
    budget: 22500000000,
    budgetCurrency: "USD",
    location: {
      country: "Saudi Arabia",
      city: "Riyadh",
      coordinates: {
        lat: 24.7136,
        lng: 46.6753
      }
    },
    timeline: {
      start: "2014-04-03",
      estimatedCompletion: "2021-12-31",
      actualCompletion: "2022-03-15"
    },
    stakeholders: ["Arriyadh Development Authority", "FAST Consortium", "ANM Consortium"],
    tags: ["metro", "public transport", "urban mobility"],
    lastUpdated: "2022-04-10"
  },
  {
    id: "p5",
    name: "California High-Speed Rail",
    description: "High-speed rail system connecting Los Angeles and San Francisco with trains reaching speeds of 350 km/h.",
    status: ProjectStatus.HALTED,
    type: ProjectType.TRANSPORT,
    budget: 80000000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "Los Angeles",
      coordinates: {
        lat: 34.0522,
        lng: -118.2437
      }
    },
    timeline: {
      start: "2015-01-06",
      estimatedCompletion: "2033-12-31"
    },
    stakeholders: ["California High-Speed Rail Authority", "Federal Railroad Administration"],
    tags: ["rail", "high-speed", "infrastructure", "public transport"],
    lastUpdated: "2023-07-18"
  },
  {
    id: "p6",
    name: "Sydney Metro West",
    description: "New underground metro railway connecting Greater Parramatta with Sydney CBD.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 25000000000,
    budgetCurrency: "AUD",
    location: {
      country: "Australia",
      city: "Sydney",
      coordinates: {
        lat: -33.8688,
        lng: 151.2093
      }
    },
    timeline: {
      start: "2020-11-15",
      estimatedCompletion: "2030-12-31"
    },
    stakeholders: ["Transport for NSW", "Sydney Metro Authority"],
    tags: ["metro", "underground", "public transport"],
    lastUpdated: "2023-09-22"
  },
  {
    id: "p7",
    name: "Thames Tideway Tunnel",
    description: "A 25km tunnel to prevent millions of tonnes of sewage from entering the River Thames.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.WATER,
    budget: 4200000000,
    budgetCurrency: "GBP",
    location: {
      country: "United Kingdom",
      city: "London",
      coordinates: {
        lat: 51.5074,
        lng: -0.1278
      }
    },
    timeline: {
      start: "2016-03-15",
      estimatedCompletion: "2025-01-30"
    },
    stakeholders: ["Tideway", "Thames Water", "Environment Agency"],
    tags: ["sewage", "tunnel", "environmental", "water management"],
    lastUpdated: "2023-10-30"
  },
  {
    id: "p8",
    name: "Dubai Creek Tower",
    description: "A planned observation tower that would have become the world's tallest structure.",
    status: ProjectStatus.HALTED,
    type: ProjectType.BUILDINGS,
    budget: 1000000000,
    budgetCurrency: "USD",
    location: {
      country: "United Arab Emirates",
      city: "Dubai",
      coordinates: {
        lat: 25.1972,
        lng: 55.2744
      }
    },
    timeline: {
      start: "2016-10-10",
      estimatedCompletion: "2022-12-31"
    },
    stakeholders: ["Emaar Properties", "Dubai Holding"],
    tags: ["skyscraper", "observation tower", "tourism"],
    lastUpdated: "2023-02-15"
  },
  {
    id: "p9",
    name: "Mumbai Trans Harbour Link",
    description: "A 21.8 km sea bridge connecting Mumbai with Navi Mumbai, the longest sea bridge in India.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.TRANSPORT,
    budget: 180000000000,
    budgetCurrency: "INR",
    location: {
      country: "India",
      city: "Mumbai",
      coordinates: {
        lat: 18.9387,
        lng: 72.8353
      }
    },
    timeline: {
      start: "2017-03-01",
      estimatedCompletion: "2023-12-31",
      actualCompletion: "2024-01-15"
    },
    stakeholders: ["Mumbai Metropolitan Region Development Authority", "Japan International Cooperation Agency"],
    tags: ["bridge", "sea bridge", "transport", "connectivity"],
    lastUpdated: "2024-01-20"
  },
  {
    id: "p10",
    name: "Hornsea Project Two Offshore Wind Farm",
    description: "The world's largest offshore wind farm with a capacity of 1.4 GW.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.ENERGY,
    budget: 3000000000,
    budgetCurrency: "GBP",
    location: {
      country: "United Kingdom",
      city: "Yorkshire",
      coordinates: {
        lat: 53.7846,
        lng: 0.1361
      }
    },
    timeline: {
      start: "2018-05-22",
      estimatedCompletion: "2022-08-31",
      actualCompletion: "2022-08-17"
    },
    stakeholders: ["Ørsted", "UK Department for Business, Energy and Industrial Strategy"],
    tags: ["renewable energy", "wind farm", "offshore", "energy"],
    lastUpdated: "2022-09-05"
  }
];

export const mockNews: NewsItem[] = [
  {
    id: "n1",
    title: "Grand Paris Express Faces 3-Month Delay Due to Supply Chain Issues",
    source: "Le Monde",
    date: "2023-11-30",
    url: "#",
    summary: "The Grand Paris Express project has announced a three-month delay for Line 15 South due to global supply chain disruptions affecting specialized tunnel equipment.",
    relatedProjects: ["p2"],
    tags: ["delay", "supply chain", "equipment", "metro"],
    sentiment: "negative"
  },
  {
    id: "n2",
    title: "Mumbai Trans Harbour Link Opens to Public, Cuts Travel Time by 70%",
    source: "The Times of India",
    date: "2024-01-15",
    url: "#",
    summary: "The Mumbai Trans Harbour Link has officially opened to traffic, reducing travel time between Mumbai and Navi Mumbai from over 2 hours to just 20 minutes.",
    relatedProjects: ["p9"],
    tags: ["completion", "bridge", "traffic", "connectivity"],
    sentiment: "positive"
  },
  {
    id: "n3",
    title: "China Accelerates Rail Project to Boost Economic Recovery",
    source: "South China Morning Post",
    date: "2023-12-12",
    url: "#",
    summary: "China has announced acceleration of the Shanghai-Jiangsu High-Speed Rail project, with additional investment and workforce to complete ahead of schedule by early 2025.",
    relatedProjects: ["p1"],
    tags: ["acceleration", "investment", "economic recovery", "rail"],
    sentiment: "positive"
  },
  {
    id: "n4",
    title: "California High-Speed Rail Faces New Legal Challenges",
    source: "Los Angeles Times",
    date: "2023-10-25",
    url: "#",
    summary: "The troubled California High-Speed Rail project faces new legal obstacles as property owners along the proposed route file lawsuits challenging land acquisition procedures.",
    relatedProjects: ["p5"],
    tags: ["legal", "land acquisition", "delay", "challenges"],
    sentiment: "negative"
  },
  {
    id: "n5",
    title: "Sydney Metro West Project Reaches 50% Tunneling Milestone",
    source: "Sydney Morning Herald",
    date: "2023-11-08",
    url: "#",
    summary: "The Sydney Metro West project has completed 50% of its tunneling work, marking a significant milestone for Australia's largest public transport project.",
    relatedProjects: ["p6"],
    tags: ["milestone", "tunneling", "progress", "metro"],
    sentiment: "positive"
  },
  {
    id: "n6",
    title: "Thames Tideway Tunnel Reports 15% Cost Overrun",
    source: "The Guardian",
    date: "2023-10-02",
    url: "#",
    summary: "London's super sewer project, the Thames Tideway Tunnel, has reported a 15% cost overrun, bringing the total budget to £4.9 billion due to unexpected ground conditions.",
    relatedProjects: ["p7"],
    tags: ["cost overrun", "budget", "sewage", "challenges"],
    sentiment: "negative"
  },
  {
    id: "n7",
    title: "Dubai Creek Tower Project Indefinitely Suspended",
    source: "Gulf News",
    date: "2023-06-18",
    url: "#",
    summary: "Emaar Properties has confirmed that the Dubai Creek Tower project remains suspended indefinitely, with no timeline for resumption due to economic recalibration.",
    relatedProjects: ["p8"],
    tags: ["suspension", "economic", "skyscraper"],
    sentiment: "negative"
  },
  {
    id: "n8",
    title: "Hornsea Two Wind Farm Exceeds Energy Production Targets",
    source: "BBC News",
    date: "2023-03-12",
    url: "#",
    summary: "The Hornsea Project Two Offshore Wind Farm has exceeded its first-year energy production targets by 8%, delivering clean energy to over 1.4 million UK homes.",
    relatedProjects: ["p10"],
    tags: ["energy", "performance", "renewable", "success"],
    sentiment: "positive"
  }
];

export const mockStatsSummary: StatsSummary = {
  totalProjects: mockProjects.length,
  byStatus: {
    [ProjectStatus.PLANNED]: mockProjects.filter(p => p.status === ProjectStatus.PLANNED).length,
    [ProjectStatus.ONGOING]: mockProjects.filter(p => p.status === ProjectStatus.ONGOING).length,
    [ProjectStatus.COMPLETED]: mockProjects.filter(p => p.status === ProjectStatus.COMPLETED).length,
    [ProjectStatus.HALTED]: mockProjects.filter(p => p.status === ProjectStatus.HALTED).length
  },
  byType: {
    [ProjectType.TRANSPORT]: mockProjects.filter(p => p.type === ProjectType.TRANSPORT).length,
    [ProjectType.ENERGY]: mockProjects.filter(p => p.type === ProjectType.ENERGY).length,
    [ProjectType.WATER]: mockProjects.filter(p => p.type === ProjectType.WATER).length,
    [ProjectType.BUILDINGS]: mockProjects.filter(p => p.type === ProjectType.BUILDINGS).length,
    [ProjectType.INDUSTRIAL]: mockProjects.filter(p => p.type === ProjectType.INDUSTRIAL).length,
    [ProjectType.OTHER]: mockProjects.filter(p => p.type === ProjectType.OTHER).length
  },
  byRegion: {
    "Asia": 4,
    "Europe": 3,
    "North America": 1,
    "Middle East": 1,
    "Australia": 1
  },
  totalBudget: 180000000000,
  averageCompletionTime: 1095
};
