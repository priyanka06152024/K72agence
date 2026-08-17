import react,{useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const LoadingAnimation =()=>{
  const ParentRef = useRef(null);
    useGSAP(() => {
  const t = gsap.timeline();

  t.to("ParentRef.current",{
   display:"block"
  })

  t.from(".loading-animation", {
    height: 0,
    duration: 0.8,
    stagger: {
      amount: -0.25,
     
    },
    // ease: "power4.inOut"
  });

  t.to(".loading-animation", {
    y: "100%",
    duration: 0.8,
    stagger: {
      amount: -0.25,
        
     
    },
    // ease: "power4.inOut"
  });

   t.to("ParentRef.current",{
   display:"none"
  })
});
return(
     <div className="h-screen w-full  fixed top-0 z-20">
      <div className=" w-full h-full flex">
      <div className="loading-animation h-full w-1/5 bg-black">
      </div>
      <div className="loading-animation h-full w-1/5 bg-black">
      </div>
      <div className="loading-animation h-full w-1/5 bg-black">
      </div>
      <div className="loading-animation h-full w-1/5 bg-black">
      </div>
      <div className="loading-animation h-full w-1/5 bg-black">
      </div>
    </div>
     </div>
)
}

export default LoadingAnimation;