import FooterTreaments from "./footer-treatments";
import FooterMenu from "./footer-menu";
import FooterContacts from "./footer-contacts";
import FooterSocial from "./footer-social";
import FooterCopyright from "./footer-copyright";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-scfooterbg pb-10 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pt-12 lg:pt-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-x-14">
          <FooterTreaments className="col-span-1 mb-8" />
          <FooterMenu className="col-span-1 mb-8" />
          <FooterContacts className="col-span-2 mb-8" />
          <FooterSocial className="col-span-2 mb-8" />
        </div>
      </footer>

      <FooterCopyright />
    </>
  );
}
