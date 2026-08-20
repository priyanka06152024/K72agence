

// import AgenceImg1 from "../../assets/AgenceSrc/AgenceImg1.jpg";
// import AgenceImg2 from "../../assets/AgenceSrc/AgenceImg2.jpg";
// import AgenceImg3 from "../../assets/AgenceSrc/AgenceImg3.jpg";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// const AgenceBottom = () => {
//   const sectionRef = useRef(null);

//   useGSAP(
//     () => {
//       const images = gsap.utils.toArray(".agence-image");

//       // Starting position
//       gsap.set(images[0], {
//         yPercent: 0,
//       });

//       gsap.set(images[1], {
//         yPercent: 100,
//       });

//       gsap.set(images[2], {
//         yPercent: 100,
//       });

//       // MAIN TIMELINE
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "bottom bottom",
//           scrub: 1.5,
//           pin: false,
//         },
//       });

//       // IMAGE 1 HOLD
//       tl.to({}, {
//         duration: 1,
//       });

//       // IMAGE 2 BOTTOM -> TOP
//       tl.to(images[1], {
//         yPercent: 0,
//         duration: 1,
//         ease: "none",
//       });

//       // IMAGE 2 HOLD
//       tl.to({}, {
//         duration: 1,
//       });

//       // IMAGE 3 BOTTOM -> TOP
//       tl.to(images[2], {
//         yPercent: 0,
//         duration: 1,
//         ease: "none",
//       });

//       // IMAGE 3 HOLD
//       tl.to({}, {
//         duration: 1,
//       });
//     },
//     {
//       scope: sectionRef,
//     }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-[500vh] w-full font-['DM_Sans']"
//     >
//       <div className="sticky top-0 h-screen w-full overflow-hidden">

//         {/* IMAGE 1 */}
//         <img
//           src={AgenceImg1}
//           alt=""
//           className="
//             agence-image
//             absolute inset-0
//             z-10
//             h-full w-full
//             object-cover
//           "
//         />

//         {/* IMAGE 2 */}
//         <img
//           src={AgenceImg2}
//           alt=""
//           className="
//             agence-image
//             absolute inset-0
//             z-20
//             h-full w-full
//             object-cover
//           "
//         />

//         {/* IMAGE 3 */}
//         <img
//           src={AgenceImg3}
//           alt=""
//           className="
//             agence-image
//             absolute inset-0
//             z-30
//             h-full w-full
//             object-cover
//           "
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 z-40 bg-black/10" />

//         {/* TEXT */}
//         <div className="relative z-50 flex h-full w-full flex-col items-center">

//           <h3 className="mt-3 text-[2vw] font-semibold uppercase text-white">
//             voir tous les projects
//           </h3>

//           <h2 className="mt-38 text-[2.5vw] font-semibold text-white">
//             Opto Reseau
//           </h2>

//           <h1 className="mt-6 text-[5.5vw] font-semibold text-white">
//             On Vous Voit Comme Personne
//           </h1>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default AgenceBottom;



import AgenceImg1 from "../../assets/AgenceSrc/AgenceImg1.jpg";
import AgenceImg2 from "../../assets/AgenceSrc/AgenceImg2.jpg";
import AgenceImg3 from "../../assets/AgenceSrc/AgenceImg3.jpg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AgenceBottom = () => {

  const underline = ()=>{

  }
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const slides = gsap.utils.toArray(".agence-slide");

      // Starting position
      gsap.set(slides[0], {
        yPercent: 0,
      });

      gsap.set(slides[1], {
        yPercent: 100,
      });

      gsap.set(slides[2], {
        yPercent: 100,
      });

      // MAIN TIMELINE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      // IMAGE 1 + TEXT 1 HOLD
      tl.to({}, {
        duration: 1,
      });

      // IMAGE 2 + TEXT 2 UP
      tl.to(slides[1], {
        yPercent: 0,
        duration: 1,
        ease: "none",
      });

      // IMAGE 2 + TEXT 2 HOLD
      tl.to({}, {
        duration: 1,
      });

      // IMAGE 3 + TEXT 3 UP
      tl.to(slides[2], {
        yPercent: 0,
        duration: 1,
        ease: "none",
      });

      // IMAGE 3 + TEXT 3 HOLD
      tl.to({}, {
        duration: 1,
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[500vh] w-full font-['DM_Sans']"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* ================= SLIDE 1 ================= */}

        <div className="agence-slide group absolute inset-0 z-10 group overflow-hidden">

          <img
            src={AgenceImg1}
            alt=""
            className="absolute inset-0 h-full w-full object-cover  transition-all duration-700 ease-out
      group-hover:scale-105
      group-hover:brightness-80 "
          />

          <div className="absolute inset-0 bg-black/10" />

          {/* TEXT 1 */}
          <div className="relative z-10 flex h-full w-full flex-col items-center text-white">

            <h3 className="mt-3 text-[2vw] font-semibold uppercase">
              voir tous les projects
            </h3>

            <h2 className="mt-38 text-[2.5vw] font-semibold">
              Opto Reseau
            </h2>

            <h1 className="mt-6 text-[5.5vw] font-semibold group-hover:underline" >
              On Vous Voit Comme Personne
            </h1>

          </div>
        </div>


        {/* ================= SLIDE 2 ================= */}

        <div className="agence-slide absolute inset-0 z-20 group overflow-hidden">

          <img
            src={AgenceImg2}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-all group-hover:scale-105 group-hover:brightness-80"
          />

          <div className="absolute inset-0 bg-black/10" />

          {/* TEXT 2 */}
          <div className="relative z-10 flex h-full w-full flex-col items-center text-white">

            

            <h2 className="mt-38 text-[2.5vw] font-semibold">
              Lamajeure
            </h2>

            <h1 className="mt-6 text-[5.5vw] font-semibold group-hover:underline">
              Lamajeure
            </h1>

          </div>
        </div>


        {/* ================= SLIDE 3 ================= */}

        <div className="agence-slide absolute inset-0 z-30 group overflow-hidden">

          <img
            src={AgenceImg3}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-all group-hover:scale-105 group-hover:brightness-80 "
          />

          <div className="absolute inset-0 bg-black/10" />

          {/* TEXT 3 */}
          <div className="relative z-10 flex h-full w-full flex-col items-center text-white group">

            
            <h2 className="mt-38 text-[2.5vw] font-semibold">
              Lassonde
            </h2>

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