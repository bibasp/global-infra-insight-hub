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
  },
  {
    id: "p11",
    name: "California High-Speed Rail",
    description: "First true high-speed rail system in the United States connecting Los Angeles and San Francisco.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 77300000000,
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
    id: "p12",
    name: "Gordie Howe International Bridge",
    description: "The longest cable-stayed bridge in North America connecting Detroit, Michigan and Windsor, Ontario.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 4800000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "Detroit",
      coordinates: {
        lat: 42.3314,
        lng: -83.0458
      }
    },
    timeline: {
      start: "2018-10-05",
      estimatedCompletion: "2025-12-31"
    },
    stakeholders: ["Windsor-Detroit Bridge Authority", "Michigan Department of Transportation", "Transport Canada"],
    tags: ["bridge", "international", "infrastructure", "border crossing"],
    lastUpdated: "2023-09-15"
  },
  {
    id: "p13",
    name: "Champlain Hudson Power Express",
    description: "A 339-mile underground and underwater transmission line delivering 100% renewable hydropower from Canada to New York City.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.ENERGY,
    budget: 6000000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "New York",
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      }
    },
    timeline: {
      start: "2022-11-30",
      estimatedCompletion: "2026-05-15"
    },
    stakeholders: ["Hydro-Québec", "Transmission Developers Inc.", "New York State Energy Research and Development Authority"],
    tags: ["energy", "renewable", "transmission", "hydropower"],
    lastUpdated: "2023-12-10"
  },
  {
    id: "p14",
    name: "Site C Dam",
    description: "A major hydroelectric dam and generating station on the Peace River in northeastern British Columbia.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.WATER,
    budget: 16000000000,
    budgetCurrency: "CAD",
    location: {
      country: "Canada",
      city: "Fort St. John",
      coordinates: {
        lat: 56.2500,
        lng: -120.8480
      }
    },
    timeline: {
      start: "2015-07-27",
      estimatedCompletion: "2025-12-31"
    },
    stakeholders: ["BC Hydro", "British Columbia Government", "Peace River Regional District"],
    tags: ["dam", "hydroelectric", "energy", "water management"],
    lastUpdated: "2023-11-05"
  },
  {
    id: "p15",
    name: "New International Airport Mexico City",
    description: "A modern international airport serving Mexico City with state-of-the-art facilities and capacity for 68 million passengers annually.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.TRANSPORT,
    budget: 13000000000,
    budgetCurrency: "USD",
    location: {
      country: "Mexico",
      city: "Mexico City",
      coordinates: {
        lat: 19.4326,
        lng: -99.1332
      }
    },
    timeline: {
      start: "2019-04-29",
      estimatedCompletion: "2022-03-21",
      actualCompletion: "2022-03-21"
    },
    stakeholders: ["Grupo Aeroportuario de la Ciudad de México", "Federal Government of Mexico", "Secretariat of Communications and Transportation"],
    tags: ["airport", "transportation", "aviation", "infrastructure"],
    lastUpdated: "2022-05-15"
  },
  {
    id: "p16",
    name: "Second Avenue Subway Phase 2",
    description: "Extension of the New York City Subway line along Second Avenue, featuring the deepest subway station in NYC.",
    status: ProjectStatus.PLANNED,
    type: ProjectType.TRANSPORT,
    budget: 6300000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "New York",
      coordinates: {
        lat: 40.7831,
        lng: -73.9712
      }
    },
    timeline: {
      start: "2024-12-31",
      estimatedCompletion: "2031-12-31"
    },
    stakeholders: ["Metropolitan Transportation Authority", "Federal Transit Administration", "New York City Department of Transportation"],
    tags: ["subway", "transportation", "urban development", "public transit"],
    lastUpdated: "2023-10-20"
  },
  {
    id: "p17",
    name: "Trans Mountain Pipeline Expansion",
    description: "A pipeline expansion project tripling the capacity of the existing Trans Mountain pipeline from Alberta to British Columbia.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.INDUSTRIAL,
    budget: 21400000000,
    budgetCurrency: "CAD",
    location: {
      country: "Canada",
      city: "Edmonton",
      coordinates: {
        lat: 53.5461,
        lng: -113.4938
      }
    },
    timeline: {
      start: "2019-06-18",
      estimatedCompletion: "2023-09-30",
      actualCompletion: "2023-09-30"
    },
    stakeholders: ["Trans Mountain Corporation", "Government of Canada", "Alberta Energy Regulator"],
    tags: ["pipeline", "oil", "energy", "industrial"],
    lastUpdated: "2023-10-05"
  },
  {
    id: "p18",
    name: "I-69 Ohio River Crossing",
    description: "A major infrastructure project featuring twin cable-stayed bridges across the Ohio River between Kentucky and Indiana.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 2100000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "Henderson",
      coordinates: {
        lat: 37.8361,
        lng: -87.5900
      }
    },
    timeline: {
      start: "2021-06-22",
      estimatedCompletion: "2027-12-31"
    },
    stakeholders: ["Kentucky Transportation Cabinet", "Indiana Department of Transportation", "Federal Highway Administration"],
    tags: ["bridge", "highway", "infrastructure", "interstate"],
    lastUpdated: "2023-08-15"
  },
  {
    id: "p19",
    name: "Puerto Vallarta Water Treatment",
    description: "A comprehensive water treatment facility improving water quality and supply for Puerto Vallarta and surrounding areas.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.WATER,
    budget: 450000000,
    budgetCurrency: "USD",
    location: {
      country: "Mexico",
      city: "Puerto Vallarta",
      coordinates: {
        lat: 20.6534,
        lng: -105.2253
      }
    },
    timeline: {
      start: "2018-03-15",
      estimatedCompletion: "2021-08-30",
      actualCompletion: "2021-08-30"
    },
    stakeholders: ["SEAPAL Vallarta", "Jalisco State Government", "National Water Commission"],
    tags: ["water", "treatment", "infrastructure", "sustainability"],
    lastUpdated: "2021-09-10"
  },
  {
    id: "p20",
    name: "Houston Ship Channel Expansion",
    description: "A major dredging and widening project creating the deepest channel on the US Gulf Coast to accommodate larger vessels.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.INDUSTRIAL,
    budget: 1000000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "Houston",
      coordinates: {
        lat: 29.7604,
        lng: -95.3698
      }
    },
    timeline: {
      start: "2020-05-03",
      estimatedCompletion: "2023-06-30",
      actualCompletion: "2023-06-30"
    },
    stakeholders: ["Port of Houston Authority", "US Army Corps of Engineers", "Texas Department of Transportation"],
    tags: ["port", "shipping", "dredging", "maritime"],
    lastUpdated: "2023-07-15"
  },
  {
    id: "p21",
    name: "California High-Speed Rail",
    description: "First true high-speed rail system in the United States connecting Los Angeles and San Francisco with trains reaching speeds of 350 km/h.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 77300000000,
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
    id: "p22",
    name: "Gordie Howe International Bridge",
    description: "The longest cable-stayed bridge in North America connecting Detroit, Michigan and Windsor, Ontario.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 4800000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "Detroit",
      coordinates: {
        lat: 42.3314,
        lng: -83.0458
      }
    },
    timeline: {
      start: "2018-10-05",
      estimatedCompletion: "2025-12-31"
    },
    stakeholders: ["Windsor-Detroit Bridge Authority", "Michigan Department of Transportation", "Transport Canada"],
    tags: ["bridge", "international", "infrastructure", "border crossing"],
    lastUpdated: "2023-09-15"
  },
  {
    id: "p23",
    name: "Champlain Hudson Power Express",
    description: "A 339-mile underground and underwater transmission line delivering 100% renewable hydropower from Canada to New York City.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.ENERGY,
    budget: 6000000000,
    budgetCurrency: "USD",
    location: {
      country: "United States",
      city: "New York",
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      }
    },
    timeline: {
      start: "2022-11-30",
      estimatedCompletion: "2026-05-15"
    },
    stakeholders: ["Hydro-Québec", "Transmission Developers Inc.", "New York State Energy Research and Development Authority"],
    tags: ["energy", "renewable", "transmission", "hydropower"],
    lastUpdated: "2023-12-10"
  },
  {
    id: "p24",
    name: "Site C Dam",
    description: "A major hydroelectric dam and generating station on the Peace River in northeastern British Columbia.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.WATER,
    budget: 16000000000,
    budgetCurrency: "CAD",
    location: {
      country: "Canada",
      city: "Fort St. John",
      coordinates: {
        lat: 56.2500,
        lng: -120.8480
      }
    },
    timeline: {
      start: "2015-07-27",
      estimatedCompletion: "2025-12-31"
    },
    stakeholders: ["BC Hydro", "British Columbia Government", "Peace River Regional District"],
    tags: ["dam", "hydroelectric", "energy", "water management"],
    lastUpdated: "2023-11-05"
  },
  {
    id: "p25",
    name: "Fehmarn Belt Fixed Link",
    description: "An 18 km immersed tunnel connecting Denmark and Germany, reducing Copenhagen-Hamburg travel time to 2.5 hours.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 10000000000,
    budgetCurrency: "EUR",
    location: {
      country: "Denmark",
      city: "Rødbyhavn",
      coordinates: {
        lat: 54.6517,
        lng: 11.3500
      }
    },
    timeline: {
      start: "2020-01-01",
      estimatedCompletion: "2030-12-31"
    },
    stakeholders: ["Femern A/S", "German Federal Ministry of Transport", "Danish Government"],
    tags: ["tunnel", "infrastructure", "international", "rail", "road"],
    lastUpdated: "2023-10-15"
  },
  {
    id: "p26",
    name: "Grand Paris Express",
    description: "A 200 km automated metro network with 68 stations around Paris, featuring fully automated rubber-tyred trains.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 45000000000,
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
    id: "p27",
    name: "Flamanville EPR Reactor",
    description: "A 1,650 MW nuclear power plant using third-generation pressurized water reactor technology.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.ENERGY,
    budget: 12700000000,
    budgetCurrency: "EUR",
    location: {
      country: "France",
      city: "Flamanville",
      coordinates: {
        lat: 49.5356,
        lng: -1.8811
      }
    },
    timeline: {
      start: "2007-12-04",
      estimatedCompletion: "2023-12-31"
    },
    stakeholders: ["EDF", "French Government", "Nuclear Safety Authority"],
    tags: ["nuclear", "energy", "power plant", "reactor"],
    lastUpdated: "2023-08-22"
  },
  {
    id: "p28",
    name: "Grand Inga Dam",
    description: "A massive hydroelectric power project with 40,000 MW potential capacity that could power 40% of Africa.",
    status: ProjectStatus.PLANNED,
    type: ProjectType.ENERGY,
    budget: 100000000000,
    budgetCurrency: "USD",
    location: {
      country: "Democratic Republic of Congo",
      city: "Inga",
      coordinates: {
        lat: -5.5243,
        lng: 13.6201
      }
    },
    timeline: {
      start: "2025-01-01",
      estimatedCompletion: "2050-12-31"
    },
    stakeholders: ["DRC Government", "African Development Bank", "World Bank"],
    tags: ["hydroelectric", "dam", "energy", "power"],
    lastUpdated: "2023-11-30"
  },
  {
    id: "p29",
    name: "Egypt's New Administrative Capital",
    description: "A massive 700 km² new capital city being built east of Cairo to relieve congestion.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.BUILDINGS,
    budget: 45000000000,
    budgetCurrency: "USD",
    location: {
      country: "Egypt",
      city: "New Capital",
      coordinates: {
        lat: 30.0176,
        lng: 31.7476
      }
    },
    timeline: {
      start: "2015-03-14",
      estimatedCompletion: "2025-12-31"
    },
    stakeholders: ["Egyptian Government", "China State Construction Engineering", "Administrative Capital for Urban Development"],
    tags: ["urban development", "smart city", "government", "infrastructure"],
    lastUpdated: "2023-12-05"
  },
  {
    id: "p30",
    name: "Sydney Metro",
    description: "A 113km automated metro network with 46 stations across Sydney, featuring fully automated trains.",
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
      start: "2013-06-16",
      estimatedCompletion: "2032-12-31"
    },
    stakeholders: ["Transport for NSW", "Sydney Metro Authority", "New South Wales Government"],
    tags: ["metro", "public transport", "infrastructure", "urban mobility"],
    lastUpdated: "2023-09-22"
  },
  {
    id: "p31",
    name: "Snowy 2.0 Hydro",
    description: "A 2,000MW pumped hydro storage project with 27km tunnels and 2GW turbine upgrades.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.ENERGY,
    budget: 12000000000,
    budgetCurrency: "AUD",
    location: {
      country: "Australia",
      city: "Kosciuszko National Park",
      coordinates: {
        lat: -36.0048,
        lng: 148.3897
      }
    },
    timeline: {
      start: "2019-02-26",
      estimatedCompletion: "2027-12-31"
    },
    stakeholders: ["Snowy Hydro Limited", "Australian Government", "New South Wales Government"],
    tags: ["hydro", "energy storage", "renewable energy", "electricity"],
    lastUpdated: "2023-10-10"
  },
  {
    id: "p32",
    name: "Belo Monte Dam",
    description: "The world's 4th-largest hydroelectric plant with 11,233 MW capacity in the Amazon Basin.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.ENERGY,
    budget: 18500000000,
    budgetCurrency: "USD",
    location: {
      country: "Brazil",
      city: "Altamira",
      coordinates: {
        lat: -3.1369,
        lng: -51.8097
      }
    },
    timeline: {
      start: "2011-06-01",
      estimatedCompletion: "2019-11-27",
      actualCompletion: "2019-11-27"
    },
    stakeholders: ["Norte Energia", "Brazilian Government", "Eletrobras"],
    tags: ["hydroelectric", "dam", "energy", "amazon"],
    lastUpdated: "2023-01-15"
  },
  {
    id: "p33",
    name: "Mina Justa Copper Mine",
    description: "A major copper mine producing 149,000 tons of concentrate per year.",
    status: ProjectStatus.COMPLETED,
    type: ProjectType.INDUSTRIAL,
    budget: 1600000000,
    budgetCurrency: "USD",
    location: {
      country: "Peru",
      city: "Ica",
      coordinates: {
        lat: -15.3032,
        lng: -75.1096
      }
    },
    timeline: {
      start: "2018-09-12",
      estimatedCompletion: "2021-07-31",
      actualCompletion: "2021-07-31"
    },
    stakeholders: ["Minsur", "Alxar", "Copec Group"],
    tags: ["mining", "copper", "industrial", "extraction"],
    lastUpdated: "2022-03-10"
  },
  {
    id: "p34",
    name: "Mumbai-Ahmedabad Bullet Train",
    description: "India's first high-speed rail using Japanese Shinkansen technology, reducing travel time from 7 to 2 hours.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 18000000000,
    budgetCurrency: "USD",
    location: {
      country: "India",
      city: "Mumbai",
      coordinates: {
        lat: 19.0760,
        lng: 72.8777
      }
    },
    timeline: {
      start: "2017-09-14",
      estimatedCompletion: "2026-12-31"
    },
    stakeholders: ["National High Speed Rail Corporation Limited", "Indian Railways", "Japan International Cooperation Agency"],
    tags: ["high-speed rail", "bullet train", "infrastructure", "transportation"],
    lastUpdated: "2023-11-20"
  },
  {
    id: "p35",
    name: "Chūō Shinkansen Maglev",
    description: "The world's first intercity maglev line running at 505 km/h between Tokyo, Nagoya and Osaka.",
    status: ProjectStatus.ONGOING,
    type: ProjectType.TRANSPORT,
    budget: 95900000000,
    budgetCurrency: "USD",
    location: {
      country: "Japan",
      city: "Tokyo",
      coordinates: {
        lat: 35.6762,
        lng: 139.6503
      }
    },
    timeline: {
      start: "2014-12-17",
      estimatedCompletion: "2037-12-31"
    },
    stakeholders: ["Central Japan Railway Company", "Japanese Government", "RTRI"],
    tags: ["maglev", "high-speed rail", "transportation", "technology"],
    lastUpdated: "2023-08-05"
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
    "Asia": 6,
    "Europe": 5,
    "North America": 14,
    "South America": 2,
    "Africa": 2,
    "Australia": 3,
    "Middle East": 3
  },
  totalBudget: 180000000000,
  averageCompletionTime: 1095
};
