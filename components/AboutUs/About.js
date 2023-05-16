import React from "react";
import Title from "../Title";
import styles from "../../styles/AboutUs.module.css";
import Image from "next/image";
import ImageComp from "../ImageComp";
const About = ({ data }) => {
  return (
    <div className={styles.about_us__container}>
      <div className={styles.about_us__text}>
        <Title>About Us</Title>
        <p>{data.description}</p>
      </div>
      <div className={styles.about_us__img}>
        <ImageComp imageUrl={data.image_url} />
      </div>
    </div>
  );
};

export default About;
