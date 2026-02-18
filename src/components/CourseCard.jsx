import React from "react";

const CourseCard = ({
  title,
  price,
  imageUrl,           // renamed for clarity (from Courses data)
  instructor = "Expert Instructor",
  rating = 4.5,
  duration = "Self-paced",
  alt = "",           // fallback alt
}) => {
  return (
    <article 
      className="course-card"
      role="group" 
      aria-labelledby={`course-title-${title.replace(/\s+/g, "-")}`}
    >
      <div className="course-image-wrapper">
        <img
          src={imageUrl}
          alt={alt || `Preview image for ${title} course`}
          loading="lazy"              // improve performance
          width={300}                 // approximate real size — prevents CLS
          height={180}
          decoding="async"
        />
      </div>

      <div className="course-content">
        <h3 id={`course-title-${title.replace(/\s+/g, "-")}`} className="course-title">
          {title}
        </h3>

        <div className="course-meta">
          <span className="instructor">{instructor}</span>
          <div className="rating">
            <span aria-label={`Rating: ${rating} out of 5`}>★ {rating.toFixed(1)}</span>
            <span className="duration">• {duration}</span>
          </div>
        </div>

        <p className="price">
          ${price}
          <span className="price-note">one-time</span>
        </p>

        <button 
          type="button" 
          className="card-btn"
          aria-label={`Enroll in ${title}`}
        >
          Enroll Now
        </button>
      </div>
    </article>
  );
};

export default CourseCard;
