import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamData = [
  {
    position: "Directeur principal",
    name: "Carl Godbout",
  },
  {
    position: "Conceptrice-rédactrice",
    name: "Camille Brière",
  },
  {
    position: "Conseillère principale",
    name: "Stéphanie Brunelle",
  },
  {
    position: "VPP et directeur général",
    name: "Pierre-Luc Paiement",
  },
  {
    position: "Directrice artistique",
    name: "Mélanie Laviolette",
  },
  {
    position: "Directrice de la stratégie",
    name: "Michèle Riendeau",
  },
  {
    position: "Directeur artistique",
    name: "Alex Sauvageau",
  },
  {
    position: "Stratège",
    name: "Alex S...",
  },
  {
    position: "Conseil média",
    name: "Béatrice Roussin",
  },
  {
    position: "Photographe",
    name: "Lou Gravel-Jean",
  },
  {
    position: "Conseil média",
    name: "Marie-Pier Daigle",
  },
  {
    position: "Conseillère principale",
    name: "Hélène Conti",
  },
  {
    position: "Opérations et développement des affaires",
    name: "Léa Ferrez",
  },
  {
    position: "Directrice artistique",
    name: "Maëlle Jacot-Descombes",
  },
  {
    position: "Directeur artistique",
    name: "Julien Poisson",
  },
  {
    position: "Directeur de création",
    name: "Julien ...",
  },
  {
    position: "Directrice artistique",
    name: "Audrey Gaucher",
  },
  {
    position: "Directrice conseil",
    name: "Isabelle Beauchemin",
  },
  {
    position: "Directeur artistique",
    name: "Olivier Duclos",
  },
  {
    position: "Directeur artistique",
    name: "Joël Letarte",
  },
  {
    position: "Concepteur-rédacteur",
    name: "Chantal Gobeil",
  },
  {
    position: "Directeur artistique",
    name: "Sébastien Roy",
  },
];

const AgenceMiddle = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const teamRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      teamRef.current,
      {
        backgroundColor: "#ffffff",
      },
      {
        backgroundColor: "#000000",
        ease: "none",
        scrollTrigger: {
          trigger: teamRef.current,
          delay: 0.12,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section
      ref={teamRef}
      className="min-h-screen text-white py-20 mt-[18vw] pb-[19vw]"
    >
      <div className="w-[100%] p-10 mx-auto">
        {teamData.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className="group relative border-b border-white/30 py-5 flex justify-between items-center cursor-pointer overflow-hidden"
          >
            {/* Hover Yellow Background */}
            <div
              className={`
                absolute inset-0 bg-[#d8f12a]
                origin-left transition-transform duration-500 ease-out
                ${activeIndex === index ? "scale-x-100" : "scale-x-0"}
              `}
            />

            {/* Position */}
            <p
              className={`
                relative z-10 text-sm
                transition-colors duration-300
                ${activeIndex === index ? "text-black" : "text-white"}
              `}
            >
              {item.position}
            </p>

            {/* Name */}
            <h2
              className={`
                relative z-10 text-3xl font-medium
                transition-colors duration-300
                ${activeIndex === index ? "text-black" : "text-black"}
              `}
            >
              {item.name}
            </h2>

            {/* Image */}
            {activeIndex === index && (
              <img
                src={item.image}
                alt={item.name}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-[250px]
                  h-[300px]
                  object-cover
                  z-20
                  pointer-events-none
                "
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgenceMiddle;


