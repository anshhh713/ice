import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../frontend/app-components/comp/navbar";
import Banner from "../../frontend/app-components/comp/banner";
import MainContent from "../../frontend/app-components/content/main-content";
import Footer from "../../frontend/app-components/comp/footer";

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

  
