import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head"; 
import PageTitle from "@display/page-title";
import { sortByWeight } from "../../utils";
import TreatmentCard from "@display/treatment-card";
import Container from "@layout/container";
import { BASE_PATH, SITE_NAME, SITE_DESC, SITE_FAVICON } from "../../lib/constants";
import { useRouter } from "next/router";

export default function Treatments({ posts }) {
  const router = useRouter().pathname.split("/")[1] 
  const routeTitle = router.toUpperCase().split('-').join(' ')
  const pageTitle = `${routeTitle} | ${SITE_NAME}`;
  const URL = `${BASE_PATH}/${router}` 
  const CosmetologyList = posts.filter((post) => post.frontmatter.subtitle == "Cosmetology");
  const DermatologyList = posts.filter((post) => post.frontmatter.subtitle == "General Dermatology");
  const TrichologyList = posts.filter((post) => post.frontmatter.subtitle == "Trichology");

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
          <PageTitle> Treatments </PageTitle>
          <div className="mt-8">
            {/* <h2 className="text-3xl leading-tight font-bold">Skin Clinic</h2> */}
            <p className="text-gray-600 mt-2 mb-8 md:max-w-md">
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
