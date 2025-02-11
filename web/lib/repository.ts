import { collection, DocumentData, getDocs } from "@firebase/firestore";
import { Ride } from "./interfaces";
import { db } from "@/lib/firebase";

export async function getRides(): Promise<Ride[]> {
  const rides = await getDocs(collection(db, "rides"));
  let result: Ride[] = [];

  rides.forEach((ride) => {
    result.push(mapRide(ride.data()));
  });

  return result;
}

function mapRide(data: DocumentData): Ride {
  return {
    _id: data._id,
    date: data.date,
    from: data.from,
    to: data.to,
    via: data.via,
    price_euro: data.price_euro,
    driver_id: data.driver_id,
    passenger_ids: data.passenger_ids,
  };
}
