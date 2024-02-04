import "../../styles/Testimonial/TestimonialStyles.css";

export default function Testimonial({ text, src, children, person }) {
  return (
    <div className="testimonial">
      <img className="logo" src={src} />
      {children}
      <cite className="cite-content">
        <p>{person}</p>
        <p className="divider"> / </p>
        <p style={{ color: "#6B7280" }}>{text}</p>
      </cite>
    </div>
  );
}
