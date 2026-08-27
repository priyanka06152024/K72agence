import AgenceImg1 from "../../assets/AgenceSrc/AgenceImg1.jpg";
import AgenceImg2 from "../../assets/AgenceSrc/AgenceImg2.jpg";
import AgenceImg3 from "../../assets/AgenceSrc/AgenceImg3.jpg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

const AgenceBottom = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const slides = gsap.utils.toArray(".agence-slide");

      if (slides.length < 3) return;

      gsap.set(slides[0], {
        yPercent: 0,
      });

      gsap.set(slides[1], {
        yPercent: 100,
      });

      gsap.set(slides[2], {
        yPercent: 100,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      tl.to({}, { duration: 1 });

      tl.to(slides[1], {
        yPercent: 0,
        duration: 1,
        ease: "none",
      });

      tl.to({}, { duration: 1 });

      tl.to(slides[2], {
        yPercent: 0,
        duration: 1,
        ease: "none",
      });

      tl.to({}, { duration: 1 });

      ScrollTrigger.refresh();
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[1000vh] w-full font-['DM_Sans']"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="agence-slide group absolute inset-0 z-10 overflow-hidden">
          <img
            src={AgenceImg1}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-80"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 flex h-full w-full flex-col items-center text-white">
            <h3 className="mt-3 text-[2vw] font-semibold uppercase">
              voir tous les projects
            </h3>

            <h2 className="mt-38 text-[2.5vw] font-semibold">Opto Reseau</h2>

            <h1 className="mt-6 text-[5.5vw] font-semibold group-hover:underline">
              On Vous Voit Comme Personne
            </h1>
          </div>
        </div>

        <div className="agence-slide group absolute inset-0 z-20 overflow-hidden">
          <img
            src={AgenceImg2}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-80"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 flex h-full w-full flex-col items-center text-white">
            <h2 className="mt-38 text-[2.5vw] font-semibold">Lamajeure</h2>

            <h1 className="mt-6 text-[5.5vw] font-semibold group-hover:underline">
              Lamajeure
            </h1>
          </div>
        </div>

        <div className="agence-slide group absolute inset-0 z-30 overflow-hidden">
          <img
            src={AgenceImg3}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-80"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 flex h-full w-full flex-col items-center text-white">
            <h2 className="mt-38 text-[2.5vw] font-semibold">Lassonde</h2>

            <h1 className="mt-6 text-[5.5vw] font-semibold group-hover:underline">
              Fruite
            </h1>
          </div>
        </div>

        
      </div>

    </section>
  );
};

export default AgenceBottom;
