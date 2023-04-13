import Link from "next/link";
import FooterMenuList from "@data/footer-menu.json";

export default function FooterMenu({className}) {
  return (
    <>
      <div className={` ${className}`}>
      {/* <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4"> */}
        <h6 className="uppercase tracking-wider font-semibold text-gray-300">
          Information
        </h6>
        <ul>
          {FooterMenuList.map((item, index) => (
            <li className="my-1 sc-link" key={index}>
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
