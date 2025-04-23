import React, { useState, useEffect, useMemo } from "react";
import "./Home.css";
import Testimonial from "../Testimonial/Testimonial";
import About from "../About/About";
import Footer from "../footer/Footer";
import Service from "../Services/Services";
import { motion } from "framer-motion";
import axios from "axios";

const Home = () => {
  const [email, setEmail] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const MotionH1 = useMemo(() => (isMobile ? "h1" : motion.h1), [isMobile]);
  const MotionH5 = useMemo(() => (isMobile ? "h5" : motion.h5), [isMobile]);
  const MotionInput = useMemo(() => (isMobile ? "input" : motion.input), [isMobile]);
  const MotionButton = useMemo(() => (isMobile ? "button" : motion.button), [isMobile]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://tourism-backend-omega.vercel.app/api/subscribers/subscribe",
        { email }
      );
      window.alert(response.data.message);
      setEmail("");
      console.log("After resetting:", email);
    } catch (error) {
      window.alert(error.response?.data?.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="home-container">
        <div className="text-overlay">
          <MotionH1
            initial={isMobile ? {} : { y: -50, opacity: 0 }}
            animate={isMobile ? {} : { y: 0, opacity: 1 }}
            transition={{
              duration: 5,
              ease: "easeInOut",
            }}
          >
            Let's Discover The World Together
          </MotionH1>
          <MotionH5
            initial={isMobile ? {} : { y: -50, opacity: 0 }}
            animate={isMobile ? {} : { y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            Enjoy Your Vacation With Us
          </MotionH5>

          <div className="home-form">
            <MotionInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              initial={isMobile ? {} : { x: -50, opacity: 0 }}
              animate={isMobile ? {} : { x: 0, opacity: 1 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <MotionButton
              type="submit"
              className="sub-btn"
              onClick={handleSubscribe}
              initial={isMobile ? {} : { x: 100, opacity: 0 }}
              animate={isMobile ? {} : { x: 0, opacity: 1 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                delay: 0.7,
              }}
            >
              Subscribe
            </MotionButton>
          </div>
        </div>
      </div>

      <div className="about">
        <About />
      </div>
      <div className="Home-service">
        <Service />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
