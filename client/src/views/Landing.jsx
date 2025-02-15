import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Landing = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Stay Hydrated with Our Premium Bottles</h1>
      <Carousel 
        autoPlay  // Enables auto-slide
        infiniteLoop  // Loops images infinitely
        interval={3000}  // Slides every 3 seconds (adjust as needed)
        showThumbs={false} 
        showStatus={false}
      >
        <div>
          <img src="/assets/images/bottle1.jpg" alt="Stylish Water Bottles" className="rounded-lg" />
          <p className="legend">Stylish and Durable Bottles</p>
        </div>
        <div>
          <img src="/assets/images/bottle2.jpg" alt="Eco-Friendly Water Bottles" className="rounded-lg" />
          <p className="legend">Eco-Friendly and Reusable</p>
        </div>
        <div>
          <img src="/assets/images/bottle3.jpg" alt="Sports Water Bottles" className="rounded-lg" />
          <p className="legend">Perfect for Sports & Outdoors</p>
        </div>
        <div>
          <img src="/assets/images/bottle4.jpg" alt="Insulated Water Bottles" className="rounded-lg" />
          <p className="legend">Keeps Your Drinks Hot or Cold</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Landing;
