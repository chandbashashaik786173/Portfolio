import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="home-container ml-5 ">
      <div>
        <Navbar />
        <br /> <br /> <br />
      </div>
      {/* <marquee className="mt-4 fancy-text">
        Hello! Welcome to My Portfolio
      </marquee> */}
      <h1 className="portfolio-intro mt-4">
        Hello! Welcome to <span>My Portfolio</span>
      </h1>
      <div className="images-container flex ">
        <div className="left-side-container">
          <h3 className="name">
            Hello, I'm ShaikChandBasha
          </h3>
          <h3 className="role">Full Stack Developer</h3>
          <div className="icons">
            <NavLink to="https://www.instagram.com/">
              <img
                src="../images/instagram.avif"
                alt="Instagram Logo"
                className="socialMediaLogos"
              ></img>
            </NavLink>
            <NavLink to="https://web.whatsapp.com/">
              <img
                src="../images/whatsup.avif"
                alt="WhatsApp Logo"
                className="socialMediaLogos"
              ></img>
            </NavLink>
            <NavLink to="https://www.linkedin.com/">
              <img
                src="../images/linkedin.avif"
                className="socialMediaLogos"
                alt="LinkedIn Logo"
              ></img>
            </NavLink>
            <NavLink to="https://www.facebook.com/chandbasha.shaik.144181/">
              <img
                src="../images/facebook.avif"
                className="socialMediaLogos"
                alt="Facebook Logo"
              ></img>
            </NavLink>
          </div>
          <button className="about-btn">
            <a href="/about">Learn More</a>
          </button>
        </div>
        <div className="rightside-container">
          <img src="../images/codeimage2.avif" className="codeimage"></img>
        </div>
      </div>

      <div className="home-content">
        <p>
          Welcome to my portfolio! I am a <span>MERN full stack developer</span>{" "}
          with a passion for creating innovative and user-friendly web
          applications. With a strong background in both front-end and back-end
          development, I am skilled in building dynamic and responsive websites
          using the latest web technologies.
        </p>
        <p>
          My expertise lies in developing robust and scalable applications using
          the MERN stack (MongoDB, Express, React, and Node.js). I take pride in
          delivering clean and efficient code while ensuring pixel-perfect
          designs and seamless user experiences.
        </p>
        <p>
          Explore my portfolio to see some of my recent projects and get a
          glimpse of my skills and capabilities. Feel free to reach out if you
          have any questions or if you're interested in collaborating on a new
          project.
        </p>
      </div>

      <div className="resume-section">
        <h2>Download My Resume</h2>
        <div className="resume-content">
          <div className="resume-photo">
            <img src="../images/chandResumePic.png" alt="ShaikChandBasha" />
          </div>
          <div className="resume-download">
            <p>
              Get a copy of my detailed resume to learn more about my skills and
              experience.
            </p>
            <a
              href="../images/chandbasha-resume.pdf"
              download
              className="resume-btn"
            >
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>
        </div>
      </div>
      <footer className="footer-home">
        <p>&copy; 2024 ShaikChandBasha Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
