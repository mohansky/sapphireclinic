import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Hero from "@display/hero";
import About from "@display/about";
import CTA from "@display/cta";
import Testimonials from "@display/testimonials";
import SliderCarousel from "@display/carousel";
import HeroListItems from "@data/hero.json";
import TreatmentTitle from "@display/treatment-title";
import { sortByWeight } from "../utils";
import Container from "@layout/container";
import TreatmentTitleList from "@display/treatment-title-list"; 
import ContactListing from "@display/contact-listing";
import { SITE_NAME } from "../lib/constants";
import CTAAlt from "@display/cta-alt";

export default function Home({ posts }) {
  const CosmetologyList = posts.filter(
    (post) => post.frontmatter.subtitle == "Cosmetology"
  );

  const DermatologyList = posts.filter(
    (post) => post.frontmatter.subtitle == "General Dermatology"
  );

  const TrichologyList = posts.filter(
    (post) => post.frontmatter.subtitle == "Trichology"
  );

  const CardiologyList = posts.filter(
    (post) => post.frontmatter.subtitle == "Cardiology"
  );
  return (
    <>
      <Head> 
        {/* <title>{`${SITE_NAME} | Home`} </title> */}
        <title> The Sapphire Clinic | Home </title>
        <meta name="description" content="Welcome to the Skin Clinic of Dr. Sheela Natraj."/>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <main>
        <SliderCarousel>
          {HeroListItems.map((item, index) => (
            <Hero key={index} item={item} />
          ))}
        </SliderCarousel>
        {/* <ContactListing/> */}

        <Container className="bg-gray-50">
          <About />
        </Container>

        <Container className="bg-gray-200">
          <div className="mb-16">
            <h2 className="text-3xl leading-tight font-bold mb-8">
              Skin Treatments
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              <div>
                <h4 className="text-xl leading-tight font-semibold mb-3">
                  Cosmetology
                </h4>
                <TreatmentTitleList>
                  {CosmetologyList.map((post, index) => (
                    <TreatmentTitle key={index} post={post} />
                  ))}
                </TreatmentTitleList>
              </div> 

              <div>
                <h4 className="text-xl leading-tight font-semibold mb-3">
                  General Dermatology
                </h4>
                <TreatmentTitleList>
                  {DermatologyList.map((post, index) => (
                    <TreatmentTitle key={index} post={post} />
                  ))}
                </TreatmentTitleList>
              </div>
              <div>
                <h4 className="text-xl leading-tight font-semibold mb-3">
                  Trichology
                </h4>
                <TreatmentTitleList>
                  {TrichologyList.map((post, index) => (
                    <TreatmentTitle key={index} post={post} />
                  ))}
                </TreatmentTitleList>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl leading-tight font-bold mb-6">
              Heart Clinic
            </h2>
            <TreatmentTitleList>
              {CardiologyList.map((post, index) => (
                <TreatmentTitle key={index} post={post} />
              ))}
            </TreatmentTitleList>
          </div>
        </Container>

        {/* <CTA /> */}

        <CTAAlt/>

        <Container className="bg-gray-50">
          <Testimonials />
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
