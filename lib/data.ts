import { Brand, Service, Testimonial, Leader, DealerRegion } from "./types";

export const BRANDS: Brand[] = [
  {
    id: "connect-g",
    name: "Connect-G",
    logo: "🔒",
    description: "High-quality active-passive networking gear, patch cords, optical fiber nodes, and premium surveillance accessories.",
    longDescription: "Connect-G focuses on making highly durable, heavy-gauge CCTV passive units-power supplies, premium racks, optical fiber patch cables, and solid copper connectors designed specifically to withstand regional high-voltage spikes and tough environmental conditions across central and western India.",
    category: "Accessories",
    featuredProducts: ["Surveillance 4U wallmount racks", "CAT6 Solid Copper Patch Cords", "SFP Optical Transceiver Nodes", "9-Channel / 16-Channel 12V SMPS Power Systems"],
    foundedYear: "2018",
    relationshipType: "Authorized National Distributor",
    website: "#"
  },
  {
    id: "syntel",
    name: "Syntel",
    logo: "📞",
    description: "Enterprise digital EPABX systems, unified communications, IP-PBX, and reliable corporate telecommunication networks.",
    longDescription: "Syntel is a premier state-of-the-art telecommunication brand providing customizable dynamic IP-PBX configurations, digital keyphones, and enterprise intercom networks that seamlessly integrate with video door phone (VDP) solutions for security control centers.",
    category: "Telecom",
    featuredProducts: ["Neos Digital EPABX Server", "IP-PBX Gateway Units", "Executive Key Telephone Systems", "Operator Consoles with SIP Integration"],
    foundedYear: "2011",
    relationshipType: "Authorized National Distributor",
    website: "#"
  },
  {
    id: "hikvision",
    name: "Hikvision",
    logo: "👁️",
    description: "The global leader in high-performance video surveillance, intelligent smart AI analysis, and security infrastructure.",
    longDescription: "As the top-selling brand in global video surveillance, Hikvision's range covers everything from cost-effective Analog HD cameras to intelligent Network IP Cameras utilizing DeepLearning AI algorithms to provide auto-facial recognition, human-vehicle filtering, and perimeter violation protection.",
    category: "Camera",
    featuredProducts: ["ColorVu Smart IP Turret Cameras", "AcuSense Network NVR Systems", "Pro-Series Speed Dome PTZ", "Thermal Under-Vehicle Screening Devices"],
    foundedYear: "2001",
    relationshipType: "Regional Distributor",
    website: "#"
  },
  {
    id: "prama",
    name: "Prama",
    logo: "🇮🇳",
    description: "India's own state-of-the-art security manufacturer delivering high-integrity local video cameras and hardware.",
    longDescription: "Prama represents India's vision of local cybersecurity and self-reliance. Manufactured in a world-class domestic facility, Prama devices are certified with secure trust seals and are perfectly tuned for Indian infrastructure dynamics.",
    category: "Camera",
    featuredProducts: ["Astra Series HD Cameras", "Prama Smart Network IP Dome", "H.265+ Compression DVRs", "Explosion-Proof Heavy Industrial Cams"],
    foundedYear: "2020",
    relationshipType: "Regional Distributor",
    website: "#"
  },
  {
    id: "seagate",
    name: "Seagate",
    logo: "💾",
    description: "Surveillance-optimized heavy-duty hard drives (SkyHawk series) designed for 24/7 continuous video capture.",
    longDescription: "Seagate's storage solutions are built to operate with 100% video-recording consistency. Their SkyHawk and SkyHawk AI lines feature ImagePerfect™ firmware to prevent frame loss and provide healthy drive diagnostic tools directly inside standard NVR interfaces.",
    category: "Storage",
    featuredProducts: ["SkyHawk 4TB/8TB Surveillance HDD", "SkyHawk AI 10TB/16TB Commercial Drive", "Exos Enterprise Storage Arrays", "IronWolf NAS Series Dual-Drive Storage"],
    foundedYear: "1979",
    relationshipType: "Regional Distributor",
    website: "#"
  },
  {
    id: "cofe",
    name: "Cofe",
    logo: "📶",
    description: "High-speed 4G/5G SIM-based routers, outdoor CPE bridges, and long-range outdoor wireless systems.",
    longDescription: "Cofe specializes in bridging connectivity gaps where reliable wired Internet is missing. Their outdoor wireless client-premises gear (CPE) and LTE SIM routers are widely used to deploy standalone off-grid rural and agricultural CCTV systems.",
    category: "Networking",
    featuredProducts: ["4G LTE Outdoor SIM Cam-Router", "High-Gain Passive Wireless Bridges", "Industrial DIN-Rail PoE Switches", "Smart Mesh Extender Pods"],
    foundedYear: "2015",
    relationshipType: "Authorized National Distributor",
    website: "#"
  },
  {
    id: "cpplus",
    name: "CP Plus",
    logo: "🛡️",
    description: "Comprehensive home and commercial security ranges with extensive plug-and-play visual solutions.",
    longDescription: "CP Plus is an household name in retail electronic safety, boasting a comprehensive portfolio of plug-and-play Wi-Fi cameras, remote video smart door locks, multi-apartment door intercoms, and high-density fiber-to-video passive switches.",
    category: "Camera",
    featuredProducts: ["EzyKam Wi-Fi Cloud PTZ", "Indigo Series Enterprise IP Camera", "Smart Multi-Apartment Door Stations", "Long-Range PoE Extenders"],
    foundedYear: "2007",
    relationshipType: "Regional Distributor",
    website: "#"
  }
];

