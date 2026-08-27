import React from "react";

const Footer = () => {
  return (
    <footer
      className="h-[30vw] 
   bg-black p-3"
    >
      <div className="h-[28vw] flex flex-col ">
        <div className="flex justify-between">
          <div className="flex gap-1.5">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="h-[5vw] w-[10vw] text-[5vw] rounded-full flex items-center justify-center font-semibold font-['DM_Sans'] text-white border-2 border-white  hover:scale-110 hover:text-[#D3FD50] hover:border-[#D3FD50]">
                FB
              </div>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="h-[5vw] w-[10vw] text-[5vw] rounded-full flex items-center justify-center font-semibold font-['DM_Sans'] text-white border-2 border-white  hover:scale-110 hover:text-[#D3FD50] hover:border-[#D3FD50]">
                IG
              </div>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="h-[5vw] w-[10vw] text-[5vw] rounded-full flex items-center justify-center font-semibold font-['DM_Sans'] text-white border-2 border-white  hover:scale-110 hover:text-[#D3FD50] hover:border-[#D3FD50] ">
                IN
              </div>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="h-[5vw] w-[10vw] text-[5vw] rounded-full flex items-center justify-center font-semibold font-['DM_Sans'] text-white border-2 border-white  hover:scale-110 hover:text-[#D3FD50] hover:border-[#D3FD50]">
                BE
              </div>
            </a>
          </div>

          <div>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="h-[5vw] w-[28vw] text-[5vw] rounded-full flex items-center justify-center font-semibold font-['DM_Sans'] text-white border-2 border-white  hover:scale-110 hover:text-[#D3FD50] hover:border-[#D3FD50] ">
                CONTACT
              </div>
            </a>
          </div>
        </div>

        <div className="absolute flex flex-row gap-5">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="text-white relative top-[25.5vw]  text-[1.5vw] hover:text-[#D3FD50]">
              Politique de confidentialité
            </div>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="text-white relative top-[25.5vw]  text-[1.5vw] hover:text-[#D3FD50]">
              Avis de confidentialité
            </div>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="text-white relative top-[25.5vw] text-[1.5vw] hover:text-[#D3FD50]">
              Rapport éthique
            </div>
          </a>5

          <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="text-white relative top-[25.5vw] text-[1.5vw] hover:text-[#D3FD50]">
              Options de consentement
            </div>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="text-white relative top-[25.5vw]  text-[1.5vw] hover:text-[#D3FD50]">
              Retour en haut
            </div>
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="text-white relative top-[25.5vw] text-[1.5vw] hover:text-[#D3FD50]">
              Avis de confidentialité
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
