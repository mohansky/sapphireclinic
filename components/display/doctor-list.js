import DoctorCard from "@display/doctor-card";
import DoctorListItems from "@data/doctors.json";

export default function DoctorList() {
  return (
    <>
      <section className="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
        <h2 className="text-center font-bold text-5xl">Our experienced doctors</h2>
        <div className="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
          {DoctorListItems.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </section>
    </>
  );
}
