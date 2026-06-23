import { Brand, Service, Testimonial, Leader, DealerRegion } from "./types";

export const BRANDS: Brand[] = [
  {
    id: "cpplus",
    name: "CP Plus",
    logo: "🛡️",
    image: "/distributors/CP-Plus.png",
    description: "India's #1 CCTV brand — comprehensive home and commercial security solutions with plug-and-play ease.",
    longDescription: "CP Plus is our top-performing brand partner with ₹90.5 Cr in sales in FY 2025–26. Their portfolio covers plug-and-play Wi-Fi cameras, multi-apartment door intercoms, AI smart NVRs, and high-density PoE switches — making them the preferred choice for both residential and enterprise installs.",
    category: "Camera",
    featuredProducts: ["EzyKam Wi-Fi Cloud PTZ", "Indigo Series Enterprise IP Camera", "Smart Multi-Apartment Door Stations", "Long-Range PoE Extenders"],
    foundedYear: "2007",
    relationshipType: "Regional Distributor",
    website: "#"
  },
  {
    id: "seagate",
    name: "Seagate",
    logo: "💾",
    image: "/distributors/Seagate.png",
    description: "Surveillance-optimized SkyHawk hard drives built for 24/7 continuous video recording without frame loss.",
    longDescription: "Seagate is our second-largest brand at ₹29 Cr in FY 2025–26. The SkyHawk and SkyHawk AI lines feature ImagePerfect™ firmware to prevent dropped frames and provide drive health diagnostics directly inside standard NVR interfaces — the go-to storage for serious surveillance deployments.",
    category: "Storage",
    featuredProducts: ["SkyHawk 4TB/8TB Surveillance HDD", "SkyHawk AI 10TB/16TB Commercial Drive", "Exos Enterprise Storage Arrays", "IronWolf NAS Series Dual-Drive Storage"],
    foundedYear: "1979",
    relationshipType: "Regional Distributor",
    website: "#"
  },
  {
    id: "tplink",
    name: "TP-Link",
    logo: "📶",
    image: "/distributors/TP-Link.png",
    description: "High-performance networking gear — PoE switches, routers, access points, and smart home solutions.",
    longDescription: "TP-Link reached ₹8.2 Cr in FY 2025–26 sales through A.S.S. Their wide range of PoE switches, wireless routers, and Omada cloud-managed networking solutions are widely deployed in commercial CCTV installations across the region.",
    category: "Networking",
    featuredProducts: ["Omada PoE+ Smart Switches", "Wi-Fi 6 AX Routers", "Outdoor Access Points", "Deco Mesh Wi-Fi Systems"],
    foundedYear: "1996",
    relationshipType: "Regional Distributor",
    website: "#"
  },
  {
    id: "dlink",
    name: "D-Link",
    logo: "🌐",
    image: "/distributors/D-Link.png",
    description: "Reliable enterprise and SMB networking — switches, routers, IP cameras, and surveillance solutions.",
    longDescription: "D-Link contributed ₹5.6 Cr in FY 2025–26. Their enterprise-grade managed switches, IP surveillance cameras, and NVR systems are trusted by system integrators for mid-to-large commercial deployments requiring robust network infrastructure.",
    category: "Networking",
    featuredProducts: ["DGS Managed Gigabit Switches", "DCS IP Surveillance Cameras", "Nuclias Cloud-Managed Wi-Fi", "Industrial-Grade PoE Switches"],
    foundedYear: "1986",
    relationshipType: "Regional Distributor",
    website: "#"
  },
  {
    id: "connect-g",
    name: "Connect-G",
    logo: "🔒",
    image: "/distributors/Connect-G.png",
    description: "Premium surveillance accessories — CAT6 cables, SMPS power units, racks, and optical fiber components.",
    longDescription: "Connect-G provides the passive infrastructure backbone for CCTV installations. Heavy-gauge patch cables, 12V SMPS power systems, wall-mount racks, and SFP fiber nodes — engineered for the high-voltage and environmental conditions across India.",
    category: "Accessories",
    featuredProducts: ["Surveillance 4U Wallmount Racks", "CAT6 Solid Copper Patch Cords", "SFP Optical Transceiver Nodes", "9-Channel / 16-Channel 12V SMPS"],
    foundedYear: "2018",
    relationshipType: "Authorized National Distributor",
    website: "#"
  },
  {
    id: "syntel",
    name: "Syntel by Arvind",
    logo: "📞",
    image: "/distributors/Syntel.png",
    description: "Enterprise digital EPABX systems, IP-PBX, unified communications, and corporate intercom networks.",
    longDescription: "Syntel by Arvind delivers customizable IP-PBX configurations, digital keyphones, and enterprise intercom systems that seamlessly integrate with video door phone (VDP) solutions for security control centers and large corporate premises.",
    category: "Telecom",
    featuredProducts: ["Neos Digital EPABX Server", "IP-PBX Gateway Units", "Executive Key Telephone Systems", "Operator Consoles with SIP Integration"],
    foundedYear: "2011",
    relationshipType: "Authorized National Distributor",
    website: "#"
  },
  {
    id: "ivoomi",
    name: "iVOOMi",
    logo: "📷",
    image: "/distributors/IVOOMI.png",
    description: "Smart security cameras and IoT devices designed for modern home and small business surveillance.",
    longDescription: "iVOOMi brings affordable smart security to the masses with easy-to-install Wi-Fi cameras, video doorbells, and IoT security devices that connect to mobile apps for remote monitoring — perfect for residential and small retail deployments.",
    category: "Camera",
    featuredProducts: ["Smart Wi-Fi IP Cameras", "Video Doorbell Pro", "Indoor Pan-Tilt Cameras", "Solar-Powered Security Cam"],
    foundedYear: "2016",
    relationshipType: "Regional Distributor",
    website: "#"
  },
  {
    id: "zebion",
    name: "Zebion",
    logo: "⚡",
    image: "/distributors/Zebion.png",
    description: "The Tech Truth — quality computer peripherals, accessories, and surveillance support hardware.",
    longDescription: "Zebion (The Tech Truth) delivers dependable computer peripherals and accessories that support surveillance control room setups — keyboards, mice, monitors, and UPS systems built for continuous 24/7 operational environments.",
    category: "Accessories",
    featuredProducts: ["UPS Systems for NVR", "Control Room Keyboards & Mice", "HDMI & VGA Cables", "Surge Protectors"],
    foundedYear: "2010",
    relationshipType: "Regional Distributor",
    website: "#"
  },
  {
    id: "gold",
    name: "Gold",
    logo: "🏆",
    image: "/distributors/Gold.png",
    description: "The Seal of Trust — quality surveillance accessories and passive networking components.",
    longDescription: "Gold branded accessories carry the 'Seal of Trust' — a mark of reliability in the surveillance accessories segment. From BNC connectors to power adapters and cable management solutions, Gold products ensure clean, reliable passive installations.",
    category: "Accessories",
    featuredProducts: ["BNC Connector Sets", "Power Adapters & Splitters", "Cable Management Trays", "Surveillance Junction Boxes"],
    foundedYear: "2005",
    relationshipType: "Regional Distributor",
    website: "#"
  },
  {
    id: "aoc",
    name: "AOC",
    logo: "🖥️",
    image: "/distributors/AOC.png",
    description: "Professional-grade monitors and display solutions for surveillance control rooms and enterprise setups.",
    longDescription: "AOC delivers high-performance monitors optimized for security control rooms — with wide-viewing-angle panels, multi-input support, and flicker-free technology for operators who need clear, accurate video monitoring across multiple feeds.",
    category: "Accessories",
    featuredProducts: ["Surveillance Control Room Monitors", "4K Ultra HD Display Panels", "Multi-Input Professional Screens", "Ultra-Wide Curved Monitors"],
    foundedYear: "1967",
    relationshipType: "Regional Distributor",
    website: "#"
  },
  {
    id: "trion",
    name: "Trion Cables",
    logo: "🔌",
    image: "/distributors/Trion.png",
    description: "A Brand Known By Quality — premium electrical cables and wiring solutions for security installations.",
    longDescription: "Trion Cables (A Brand Known By Quality) supplies high-grade electrical and data cables essential for surveillance infrastructure. Their range covers power cables, CAT6 ethernet cables, coaxial cables, and conduit solutions purpose-built for Indian installation conditions.",
    category: "Accessories",
    featuredProducts: ["CCTV Power Cables", "CAT6 Ethernet Cables", "RG59 Coaxial Cables", "Armoured Security Cables"],
    foundedYear: "2000",
    relationshipType: "Regional Distributor",
    website: "#"
  },
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
    details: "We source and distribute full CCTV setups from world-leading brands CP Plus and iVOOMi. Every camera batch passes rigorous optical calibration checks in our logistics hubs before being dispatched to systems integrators."
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
    content: "Advanced Security Syndicate has completely transformed our supply chain. For our safe-city tender, they arranged bulk Seagate SkyHawk storage and Hikvision cameras overnight. Their customized support is unprecedented.",
    rating: 5,
    location: "Nagpur, MH"
  },
  {
    id: "t2",
    name: "Swati Pande",
    role: "Chief Procurement Officer",
    company: "Intergrated Shield Systems",
    content: "Our team was struggling to source specialized networking gear for rural project monitoring. The product range offered through Advanced Security Syndicate solved it with perfect hardware compliance and fast delivery.",
    rating: 5,
    location: "Indore, MP"
  },
  {
    id: "t3",
    name: "Ramanathan Iyer",
    role: "Founder & Architect",
    company: "Smartinfra Automations",
    content: "We have been dealing with multiple regional distributors since 2018, but the billing transparency, genuine stock availability, and direct RMA support we get from Pawan and Sandeep at Advanced Security Syndicate is absolute top gold standard.",
    rating: 5,
    location: "Pune, MH"
  }
];

