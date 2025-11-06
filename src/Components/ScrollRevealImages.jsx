import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealImages({
  images = [], // array of image URLs
  scrollContainerRef,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  enableBlur = true,
  rotationEnd = "bottom bottom",
  imageAnimationEnd = "bottom bottom",
  containerClassName = "",
  imgClassName = "w-32 h-32 object-cover rounded-xl"
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      { rotate: baseRotation },
      {
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const imgElements = el.querySelectorAll(".scroll-img");

    gsap.fromTo(
      imgElements,
      { opacity: baseOpacity },
      {
        opacity: 1,
        stagger: 0.12,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=15%",
          end: imageAnimationEnd,
          scrub: true,
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        imgElements,
        { filter: `blur(${blurStrength}px)` },
        {
          filter: "blur(0px)",
          stagger: 0.12,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=15%",
            end: imageAnimationEnd,
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className={`flex flex-wrap justify-center gap-4 md:gap-6 mt-8 w-full max-w-full overflow-hidden`}>
      {images.map((img, i) => (
        <img key={i} src={img} className={`scroll-img ${imgClassName}`} />
      ))}
    </div>
  );
}
