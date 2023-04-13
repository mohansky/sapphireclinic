import Link from "next/link";
import { Icon } from "@iconify/react";
import SocialLinks from "@data/social-links.json";

export default function FooterSocial({className}) {
  return (
    <>
      <div className={` ${className}`}>
      {/* <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4"> */}
        <h6 className="uppercase tracking-wider font-semibold text-gray-300">
          Follow us on Social media
        </h6>
        <ul className="flex mt-4 text-white">
          {SocialLinks.map((item, index) => (
            <li className="mr-6" key={index}>
              <Link
                href={item.URL}
                target="_blank"
                title={item.title}
                aria-label={item.title}
              >
                <Icon icon={item.icon} className="w-8 h-8 sc-link-icon" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
