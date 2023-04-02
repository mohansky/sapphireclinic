import React from "react";

export default function TreatmentTitleList({ children, className }) {
  return (
    <>
      <ul className={`list-disc list-inside ${className}`}>{children}</ul>
    </>
  );
}
