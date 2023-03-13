import Head from "next/head"; 
import About from "../components/display/about"; 
import DoctorList from "@display/doctor-list";
import TeamItem from "@display/teamitem"

export default function AboutUs() {
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
          <About /> 
          <DoctorList />
          <TeamItem />
      </main>
    </>
  );
}
