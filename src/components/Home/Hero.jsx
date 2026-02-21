// Hero

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Learn. Teach. Grow Together.
        </h1>
        <p> A peer-to-peer learning platform where you can both learn new skills
        and teach what you know.</p>
        <button type="button" className="primary-btn">
          Start Learning — It's Free to Begin
        </button>
      </div>

      <div className="hero-image">
        <img
          src="/hero_image.jpg"
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
