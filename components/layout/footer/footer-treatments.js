import Link from "next/link";
import FooterTreatmentList from "@data/footer-treatments.json";

export default function FooterTreaments({className}) {
  return (
    <>
          <div className={` ${className}`}>
      {/* <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4"> */}
        <h6 className="uppercase tracking-wider font-semibold text-gray-300">
          Treatments
        </h6>
        <ul className="mt-4">
          {FooterTreatmentList.map((item, index) => (
            <li className="my-3 sc-link" key={index}>
              <Link href={item.url} aria-label={item.title}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
