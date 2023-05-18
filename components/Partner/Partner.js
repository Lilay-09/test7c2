import React from "react";
import styles from "../../styles/Partner.module.css";
import Title from "../Title";
import Image from "next/image";
import ImageComp from "../ImageComp";
const Partner__comp = ({ data }) => {
  return (
    <div className={styles.partner__container}>
      <div>
        <Title cap fs>
          Partner
        </Title>
      </div>
      <div className={styles.partner__container_text}>
        <p>{data.description}</p>
      </div>
      <div className={styles.partner__logo_container}>
        {data.sub_list.map((item, i) => {
          return (
            <div className={styles.partner__logo_} key={item.id}>
              <ImageComp imageUrl={item.image_url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partner__comp;
