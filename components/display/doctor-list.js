import DoctorCard from "@display/doctor-card";
import DoctorListItems from "@data/doctors.json";

export default function DoctorList() {
  return (
    <>
      <h2 className="font-bold text-5xl mb-4">Our Experienced Doctors</h2>
      <p className="w-full md:w-3/4 lg:w-3/6 text-lg mb-8">
        At Sapphire skin & aesthetics clinic, we have an outstanding team of
        doctors who are innovators in the cosmetic and dermatology fields.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {DoctorListItems.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </>
  );
}
