import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ContactSocials() {
  return (
    <>
      <div className="w-full mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
      
        <h5 className="mt-12 uppercase tracking-wider font-semibold">
          Follow us on Social media
        </h5>
        <ul className="flex mt-4">
          <li>
            <Link href="https://www.facebook.com/sapphireskinclinic" target="_blank" title="Facebook">
              <Icon icon="ph:facebook-logo" className="sc-link-icon" />
            </Link>
          </li>

          <li className="ml-6">
            <Link href="https://www.facebook.com/sapphireskinclinic" target="_blank" title="Instagram">
              <Icon icon="ph:instagram-logo" className="sc-link-icon" />
            </Link>
          </li>

          <li className="ml-6">
            <Link href="https://www.facebook.com/sapphireskinclinic" target="_blank" title="Youtube">
              <Icon icon="ph:youtube-logo" className="sc-link-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
