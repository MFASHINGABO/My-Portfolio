import React from "react";
import "./about.css";
import Me from '../../assets/prince.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="abour__me">
          <div className="about__me-image">
            <img src={Me} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
         <div className="about__cards">
         
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

              <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>2+ Worldwide</small>
            </article>

              <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
          My experience includes working with various programming languages such as Java, Python, and JavaScript, as well as experience with databases such as MySQL, MongoDB, and Cassandra. I have also worked with cloud platforms such as AWS and Azure, and have experience with containerization and orchestration using Docker and Kubernetes.

          In publishing and graphic design, 
           Lorem ipsum is a placeholder text commonly used 
           to demonstrate the visual form of a document or a 
           typeface without relying on meaningful content. 
           Lorem ipsum may be used as a placeholder before 
           final copy is available.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
