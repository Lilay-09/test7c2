import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import TitleComponent from "../TitleComponent";

import React from "react";
import ImageComp from "../ImageComp";

const Home_aboutus = ({ data }) => {
  // if (data === "" || data === null) return <div>Under Development</div>;
  return (
    <div className={styles.about__us}>
      <div>
        <TitleComponent>About us</TitleComponent>
      </div>
      <p>{data.description}</p>
      <div className={styles.about__us__content}>
        <h3>{data.title}</h3>
        <div className={styles.about__us__content_image}>
          <ImageComp imageUrl={data.image_url} />
        </div>
        <p>{data.photo_text}</p>
        <p>{data.video_text}</p>
        {data > 0 &&
          data.sub_lists.map((item, i) => {
            return (
              <div className={styles.about__us__content__ls} key={item.id}>
                <span>
                  <FontAwesomeIcon icon={faCheck} fontSize={20} />
                </span>
                {item.description}
              </div>
            );
          })}
        <div className={styles.about__us__content_video}>
          <iframe width="100%" height="100%" src={data.video}></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home_aboutus;
