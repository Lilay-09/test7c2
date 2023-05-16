import React from "react";
import styles from "../../styles/Partner.module.css";
import Title from "../Title";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import homeStyles from "../../styles/Home.module.css";
import ImageComp from "../ImageComp";

const Partner_investment = ({ d1, d2 }) => {
  return (
    <>
      <div className={styles.investment_container}>
        <div>
          <Title cap fs>
            Investment
          </Title>
        </div>
        <div className={styles.investment_content}>
          <div className={styles.investment__img}>
            <ImageComp imageUrl={d1.image_url} />
          </div>
          <div className={styles.investment__text}>
            <p>{d1.description}</p>
            {d1.sub_list.map((item, i) => {
              return (
                <div
                  className={homeStyles.about__us__content__ls}
                  key={item.id}
                >
                  <span>
                    <FontAwesomeIcon icon={faCheck} fontSize={20} />
                  </span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.investment_container}>
        <div>
          <Title cap fs>
            Service Provider
          </Title>
        </div>
        <div className={styles.investment_content}>
          <div className={styles.investment__img}>
            <ImageComp imageUrl={d2.image_url} />
          </div>
          <div className={styles.investment__text}>
            <p>{d2.description}</p>
            {d2.sub_list.map((item, i) => {
              return (
                <div
                  className={homeStyles.about__us__content__ls}
                  key={item.id}
                >
                  <span>
                    <FontAwesomeIcon icon={faCheck} fontSize={20} />
                  </span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner_investment;
