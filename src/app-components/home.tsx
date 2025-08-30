import "./home.css";
import Navbar from "./content/navbar/navbar";
import Banner from "./content/banner/t1/banner";
import Site from "./content/site/site";
import Footer from "./content/footer/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Site />
      
      <Footer author="John Cena" />
    </>
  );
}
