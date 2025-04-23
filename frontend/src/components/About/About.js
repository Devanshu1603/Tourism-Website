import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './About.css';
// Import Images
import about3 from "../images/About4.jpg";
import about from "../images/about.jpg";
import about2 from "../images/about-2.jpg";
const About = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [startCounting, setStartCounting] = useState(false); // Track when to start the counter

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollPosition / pageHeight) * 100;

      if (scrolled > 20 && !startCounting) {
        setStartCounting(true); // Start counting once 50% is scrolled
      }

      setScrollPercentage(scrolled); // Update scroll percentage
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [startCounting]);


  return (
    <div class="about-container">
        <div class="about-row">
                <div className="main-img">
                    <img src={about3}/>
                </div>
                <div className="about-detail">
                    <h6>About Us</h6>
                    <h1>Making Every Trip a Story Worth Telling</h1>
                    <p>Welcome to Go-Adventure, your ultimate guide to exploring Destination Worldwide ! Whether you're a first-time traveler or a seasoned explorer, we are here to make your journey seamless, enjoyable, and unforgettable.

At Go-Adventure, we provide expert travel tips, and personalized recommendations to help you discover the best places to visit.</p>
                    <div className="about-overlay-img" >
                        <div className="overlay-img">
                            <img src={about} alt=""/>
                        </div>
                        <div className="overlay-img">
                            <img src={about2} alt=""/>
                        </div>
                    </div>
                   <Link className="explore-more" to="/Explore">Explore</Link>
                </div>
        </div>
    </div>
  );
};

export default About;
