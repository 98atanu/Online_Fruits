import React from "react";
import BannerImg from "../../assets/website/banner.jpg";
import AppstoreImg from "../../assets/website/app_store.png";

const bannerStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
};
const AppBanner = () => {
  return (
    <>
      <div className="container my-14">
        <div style={bannerStyle} className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl">
            <div>
                <h1 className="text-2xl text-center sm:text-4xl font font-semibold">Download the App</h1>
            </div>
        </div>
      </div>
    </>
  );
};

export default AppBanner;
