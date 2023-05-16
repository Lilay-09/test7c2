import React from "react";
import styles from "../../styles/AboutUs.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Title from "../Title";
import ImageComp from "../ImageComp";
const About_mission = ({ data }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "2vw" }}>
      <div style={{ alignSelf: "center" }}>
        <Title>Mission</Title>
      </div>
      <div className={styles.about__mission}>
        <div className={styles.about__mission_lnk}>
          {data.sub_list.map((item, i) => {
            return (
              <div className={styles.about__mission_lnk_text} key={item.id}>
                <span>
                  <FontAwesomeIcon icon={faLink} className={styles.lnk_icon} />
                </span>
                <span>{item.description}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.about__mission_img}>
          <ImageComp imageUrl={data.image_url} />
        </div>
      </div>
    </div>
  );
};

export default About_mission;
