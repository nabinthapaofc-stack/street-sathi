import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
    };

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-100"
        style={{
          left: position.x - 6,
          top: position.y - 6,
          transform: isHovering ? "scale(1.5)" : "scale(1)",
        }}
      >
        <div
          className={`w-3 h-3 rounded-full bg-primary transition-all duration-200 ${
            isHovering ? "opacity-70" : "opacity-100"
          }`}
        />
      </div>
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          transform: isHovering ? "scale(1.5)" : "scale(1)",
        }}
      >
        <div
          className={`w-10 h-10 rounded-full border-2 border-primary transition-all duration-200 ${
            isHovering ? "opacity-50 bg-primary/10" : "opacity-30"
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
