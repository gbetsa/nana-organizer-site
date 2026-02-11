import { useInView } from "react-intersection-observer";
import "./fadeIn.css";

const FadeIn = ({ children, delay = 0, threshold = 0.2 }) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`fade-in ${inView ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;

