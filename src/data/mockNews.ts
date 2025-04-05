import { NewsItem } from "@/types";

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
  },
  {
    id: "n9",
    title: "Jakarta-Bandung High-Speed Rail Inaugurated After Years of Delays",
    source: "Jakarta Post",
    date: "2023-10-17",
    url: "#",
    summary: "Indonesia's first high-speed railway connecting Jakarta and Bandung has been officially inaugurated, cutting travel time between the cities from over 3 hours to just 40 minutes.",
    relatedProjects: ["p41"],
    tags: ["completion", "high-speed rail", "infrastructure", "Indonesia"],
    sentiment: "positive"
  },
  {
    id: "n10",
    title: "ITER Fusion Project Announces Two-Year Schedule Slip",
    source: "Science",
    date: "2024-02-15",
    url: "#",
    summary: "The ITER fusion reactor project has announced a two-year delay in its timeline for achieving first plasma, citing technical challenges with magnet systems and the complexity of international coordination.",
    relatedProjects: ["p38"],
    tags: ["delay", "energy", "fusion", "research"],
    sentiment: "negative"
  },
  {
    id: "n11",
    title: "Egypt Considers Second Suez Canal Expansion Following Ever Given Incident",
    source: "Al Jazeera",
    date: "2024-03-01",
    url: "#",
    summary: "Egyptian authorities are evaluating plans for a second expansion of the Suez Canal, focusing on widening southern sections where the Ever Given container ship blocked global shipping in 2021.",
    relatedProjects: ["p43"],
    tags: ["expansion", "planning", "shipping", "maritime"],
    sentiment: "neutral"
  },
  {
    id: "n12",
    title: "Laos-China Railway Reports One Million Passengers in First Quarter",
    source: "Xinhua News",
    date: "2024-04-02",
    url: "#",
    summary: "The Laos-China Railway has transported over one million passengers and 900,000 tons of cargo in the first quarter of 2024, exceeding projections and boosting regional economic integration.",
    relatedProjects: ["p44"],
    tags: ["railway", "success", "passenger numbers", "trade"],
    sentiment: "positive"
  },
  {
    id: "n13",
    title: "Istanbul Airport Named 'World's Most Efficient' for Third Consecutive Year",
    source: "Daily Sabah",
    date: "2024-03-15",
    url: "#",
    summary: "Istanbul Airport has been named the world's most efficient airport by the Air Transport Research Society for the third year running, handling over 76 million passengers in 2023.",
    relatedProjects: ["p36"],
    tags: ["airport", "award", "efficiency", "aviation"],
    sentiment: "positive"
  },
  {
    id: "n14",
    title: "Delhi-Mumbai Industrial Corridor Fast-Tracked with New Funding",
    source: "Economic Times",
    date: "2024-02-28",
    url: "#",
    summary: "India's finance ministry has approved an additional $15 billion in funding to accelerate the Delhi-Mumbai Industrial Corridor, with four new smart cities now prioritized for completion by 2028.",
    relatedProjects: ["p42"],
    tags: ["funding", "acceleration", "smart cities", "development"],
    sentiment: "positive"
  },
  {
    id: "n15",
    title: "Panama Canal Implements New Reservation System Amid Ongoing Drought",
    source: "Reuters",
    date: "2024-01-20",
    url: "#",
    summary: "The Panama Canal Authority has introduced a new reservation and transit system to manage reduced capacity due to historic low water levels, affecting global shipping routes.",
    relatedProjects: ["p45"],
    tags: ["drought", "shipping", "climate change", "adaptation"],
    sentiment: "neutral"
  }
  // Add more news items to reach 100+ news items
];
