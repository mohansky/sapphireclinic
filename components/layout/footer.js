import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react"; 

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-12 lg:pt-24">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
            <Image
              src="/images/sclogo.png"
              alt=""
              className="w-28 mb-4"
              width={150}
              height={150}
            />
            <h3 className="font-bold text-2xl  text-gray-500">
              Sapphire skin & aesthetics clinic
            </h3>
            <p className="text-gray-400">
              is the place where science meets beauty. Pamper yourself in luxury
              at our state-of-the art clinic, where each individual is given
              personal attention, safest treatments and utmost discretion.
            </p>
          </div>

          <div className="w-full lg:w-3/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
            <h6 className="uppercase tracking-wider font-semibold text-gray-500">
              Contact Details
            </h6>
            <ul className="mt-4">
              <li className="mt-4 cursor-text flex ">
              <a
                  href="https://www.google.com/maps/dir//Sapphire+Skin+%26+Aesthetics+Clinic+6th+Phase+721,+24th+Main+Rd,+Marenahalli,+J+P+Nagar+Phase+5,+J.+P.+Nagar+Bengaluru,+Karnataka+560078/@12.9048941,77.5855534,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae15135995af1f:0xc650d0e6015f26c8!2m2!1d77.5855534!2d12.9048941"
                  title="Directions"
                  className="flex items-center"
                  target="blank"
                >
                <span>
                  <Icon icon="ph:map-pin" className="w-6 h-6 cursor-default" />
                </span>
                <span className="ml-3">
                  #718, 1st Floor, 24th Main Road, <br /> J.P.Nagar 6th Phase,
                  Near Nandhini Hotel, <br /> Bangalore 560078
                </span>
                </a>
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
              <li className="sc-link mt-4">
                <a
                  href="telto:+40773701534"
                  title=""
                  className="flex items-center"
                >
                  <span>
                    <Icon icon="ph:phone" className="w-6 h-6" />
                  </span>
                  <span className="ml-3">+40 773 701 534</span>
                </a>
              </li>
              <li className="sc-link mt-4">
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
              <li className="sc-link mt-4">
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
          </div>

          <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4">
            <h6 className="uppercase tracking-wider font-semibold text-gray-500">
            Follow us on Social media
            </h6>
            <ul className="flex mt-4  text-white">
              <li>
                <Link href="#" target="_blank" title="">
                  <Icon
                    icon="ph:facebook-logo"
                    className="sc-link-icon"
                  />
                </Link>
              </li>

              <li className="ml-6">
                <Link href="#" target="_blank" title="">
                  <Icon
                    icon="ph:instagram-logo"
                    className="sc-link-icon"
                  />
                </Link>
              </li>

              <li className="ml-6">
                <Link href="#" target="_blank" title="">
                  <Icon
                    icon="ph:youtube-logo"
                    className="sc-link-icon"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 lg:pt-24 pb-3">
          <hr className="pb-3 border-t-1 border-gray-600"/>
          <div className="flex justify-between">
            <p className="text-sm text-gray-600 ">
              © {new Date().getFullYear()} The Sapphire clinics. All Rights
              Reserved.
            </p>
            <p className="text-sm text-gray-600 ">Developed by Mohan</p>
          </div>
        </div>
      </footer>
    </>
  );
}
