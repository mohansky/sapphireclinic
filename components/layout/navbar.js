import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react"; 
import { imgblurDataURL } from "../../lib/constants";
import NavBarSocials from "./navbar-socials";
import MenuItems from "@data/menu.json";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full bg-slate-50 backdrop-blur fixed top-0 left-0 right-0 z-30 shadow-lg"> 
        <div className="justify-between px-4 mx-auto md:max-w-full md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-2 md:block">
              <Link href="/" aria-label="Home Page">
                <Image
                  src="/images/ssclogo.svg"
                  alt=""
                  className="w-44"
                  width={100}
                  height={50}
                  placeholder="blur"
                  blurDataURL={imgblurDataURL}
                  priority
                />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-none focus:bordborder-none ease-in-out duration-500"
                  onClick={() => setNavbar(!navbar)}
                  aria-label="Menu"
                >
                  {navbar ? (
                    <Icon
                      icon="ph:x"
                      className="w-8 h-8 text-slate-500 ease-in-out duration-500 focus:border-none active:border-none"
                      aria-label="Close Menu"
                    />
                  ) : (
                    <Icon
                      icon="ph:list"
                      className="w-8 h-8 text-slate-500 ease-in-out duration-500 focus:border-none active:border-none"
                      aria-label="Open Menu"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                {MenuItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-slate-500 text-md text-center font-semibold uppercase py-6 md:py-2 px-3 
                    border-b-2 md:border-b-0 border-scgrey hover:bg-scgrey-100
                    hover:text-opacity-60 md:hover:bg-transparent ease-in-out duration-300"
                  >
                    <Link
                      href={item.url}
                      onClick={() => setNavbar(false)}
                      aria-label={item.title}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="hidden lg:block text-center md:border-x-2 md:border-dotted border-b-2 md:border-b-0 
                  border-scgrey hover:bg-scgrey-100 py-6 md:py-2 px-6 mx-2 lg:mx-8 hover:text-opacity-60 
                  md:hover:bg-transparent ease-in-out duration-300">
                  <div className="flex items-center justify-center text-slate-500 text-md hover:opacity-50 cursor-pointer">
                    <Icon icon="ph:phone-call-light" className="w-5 h-5" />
                    <span className="ml-2 font-semibold">+40 773 701 534</span>
                  </div>
                </li>
                <li className="text-center xl:pl-5 hidden xl:flex gap-1 ">
                  <NavBarSocials />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
