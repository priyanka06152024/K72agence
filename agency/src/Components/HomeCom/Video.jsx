import HomeVideo from "../../assets/HomeSrc/HomeVideo.mp4";

const Video = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <video
        src={HomeVideo}
        autoPlay
        muted
        loop
        playsInline
         className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Video;