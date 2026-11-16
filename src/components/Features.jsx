import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const BentoTilt = ({ children, className = "", onClick, isActive, colSpan, rowSpan }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  useEffect(() => {
    if (isActive) {
      gsap.to(itemRef.current, {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 20,
        duration: 1,
        ease: "power3.out",
      });
      gsap.to(itemRef.current.parentNode.children, {
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(itemRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(itemRef.current, {
        position: "relative",
        zIndex: 1,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(itemRef.current.parentNode.children, {
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [isActive]);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltY = 10 * (0.5 - relativeX);
    const tiltX = 10 * (0.5 - relativeY);

    const newTransformStyle = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.97, 0.97, 0.97)`;

    setTransformStyle(newTransformStyle);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Features = () => {
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef();

  const handleMouseClick = (index) => {
    console.log("clicked", index);
    setActiveCard(activeCard === index ? null : index);
  };

  const BentoCard = ({ src, title, description, isComingSoon, onClick }) => {
    return (
      <div
        className="relative size-full border-black border-2 rounded-md overflow-hidden  shadow-black-800"
        onClick={onClick}
      >
        <img
          src={src}
          className="absolute left-0 top-0 size-full object-cover"
        />
        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
          <div>
            <h1 className="bento-title special-font">{title}</h1>
            {description && (
              <p className="mt-3 max-w-64 text-xs md:text-base">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const cards = [
    { src: require("../assets/images/farmer.jpg"), colSpan: 1, rowSpan: 2, title: "Feature 1" },
    { src: require("../assets/images/farm.jpg"), colSpan: 1, rowSpan: 2, title: "Feature 2" },
    { src: require("../assets/images/robot.jpg"), colSpan: 2, rowSpan: 1, title: "Feature 3" },
    { src: require("../assets/images/soil.jpg"), colSpan: 2, rowSpan: 2, title: "Feature 4" },
    { src: require("../assets/images/supply.png"), colSpan: 2, rowSpan: 1, title: "Feature 5" },
  ];

  return (
    <section className="pb-52 relative" ref={containerRef}>
      <div className="container mx-auto px-3 md:px-10 relative">
        <div className="grid h-[80vh] grid-cols-4 grid-rows-3 gap-4 relative">
          {cards.map((card, index) => (
            <BentoTilt
              key={index}
              className={`bento-tilt_1 col-span-${card.colSpan} row-span-${card.rowSpan} git pull place-items-center`}
              colSpan={card.colSpan}
              rowSpan={card.rowSpan}
              onClick={() => handleMouseClick(index)}
              isActive={activeCard === index}
            >
              <BentoCard
                src={`${card.src}`}
                title={
                  <span>
                    {card.title}
                  </span>
                }
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et purus sed dolor consectetur efficitur. Nulla facilisi."
              />
            </BentoTilt>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
