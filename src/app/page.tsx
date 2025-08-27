import Navbar from "../app-components/comp/navbar";
import Banner from "../app-components/comp/banner";
import MainContent from "../app-components/content/main-content";
import Footer from "../app-components/comp/footer";

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
