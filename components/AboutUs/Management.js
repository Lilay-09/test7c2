import React from "react";
import Title from "../Title";
import styles from "../../styles/AboutUs.module.css";
import Image from "next/image";
import ImageComp from "../ImageComp";
const About_management = ({ data }) => {
  const i = ["team1.png", "team.png", "team2.png"];
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "3rem",
        }}
      >
        <Title cap>Mangement Team</Title>
      </div>
      {data.map((item, i) => {
        return (
          <div className={styles.management__container} key={i}>
            <div className={styles.management__title}>
              <span>{item.position}</span>
            </div>
            <div className={styles.management__container_content}>
              <div className={styles.management__conten_img}>
                <ImageComp imageUrl={item.image_url} />
              </div>
              <div className={styles.management__conten_text}>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About_management;
