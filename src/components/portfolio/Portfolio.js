import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/Exams.png';
import IMG2 from '../../assets/hr_system.jpg';
import IMG3 from '../../assets/course_track.png';
import IMG4 from '../../assets/sawa.png';
import IMG5 from '../../assets/portfolio.png';
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img className="portfolio-image" src={IMG1} alt="Exam Portal" />
          </div>
          <h3>Exam Portal, Online Exam Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Hamzehobeidat"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              className="portfolio-image"
              src={IMG2}
              alt="HR System To Manage Interviews"
            />
          </div>
          <h3>HR System To Manage Interviews</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Hamzehobeidat"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              className="portfolio-image"
              src={IMG3}
              alt="Track Your Course Progress"
            />
          </div>
          <h3>Track Your Course Progress</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Hamzehobeidat"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              className="portfolio-image"
              src={IMG4}
              alt="Tracking check-in check-out Using Barcode In Public Places"
            />
          </div>
          <h3>Tracking check-in check-out Using Barcode In Public Places</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Hamzehobeidat"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img className="portfolio-image" src={IMG5} alt="portfolio" />
          </div>
          <h3>My Portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Hamzehobeidat"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
