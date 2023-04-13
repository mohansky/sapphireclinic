import Head from "next/head";
import About from "../components/display/about";
import DoctorList from "@display/doctor-list";
import TeamItem from "@display/team-item";
import Container from "@layout/container";
import PageTitle from "@display/page-title";
import { BASE_PATH, SITE_NAME, SITE_DESC, SITE_FAVICON } from "../lib/constants";
import { useRouter } from "next/router";

export default function AboutUs() {
  const router = useRouter().pathname.split("/")[1] 
  const routeTitle = router.toUpperCase().split('-').join(' ')
  const pageTitle = `${routeTitle} | ${SITE_NAME}`
  const URL = `${BASE_PATH}/${router}`

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
          <PageTitle>About Us</PageTitle>
          <About />
        </Container>

        <Container className="bg-gray-100">
          <DoctorList />
        </Container>

        <Container>
          <TeamItem />
        </Container>
      </main>
    </>
  );
}
