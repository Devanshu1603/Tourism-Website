import React from 'react';
import './Gallery.css';
import Taj_mahal from '../images/Taj_Mahal.jpg';
import Hawa_mahal from '../images/Hawa_Mahal.jpg';
import Kedarnath from '../images/Kedarnath.jpg';
import Meena from '../images/Meena.jpg';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <>
      <h2>
        Popular <span id='heading-text' className="text-primary">Destination</span>
      </h2>
      <div className="tiles">
        <a className="tile" href="https://en.wikipedia.org/wiki/Hawa_Mahal">
          <img src={Hawa_mahal} alt="Hawa Mahal" />
          <div className="details">
            <span className="title">Hawa Mahal</span>
          </div>
        </a>
        <a className="tile" href="https://en.wikipedia.org/wiki/Taj_Mahal">
          <img src={Taj_mahal} alt="Taj Mahal" />
          <div className="details">
            <span className="title">Taj Mahal</span>
          </div>
        </a>
        <a className="tile" href="https://en.wikipedia.org/wiki/Kedarnath">
          <img src={Kedarnath} alt="Kedarnath" />
          <div className="details">
            <span className="title">Kedarnath</span>
          </div>
        </a>
        <a className="tile" href="https://en.wikipedia.org/wiki/Meenakshi_Temple">
          <img src={Meena} alt="Meenakshi Temple" />
          <div className="details">
            <span className="title">Meenakshi Temple</span>
          </div>
        </a>
        <Link className="view-all" to="/Destination">
          <i className="fa-solid fa-arrow-right"></i>
          <span>More</span>
        </Link>
      </div>
    </>
  );
};

export default Gallery;
