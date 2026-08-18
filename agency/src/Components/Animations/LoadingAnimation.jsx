import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";

const LoadingAnimation = (props) => {
  const currentPath = useLocation().pathname;

  const ParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Loader show
    tl.set(ParentRef.current, {
      display: "block",
    });

    // Black divs appear
    tl.from(".loading-animation", {
      height: 0,
      stagger: {
        amount: -0.2,
      },
    });

    // Black divs move down
    tl.to(".loading-animation", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    // Loader hide
    tl.to(ParentRef.current, {
      display: "none",
    });

    tl.to(".loading-animation", {
      y: "0%",
    });

    // Page animation
    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1,
      scale: 1.2,
    });
  }, [currentPath]);

  return (
    <>
      {/* LOADER */}
      <div ref={ParentRef} className="h-screen w-full fixed top-0 left-0 z-20">
        <div className="w-full h-full flex">
          <div className="loading-animation h-full w-1/5 bg-black"></div>
          <div className="loading-animation h-full w-1/5 bg-black"></div>
          <div className="loading-animation h-full w-1/5 bg-black"></div>
          <div className="loading-animation h-full w-1/5 bg-black"></div>
          <div className="loading-animation h-full w-1/5 bg-black"></div>
        </div>
      </div>

      {/* PAGE */}
      <div ref={pageRef}>{props.children}</div>
    </>
  );
};

export default LoadingAnimation;
