import "./banner.css";
import Link from "next/link";
import Image from "next/image";

const BannerT2 = () => {
  return (
    <div className="banner-container-t2">
      <Image className="banner-image-t2" src="/banner.jpg" alt="banner" fill />
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
            <li>Top Search :</li>
            <a href="#">
              <li className="cont">One Piece,</li>
            </a>
            <a href="#">
              <li className="cont">Kaiju No. 8 Season 2,</li>
            </a>
            <a href="#">
              <li className="cont">Dan Da Dan Season 2,</li>
            </a>
            <a href="#">
              <li className="cont">Demon Slayer: Kimetsu no...</li>
            </a>
            <a href="#">
              <li className="cont">Lord of Mysteries</li>
            </a>
            <a href="#">
              <li className="cont">The Fragrant Flower Bloom...</li>
            </a>
            <a href="#">
              <li className="cont">The Fragrant Flower Bloom...</li>
            </a>
            <a href="#">
              <li className="cont">Attack on Titan,</li>
            </a>
            <a href="#">
              <li className="cont">Naruto: Shippuden,</li>
            </a>
            <a href="#">
              <li className="cont">...</li>
            </a>
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
