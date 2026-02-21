import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Courses from "../components/Courses";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import "../App.css";

const Home = () => {
  return (
    <div className="Main">
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Home;
