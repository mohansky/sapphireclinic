import Head from "next/head";
import PageTitle from "@display/page-title";
import Container from "@layout/container";
import Form from "@display/form";
import {
  BASE_PATH,
  SITE_NAME,
  SITE_DESC,
  SITE_FAVICON,
} from "../lib/constants";
import { useRouter } from "next/router";
import { Icon } from '@iconify/react'; 
import AppointmentSteps from "@data/appointment.json";

export default function Appointment() {
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
          <PageTitle> Appointment </PageTitle>
          <div className="grid md:grid-cols-2 gap-4 mb-5">
            <ul className=" my-5">
              {AppointmentSteps.steps.map((item, index) => (
                <li className="my-10 text-xl flex" key={index}>
                  <span className="py-0 px-3 grid place-items-center bg-scred">{index + 1}</span>
                  {/* <span className="py-2 px-4 bg-scyellow">{index + 1}</span> */}
                  {/* <Icon icon="material-symbols:looks-one-sharp" width="30"/> */}
                  <span className="ml-3 text-xl grid place-items-center">{item}</span>
                </li>
              ))}
            </ul>
            <Form />
          </div>
        </Container>
      </main>
    </>
  );
}
