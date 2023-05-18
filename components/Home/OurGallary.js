import React from "react";
import TitleComponent from "../TitleComponent";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import ImageComp from "../ImageComp";
const OurGallary = ({ data }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "1rem 0",
        }}
      >
        <TitleComponent cap mr={10}>
          Our Gallary
        </TitleComponent>
      </div>

      <div className={styles.our__gallary_container}>
        <div className={styles.our__gallary__left}>
          <ImageComp imageUrl={data.image_url} />
        </div>
        <div className={styles.our__gallary__right__container}>
          {data.sub_lists.map((item, i) => {
            return (
              <div className={styles.our__gallary__right__img} key={item.id}>
                <ImageComp imageUrl={item.image_url} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurGallary;
