import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl font-medium sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR biuld Tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
          {" "}
          for Developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into imersive reality!
      </p>

      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-700 py-3 px-4 mx-3 text-white rounded-md"
        >
          Start for Free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="shadow-md rounded-xl w-1/2 border border-neutral-500 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser dose not support video Tag!
        </video>
        <video
          autoPlay
          loop
          muted
          className="shadow-md rounded-xl w-1/2 border border-neutral-500 mx-4 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser dose not support video Tag!
        </video>
      </div>
    </div>
  );
};

export default Hero;
