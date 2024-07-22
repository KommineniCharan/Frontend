import React from "react";
import One from "./images/1.jpg";
import Two from "./images/2.jpg";
import Three from "./images/3.jpg";
import "./Home.css";

let Home = () => {
  return (
    <>
      <section className="carousel-section" id="carousel-section">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={One} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Two} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Three} className="d-block w-100" alt="..." />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </section>

      <section className="about-section" id="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Quos expedita quibusdam architecto perferendis dolor officia
                dolores cumque, voluptatibus tempore laudantium labore itaque
                quis, fuga possimus facere, modi necessitatibus veritatis
                asperiores!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Quos expedita quibusdam architecto perferendis dolor officia
                dolores cumque, voluptatibus tempore laudantium labore itaque
                quis, fuga possimus facere, modi necessitatibus veritatis
                asperiores!
              </p>
              <div className="btn-block">
                <a href="#" className="rm btn btn-primary btn-block">
                  Read More
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="img-ef">
                <img src={Two} className="abi img-fluid" alt="About Us" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="google-map">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">Locate Us</h2>
              <iframe
                className="ifr"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.621697679409!2d77.59051807412176!3d13.059735112941748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19f63ef70631%3A0xd30bbdc56712e445!2sBesant%20Technologies%20Hebbal!5e0!3m2!1sen!2sin!4v1721617870698!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
