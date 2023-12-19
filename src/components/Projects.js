import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Projects.css"
import githubImage from "../styles/githubImage.png"



const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.github.com/users/sjirik/repos"
      );
      setProjects(result.data);
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {projects.slice(0, 7).map((project) => (
        <div key={project.id} className="projectCard">
          <h3 className="projectName">{project.name}</h3>
          <img
          className='githubImage'
          src={githubImage}
          alt='githubImage'
        />
          <p className="projectDescription">{project.description}</p>
          <a href={project.html_url} className="viewGithub">View on GitHub</a>
        </div>
      ))}
    </Slider>
  );
};

export default Projects;