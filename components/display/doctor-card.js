import Image from "next/image";

export default function DoctorCard({ doctor }) {
  return (
    <>
      <div className="w-1/2 md:w-2/3 mx-auto">
        <div className="bg-white p-4">
          <Image
            src={doctor.image}
            alt={doctor.name}
            className="mx-auto "
            width={360}
            height={480}
          />
        </div>

        <h4 className="text-xl font-bold mt-4">{doctor.name}</h4>
        <ul className="mt-1 truncate">
          {doctor.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
