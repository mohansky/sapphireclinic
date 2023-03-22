import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head"; 
import PageTitle from "@display/page-title";
import { sortByWeight } from "../../utils";
import TreatmentCard from "@display/treatment-card";
import Container from "@layout/container"; 

export default function Treatments({ posts }) {
  const CosmetologyList = posts.filter((post) => post.frontmatter.subtitle == "Cosmetology");
  const DermatologyList = posts.filter((post) => post.frontmatter.subtitle == "General Dermatology");
  const TrichologyList = posts.filter((post) => post.frontmatter.subtitle == "Trichology");
  const CardiologyList = posts.filter((post) => post.frontmatter.subtitle == "Cardiology");

  return (
    <>
      <Head>
        <title> The Sapphire Clinics | Treatments </title>
        <meta name="description" content="Welcome to the Skin Clinic of Dr. Sheela Natraj."/>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <main>
        <Container>
          <PageTitle> Treatments </PageTitle>
          <div className="mt-8">
            <h2 className="text-3xl leading-tight font-bold">Skin Clinic</h2>
            <p className="text-gray-600 mt-2 mb-8 md:max-w-lg">
              Below are listed some of the skin treatments we undertake at
              Sapphire Skin Clinic.
            </p>
          </div>

          <h4 className="text-xl leading-tight font-semibold">Cosmetology</h4>
          <div className="md:flex md:flex-wrap mt-6 mb-12 text-center md:-mx-4 ">
            {CosmetologyList.map((post, index) => (
              <TreatmentCard key={index} post={post} />
            ))}
          </div>

          <h4 className="text-xl leading-tight font-semibold">
            General Dermatology
          </h4>
          <div className="md:flex md:flex-wrap mt-6 mb-12 text-center md:-mx-4 ">
            {DermatologyList.map((post, index) => (
              <TreatmentCard key={index} post={post} />
            ))}
          </div>

          <h4 className="text-xl leading-tight font-semibold">Trichology</h4>
          <div className="md:flex md:flex-wrap mt-6 mb-12 text-center md:-mx-4 ">
            {TrichologyList.map((post, index) => (
              <TreatmentCard key={index} post={post} />
            ))}
          </div>

          <hr className="my-16 bg-transparent border-0" />
          <div className="mt-8">
            <h2 className="text-3xl leading-tight font-bold">Heart Clinic</h2>
            <p className="text-gray-600 mt-2 md:max-w-lg">
              Below are listed some of the treatments we undertake at Sapphire
              Heart Clinic.
            </p>
          </div>

          <div className="md:flex md:flex-wrap mt-6 mb-12 text-center md:-mx-4 ">
            {CardiologyList.map((post, index) => (
              <TreatmentCard key={index} post={post} />
            ))}
          </div>
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
