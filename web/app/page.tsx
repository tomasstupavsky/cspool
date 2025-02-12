"use client";

import RidesTable from "@/components/rides-table";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <RidesTable />
    </section>
  );
}