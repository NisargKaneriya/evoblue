import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/testimonial.css"; // Ensure you have this CSS file

const testimonials = [
  {
    name: "Hanna Lisem",
    role: "Project Manager",
    image: "/assets/hanna.jpg", // Update with actual paths
    quote: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."
  },
  {
    name: "Ronne Galle",
    role: "Project Manager",
    image: "/assets/ronne.jpg",
    quote: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."
  },
  {
    name: "Missy Limana",
    role: "Engineer",
    image: "/assets/missy.jpg",
    quote: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."
  }
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "60px"
  };

  return (
    <div className="testimonial-section">
      <h2>Testimonials Carousel - Cards Comments</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
            <p className="testimonial-quote">“ {testimonial.quote} ”</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
