import React from "react";
import TitleComponent from "../TitleComponent";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import headStyles from "../../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import ImageComp from "../ImageComp";
const Member = ({ data }) => {
  return (
    <div style={{ marginBottom: "5vw" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "1rem 0",
        }}
      >
        <TitleComponent cap>Member</TitleComponent>
      </div>
      <div className={styles.member_card__container}>
        {data.map((item, i) => {
          return (
            <div className={styles.member_card__content} key={item.id}>
              <div className={styles.member_card__img}>
                <ImageComp imageUrl={item.image_url} />
              </div>
              <div className={styles.member__detail_card}>
                <div className={styles.top_nav__lnk}>
                  {item.sub_lists.map((item, i) => {
                    return (
                      <Link
                        className={headStyles.top_nav_lnk_circle_avatar}
                        key={item.id}
                        href={`${item.url}`}
                        target="_blank"
                        passHref
                      >
                        <ImageComp imageUrl={item.image_url} />
                      </Link>
                    );
                  })}
                </div>
                <h3>{item.name}</h3>
                <h5>{item.position}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Member;
