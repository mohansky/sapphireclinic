import Button from "@ui/button";
import Image from "next/image";
import React from "react";

export default function ProcedureCard({ procedure, className }) {
  return (
    <>
      <div className={`bg-white ${className}`}>
        <Image
          src={procedure.image}
          alt={procedure.title}
          className="mx-auto "
          width={480}
          height={360}
        />
        <div className="p-8">
        <h3 className="text-xl mb-1">{procedure.number} Procedures</h3>
        <h4 className="text-2xl font-semibold mb-3">{procedure.title}</h4>
        <p className="text-md mb-5">{procedure.text}</p>
        <Button className="mx-auto">Learn More</Button>
        </div>
      </div>
    </>
  );
}
