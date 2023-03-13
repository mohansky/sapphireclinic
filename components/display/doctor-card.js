import Image from "next/image"; 

export default function DoctorCard({ doctor }) {
  return (
    <>
      <div className="md:w-1/2 md:px-4 lg:w-1/2">
        <div className="bg-gray p-8">
          <Image
            src={doctor.image}
            alt=""
            className="mx-auto rounded-lg"
            width={200}
            height={200}
          /> 
          <h4 className="text-xl font-bold mt-4">{doctor.name}</h4>  
          <ul className="mt-1 truncate ">
            {doctor.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
