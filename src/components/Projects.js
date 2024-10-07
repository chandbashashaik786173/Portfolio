import React from "react";
import Navbar from "./Navbar";
import Card from "react-bootstrap/Card";

function Projects() {
  const projectData = [
    {
      title: "Todo - List",
      description:
        "A to-do list is just a list of things you have to-do. That means basically anything and everything can be on your to-do list.",
      imageSrc: "../images/todolist.avif",
      links: {
        view: "https://todo-listchand.netlify.app/",
        github: "https://github.com/chandbashashaik786173/todolist.git",
      },
      technologies: ["HTML", "react", "JavaScript", "CSS"],
    },

    {
      title: "Dash-board-orders",
      description:
        "Dashboard orders provide a quick snapshot of order-related metrics such as total sales, number of orders, average order value, etc.",
      imageSrc:
        "https://images.pexels.com/photos/4467735/pexels-photo-4467735.jpeg?auto=compress&cs=tinysrgb&w=600",
      links: {
        view: "https://dashboard-orders.netlify.app",
        github: "https://github.com/chandbashashaik786173/Dashboard-orders.git",
      },
      technologies: ["HTML", "react", "JavaScript", "CSS"],
    },
    {
      title: "Expenses Tracker",
      description:
        "using this website you can notedown the reasons of costs and count the costs",
      imageSrc: "../images/expensive2.png",
      links: {
        view: "https://expensestrackerchand.netlify.app",
      },
      technologies: ["HTML", "react", "JavaScript", "CSS"],
    },
    {
      title: "Responsive webpage",
      description: "this is an webpage suitable for all devices",
      imageSrc: "../images/bodybg.avif",
      links: {
        view: "https://cripumpsawardpage.netlify.app/",
      },
      technologies: ["HTML", "react", "JavaScript", "CSS"],
    },
  ];

  return (
    <div className="project-main-container" id="projects">
      <header className="projects-header p-5">
        <div className="project-title-container">
          <h1 className="projectTitle">Projects</h1>
        </div>
      </header>
      <Navbar />
      <div>
        <div className="project-cards-container">
          {projectData.map((project, index) => (
            <Card key={index} className="project-card">
              <Card.Img variant="top" src={project.imageSrc} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <p>{project.description}</p>
                <div className="tech-container">
                  {project.technologies.map((tech, index) => (
                    <button key={index} className="each-btn">
                      {tech}
                    </button>
                  ))}
                </div>
                <div className="links-container">
                  <a className="each-link-btn" href={project.links.view}>
                    Live View
                  </a>
                  <a className="each-link-btn" href={project.links.github}>
                    Github
                  </a>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
