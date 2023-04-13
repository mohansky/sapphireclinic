import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ContactInfoSection() {
  return (
    <>
      <div className="w-full mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
        <h5 className="uppercase tracking-wider font-semibold">
          Contact Details
        </h5>
        <ul className="mt-4 mx-auto">
          <li className="mt-4 cursor-text flex sc-link">
            <a
              href="https://www.google.com/maps/dir//Sapphire+Skin+%26+Aesthetics+Clinic+6th+Phase+721,+24th+Main+Rd,+Marenahalli,+J+P+Nagar+Phase+5,+J.+P.+Nagar+Bengaluru,+Karnataka+560078/@12.9048941,77.5855534,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae15135995af1f:0xc650d0e6015f26c8!2m2!1d77.5855534!2d12.9048941"
              title="Directions"
              className="flex"
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
          </li> 
          <li className="mt-8 sc-link">
            <a href="telto:+40773701534" title="Phone No." className="flex items-center">
              <span>
                <Icon icon="ph:phone" className="w-6 h-6" />
              </span>
              <span className="ml-3">+40 773 701 534</span>
            </a>
          </li>
          <li className="mt-8 sc-link">
            <a
              href="telto:+919741783333"
              title="Phone No."
              className="flex items-center"
            >
              <span>
                <Icon icon="ph:phone" className="w-6 h-6" />
              </span>
              <span className="ml-3">+91 974 178 3333</span>
            </a>
          </li>
          <li className="mt-8 sc-link">
            <a
              href="mailto:drsheelavathi@gmail.com"
              title="Email"
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
    </>
  );
}
