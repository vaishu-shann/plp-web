import React from "react";
import { Heading, Subtitle, TestimonialSec } from "./testimonial.element";
import "./test.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Testimonial(props) {
  return (
    <section className="testimonial text-center">
      <div className="container">
        <div className="heading white-heading">Testimonial</div>
        <div
          id="testimonial4"
          className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
          data-ride="carousel"
          data-pause="hover"
          data-interval="5000"
          data-duration="2000"
        >
          <div className="carousel-inner" role="listbox">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showArrows={false}
              transitionTime={3}
              showThumbs={true}
              swipeable={true}
            >
              <div className="carousel-item active">
                <div className="testimonial4_slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg"
                    className="img-circle img-responsive"
                  />
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.{" "}
                  </p>
                  <h4>Client abc</h4>
                </div>
              </div>
              <div className="carousel-item">
                <div className="testimonial4_slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
                    className="img-circle img-responsive"
                  />
                  <p>
                    Richard McClintock, a Latin professor at Hampden-Sydney
                    College in Virginia, looked up one of the more obscure Latin
                    words, consectetur from a Lorem Ipsum passage, and going
                    through the cites of the word in classical literature,
                    discovered the undoubtable source.{" "}
                  </p>
                  <h4>Client ijk</h4>
                </div>
              </div>
              <div className="carousel-item">
                <div className="testimonial4_slide">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
                    className="img-circle img-responsive"
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </p>
                  <h4>Client xyz</h4>
                </div>
              </div>
            </Carousel>
          </div>
          <a
            className="carousel-control-prev"
            href="#testimonial4"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#testimonial4"
            data-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
