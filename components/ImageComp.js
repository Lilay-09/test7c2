import Image from "next/image";
import React from "react";
import { useState } from "react";

const ImageComp = ({ imageUrl, defaultImg }) => {
  return (
    <Image
      src={
        imageUrl ? imageUrl : defaultImg ? defaultImg : "/images/banner2.png"
      }
      alt="Image"
      //   onError={(e) => {
      //     e.target.onerror = null;
      //     e.target.src = "/images/banner2.png";
      //   }}
      width={3000}
      height={300}
      priority
    />
  );
};
export default ImageComp;
