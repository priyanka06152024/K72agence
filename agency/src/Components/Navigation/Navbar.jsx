
import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      {
        y: "0%",
      },
      {
        y: "-100%",
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          duration: "1",

          start: "Top",
          end: "40",
          scrub: 2,
        },
      },
    );
  });

  return (
    <nav className=" w-full">
      <div className="flex justify-between">
        <div className=" w-[10.5vw] h-[5vw] pl-3.5 pt-3.5">
          <svg
            className=" w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 103 44"
          >
            <path
              fill="black"
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>

        <div ref={navRef} className="flex flex-row ">
          <div className="w-[18vw] h-[5.5vw]  bg-black text-[1.8vw] font-semibold pl-1.5 font-['DM_Sans'] text-white flex leading-[8.5vw] hover:bg-[#D3FD50] hover:text-black">
            <Link to="/Projects"> PROJETS</Link>
          </div>

          <div className="w-[24vw] h-[8vw]  bg-black text-[1.8vw] font-semibold pl-1.5 font-['DM_Sans'] text-white flex leading-[13.5vw] hover:bg-[#D3FD50] hover:text-black">
            <Link to="/Agence"> AGENCE</Link>
          </div>

          <div className="w-[18vw] h-[10.5vw]  bg-black text-[1.8vw] font-semibold pl-1.5 font-['DM_Sans'] text-white flex leading-[18.5vw] hover:bg-[#D3FD50] hover:text-black">
            <Link to="/"> Home</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
