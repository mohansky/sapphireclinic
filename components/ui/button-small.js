export default function ButtonSmall({ className, children, onClick }) {
  return (
    <button
      className={`
        grid
        group 
        bg-scred hover:shadow-md 
        hover:bg-scred-100 
        active:bg-scred-200 active:shadow-inner
        ease-in-out duration-500 ${className}`} 
      onClick={onClick}
    >
      <span className="text-scgrey-200 group-hover:text-gray-500 px-4 py-2">{children}</span>
      {/* {children} */}
    </button>
  );
}
