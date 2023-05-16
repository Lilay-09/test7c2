import React from "react";
import styles from "../../styles/AboutUs.module.css";
import Image from "next/image";
import Title from "../Title";
import ImageComp from "../ImageComp";
const About_vision = ({ data }) => {
  return (
    <div className={styles.vision_container}>
      <div className={styles.vision__image}>
        <ImageComp imageUrl={data.image_url} />
      </div>
      <div className={styles.vision__text}>
        <div>
          <Title>Vision</Title>
        </div>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default About_vision;
