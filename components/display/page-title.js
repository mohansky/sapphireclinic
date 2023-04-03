export default function PageTitle({ children, className }) {
  return (
    
    <h2 className={`uppercase text-scblue text-5xl text-center font-extrabold my-12 ${className}`}>
      {children}
    </h2>
  );
}
