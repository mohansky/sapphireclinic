import Head from "next/head";
import PageTitle from "@display/page-title";
import Container from "@layout/container";
import ContactInfoPage from "@display/contact-info-page";
import ContactSocials from "@display/contact-socials";
import FormMsg from "@display/form-msg";
import {
  BASE_PATH,
  SITE_NAME,
  SITE_DESC,
  SITE_FAVICON,
} from "../lib/constants";
import { useRouter } from "next/router";
import Map from "@display/map";

export default function Contact() {
  const router = useRouter().pathname.split("/")[1];
  const routeTitle = router.toUpperCase().split("-").join(" ");
  const pageTitle = `${routeTitle} | ${SITE_NAME}`;
  const URL = `${BASE_PATH}/${router}`;

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
          <PageTitle> Contact </PageTitle>
          <div className="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <ContactInfoPage />
              <ContactSocials />
            </div>
            <FormMsg />
          </div>
        </Container>
        <Map className="mt-16 h-96" />
      </main>
    </>
  );
}
