export default function ButtonRound({ children, onClick }) {
  return (
    <button
      className="p-0 bg-scblue text-white rounded-full inline-block font-semibold 
      hover:shadow-md hover:bg-blue-600 active:bg-blue-800 active:scale-50 active:shadow-inner
      ease-in-out duration-500" 
      onClick={onClick}
      >
      {children}
    </button>
  );
}
