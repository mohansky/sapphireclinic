import Image from "next/image";
import PageTitle from "@display/page-title";

export default function About() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:-mx-8">
        <div className="w-full lg:w-1/2 lg:px-8">
          <h2 className="text-3xl leading-tight font-bold mt-4">
            Welcome to the Skin Clinic of Dr. Sheela Natraj.
          </h2>
          <p className="mt-2 leading-relaxed">
            The delicate synergy of science, skill and nature is important to
            understand and create a healthy and beautiful you. Sapphire skin &
            aesthetics clinic involves a team of dedicated doctor & skilled
            staff to provide the best in aesthetic medicine. We help you to
            rediscover yourself and redefine the way you look and feel.
            Aesthetic concerns be it pimples, hair loss, and pigmentation can
            all be the result of serious internal problems. Our expert doctor
            treats the internal problems first, and customizes the external
            treatment to the unique needs of each individual to ensure that the
            results are long lasting. After a detailed diagnosis, we help you
            understand the needs, and formulate a treatment plan to cater to
            what is best and safe for you. We help you achieve a complete
            understanding of your problems and the treatments involved before
            embarking on the actual services. We believe that early diagnosis
            and treatment always give superior results. Our highly trained team
            of doctor, aestheticians and nurses along with reliable leading edge
            medical technology deliver unsurpassed results in Botox, Fillers,
            Peels, Lasers, Thread-lifts, Hair Transplants, Body Contouring.
          </p>
        </div>

        <div className="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0">
          <div className="md:flex">
            <Image src="/images/ful.jpg" width={720} height={480} alt="" />
          </div>

          <div className="md:flex mt-8">
            <div className="mt-4 md:mt-0">
              <h4 className="text-xl font-bold leading-tight">
                Sapphire skin & aesthetics clinic
              </h4>
              <p className="mt-2 leading-relaxed">
                is the place where science meets beauty. Pamper yourself in
                luxury at our state-of-the art clinic, where each individual is
                given personal attention, safest treatments and utmost
                discretion.
              </p>
              <p className="mt-2 leading-relaxed">
                We at Sapphire skin & aesthetics clinic are more focused and
                committed towards “client interest comes first” philosophy to
                ensure each individual walks out with a smile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
