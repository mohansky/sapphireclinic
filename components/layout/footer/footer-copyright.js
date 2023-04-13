export default function FooterCopyright() {
  return (
    <>
      <div className="lg:pt-4 pb-3 bg-scgrey-200 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
        <div className="flex flex-wrap  justify-between py-2 text-center">
          <span className="text-sm mx-auto md:mx-0 text-scgrey">
            © {new Date().getFullYear()} The Sapphire clinics. All Rights
            Reserved.
          </span>
          <span className="text-sm mx-auto md:mx-0 text-scgrey">Developed by Mohan</span>
        </div>
      </div>
    </>
  );
}
