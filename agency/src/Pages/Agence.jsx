import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image1 from "../assets/AgenceSrc/k721.jpg";
import Image2 from "../assets/AgenceSrc/k722.jpg";
import Image3 from "../assets/AgenceSrc/k723.jpg";
import Image4 from "../assets/AgenceSrc/k724.jpg";
import Image5 from "../assets/AgenceSrc/k725.jpg";
import Image6 from "../assets/AgenceSrc/k76.jpg";
import Image7 from "../assets/AgenceSrc/k727.jpg";
import Image8 from "../assets/AgenceSrc/k728.jpg";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ImageArray = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];
  const ImageDivRef = useRef(null);
  const ImageRef = useRef(null);
  useGSAP(() => {
    gsap.to(ImageDivRef.current, {
      scrollTrigger: {
        trigger: ImageRef.current,
        start: "top 27.3%",
        end: "top -180%",
        pin: ImageDivRef.current,

        onUpdate: (elem) => {
          let ImageIndex;
          if (elem.progress < 1) {
            ImageIndex = Math.floor(elem.progress * ImageArray.length);
          } else {
            ImageIndex = ImageArray.length - 1;
          }
          ImageRef.current.src = ImageArray[ImageIndex];
        },
      },
    });
  });
  return (
    <div>
      <div className="section1 relative min-h-[600vh]">
        <div
          ref={ImageDivRef}
          className="absolute h-[20vw] overflow-hidden w-[15vw] rounded-3xl top-[-10vw] left-[28vw] "
        >
          <img
            ref={ImageRef}
            src={Image1}
            alt=""
            className="h-full w-full object-cover rounded-3xl "
          />
        </div>

        <div className="font-['DM_Sans'] relative">
          <div className="mt-[55vh] ">
            <h1 className="text-[20vw] font-semibold  uppercase text-center leading-[18vw]">
              Soixan7e Douze
            </h1>
          </div>
          <div className="font-semibold text-[4vw] leading-[4vw]  ">
            <p className="pl-[45%]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
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

      <div className="section2"></div>
    </div>
  );
};

export default Agence;
