import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Image from "next/image";
import Button from "@ui/button";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Container from "@layout/container";
import PageTitle from "@display/page-title";
import Col from "@layout/col";
import TreatmentTitle from "@display/treatment-title";
import TreatmentTitleList from "@display/treatment-title-list";
import { sortByWeight } from "../../utils";
import {
  BASE_PATH,
  SITE_NAME,
  SITE_DESC,
  SITE_FAVICON,
} from "../../lib/constants";
import { useRouter } from "next/router";

const components = {
  a: Button,
  br: (props) => <br {...props} className="leading-normal mb-10" />,
  h1: (props) => <h1 {...props} className="text-6xl mt-3 mb-2 font-bold" />,
  h2: (props) => <h2 {...props} className="text-4xl my-3 font-bold" />,
  h3: (props) => <h3 {...props} className="text-3xl mt-3 mb-2 font-bold" />,
  h4: (props) => <h4 {...props} className="text-2xl mt-3 mb-2 font-semibold" />,
  h5: (props) => <h5 {...props} className="text-xl mt-3 mb-2 font-semibold" />,
  h6: (props) => <h6 {...props} className="text-lg mt-3 mb-2 font-light" />,
  ul: (props) => <ul {...props} className="list-disc list-inside" />,
  ol: (props) => <ol {...props} className="list-decimal list-inside" />,
};

export default function PostPage({ posts, source, frontMatter }) {
  const router = useRouter().asPath;
  const pageTitle = `${frontMatter.title} | ${SITE_NAME}`;
  const URL = `${BASE_PATH}${router}`;
  const CosmetologyList = posts.filter(
    (post) => post.frontmatter.subtitle == "Cosmetology"
  );
  const DermatologyList = posts.filter(
    (post) => post.frontmatter.subtitle == "General Dermatology"
  );
  const TrichologyList = posts.filter(
    (post) => post.frontmatter.subtitle == "Trichology"
  );
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={frontMatter.description} />
        <link rel="shortcut icon" href={SITE_FAVICON} />
        <link rel="canonical" href={URL} />
      </Head>
      <main>
        <Container className="mb-32">
          <PageTitle> {frontMatter.title} </PageTitle>
          <div className="grid md:grid-cols-3 pb-10">
            <aside className="bg-slate-300 order-2 md:order-1 md:col-span-1 md:sticky md:top-0">
              <ul className="p-5 sticky top-20">
                <h5 className="text-2xl bg-slate-100 mt-10 mb-3 p-5">
                  Cosmetology
                </h5>
                <ul className="px-5">
                  {CosmetologyList.map((post, index) => (
                    <TreatmentTitle key={index} post={post} />
                  ))}
                </ul>
                <h5 className="text-2xl bg-slate-100 mt-10 mb-3 p-5">
                  Dermatology
                </h5>
                <ul className="px-5 mb-2">
                  {DermatologyList.map((post, index) => (
                    <TreatmentTitle key={index} post={post} />
                  ))}
                </ul> 
                <h5 className="text-2xl bg-slate-100 mt-10 mb-3 p-5">
                  Trichology
                </h5>
                <ul className="px-5">
                  {TrichologyList.map((post, index) => (
                    <TreatmentTitle key={index} post={post} />
                  ))}
                </ul>
              </ul>
            </aside>

            <div className="  order-1 md:order-2 md:col-start-2 md:col-span-2 pb-10">
              <Image
                className="mx-auto mb-10"
                src={frontMatter.img}
                alt={frontMatter.title}
                width={1080}
                height={720}
              />
              <Col className="mx-auto md:w-5/6">
                <MDXRemote {...source} components={components} />
              </Col>

              {frontMatter.before ? (
                <div className="my-10 text-center">
                  <ImgComparisonSlider>
                    <Image
                      slot="first"
                      src={frontMatter.before}
                      alt="before"
                      width={640}
                      height={480}
                    />
                    <Image
                      slot="second"
                      src={frontMatter.after}
                      alt="after"
                      width={640}
                      height={480}
                    />
                  </ImgComparisonSlider>
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );
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
  const { content, data } = matter(markdownWithMeta);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      posts: posts.sort(sortByWeight),
    },
  };
}
