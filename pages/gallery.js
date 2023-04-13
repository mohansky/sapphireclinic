import React, { useState } from "react";
import Head from "next/head";
import ImageMosaic from "@gallery/image-mosaic";
import ImageLightbox from "@gallery/image-lightbox";
import PageTitle from "@display/page-title";
import GalleryCollection from "@data/gallery.json";
import Container from "@layout/container";
import { BASE_PATH, SITE_NAME, SITE_DESC, SITE_FAVICON } from "../lib/constants";
import { useRouter } from "next/router";

if (typeof window === "undefined") React.useLayoutEffect = () => {};

export default function Gallery() {
  const router = useRouter().pathname.split("/")[1] 
  const routeTitle = router.toUpperCase().split('-').join(' ')
  const pageTitle = `${routeTitle} | ${SITE_NAME}`
  const URL = `${BASE_PATH}/${router}`
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const images = GalleryCollection;

  return (
    <>
      <Head> 
        <title>{pageTitle}</title>
        <meta name="description" content={SITE_DESC} />
        <link rel="shortcut icon" href={SITE_FAVICON} />
        <link rel="canonical" href={URL} />
      </Head>
      <main>
        <Container>
          <PageTitle> Gallery </PageTitle>
          <section>
            <ImageMosaic
              images={images.map((image) => ({
                src: image.img,
                title: image.title,
                width: image.width,
                height: image.height,
              }))}
              handleClick={(e, { index }) => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            />

            <ImageLightbox
              currentImageIndex={currentImageIndex}
              setCurrentIndex={setCurrentIndex}
              isOpen={isOpen}
              onClose={() => setOpen(false)}
              images={images.map((image) => ({
                src: image.img,
                title: image.title,
              }))}
            />
          </section>
        </Container>
      </main>
    </>
  );
}
