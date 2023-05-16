import Image from "next/image";
import React from "react";
import ImageComp from "./ImageComp";

const BannerLink = ({ children, img }) => {
  return (
    <div className="banner_container">
      <div className="banner_img">
        <ImageComp imageUrl={img} />
      </div>
      <div className="banner_lnk">{children}</div>
    </div>
  );
};

export default BannerLink;
