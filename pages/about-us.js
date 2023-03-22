import Head from "next/head";
import About from "../components/display/about";
import DoctorList from "@display/doctor-list";
import TeamItem from "@display/team-item";
import Container from "@layout/container";
import PageTitle from "@display/page-title"; 

export default function AboutUs() {
  return (
    <>
      <Head>
        <title> The Sapphire Clinics | About Us </title>
        <meta name="description" content="Welcome to the Skin Clinic of Dr. Sheela Natraj."/>
        <link rel="shortcut icon" href="/images/favicon.png" />
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
