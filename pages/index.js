// "use client";
import {
  faArrowRight,
  faCaretRight,
  faCheck,
  faDrawPolygon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "../Sections/Layout";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import TitleComponent from "../components/TitleComponent";
import OurServices from "../components/Home/OurServices";
import Blog from "../components/Home/Blog.home";
import Member from "../components/Home/Member";
import OurGallary from "../components/Home/OurGallary";
import JoinUs from "../components/Home/JoinUs";
import AboutUs from "./about-us";
import Home_aboutus from "../components/Home/Home.AboutUs";
import { postData } from "../utils/fetchData";
import ImageComp from "../components/ImageComp";
const HomeScreen = (props) => {
  const { homeapi } = props;
  const why = homeapi.why_choosing_us;
  const banner = homeapi.home_banner;
  const company_description = homeapi.company_description;

  const [watchVideo, setWatchedVideo] = useState(false);

  return (
    <Layout>
      <div className={styles.top_banner}>
        <div className={styles.top_banner__left}>
          <h1>{banner.title}</h1>
          <p>{banner.description}</p>
          <div className={styles.banner_left__getStart}>
            {/* <button>Get Started</button> */}
            <div
              className={styles.video__play}
              onClick={() => setWatchedVideo(!watchVideo)}
            >
              <div className={styles.play_button}>
                <Image
                  src="/images/polygon.png"
                  width={300}
                  height={300}
                  alt="play_btn"
                  priority
                />
              </div>
              <span>Watch Video</span>
            </div>
          </div>
        </div>

        <div className={styles.top_banner__right}>
          <ImageComp imageUrl={banner.image_url} />
        </div>
        {watchVideo && (
          <div className={styles.watch__video}>
            <div
              className={styles.__exit_btn}
              onClick={() => setWatchedVideo(false)}
            >
              X
            </div>
            <iframe
              width="100%"
              height="100%"
              src={banner.video}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        )}
      </div>
      <div className={styles.value_chain}>
        {homeapi.values_chain.map((item, i) => {
          return (
            <div className={styles.value_chain__card} key={item.id}>
              <div className={styles.value_chain__card_logo}>
                <ImageComp imageUrl={item.image_url} />
              </div>
              <div className={styles.value_chain__card_text}>
                <span>{item.title}</span>
              </div>
            </div>
          );
        })}
      </div>
      <Home_aboutus data={homeapi.about_us} />
      {/* <div className={styles.why_choosing_us}>
        <div className={styles.why_choosing_us__big__card}>
          <div className={styles.why_choosing_us__big__card_title}>
            <h3>{why.title}</h3>
            <div className={styles.lineStyle}></div>
          </div>
          <div className={styles.choosing_us}>
            <h3>{why.sub_title}</h3>
          </div>
          <p>{why.description}</p>
  
        </div>
        <div className={styles.small__card_avatar_container}>
          {why.sub_lists.map((item, i) => {
            return (
              <div
                className={styles.why_choosing_us__small__card}
                key={item.id}
              >
                <div className={styles.small__card_avatar}>
                  <ImageComp imageUrl={item.image_url} />
                </div>
                <div className={styles.small_card__text}>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      <div className={styles.company_service__details}>
        {company_description.map((item, i) => {
          return (
            <div key={item.id}>
              <p>{item.description}</p>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>

      <OurServices data={homeapi.our_services} />

      <Blog data={homeapi.blogs.sub_lists} />
      <Member data={homeapi.team_members} />
      <OurGallary data={homeapi.galleries} />
      <div className={styles.sponser_banner}>
        <span>{homeapi.sponser.text}</span>
      </div>
    </Layout>
  );
};

export default HomeScreen;
export const getServerSideProps = async () => {
  const res = await postData(`home-page`);
  const apiservice = await res;
  return {
    props: {
      homeapi: apiservice.data === null ? "" : apiservice.data,
    },
  };
};
