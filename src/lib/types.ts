export interface Aircraft {
  id: string;
  name: string;
  type: string;
  capacity: number;
  maxRange: number;
  cruiseSpeed: number;
  hourlyRate: number;
  images: string[];
  features: string[];
  available: boolean;
}

export interface EmptyLeg {
  id: string;
  aircraft: Aircraft;
  from: string;
  to: string;
  departureDate: string;
  departureTime: string;
  duration: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  seats: number;
}

export interface SearchQuery {
  from: string;
  to: string;
  departure: string;
  return?: string;
  passengers: number;
  tripType: "one-way" | "round-trip";
}
