import ButtonRound from "@ui/button-round";
import Button from "@ui/button";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { imgblurDataURL } from "../../lib/constants";

export default function HeroSingle({ img, title }) {
  return (
    <>
      <div className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-48 overflow-hidden flex items-center min-h-screen">
        <div className="w-full h-2/3 absolute top-0 left-0 z-40 bg-black opacity-20 "></div>
        <div className="mt-16 fixed top-14 right-2 z-40">
          <ButtonRound>
            <Link href="/treatments">
              <Icon icon="ph:arrow-circle-left" className="w-10 h-10" />
            </Link>
          </ButtonRound>
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-0 bg-top">
          <Image
            src={img}
            alt=""
            width={1920}
            height={1080}
            placeholder="blur"
            blurDataURL={imgblurDataURL}
            className="w-full h-2/3 object-cover"
            priority
          />

          <h1 className="text-scblue-[20] opacity-10 text-center mt-20 text-5xl md:text-7xl xl:text-9xl font-bold leading-tight">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
}
