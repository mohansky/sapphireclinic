import ContactDetailsList from "@data/footer-contacts.json";
import { Icon } from "@iconify/react";

export default function FooterContacts({className}) {
  return (
    <>
          <div className={` ${className}`}>
      {/* <div className="w-full lg:w-3/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8"> */}
        <h6 className="uppercase tracking-wider font-semibold text-gray-300">
          Contact Details
        </h6>
        <ul className="mt-4">
          {ContactDetailsList.map((item, index) => (
            <li className={`mt-4 cursor-text flex ${item.class}`} key={index}>
              <a
                href={item.url}
                title={item.title}
                className="flex"
                target="blank"
              >
                <span>
                  <Icon icon={item.icon} className="w-6 h-6 cursor-default" />
                </span>
                <span className="ml-3">
                  {item.text.map((item, index) => (
                    <span key={index}>
                      {item} <br />
                    </span>
                  ))}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
