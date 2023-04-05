import Image from "next/image";
import Modal from "./modal";

export default function CTAAlt() {
  return (
    <>
      <section id="cta" className="relative overflow-hidden bg-blue-600 py-32">
        <Image
          className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
          src="/images/bg-cta.jpg"
          alt="Book an Appointment!"
          width="1920"
          height="1080"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              Book an Appointment!   
            </h2>
            <p className="mt-4 text-lg tracking-tight text-white">Call us on:</p>
            {/* <a
              href="tel:+918026549666"
              className="hover:opacity-50"
              title="Call Us"
            >
              +91 80-265-496-66
            </a> */}
            <a href="tel:+918026549666" title="Call Us" 
               className="group inline-flex items-center justify-center rounded-full 
               py-4 px-8 text-md font-semibold 
               focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 
               bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10">
            +91 80-265-496-66
            </a>

            {/* <Modal /> */}
          </div>
        </div>
      </section>
    </>
  );
}