export const SERVICES: Service[] = [
  {
    id: "cctv",
    title: "CCTV Surveillance Solutions",
    icon: "ShieldAlert",
    description: "From HD-Analog entry cameras to multi-site AI IP Cameras with face detection and heatmaps.",
    features: [
      "Dynamic WDR & ColorVu night integration",
      "Perimeter intrusion detection & line crossing triggers",
      "Network/Hybrid NVR state management",
      "Central Management System (CMS) custom dashboards"
    ],
    details: "We source and distribute full CCTV setups from world-leading brands Hikvision, Prama, and CP Plus. Every camera batch passes rigorous optical calibration checks in our logistics hubs before being dispatched to systems integrators."
  },
  {
    id: "storage",
    title: "High-Payload Storage Systems",
    icon: "Database",
    description: "Continuous 24/7/365 active write drives with dedicated firmware to prevent dropped video frames.",
    features: [
      "ImagePerfect™ firmware optimized drives",
      "SkyHawk Health Management analytics active support",
      "Multi-bay hot-swappable NAS configurations",
      "High-speed server enterprise storage systems"
    ],
    details: "As an authorized regional channel partner for Seagate SkyHawk surveillance drives, we secure the supply-chain of critical storage media so that video recording operations never halt for security installers."
  },
  {
    id: "networking",
    title: "Core LAN & Optical Network",
    icon: "Network",
    description: "Power-Over-Ethernet (PoE) switching, fiber switches, heavy-duty routers, and passive outdoor wiring.",
    features: [
      "High power budget 802.3at PoE+ smart switches",
      "SIM router integration for remote farmlands",
      "Outdoor CAT6 double-sheathed heavy ground wires",
      "SFP optical fiber nodes and media converters"
    ],
    details: "We supply full-scale active and passive network elements under Connect-G and Cofe brands. Our products fulfill extreme engineering tolerances required for modern critical infrastructure setups."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ajay Shukla",
    role: "Proprietor & Engineering Lead",
    company: "SecurTech Solutions",
    content: "ACGR India has completely transformed our supply chain. For our safe-city tender, they arranged bulk Seagate SkyHawk storage and Hikvision cameras overnight. Their customized support is unprecedented.",
    rating: 5,
    location: "Nagpur, MH"
  },
  {
    id: "t2",
    name: "Swati Pande",
    role: "Chief Procurement Officer",
    company: "Intergrated Shield Systems",
    content: "Our team was struggling to source specialized 4G LTE SIM-based Routers for rural agricultural project monitoring. The product range offered by Connect-G and Cofe through ACGR solved it with perfect hardware compliance.",
    rating: 5,
    location: "Indore, MP"
  },
  {
    id: "t3",
    name: "Ramanathan Iyer",
    role: "Founder & Architect",
    company: "Smartinfra Automations",
    content: "We have been dealing with multiple regional electronic distributors since 2018, but the billing transparency, genuine stock availability, and direct RMA support we get from Pawan and Sandeep at ACGR is absolute top gold standard.",
    rating: 5,
    location: "Pune, MH"
  }
];

