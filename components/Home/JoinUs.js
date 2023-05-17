import React from "react";
import TitleComponent from "../TitleComponent";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { postData } from "../../utils/fetchData";
import ImageComp from "../ImageComp";
const JoinUs = (props) => {
  const router = useRouter();
  return (
    <div className={styles.join__us__container}>
      <div className={styles.join__background}>
        <ImageComp imageUrl={props.banner} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "1rem 0",
        }}
      >
        <TitleComponent cap mr={10}>
          Join us
        </TitleComponent>
      </div>
      <div className={styles.join__us_text}>
        <p>
          Becoming a partnership, it provides mutual benefit, helps create more
          market.
        </p>
      </div>
      <button
        className={styles.join__us_btn}
        onClick={() => {
          router.push("/join-us");
        }}
      >
        Membership Benifits
      </button>
    </div>
  );
};

export default JoinUs;
