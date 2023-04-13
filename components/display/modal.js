import { useState } from "react";
import { Icon } from "@iconify/react";
import ButtonOutline from "@ui/button-outline";
import Form from "./form";
import HeroButton from "@ui/hero-button";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <HeroButton type="button" onClick={() => setShowModal(true)}>
        Book Appointment
      </HeroButton>
      {/* <ButtonOutline type="button" onClick={() => setShowModal(true)}>
        Book Appointment
      </ButtonOutline> */}
      {showModal ? (
        <>
          <div className="fixed inset-0 justify-center items-center flex overflow-x-hidden overflow-y-auto z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Book an appointment
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <Icon icon="ph:x" className="w-10 h-10" />
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <Form />
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-gray-900/90 backdrop-blur-md"></div>
        </>
      ) : null}
    </>
  );
}
