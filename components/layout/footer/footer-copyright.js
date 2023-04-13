export default function FooterCopyright() {
  return (
    <>
       
      <div className="lg:pt-4 pb-3 bg-scgrey-200 sm:px-8 lg:px-16 xl:px-40 2xl:px-64"> 
          <div className="flex justify-between py-2">
            <span className="text-sm text-scgrey">
              © {new Date().getFullYear()} The Sapphire clinics. All Rights
              Reserved.
            </span>
            <span className="text-sm text-scgrey">Developed by Mohan</span>
          </div>
        </div>
    </>
  );
}
