import Button from "../ui/button";
import { useForm, ValidationError } from "@formspree/react";

export default function FormMsg({className}) {
  const [state, handleSubmit] = useForm("msg-form");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }
  return (
    <>
      <div className={`w-full mt-8 lg:mt-0 lg:mx-4 lg:pr-8 ${className}`}>
      {/* <div className="w-full mt-8 lg:mt-0 lg:mx-4 lg:pr-8"> */}
        <h5 className="mb-4 uppercase tracking-wider font-semibold">
          Contact Form
        </h5>
        <form onSubmit={handleSubmit} method="post">
          <div className="grid lg:grid-cols-2 gap-6">
            <label className="block col-span-2">
              <span className="text-gray-700">Full name</span>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Name"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-700">
                Email address 
                {/* <span className="text-red-500">*</span> */}
              </span>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="name@email.com"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Phone Number</span>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{10}"
                className="form-input"
                placeholder="+91 987 654 3210"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-6">
            <label className="block">
              <span className="text-gray-700">Additional details</span>
              <textarea
                id="message"
                name="message"
                className="form-input resize-none"
                rows="3"
              ></textarea>
            </label>
          </div>

          {/* <small className="block mt-8"> <span className="text-red-500">*</span> required field</small> */}

          <Button type="submit" className="mt-8 w-full "> 
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
