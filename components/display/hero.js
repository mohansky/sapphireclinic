import ButtonOutline from "@ui/button-outline";
import Button from "@ui/button";
import Image from "next/image";
import Link from "next/link"; 
import { imgblurDataURL } from "../../lib/constants";

export default function Hero({ item }) {
  return (
    <>
      <div className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-48 overflow-hidden flex items-center min-h-screen">
        <div className="w-full h-full absolute top-0 left-0 z-40 bg-black opacity-20 "></div>
        <div className="w-full h-full absolute top-0 left-0 z-0 bg-top">
          <Image
            src={item.img}
            alt={item.subtitle} 
            // width={1920}
            // height={1080}
            placeholder="blur"
            blurDataURL={imgblurDataURL}
            fill
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="lg:w-3/4 xl:w-2/4 relative z-50 h-100 lg:mt-16">
          <div>
            <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            {item.subtitle} 
            </h1>
            <h2 className="text-slate-100 text-xl md:text-3xl leading-snug mt-4 ">
              {item.title}
            </h2>
            <Link href={item.btnUrl}>
              {/* <ButtonOutline>
              {item.btnText}
              </ButtonOutline> */}
              <Button>
              {item.btnText}
              </Button>

            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
