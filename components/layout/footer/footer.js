import FooterTreaments from "./footer-treatments";
import FooterMenu from "./footer-menu";
import FooterContacts from "./footer-contacts";
import FooterSocial from "./footer-social";
import FooterCopyright from "./footer-copyright";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-scfooterbg pb-10 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-12 lg:pt-24">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
            <FooterTreaments />
          </div>
          <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
            <FooterMenu />
          </div>
          <FooterContacts />
          <FooterSocial />
        </div>
      </footer>

      <FooterCopyright />
    </>
  );
}
