import { formatDate, formatTime } from "@/lib/formatter";
import { Ride } from "@/lib/interfaces";
import { getRides } from "@/lib/repository";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { useState, useEffect } from "react";

const RidesTable: React.FC = () => {
  const [rides, setRides] = useState<Ride[]>([]);

  const fetchRides = async () => {
    setRides(await getRides());
  };

  useEffect(() => {
    fetchRides();
  }, []);

  return (
    <div>
      <div>
        <h1>Zoznam jázd na február - únor</h1>
      </div>
      <div>
        <Table aria-label="Rides list">
          <TableHeader>
            <TableColumn>Dátum</TableColumn>
            <TableColumn>Čas</TableColumn>
            <TableColumn>Odkiaľ</TableColumn>
            <TableColumn>Kam</TableColumn>
            <TableColumn>Cez</TableColumn>
            <TableColumn>Cena</TableColumn>
            <TableColumn>Šofér</TableColumn>
            <TableColumn>Obsadenie</TableColumn>
            <TableColumn>Kontakt</TableColumn>
          </TableHeader>
          <TableBody items={rides}>
            {(ride) => (
              <TableRow key={ride._id}>
                <TableCell>{formatDate(ride.date)}</TableCell>
                <TableCell>{formatTime(ride.date)}</TableCell>
                <TableCell>{ride.from}</TableCell>
                <TableCell>{ride.to}</TableCell>
                <TableCell>{ride.via}</TableCell>
                <TableCell>
                  {ride.price} {ride.price_unit}
                </TableCell>
                <TableCell>{ride.driver_id}</TableCell>
                <TableCell>
                  {ride.passenger_ids.length}/{ride.passenger_capacity}
                </TableCell>
                <TableCell>Kontaktovať</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RidesTable;
