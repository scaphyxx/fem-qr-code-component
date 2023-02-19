import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="max-w-[400px] md:max-w-[440px] mx-auto text-center px-5">
      <div className="bg-white flex flex-col items-center p-5 rounded-2xl">
        <Image
          src="/image-qr-code.png"
          alt="QR Code"
          className="object-contain rounded-2xl"
          width={400}
          height={400}
        />
        <h1 className="text-2xl font-bold px-5 md:px-10 mt-10">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-darkBlue/60 py-10 px-5 md:px-10 -mt-5">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default HomePage;
