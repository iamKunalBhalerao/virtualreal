import { features } from "../constants/index.jsx";

const Feature = () => {
  return (
    <div className="Name relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-100 text-orange-500 rounded-full h-6 text-xl font-medium px-2 py-2 uppercase">
          Feature
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
            {" "}
            your Code
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full bg-neutral-100 rounded-xl pt-10 sm:w-1/2 lg:w-1/3"
          >
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-100 text-orange-500 justify-center items-center rounded-lg">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 text-black mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-10 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
