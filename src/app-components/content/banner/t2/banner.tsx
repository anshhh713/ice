import "./banner.css";
import Link from "next/link";
import Image from "next/image";

const BannerT2 = () => {
  return (
    <div className="banner-container-t2">
      <Image className="banner-image-t2" src="/banner.jpg" alt="banner" fill />
      <div className="banner-overlay-t2"></div>
      <div className="banner-content-t2">
        <h2 className="banner-title-t2">ICE</h2>

        <div className="banner-search-wrapper">
          <input
            className="banner-search-t2"
            type="search"
            placeholder="Search..."
          />
          <button className="banner-btn-t2">Search</button>
        </div>

        <div className="filter-search-t2">
          <ul>
            <li>Top Search</li>
            <li>
              <a href="#" className="cont">
                One Piece,
              </a>
            </li>
            <li>
              <a href="#" className="cont">
                Kaiju No. 8 Season 2,
              </a>
            </li>
            <li>
              <a href="#" className="cont">
                Dan Da Dan Season 2,
              </a>
            </li>
            <li>
              <a href="#" className="cont">
                Demon Slayer: Kimetsu no...
              </a>
            </li>
            <li>
              <a href="#" className="cont">
                Lord of Mysteries
              </a>
            </li>
            <li>
              <a href="#" className="cont">
                The Fragrant Flower Bloom...
              </a>
            </li>
            <li>
              <a href="#" className="cont">
                Attack on Titan,
              </a>
            </li>
            <li>
              <a href="#" className="cont">
                Naruto: Shippuden,
              </a>
            </li>
            <li>
              <a href="#" className="cont">
                ...
              </a>
            </li>
          </ul>
        </div>

        <Link href="/home">
          <button className="to-home-t2">Begin</button>
        </Link>
      </div>
    </div>
  );
};

export default BannerT2;
