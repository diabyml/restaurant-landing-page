import React from "react";

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="wrapper">
        <div className="testimonials-section__content">
          <div class="text-center">
            <span className="section-subtitle">Testimonials</span>
            <h3 className="section-title">Food Lover's Say</h3>
          </div>
          <ul className="testimonials-section__grid">
            {testimonials.map((item) => (
              <Testimonial key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const Testimonial = (item) => {
  return <div className="testimonial"> {"testimonial"} </div>;
};

const testimonials = [
  {
    id: "1",
    message:
      "Design is an evolutionary process, and filler text is just one tool in your progress-pushing arsenal. Use it where it makes sense process.",
  },
];

export default TestimonialsSection;
