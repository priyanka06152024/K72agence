import React from "react";
import Image1 from "../../assets/MenuSrc/blogue.jpg";
import Image2 from "../../assets/MenuSrc/projectsMenu.jpg";
const Menu = () => {
  return (
    <div id="Menu" className="absolute h-[75vw] w-full py-40 bg-black">
      <div className="w-full h-full leading-[9vw]">
        <div className="link   border-y-2 border-white relative">
          <h1 className="text-[8vw] font-['DM_Sans'] uppercase text-white text-center">
            Projects
            <div className="absolute flex top-0 bg-[#D3FD50] ">
              {/* <div className="flex items-center ovewrflow-auto">
                <h2 className=" text-black font-semibold font-['DM_Sans'] white-space-nowrap text-[6vw]">Pour Tout Voir </h2>
                <img src={Image1} className="h-30 w-70 rounded-full object-cover shrink-0"/>
                <h2 className=" text-black font-semibold font-['DM_Sans'] white-space-nowrap text-[6vw]">Pour Tout Voir </h2>
                <img src={Image2} className="  h-30 w-70 rounded-full object-cover shrink-0"/>
              </div> */}

              <div className="moveX flex items-center justify-center">
                <h2 className="whitespace-nowrap font-['DM_Sans'] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-10 rounded-full shrink-0 lg:w-80 w-30 object-cover"
                  src={Image1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-['DM_Sans'] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-10 rounded-full shrink-0 lg:w-80 w-30 object-cover"
                  src={Image1}
                  alt=""
                />
              </div>
            </div>
          </h1>
        </div>

        {/* <div className="link   border-y-2 border-white leading-[9vw]">
          <h1 className="text-[8vw] uppercase text-white text-center">
            Agence
            <div>
              <div>
                <h2>Pour Tout Voir </h2>
                <img src={Image1} />
                <h2>Pour Tout Voir </h2>
                <img src={Image2} />
              </div>
            </div>
          </h1>
        </div> */}

        {/* <div className="link   border-y-2 border-white leading-[9vw]">
          <h1 className="text-[8vw] uppercase text-white text-center">
            Contact
            <div>
              <div>
                <h2>Pour Tout Voir </h2>
                <img src={Image1} />
                <h2>Pour Tout Voir </h2>
                <img src={Image2} />
              </div>
            </div>
          </h1>
        </div> */}

        {/* <div className="link   border-y-2 border-white leading-[9vw]">
          <h1 className="text-[8vw] uppercase text-white text-center">
            Blogue
            <div>
              <div>
                <h2>Pour Tout Voir </h2>
                <img src={Image1} />
                <h2>Pour Tout Voir </h2>
                <img src={Image2} />
              </div>
            </div>
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default Menu;


