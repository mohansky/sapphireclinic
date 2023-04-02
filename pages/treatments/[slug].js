import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
// import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ButtonRound from "@ui/button-round";
import Button from "@ui/button";
import { Icon } from "@iconify/react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Container from "@layout/container";
import PageTitle from "@display/page-title";
import Col from "@layout/col";
import HeroSingle from "@display/hero-single";
// import { SITE_NAME } from "../../lib/constants";

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

export default function PostPage({ source, frontMatter }) {
  return (
    <>
      <Head>
        {/* <title>{frontMatter.title} </title> */}
        <title>The Sapphire Clinic</title>
        <meta name="description" content={frontMatter.description} />
        {/* <link rel="shortcut icon" href="/images/favicon.png" /> */}
      </Head>
      <main>
        <HeroSingle img={frontMatter.img} title={frontMatter.title} />

        <Container className="mb-32">
          {/* <div className="text-end mt-3">
            <ButtonRound>
              <Link href="/treatments">
                <Icon icon="ph:arrow-circle-left" className="w-10 h-10" />
              </Link>
            </ButtonRound>
          </div> */}
          {/* <PageTitle> {frontMatter.title} </PageTitle> */}

          {/* <Image
            className="mx-auto mb-10 rounded-lg h-full "
            src={frontMatter.img}
            alt=""
            width={720}
            height={480}
          /> */}
          <Col className="mx-auto w-4/6">
            <MDXRemote {...source} components={components} />
          </Col>

          {frontMatter.before ? (
            <div className="m-4 md:m-12 text-center">
              <ImgComparisonSlider>
                <Image
                  slot="first"
                  src={frontMatter.before}
                  alt="before"
                  width={360}
                  height={240}
                />
                <Image
                  slot="second"
                  src={frontMatter.after}
                  alt="after"
                  width={360}
                  height={240}
                />
              </ImgComparisonSlider>
            </div>
          ) : null}
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
    },
  };
}
