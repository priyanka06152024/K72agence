import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ProjectCard from "../Components/ProjectCom/ProjectCard";
import Footer from "../Components/Footer/Footer.jsx"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image1 from "../assets/ProjectsSrc/projectimag.png";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);

  const projectObjects = [
    { image1: Image1, image2: Image1 },
    { image1: Image1, image2: Image1 },
    { image1: Image1, image2: Image1 },
    
    
  ];
    gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true,
       
      }
    })
  })
  
  //   () => {
  //     const heroes = gsap.utils.toArray(".hero");

  //     heroes.forEach((hero) => {
  //       gsap.fromTo(
  //         hero,
  //         {
  //           height: "150px",
  //         },
  //         {
  //           height: "400px",
  //           ease: "none",
  //           scrollTrigger: {
  //             trigger: hero,
  //             start: "top 90%",
  //             end: "top 50%",
  //             scrub: 0.3,
  //           },
  //         },
  //       );
  //     });
  //   },
  //   { scope: container },
  // );

  //   () => {
  //     const heroes = gsap.utils.toArray(".hero");

  //     heroes.forEach((hero) => {
  //       gsap.fromTo(
  //         hero,
  //         {
  //           height: "150px",
  //         },
  //         {
  //           height: "400px",
  //           ease: "none",
  //           scrollTrigger: {
  //             trigger: hero,
  //             start: "top 85%",
  //             end: "top 35%",
  //             scrub: 0.3,
  //           },
  //         },
  //       );
  //     });
  //   },
  //   { scope: container },
  // );
  return (
    <>
    <div className='lg:p-4 p-2 mb-[100vh] h-screen'>
      <div className=' pt-[45vh]'>
        <h2 className="font-['DM_Sans'] lg:text-[12vw] text-7xl uppercase">Projets</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projectObjects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[400px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>

      <Footer />
     
    </div>

    
    </>
  );
};

export default Projects;


