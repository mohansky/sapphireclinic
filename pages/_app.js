// import React, { useEffect } from "react";
import Head from 'next/head'
import { useRouter } from "next/router";
import Layout from "@layout/layout";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
// import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // useEffect(() => {
  //   TagManager.initialize({ gtmId: `${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}` });
  // }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.75,
            }}
            variants={{
              initialState: {
                opacity: 0,
              },
              animateState: {
                opacity: 1,
              },
              exitState: {},
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
