
import React, { useRef } from "react";
import gsap from "gsap";

const Projects = () => {
    gsap.to(".box",{
        x:500,
        duration:10
    })
  return (
    <div className="h-screen w-screen">
        <div className="box text-[4vw] pt-20">
      cherry
    </div>
    </div>
  )
}

export default Projects
