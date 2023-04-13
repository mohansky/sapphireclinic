import NavBar from "./navbar";
import Footer from "./footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