export const LEADERSHIP: Leader[] = [
  {
    id: "sandeep",
    name: "Sandeep Birari",
    role: "Managing Director - Business Strategy",
    bio: "Sandeep brings over 12+ years of surveillance distribution experience. He leads national vendor negotiations, strategic premium partnerships, and shapes the long-term regional expansion chart of ACGR India.",
    image: "/images/executive_sandeep_1782124497031.jpg",
    linkedin: "https://linkedin.com",
    email: "sandeep.b@acgr.in"
  },
  {
    id: "pawan",
    name: "Pawan Mandhare",
    role: "Founder & Director - Sales Operations",
    bio: "Pawan manages the dealer network engagement, partner enablement programs, and localized retail activations. Under his leadership, ACGR has built its 5000+ deep retailer network in record time.",
    image: "/images/executive_pawan_1782124517543.jpg",
    linkedin: "https://linkedin.com",
    email: "pawan.m@acgr.in"
  },
  {
    id: "chetan",
    name: "Chetan Gawande",
    role: "Director - Logistics & Technology Operations",
    bio: "Chetan coordinates the central warehousing operation, technical RMA screening, and product compliance certification. He ensures that zero-defect bulk hardware batches are dispatched across regions.",
    image: "/images/executive_chetan_1782124535784.jpg",
    linkedin: "https://linkedin.com",
    email: "chetan.g@acgr.in"
  }
];

export const DEALE_REGIONS: DealerRegion[] = [
  { state: "Maharashtra", city: "Mumbai", dealerName: "West-Shield Systems Integration", coverage: "MMR & Thane Network Area", contact: "+91 98200 XXXXX" },
  { state: "Maharashtra", city: "Pune", dealerName: "Techno-Logic CCTV World", coverage: "Pune, Pimpri-Chinchwad & Satara", contact: "+91 88888 XXXXX" },
  { state: "Maharashtra", city: "Nagpur", dealerName: "Vidarbha Electronic Emporium", coverage: "Nagpur, Amravati & Wardha Hub", contact: "+91 71225 XXXXX" },
  { state: "Maharashtra", city: "Nashik", dealerName: "Goda surveillance Solutions", coverage: "Khandesh & Nashik District", contact: "+91 94222 XXXXX" },
  { state: "Maharashtra", city: "Aurangabad", dealerName: "Marathwada Security Store", coverage: "Chhatrapati Sambhajinagar", contact: "+91 91580 XXXXX" },
  { state: "Madhya Pradesh", city: "Indore", dealerName: "Central Security Trading Co.", coverage: "Malwa & Indore Metropolitan Area", contact: "+91 73140 XXXXX" },
  { state: "Madhya Pradesh", city: "Bhopal", dealerName: "Capital Network & Hardware", coverage: "Bhopal, Sehore & Hoshangabad", contact: "+91 75524 XXXXX" },
  { state: "Madhya Pradesh", city: "Gwalior", dealerName: "Chambal Digital Systems", coverage: "Gwalior & Morena belt", contact: "+91 98270 XXXXX" },
  { state: "Madhya Pradesh", city: "Jabalpur", dealerName: "Narmada Visual Automations", coverage: "Jabalpur, Katni & Rewa Range", contact: "+91 94251 XXXXX" },
  { state: "Gujarat", city: "Ahmedabad", dealerName: "Karnavati CCTV Hub Pvt Ltd", coverage: "Ahmedabad, Gandhinagar & Mehsana", contact: "+91 79265 XXXXX" },
  { state: "Gujarat", city: "Surat", dealerName: "Diamond City Tech Distribution", coverage: "South Gujarat & Surat Coast", contact: "+91 98980 XXXXX" },
  { state: "Gujarat", city: "Vadodara", dealerName: "Baroda Digital Matrix", coverage: "Vadodara, Anand & Nadiad", contact: "+91 90990 XXXXX" },
  { state: "Gujarat", city: "Rajkot", dealerName: "Saurashtra Security Point", coverage: "Rajkot, Morbi & Jamnagar", contact: "+91 97241 XXXXX" },
  { state: "Chhattisgarh", city: "Raipur", dealerName: "Mahanadi Cyber Systems", coverage: "Raipur, Bilaspur & Durg Hub", contact: "+91 77122 XXXXX" },
  { state: "Goa", city: "Panaji", dealerName: "Mandovi Safety Hardware Ltd", coverage: "North & South Goa dealer zone", contact: "+91 83224 XXXXX" }
];
