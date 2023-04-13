import Image from "next/image";
import TeamList from "@data/team.json";

export default function TeamItem() {
  return (
    <>
      <h2 className="text-center font-bold text-5xl">
        {TeamList.title} 
      </h2>
      <div className="py-5 px-2.5 py-md-10 px-md-5">
        <Image
          src={TeamList.img} 
          alt="Our experienced team"
          className="w-full mx-auto rounded-lg"
          width={1080}
          height={720}
        />
      </div>
    </>
  );
}
