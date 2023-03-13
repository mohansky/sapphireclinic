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
        <title>The Sapphire Clinics</title>
        <meta
          name="description"
          content="Welcome to the Skin Clinic of Dr. Sheela Natraj."
        />
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>

      <main>
        <SliderCarousel>
          {HeroListItems.map((item, index) => (
            <Hero key={index} item={item} />
          ))}
        </SliderCarousel>


        <About />

        <section className="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
          <div className="mb-16">
            <h2 className="text-3xl leading-tight font-bold mb-8">
              Skin Treatments
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              <div>
              <h4 className="text-xl leading-tight font-semibold mb-3">
                Cosmetology
              </h4>
              <ul className="list-disc list-inside">
                {CosmetologyList.map((post, index) => (
                  <TreatmentTitle key={index} post={post} />
                ))}
              </ul>
              </div>

              <div>
                <h4 className="text-xl leading-tight font-semibold mb-3">
                  General Dermatology
                </h4>
                <ul className="list-disc list-inside">
                  {DermatologyList.map((post, index) => (
                    <TreatmentTitle key={index} post={post} />
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl leading-tight font-semibold mb-3">
                  Trichology
                </h4>
                <ul className="list-disc list-inside">
                  {TrichologyList.map((post, index) => (
                    <TreatmentTitle key={index} post={post} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl leading-tight font-bold mb-6">
              Heart Clinic
            </h2>
            <ul className="list-disc list-inside">
              {CardiologyList.map((post, index) => (
                <TreatmentTitle key={index} post={post} />
              ))}
            </ul>
          </div>
        </section>

        <CTA />
        <Testimonials />
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
