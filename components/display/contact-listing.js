import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ContactListing() {
  return (
    <>
      {/* <div className="bg-gray-200 mx-auto py-4 px-2"> */}
      <div className="bg-gradient-to-r from-scblue via-scblue to-blue-500">
        <ul className="mx-auto lg:flex justify-center gap-20 text-white text-lg">
          <li className="cursor-text flex hover:bg-slate-500 hover:scale-110 ease-in-out duration-500 py-10 py-lg-20 px-5 px-lg-10">
            <div className="m-auto flex ">
              <a
                href="https://www.google.com/maps/dir//Sapphire+Skin+%26+Aesthetics+Clinic+6th+Phase+721,+24th+Main+Rd,+Marenahalli,+J+P+Nagar+Phase+5,+J.+P.+Nagar+Bengaluru,+Karnataka+560078/@12.9048941,77.5855534,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae15135995af1f:0xc650d0e6015f26c8!2m2!1d77.5855534!2d12.9048941"
                title="Directions"
                className="flex "
                target="blank"
              >
                <span>
                  <Icon icon="ph:map-pin" className="w-6 h-6 cursor-default" />
                </span>
                <span className="ml-3">
                  #718, 1st Floor, 24th Main Road, <br />
                  J.P.Nagar 6th Phase, Near Nandhini Hotel, <br />
                  Bangalore 560078
                </span>
              </a>
            </div>
          </li>

          <li className="hover:bg-slate-500 hover:scale-110 ease-in-out duration-500 py-10 py-lg-20 px-5 px-lg-10">
            <div className=" grid place-content-center">
              <a
                href="telto:+40773701534"
                title="Phone No."
                className="sc-link my-2 flex items-center"
              >
                <span>
                  <Icon icon="ph:phone" className="w-6 h-6" />
                </span>
                <span className="ml-3">+40 773 701 534</span>
              </a>
              <a
                href="telto:+919741783333"
                title="Phone No."
                className="sc-link flex  my-2 items-center mt-2"
              >
                <span>
                  <Icon icon="ph:phone" className="w-6 h-6" />
                </span>
                <span className="ml-3">+91 974 178 3333</span>
              </a>
              <a
                href="mailto:drsheelavathi@gmail.com"
                title="Email"
                className="sc-link my-2 flex items-center mt-2"
              >
                <span>
                  <Icon icon="ph:envelope-simple" className="w-6 h-6" />
                </span>
                <span className="ml-3">drsheelavathi@gmail.com</span>
              </a>
            </div>
          </li>

          <li className="cursor-text flex hover:bg-slate-500 hover:scale-110 ease-in-out duration-500 py-10 py-lg-20 px-5 px-lg-10">
            <div className="m-auto flex">
              <span>
                <Icon icon="ph:clock" className="w-6 h-6" />
              </span>
              <span className="ml-3">
                Monday - Saturday: 10:30 am - 8:30 pm
                <br />
                Sunday: 10:30 am to 7:30 pm
              </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
