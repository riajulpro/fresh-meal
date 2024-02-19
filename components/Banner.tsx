import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        src="https://i.ibb.co/559GnMv/bg-cuisine.jpg"
        alt="banner"
        width={1920}
        height={1080}
        className="max-h-svh object-cover overflow-hidden"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/50 via-[#020817]/50 to-[#020817]/50 flex justify-center items-center">
        <div className="lg:mb-20 text-white">
          <h1 className="text-center text-xl lg:text-5xl font-bold text-shadow">
            We Provide Quality in Food
          </h1>
          <h3 className="lg:text-lg text-center lg:mt-2 font-semibold text-shadow">
            Best in Taste
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
