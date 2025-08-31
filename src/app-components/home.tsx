import "./home.css";
import Navbar from "./content/navbar/navbar";
import Banner from "./content/banner/t1/banner";
import Alt1 from "./content/alt1/alt1";
import Footer from "./content/footer/footer";
import MainContent from "./content/main-content/main-content";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <MainContent />
      
      <Footer author="John Cena" />
    </>
  );
}
