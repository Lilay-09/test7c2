import Image from "next/image";
import React from "react";
import { useState } from "react";

const ImageComp = ({ imageUrl, defaultImg }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
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
        <p>Image not found</p>
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
