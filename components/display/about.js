import Image from "next/image";
import AboutList from "@data/about.json";

export default function About() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:-mx-8">
        <div className="w-full lg:w-1/2 lg:px-8">
          <h2 className="text-3xl leading-tight font-bold mt-4">
            {AboutList[0].title}
          </h2>
          <p className="mt-2 leading-relaxed">{AboutList[0].text}</p>
        </div>

        <div className="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0">
          <div className="md:flex">
            <Image
              src={AboutList[0].img}
              width={720}
              height={480}
              alt="Sapphire skin & aesthetics clinic"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw"
            />
          </div>

          <div className="md:flex mt-8">
            <div className="mt-4 md:mt-0">
              <h3 className="text-xl font-bold leading-tight">
                {AboutList[1].title}
              </h3>
              <p className="mt-2 leading-relaxed">{AboutList[1].text[0]}</p>
              <p className="mt-2 leading-relaxed">{AboutList[1].text[1]}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
