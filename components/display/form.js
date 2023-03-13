import React from "react";
import Button from "../ui/button";

export default function Form() {
  return (
    <>
      <div className="w-full mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
        <h5 className="mb-4 uppercase tracking-wider font-semibold text-scblue">
          Contact Form
        </h5>
        <div className="grid grid-cols-2 gap-6">
          <label className="block">
            <span className="text-gray-700">Full name</span>
            <input
              type="text"
              className="
                    mt-1
                    px-3
                    py-2
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              placeholder=""
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email address</span>
            <input
              type="email"
              className="
                    mt-1
                    px-3
                    py-2
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              placeholder="name@example.com"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">
            Please select date of appointment
            </span>
            <input
              type="date"
              className="
                    mt-1
                    px-3
                    py-2
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="MM/DD/YYYY"
 
            />
          </label>
          <label className="block">
            <span className="text-gray-700">
            Please select time of appointment
            </span>
            <input
              type="time"
              className="
                    mt-1
                    px-3
                    py-2
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-6">
          <label className="block">
            <span className="text-gray-700">Please select clinic</span>
            <select
              className="
                    block
                    w-full
                    mt-1
                    px-3
                    py-2
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
            >
              <option>Skin Clinic</option>
              <option>Heart Clinic</option>
            </select>
          </label>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-6">
          <label className="block">
            <span className="text-gray-700">Additional details</span>
            <textarea
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
              rows="3"
            ></textarea>
          </label>
        </div>

        <Button type="submit">Submit</Button>
      </div>
    </>
  );
}
