import Styles from './page.module.css'
import BannerT2 from "@/app-components/content/banner/t2/banner";
export default function Home() {
  return (
    <>
    <div className={Styles.main}>

      <BannerT2 />
    </div>
    </>
  );
}
