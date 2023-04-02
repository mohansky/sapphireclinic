import Link from "next/link"; 
import { Icon } from "@iconify/react";

export default function NavContact() {
  return (
    <div className="hidden md:flex justify-between items-center border-b text-xs py-0 mx-auto lg:max-w-7xl">
      <div>
        <ul className="flex text-white">
          <li>
            <div className="flex items-center">
              <Icon icon="ph:map-pin" className="w-5 h-5" /> 
              <span className="ml-2">J.P.Nagar 6th Phase Bangalore</span>
            </div>
          </li>
          <li className="ml-6">
            <div className="flex items-center hover:opacity-50 cursor-pointer">
              <Icon icon="ph:phone" className="w-5 h-5" /> 
              <span className="ml-2">+40 773 701 534</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="">
        <ul className="flex justify-end text-white">
          <li>
            <Link href="#" target="_blank" title="">
              <Icon icon="ph:facebook-logo" className="w-6 h-6 hover:opacity-50 cursor-pointer" />
            </Link>
          </li>

          <li className="ml-6">
            <Link href="#" target="_blank" title="">
              <Icon icon="ph:instagram-logo" className="w-6 h-6 hover:opacity-50 cursor-pointer" />
            </Link>
          </li>

          <li className="ml-6">
            <Link href="#" target="_blank" title="">
              <Icon icon="ph:youtube-logo" className="w-6 h-6 hover:opacity-50 cursor-pointer" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
