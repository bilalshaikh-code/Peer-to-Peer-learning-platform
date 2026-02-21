// Features

const Features = () => {
  const features = [
    {
      title: "Dual Role System",
      desc: "Be both a learner and a tutor with a single account.",
    },
    {
      title: "Secure Payments", 
      desc: "Safe and seamless transactions between users.",
    },
    {
      title: "Flexible Scheduling",
      desc: "Book sessions according to your availability.",
    },
  ];

  return (
    <section className="features" id="features">
      <h3 className="text-3xl font-bold text-center mb-12">
        Why Choose Us?
      </h3>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
          >
            <h4 className="text-xl font-semibold mb-3">
              {feature.title}
            </h4>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;