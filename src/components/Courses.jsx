import CourseCard from "./CourseCard";

const Courses = () => {
  const courseData = [
  {
    id: "ui-ux-001",
    title: "UI/UX Design Masterclass",
    price: 120,
    imageUrl:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
    instructor: "Sarah Chen",
    rating: 4.8,
    duration: "12 weeks",
  },
  {
    id: "react-002",
    title: "React JS Complete Guide 2026",
    price: 150,
    imageUrl:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
    instructor: "Alex Rivera",
    rating: 4.9,
    duration: "10 weeks",
  },
  {
    id: "digital-marketing-003",
    title: "Digital Marketing Pro",
    price: 99,
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    instructor: "Maya Patel",
    rating: 4.7,
    duration: "8 weeks",
  },
];

  return (
    <section className="courses-section" aria-labelledby="courses-heading">
      <div className="courses-header">
        <h2 id="courses-heading">All Courses</h2>

        <div className="search-wrapper">
          <input
            type="search"
            placeholder="Search courses..."
            aria-label="Search courses"
          />
          {/* Optional: search icon (you can use heroicons, lucide-react, etc.) */}
          {/* <SearchIcon className="search-icon" /> */}
        </div>
      </div>

      <div className="courses-grid">
        {courseData.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            price={course.price}
            imageUrl={course.imageUrl}
            instructor={course.instructor}
            rating={course.rating}
            duration={course.duration}
          />
        ))}
      </div>

      {/* Optional: "Load more" or empty state */}
      {courseData.length === 0 && (
        <p className="no-courses">No courses found. Check back soon!</p>
      )}
    </section>
  );
};

export default Courses;
