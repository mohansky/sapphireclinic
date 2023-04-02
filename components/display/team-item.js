import Image from "next/image";

export default function TeamItem() {
  return (
    <>
      <h2 className="text-center font-bold text-5xl">Our experienced team</h2>
      <div className="py-5 px-2.5 py-md-10 px-md-5">
        <Image
          src="/images/misc/groupphoto.jpg"
          alt=""
          className="w-full mx-auto rounded-lg"
          width={1080}
          height={720}
        />
      </div>
    </>
  );
}
