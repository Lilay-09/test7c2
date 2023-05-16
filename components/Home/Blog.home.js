import React from "react";
import TitleComponent from "../TitleComponent";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ImageComp from "../ImageComp";
import Link from "next/link";
const Blog = ({ data }) => {
  return (
    <div className={styles.blog_container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TitleComponent cap>Blog</TitleComponent>
      </div>
      <div className={styles.blog__card_container}>
        {data.slice(0, 3).map((item, i) => {
          return (
            <div className={styles.blog__card_content} key={item.id}>
              <div className={styles.blog_card__img}>
                <ImageComp imageUrl={item.image_url} />
              </div>
              <div className={styles.blog_card__text}>
                <span>{item.date}</span>
                {/* <h5>{item.title}</h5> */}
                <Link
                  className={styles.blog__card__btn}
                  href={`/blog/${item.id}`}
                  passHref
                >
                  Read More
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
