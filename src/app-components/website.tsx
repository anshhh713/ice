import "./website.css";
import Navbar from "./content/navbar/navbar";
import Banner from "./content/banner/banner";
import MainContent from "./content/main-content/main-content";
import Footer from "./content/footer/footer";
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
