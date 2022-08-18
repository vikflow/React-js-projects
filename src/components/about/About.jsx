import React from "react";
import "./about.css";
import me from "../../assets/victor.jpg";
import { FaMedal } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { SiNike } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="pic here" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaMedal className="about__icon" />
              <h5>Expirience</h5>
              <small>3+ years working</small>
            </article>
            <article className="about__card">
              <BsFillPeopleFill className="about__icon" />
              <h5>clients</h5>
              <small>200+ world wide</small>
            </article>

            <article className="about__card">
              <SiNike className="about__icon" />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>

          <blockquote>
            <p>
              Do you have a website project. I help businesses improve their
              online presence by creating minimalistic designs with the end user
              in mind and convert these designs into responsive, fast, secure
              and SEO-friendly websites.{" "}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
