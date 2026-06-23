export interface Brand {
  id: string;
  name: string;
  logo: string;
  image?: string;
  description: string;
  longDescription: string;
  category: "Camera" | "Storage" | "Networking" | "Telecom" | "Accessories";
  featuredProducts: string[];
  foundedYear: string;
  relationshipType: "Authorized National Distributor" | "Regional Distributor" | "Strategic Alliance";
  website: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  details: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  location: string;
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

export interface DealerRegion {
  state: string;
  city: string;
  dealerName: string;
  coverage: string;
  contact: string;
}

export interface InquiryFormState {
  name: string;
  contactNo: string;
  email: string;
  city: string;
  userType: "Distributor" | "Sub-Distributor" | "System Integrator" | "Retailer" | "End-User" | "";
  subject: string;
  message: string;
  brandsOfInterest: string[];
}
