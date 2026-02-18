import heroImage from "../../public/hero_image.jpg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Learn Anywhere, <br className="sm:hidden" /> Build Your Future
        </h1>
        <p>Upgrade your skills with world-class online courses from industry experts.</p>
        <button type="button" className="primary-btn">
          Start Learning — It's Free to Begin
        </button>
      </div>

      <div className="hero-image">
        <img
          src={heroImage}
          alt="Happy student learning programming on laptop with coffee"
          loading="lazy"                    // ← helps with LCP / performance
          width={460}                       // ← your CSS max-width value
          height={380}                      // ← prevents layout shift (CLS)
          decoding="async"
        />
      </div>
    </section>
  );
};

export default Hero;
