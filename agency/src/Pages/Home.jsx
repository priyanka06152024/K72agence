import Video from "../Components/HomeCom/Video";
import HomeHeroText from "../Components/HomeCom/HomeHeroText";
import HomeBottamText from "../Components/HomeCom/HomeBottamText";

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <Video />
      </div>

      {/* Content */}
      <div className="relative z-10 h-screen w-screen flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottamText />
      </div>

    </div>
  );
};

export default Home;