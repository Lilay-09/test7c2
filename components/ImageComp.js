import Image from "next/image";
import React from "react";
import { useState } from "react";

const ImageComp = ({ imageUrl, defaultImg }) => {
  const [imageError, setImageError] = useState(false);
  let img = "/images/banner2.png";
  const handleImageError = (e) => {
    setImageError(true);
    e.target.onerror = null;
    e.target.src = img;
  };
  return (
    <React.Fragment>
      {!imageError ? (
        <Image
          src={imageUrl ? imageUrl : "/images/banner2.png"}
          onError={handleImageError}
          alt="Image"
          width={3000}
          height={2000}
          priority
        />
      ) : (
        <Image
          src={defaultImg ? defaultImg : `/images/banner2.png`}
          onError={handleImageError}
          alt="Image"
          width={3000}
          height={2000}
          priority
        />
      )}
    </React.Fragment>
    // <Image
    //   src={
    //     imageUrl ? imageUrl : defaultImg ? defaultImg : "/images/banner2.png"
    //   }
    //   alt="Image"
    //   onError={handleImageError}
    //   width={3000}
    //   height={300}
    //   priority
    // />
  );
};
export default ImageComp;
