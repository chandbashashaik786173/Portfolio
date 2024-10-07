import React from "react";
import Navbar from "./Navbar";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "React.js",
    "Express Js",
    "Bootstrap",
    "Node.js",
    "MongoDB",
    "SQL",
  ];

  const educationData = [
    {
      degree: "10th",
      institution: "Zilla Parishadh High School,Mandepudi",
      year: "2017",
      percentage: "82%",
    },
    {
      degree: "Intermediate",
      institution: "Abhinandana College Of Arts and Sciences",
      year: "2019",
      percentage: "87%",
    },
    {
      degree: "B.Tech ",
      institution: "Jawaharlal Nehru Technological University (JNTU)",
      year: "2023",
      percentage: "71%",
    },
  ];

  return (
    <div className="about-page">
      <Navbar />
      <div className="about-content mt-2">
        <div className="about-text">
          <h1 className="about-title">About Me</h1>
          <p className="about-description">
            I'm a passionate full-stack developer with a keen eye for design and
            a deep love for creating exceptional user experiences. With a strong
            background in React, Node.js, and modern web technologies, I thrive
            on turning complex problems into elegant solutions.
          </p>
          <p className="about-description">
            I believe that great products are born from a combination of
            technical prowess and a deep understanding of user needs. That's why
            I approach every project with a user-centric mindset, meticulously
            crafting every detail to create intuitive and visually stunning
            applications.
          </p>
          <p className="about-description">
            Outside of coding, I'm an avid learner, constantly exploring new
            technologies and design trends to stay ahead of the curve. I'm also
            a firm believer in open-source and love contributing to the
            community whenever I can.
          </p>
        </div>
        <div className="about-image">
          <img
            src="../images/chandphoto.jpeg"
            alt="shaikchandbasha profie image"
          />
        </div>
      </div>
      <div className="skills-container">
        <h2 className="skillname">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="education-container">
        <h2 className="educationtag">Education</h2>
        <div className="education-grid">
          {educationData.map((education, index) => (
            <div className="education-card" key={index}>
              <h3>{education.degree}</h3>
              <p>{education.institution}</p>
              <p>
                Year: {education.year} | Percentage: {education.percentage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
