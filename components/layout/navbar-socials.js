import { Icon } from "@iconify/react"; 
import SocialLinks from "@data/social-links.json";

export default function NavBarSocials() {
  return (
    <>
      {SocialLinks.map((item, index) => (
        <Icon
          key={index}
          icon={item.icon}
          className="w-8 h-8 bg-gray-200 mx-1 p-2 text-slate-500 
          hover:bg-slate-500 hover:text-gray-200 
          ease-in-out duration-500 focus:border-none active:border-none"
        />
      ))}
    </>
  );
}
