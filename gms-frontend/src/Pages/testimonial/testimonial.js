import React, { useEffect, useState } from "react";

// Testimonial data
const testimonials = [
  {
    name: "Abhishek Aditya",
    title: "Gym Manager",
    review:
      "A promising and reliable platform for managing smooth rollout of expiring bookings. Very much impressed with the customer support.",
    image:
      "/images/abhi.jpeg",
  },
  {
    name: "Pushp Raj",
    title: "Developer",
    review:
      "The app makes managing customers and gym schedules seamless. It's a great tool for handling memberships and client engagement.",
    image:
      "/images/pushpa.jpeg",
  },
  {
    name: "Bishu kumar",
    title: "Gym Owner",
    review:
      "This app has revolutionized how we manage gym operations. From support to customer data management, everything is automated.",
    image:
      "/images/bishu.jpg",
  },
  {
    name: "Rahul Ranjan",
    title: "Gym Member",
    review:
      "The app has made booking classes and tracking my fitness progress so much easier. It's a must-have for any gym-goer!",
    image:
      "/images/rahul.jpeg",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to update testimonial index
  const updateTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(updateTestimonial, 3000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>WHAT CUSTOMER SAYS</h2>
      <h3 style={styles.subHeading}>RECENT REVIEWS</h3>
      <div style={styles.card}>
        <img
          src={currentTestimonial.image}
          alt={currentTestimonial.name}
          style={styles.image}
        />
        <h4 style={styles.name}>{currentTestimonial.name}</h4>
        <p style={styles.title}>{currentTestimonial.title}</p>
        <p style={styles.review}>&#8220;{currentTestimonial.review}&#8221;</p>
      </div>
      <div style={styles.arrows}>
        <button
          onClick={() =>
            setCurrentIndex(
              (currentIndex - 1 + testimonials.length) % testimonials.length
            )
          }
          style={styles.button}
        >
          &lt;
        </button>
        <button
          onClick={() =>
            setCurrentIndex((currentIndex + 1) % testimonials.length)
          }
          style={styles.button}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#f9f9f9",
    width: "75%", // Proper layout next to the sidebar
    float: "right",
  },
  heading: {
    fontSize: "1.5rem",
    color: "#555",
  },
  subHeading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  card: {
    margin: "0 auto",
    width: "90%", // Centers the card
    backgroundColor: "#e6f0ff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "210px", // Larger image
    height: "180px",
    borderRadius: "50%",
    marginBottom: "15px",
  },
  name: {
    // fontSize: "2.1 rem", // Larger font for name
    // color: "#333",
    // marginTop: "5px",
    fontSize: "2.1rem", // Larger font for name
    color: "#333",
    marginTop: "5px",
    fontWeight: "bold", // Bold font weight
 // Light background color to highlight
    padding: "5px 10px", // Padding around the name for emphasis
    borderRadius: "5px",
  },
  title: {
    // fontSize: "1.5rem",
    // color: "#777",
    // margin: "5px 0",
    fontSize: "1.5rem",
    color: "#333",
    margin: "5px 0",
  },
  review: {
    // fontSize: "1rem",
    // color: "#444",
    // textAlign: "center",
    // marginTop: "10px",

    fontSize: "1.5rem", // Larger font for name
    color: "#333",
    marginTop: "5px",
    // Bold font weight
 // Light background color to highlight
    padding: "5px 10px", // Padding around the name for emphasis
    borderRadius: "5px",
  },
  arrows: {
    marginTop: "20px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    margin: "0 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Testimonial;
