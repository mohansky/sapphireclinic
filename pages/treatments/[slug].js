import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ButtonRound from "@ui/button-round";
import Button from "@ui/button";
import { Icon } from "@iconify/react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Container from "@layout/container"; 

const components = {
  a: Button,
  br: (props) => <br {...props} className="leading-normal mb-10" />,
  h1: (props) => <h1 {...props} className="text-xl font-light" />,
  ul: (props) => <ul {...props} className="list-disc list-inside" />,
  ol: (props) => <ol {...props} className="list-decimal list-inside" />,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | The Sapphire Clinics </title>
        <meta name="description" content="Welcome to the Skin Clinic of Dr. Sheela Natraj."/>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      <main>
        <Container className="mb-32">
          <div className="text-end mt-20">
            <ButtonRound>
              <Link href="/treatments">
                <Icon icon="ph:arrow-circle-left" className="w-10 h-10" />
              </Link>
            </ButtonRound>
          </div>
          <h2 className="uppercase text-scblue text-5xl text-center font-extrabold mt-8 mb-12">
            {frontMatter.title}
          </h2>
     
            <Image
              className="float-left mr-8 mb-5 rounded-lg"
              src={frontMatter.img}
              alt=""
              width={360}
              height={240}
            />
            <MDXRemote {...source} components={components} />
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
