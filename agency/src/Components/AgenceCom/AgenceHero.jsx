import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Image1 from "../../assets/AgenceSrc/k721.jpg";
import Image2 from "../../assets/AgenceSrc/k722.jpg";
import Image3 from "../../assets/AgenceSrc/k723.jpg";
import Image4 from "../../assets/AgenceSrc/k724.jpg";
import Image5 from "../../assets/AgenceSrc/k725.jpg";
import Image6 from "../../assets/AgenceSrc/k76.jpg";
import Image7 from "../../assets/AgenceSrc/k727.jpg";
import Image8 from "../../assets/AgenceSrc/k728.jpg";

const AgenceHero = () => {
  gsap.registerPlugin(ScrollTrigger);

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
        start: "top 0%",
        end: "top -200%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <div className="parent">
      <div id="page1" className="py-1 ">
        <div
          ref={imageDivRef}
          className="absolute h-[20vw] overflow-hidden w-[15vw] rounded-3xl top-[14vw] left-[28vw] "
        >
          <img
            ref={imageRef}
            className="h-full object-cover w-full"
            src="{Image1}"
            alt=""
          />
        </div>
        <div className="relative font-['DM_Sans'] ">
          <div className="lg:mt-[55vh] mt-[30vh] ">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3">
            <p className="lg:text-5xl font-['DM_Sans'] text-[4vw] leading-[4vw] ">
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
        <div
          className="
    flex flex-col
    md:flex-row
    font-semibold
    text-[5vw] md:text-[1.6vw]
    gap-[8vw] md:gap-[20vw]
    pl-[6vw] md:pl-[10vw]
    pt-[20vw] md:pt-[16vw]
  "
        >
          <p>Expertise</p>
          <div>
            <p>Stratégie</p>
            <p>Publicité</p>
            <p>Branding</p>
            <p>Design</p>
            <p>Contenu</p>
          </div>
        </div>

        <div
          className="
    flex flex-col
    md:flex-row
    font-semibold
    text-[5vw] md:text-[1.6vw]
    gap-[10vw] md:gap-[2vw]
    pl-[6vw] md:pl-[10vw]
    pr-[6vw] md:pr-[4vw]
    pt-[25vw] md:pt-[14vw]
  "
        >
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
      </div>
    </div>
  );
};

export default AgenceHero;