export const LEADERSHIP: Leader[] = [
  {
    id: "sandeep",
    name: "Sandeep Birari",
    role: "Managing Director - Business Strategy",
    bio: "Sandeep brings over 12+ years of surveillance distribution experience. He leads national vendor negotiations, strategic premium partnerships, and shapes the long-term regional expansion chart of Advanced Security Syndicate.",
    image: "/images/executive_sandeep_1782124497031.jpg",
    linkedin: "https://linkedin.com",
    email: "sandeep.b@advancedsecurity.in"
  },
  {
    id: "pawan",
    name: "Pawan Mandhare",
    role: "Founder & Director - Sales Operations",
    bio: "Pawan manages dealer network engagement, partner enablement programs, and localized retail activations. Under his leadership, Advanced Security Syndicate has scaled from ₹27 Cr to ₹168 Cr in two fiscal years.",
    image: "/images/executive_pawan_1782124517543.jpg",
    linkedin: "https://linkedin.com",
    email: "pawan.m@advancedsecurity.in"
  },
  {
    id: "chetan",
    name: "Chetan Gawande",
    role: "Director - Logistics & Technology Operations",
    bio: "Chetan coordinates the central warehousing operation, technical RMA screening, and product compliance certification. He ensures that zero-defect bulk hardware batches are dispatched across regions.",
    image: "/images/executive_chetan_1782124535784.jpg",
    linkedin: "https://linkedin.com",
    email: "chetan.g@advancedsecurity.in"
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
