import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Courses from "../components/Home/Courses";
import HowItWorks from "../components/Home/HowItWorks";
import Footer from "../components/Home/Footer";
import "../../public/CSS/App.css";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Courses />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
