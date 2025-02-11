import { Timestamp } from "@firebase/firestore";

export interface Ride {
  _id: number;
  from: string;
  to: string;
  via: string;
  price_euro: number;
  passenger_ids: number[];
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