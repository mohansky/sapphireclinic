import Button from "@ui/button";
import Image from "next/image";
import React from "react";
import ProcedureCard from "./procedure-card"
import ProcedureList from "../../data/procedures.json"

export default function ProcedureCardList( ) {
  return (
    <>
         <div className="mb-16">
            <h2 className="text-3xl leading-tight font-bold mb-8">
              Skin Treatments
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {ProcedureList.map((procedure, index) => (
                <ProcedureCard key={index} procedure={procedure} />
              ))}
            </div>
          </div>
    </>
  );
}
