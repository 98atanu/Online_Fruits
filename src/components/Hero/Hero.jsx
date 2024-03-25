import React, { useState } from "react";
import OrangeImg from "../../assets/orangebg.png";
import Navbar from "../Navbar/Navbar";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <main className="md:px-12 md:py-6 bg-primaryDark">
      <section className=" relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
        <div className="container">
          {/* Navbar */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px]">
            {/* text section */}
            <div className=" text-white mt-[100px] md:mt-0 p-4 space-y-4">
              <h1 className="text-3xl pl-6 md:pl-14">01______</h1>
              <h1 className="text-5xl font-bold uppercase text-shadow">
                A Healthy Fruit
              </h1>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
                aliquid praesentium amet blanditiis ipsa nihil!
              </p>
              <button className="secondary-btn">Shop Now</button>
            </div>
            {/* image section */}
            <div>
              <img
                className="relative z-10 img-shadow w-[400px]"
                src={OrangeImg}
                alt="Not Found"
              />
            </div>
            {/* blank div section */}
            <div className=" md:hidden "></div>
          </div>
        </div>
        {/* background large text */}
        <h1 className="large-text ">Orange</h1>
        {/* sidebar section */}
        {
            sidebar && (
                <div className="absolute top-0 right-0 w-[120px] h-full bg bg-gradient-to-b  from-primary to-secondary z-10">
                    <div className="w-full h-full text-white flex flex-col justify-center items-center gap-6">
                        {/* line */}
                        <div className="w-[1px] h-[70px] bg-white"></div>
                        <div className="inline-block p-2 rounded-full cursor-pointer border border-white"><FaFacebookF className="text-2xl" /></div>
                        <div className="inline-block p-2 rounded-full cursor-pointer border border-white"><FaInstagram className="text-2xl" /></div>
                        <div className="inline-block p-2 rounded-full cursor-pointer border border-white"><FaLinkedinIn className="text-2xl" /></div>
                        {/* line */}
                        <div className="w-[1px] h-[70px] bg-white"></div>
                    </div>
                </div>
            )
        }
      </section>
    </main>
  );
};

export default Hero;
