import "./website.css";
import Navbar from "./comp/navbar";
import Banner from "./comp/banner";
import MainContent from "./content/main-content";
import Footer from "./comp/footer";
export default function Website() {
  return (
    <>
      <Navbar />
      <Banner />
      <MainContent />
      <Footer author="John Cena" />
    </>
  );
}
