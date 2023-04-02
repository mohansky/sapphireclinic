import Modal from "./modal";

export default function CTA() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-scblue via-scblue to-blue-500 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 text-center md:text-left">
        <div className="md:flex md:items-center md:justify-center">
          <h2 className="text-xl font-bold text-white">
            Book an Appointment! <br className="block md:hidden" />
            Call us on:{" "}
            <a href="tel:+918026549666" className="hover:opacity-50" title="Call Us">
              +91 80-265-496-66
            </a>
          </h2>
          <Modal />
        </div>
      </section>
    </>
  );
}
