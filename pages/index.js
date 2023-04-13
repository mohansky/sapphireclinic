import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { sortByWeight } from "../utils";
import Container from "@layout/container";
import Hero from "@display/hero";
import Intro from "@display/intro";
import DoctorList from "@display/doctor-list";
import Testimonials from "@display/testimonials";
import SliderCarousel from "@display/carousel";
import TreatmentTitle from "@display/treatment-title";
import TreatmentTitleList from "@display/treatment-title-list";
import FormMsg from "@display/form-msg";
import ProcedureCard from "@display/procedure-card";
import ProcedureCardList from "@display/procedure-list";
import ContactInfoSection from "@display/contact-info-section";
import HeroListItems from "@data/hero.json";
import ProcedureList from "@data/procedures.json";
import {
  BASE_PATH,
  SITE_NAME,
  SITE_DESC,
  SITE_FAVICON,
} from "../lib/constants";
import { useRouter } from "next/router";
import Map from "@display/map";

export default function Home({ posts }) {
  const router = useRouter().pathname.split("/")[1];
  const pageTitle = `HOME | ${SITE_NAME}`;
  const URL = `${BASE_PATH}${router}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={SITE_DESC} />
        <link rel="shortcut icon" href={SITE_FAVICON} />
        <link rel="canonical" href={URL} />
      </Head>
      <main>
        <SliderCarousel>
          {HeroListItems.map((item, index) => (
            <Hero key={index} item={item} />
          ))}
        </SliderCarousel>

        <Container className="bg-white">
          <Intro />
        </Container>

        <Container id="procedure" className="bg-gray-200">
          <ProcedureCardList />
          <TreatmentTitleList posts={posts} />
        </Container>

        <Container className="bg-gray-100">
          <DoctorList />
        </Container>
        <Testimonials />

        <Container className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 "> 
            <ContactInfoSection className="order-1 md:order-1 lg:order-1 mb-8" />
            <Map className="h-44 order-3 md:order-3 md:col-span-2  lg:order-2 mb-8"/>
            <FormMsg className="order-2 md:order-2 lg:order-3 mb-8" /> 
        </Container>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByWeight),
    },
  };
}
