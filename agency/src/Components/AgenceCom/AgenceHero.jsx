


import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import Image1 from "../../assets/AgenceSrc/k721.jpg";
import Image2 from "../../assets/AgenceSrc/k722.jpg";
import Image3 from "../../assets/AgenceSrc/k723.jpg";
import Image4 from "../../assets/AgenceSrc/k724.jpg";
import Image5 from "../../assets/AgenceSrc/k725.jpg";
import Image6 from "../../assets/AgenceSrc/k76.jpg";
import Image7 from "../../assets/AgenceSrc/k727.jpg";
import Image8 from "../../assets/AgenceSrc/k728.jpg";


gsap.registerPlugin(ScrollTrigger);

const AgenceHero = () => {
  const containerRef = useRef(null);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];

   useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top 28%',
        end: 'top -180%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (

    <>

    
    <section
      ref={containerRef}
      className="relative min-h-[250vh] overflow-visible py-1"
    >
      {/* IMAGE */}
      <div
        ref={imageDivRef}
        className="absolute top-[14vw] left-[28vw] h-[20vw] w-[15vw] overflow-hidden rounded-3xl"
      >
        <img
          ref={imageRef}
          src={Image1}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* HERO TEXT */}
      <div className="relative font-['DM_Sans']">
        <div className="lg:mt-[55vh] mt-[30vh]">
          <h1 className="text-center text-[20vw] uppercase leading-[18vw]">
            Soixan7e <br />
            Douze
          </h1>
        </div>

        <div className="mt-4 p-3 lg:mt-20 lg:pl-[40%]">
          <p className="text-[4vw] leading-[4vw] lg:text-5xl">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Notre curiosité nourrit notre créativité. On reste humbles et on
            dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
            a des valeurs, une personnalité, une histoire. Si on oublie ça, on
            peut faire de bons chiffres à court terme, mais on la tue à long
            terme. C’est pour ça qu’on s’engage à donner de la perspective,
            pour bâtir des marques influentes.
          </p>
        </div>
      </div>

      {/* EXPERTISE */}
      <div className="flex flex-col gap-[8vw] pt-[20vw] pl-[6vw] font-semibold text-[5vw] md:flex-row md:gap-[20vw] md:pt-[16vw] md:pl-[10vw] md:text-[1.6vw]">
        <p>Expertise</p>

        <div>
          <p>Stratégie</p>
          <p>Publicité</p>
          <p>Branding</p>
          <p>Design</p>
          <p>Contenu</p>
        </div>
      </div>

      {/* BOTTOM TEXT */}
      <div className="flex flex-col gap-[10vw] px-[6vw] pt-[25vw] font-semibold text-[5vw] md:flex-row md:gap-[2vw] md:px-[10vw] md:pr-[4vw] md:pt-[14vw] md:text-[1.6vw]">
        <p>
          Nos projets_ naissent dans l’humilité, grandissent dans la curiosité
          et vivent grâce à la créativité sous toutes ses formes.
        </p>

        <p>
          Notre création_ bouillonne dans un environnement où le talent a le
          goût d’exploser. Où on se sent libre d’être la meilleure version de
          soi-même.
        </p>

        <p>
          Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage
          participe à bâtir une agence dont on est fiers.
        </p>
      </div>
    </section>
    </>
  );
};

export default AgenceHero;