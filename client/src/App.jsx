import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./views/Landing";
import About from "./views/About";
import Products from "./views/Product";
import Contact from "./views/Contact";
import TestimonialCarousel from "./views/TestimonialCarousel";
import { Element } from "react-scroll";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow p-4">
            <Element name="landing">
              <Landing />
            </Element>

            <Element name="products">
              <Products />
            </Element>

            <Element name="testimonials">
              <TestimonialCarousel />
            </Element>

            <Element name="about">
              <About />
            </Element>

            <Element name="contact">
              <Contact />
            </Element>
          </main>
          <Footer />
        </div>
    );
}

export default App;
