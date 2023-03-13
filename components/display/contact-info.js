import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ContactInfo() {
  return (
    <>
      <div className="w-full lg:w-4/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
        <h5 className="uppercase tracking-wider font-semibold text-scblue">
          Contact Details
        </h5>
        <ul className="mt-4 mx-auto">
          <li className="mt-4 cursor-text flex">
            <span>
              <Icon icon="ph:map-pin" className="w-6 h-6 cursor-default" />
            </span>
            <span className="ml-3">
              #718, 1st Floor, 24th Main Road, <br /> 
              J.P.Nagar 6th Phase, Near Nandhini Hotel, <br /> 
              Bangalore 560078
            </span>
          </li>
          <li className="mt-4 cursor-text flex">
            <span>
              <Icon icon="ph:clock" className="w-6 h-6" />
            </span>
            <span className="ml-3">
              Mon - Sat: 10:30am - 8:30pm
              <br />
              Sun: 10:30am to 7:30pm
            </span>
          </li>
          <li className="mt-8 hover:opacity-50 hover:text-scblue ease-in-out duration-500 cursor-pointer">
            <a href="telto:+40773701534" title="" className="flex items-center">
              <span>
                <Icon icon="ph:phone" className="w-6 h-6" />
              </span>
              <span className="ml-3">+40 773 701 534</span>
            </a>
          </li>
          <li className="mt-8 hover:opacity-50 hover:text-scblue ease-in-out duration-500 cursor-pointer">
            <a
              href="telto:+919741783333"
              title=""
              className="flex items-center"
            >
              <span>
                <Icon icon="ph:phone" className="w-6 h-6" />
              </span>
              <span className="ml-3">+91 974 178 3333</span>
            </a>
          </li>
          <li className="mt-8 hover:opacity-50 hover:text-scblue ease-in-out duration-500 cursor-pointer">
            <a
              href="mailto:drsheelavathi@gmail.com"
              title=""
              className="flex items-center"
            >
              <span>
                <Icon icon="ph:envelope-simple" className="w-6 h-6" />
              </span>
              <span className="ml-3">drsheelavathi@gmail.com</span>
            </a>
          </li>
        </ul>
        <h5 className="mt-12 uppercase tracking-wider font-semibold text-scblue">
          Follow us on Social media
        </h5>
        <ul className="flex mt-4  text-black">
          <li>
            <Link href="#" target="_blank" title="">
              <Icon
                icon="ph:facebook-logo"
                className="w-10 h-10 hover:opacity-50 hover:text-scblue ease-in-out duration-500 cursor-pointer"
              />
            </Link>
          </li>

          <li className="ml-6">
            <Link href="#" target="_blank" title="">
              <Icon
                icon="ph:instagram-logo"
                className="w-10 h-10 hover:opacity-50 hover:text-scblue ease-in-out duration-500 cursor-pointer"
              />
            </Link>
          </li>

          <li className="ml-6">
            <Link href="#" target="_blank" title="">
              <Icon
                icon="ph:youtube-logo"
                className="w-10 h-10 hover:opacity-50 hover:text-scblue ease-in-out duration-500 cursor-pointer"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
