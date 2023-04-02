import React, { useState } from "react";
import Head from "next/head";
import ImageMosaic from "@gallery/image-mosaic";
import ImageLightbox from "@gallery/image-lightbox";
import PageTitle from "@display/page-title";
import GalleryCollection from "@data/gallery.json";
import Container from "@layout/container";
import { SITE_NAME } from "../lib/constants";

if (typeof window === "undefined") React.useLayoutEffect = () => {};

export default function Gallery({ galleryCollection }) {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const images = GalleryCollection;

  return (
    <>
      <Head> 
        {/* <title>{`${SITE_NAME} | Gallery`} </title> */}
        <title> The Sapphire Clinic | Gallery </title>
        <meta name="description" content="Welcome to the Skin Clinic of Dr. Sheela Natraj."/>
        <link rel="shortcut icon" href="/images/favicon.png" />
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
