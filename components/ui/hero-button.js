import { Icon } from "@iconify/react";

export default function HeroButton({ className, children, onClick }) {
  return (
    <button className=
      {`group bg-scred hover:shadow-md hover:bg-scred-100 active:bg-scred-200 active:shadow-inner
      ease-in-out duration-300 flex ${className}`} 
      onClick={onClick}
    >
      <div className="text-scgrey-200 group-hover:text-scgrey-100 w-60 px-8 py-4">
      {children}
      </div>
      
      <div className="py-3 px-4 grid bg-white group-hover:bg-gray-200 ease-in-out duration-300">
        <Icon icon="mdi:arrow-right-thick" className="place-self-center w-8 h-8 text-scgrey-200 group-hover:text-scgrey-100 ease-in-out duration-300" />
      </div>
    </button>
  );
}
