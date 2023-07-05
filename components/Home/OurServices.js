import React from "react";
import styles from "../../styles/Home.module.css";
import TitleComponent from "../TitleComponent";
import Image from "next/image";
import Link from "next/link";
import ImageComp from "../ImageComp";

const OurServices = ({ data }) => {
  return (
    <div className={styles.our__services}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TitleComponent mr={20}>Our services</TitleComponent>
      </div>
      <div className={styles.services__card__container}>
        {data.map((item, i) => {
          return (
            <div className={styles.card__content} key={item.id}>
              <Link
                className={styles.services__content__img}
                href={`/our-service/${item.id}`}
                passHref
              >
                <ImageComp imageUrl={item.image_url} defaultImg={"/images"} />
              </Link>
              <div className={styles.services__content__text}>
                <h5>{item.title}</h5>
                <p>{item.description.substring(0, 120)}...</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
