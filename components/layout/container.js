export default function Container({ id, children, className }) {
  return (
    <section
      id={id}
      className={`px-4 sm:px-8 lg:px-16 xl:px-32 2xl:px-64 py-16 ${className}`}
    >
      {children}
    </section>
  );
}
