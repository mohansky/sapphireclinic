export default function Col({ children, className }) {
  return (
    <div
      className={`grid  ${className}`}
    >
      {children}
    </div>
  );
}
