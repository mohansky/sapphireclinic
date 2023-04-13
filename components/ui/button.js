import { Icon } from "@iconify/react";

export default function Button({ className, children, onClick }) {
  return (
    <button
      className= 
      {`
      grid
      group 
      bg-scred hover:shadow-md 
      hover:bg-scred-100 
      active:bg-scred-200 active:shadow-inner
      ease-in-out duration-500 ${className}`} 
      onClick={onClick}
    >
      <span className="text-scgrey-200 group-hover:text-scgrey-100 px-8 py-4 text-center">{children}</span>
    </button>
  );
}
