import Link from "next/link";
import FooterTreatmentList from "@data/footer-treatments.json";

export default function FooterTreaments() {
  return (
    <>
      <h6 className="uppercase tracking-wider font-semibold text-gray-300">
        Treatments
      </h6>
      <ul>
        {FooterTreatmentList.map((item, index) => (
          <li className="my-1 sc-link" key={index}>
            <Link href={item.url} aria-label={item.title}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
