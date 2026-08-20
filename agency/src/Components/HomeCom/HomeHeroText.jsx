import React from "react";
import Video from "./video";
import HomeVideo from "../../assets/HomeSrc/video.mp4";

const HomeHeroText = () => {
  return (
    <div className="text-center">
      <div className="font-['DM_Sans'] text-white text-[9vw] pt-2 uppercase leading-[8vw]">
        L'étincelle
      </div>

      <div className="flex justify-center items-center gap-[1vw] font-['DM_Sans'] text-white text-[9vw] pt-2 uppercase leading-[8vw]">
        <span>qui</span>

        <div className="w-[15vw] h-[7vw] rounded-full overflow-hidden  ">
          <video
                  src={HomeVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                   className="w-full h-full rounded-full object-cover"
                />
        </div>

        <span>génère</span>
      </div>

      <div className="font-['DM_Sans'] text-white text-[9vw] pt-2 uppercase leading-[8vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
