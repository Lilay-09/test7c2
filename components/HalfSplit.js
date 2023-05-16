import React from "react";
import styles from "../styles/Partner.module.css";
import Title from "./Title";
const HalfSplit = ({ title, left, right, opposite }) => {
  return (
    <div className={styles.investment_container}>
      <div>
        <Title cap fs>
          {title}
        </Title>
      </div>
      <div
        className={`${opposite && "stylesContent"} ${
          styles.investment_content
        }`}
      >
        <div className={styles.investment__text}>{left}</div>
        <div className={styles.investment__text}>{right}</div>
      </div>
    </div>
  );
};

export default HalfSplit;
