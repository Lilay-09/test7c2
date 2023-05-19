import React, { useEffect, useState } from "react";
import TitleComponent from "../TitleComponent";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { postData } from "../../utils/fetchData";
import ImageComp from "../ImageComp";
import axios from "axios";
const JoinUs = (props) => {
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post(`https://admin.7c-kh.com/api/join-us-page`)
      .then((res) => {
        setData(res.data.data.banner);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.join__us__container}>
      <div className={styles.join__background}>
        <ImageComp imageUrl={data.image_url} />
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
          {data.title
            ? data.title
            : `Becoming a partnership, it provides mutual benefit, helps create more
          market.`}
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
