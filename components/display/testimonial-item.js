import Image from "next/image";
import { Icon } from '@iconify/react';

export default function TestimonialItem({ testimonial }) {
  return (
    <>
      <div className="bg-no-repeat bg-cover bg-center h-96 md:px-24 p-6 mb-6 z-10 grid  ">
        <div className=" items-center">
          <div className="text-center">
            <h3 className=" text-6xl font-bold mb-8 z-50">
              Our patients&apos; Say
            </h3>
            <Icon icon="mingcute:quote-left-line" className="mt-15 mx-auto opacity-40 text-scyellow w-28 h-28"/>
            <p className="mb-4 w-full md:w-3/4 lg:w-1/2 mx-auto text-white text-xl z-40">{testimonial.text}</p>
            {/* <p className="mb-2 text-slate-200 italic z-40">
              {testimonial.treatment}
            </p> */}
            <p className="text-2xl text-white z-40">
              {testimonial.name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
