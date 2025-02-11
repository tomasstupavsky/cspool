import { Timestamp } from "@firebase/firestore";

export interface Ride {
  _id: number;
  from: string;
  to: string;
  via: string;
  price: number;
  price_unit: string;
  passenger_ids: number[];
  passenger_capacity: number;
  driver_id: number;
  date: Date;
}

export interface User {
  _id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string
}