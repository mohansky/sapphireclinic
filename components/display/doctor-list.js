import DoctorCard from "@display/doctor-card";
import DoctorListItems from "@data/doctors.json";

export default function DoctorList() {
  return (
    <>
      {/* <section className="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32"> */}
      <h2 className="font-bold text-5xl mb-4">Our Experienced Doctors</h2>
      <p className="w-3/6 text-lg mb-8">
        At Sapphire skin & aesthetics clinic, we have an outstanding
        team of doctors who are innovators in the cosmetic and dermatology
        fields.
      </p> 
      <div className="grid md:grid-cols-3 gap-12">
        {DoctorListItems.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
      {/* </section> */}
    </>
  );
}
