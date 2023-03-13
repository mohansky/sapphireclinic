import Head from "next/head";
import Form from "../components/display/form";
import PageTitle from "@display/page-title";
import ContactInfo from "@display/contact-info";

export default function Contact() {
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
        <div className="mx-auto max-w-7xl min-h-screen my-10 px-2 sm:px-6 lg:px-8">
          <PageTitle> Contact </PageTitle>
          <div className="grid md:grid-cols-2 gap-4 mb-5">
            <ContactInfo />
            <Form />
          </div>
          <div className="my-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7778.087947232227!2d77.585553!3d12.904894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15135995af1f%3A0xc650d0e6015f26c8!2sSapphire%20Skin%20%26%20Aesthetics%20Clinic!5e0!3m2!1sen!2sin!4v1677397918531!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>
    </>
  );
}
