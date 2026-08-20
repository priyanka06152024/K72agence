import React from "react";
import { Link } from "react-router-dom";

const HomeBottamText = () => {
  return (
    <div className="font-['DM_Sans'] flex gap-5 justify-center items-center text-white leading-tight pb-2">
      
      <Link
        className="text-[6vw] hover:text-[#D3FD50] border-[5px] hover:border-[#D3FD50] px-8 rounded-full"
        to="/Projects"
      >
        PROJECTS
      </Link>

      <Link
        className="text-[6vw] hover:text-[#D3FD50] border-[5px] hover:border-[#D3FD50] px-8 rounded-full"
        to="/Agence"
      >
        AGENCE
      </Link>

    </div>
  );
};

export default HomeBottamText;
