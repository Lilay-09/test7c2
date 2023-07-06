import React, { useEffect, useState } from "react";
import Layout from "../Sections/Layout";
import BannerLink from "../components/BannerLink";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import About from "../components/AboutUs/About";
import About_vision from "../components/AboutUs/Vision";
import About_mission from "../components/AboutUs/Mission";
import About_management from "../components/AboutUs/Management";
import { useRouter } from "next/router";
import { ToCap } from "../utils/ToCapitalize";
import { postData } from "../utils/fetchData";
import styles from "../styles/AboutUs.module.css";
import Image from "next/image";
import Title from "../components/Title";
import ImageComp from "../components/ImageComp";

const AboutUs = (props) => {
  const router = useRouter();
  const [about_us_api, setAboutApi] = useState([]);
  // const { about_us_api } = props;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.API_URL}/api/about-us-page`,
          {
            method: "POST",
          }
        );
        const json = await response.json();
        setAboutApi(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout title={router.pathname}>
      {about_us_api.banner ? (
        <BannerLink img={about_us_api.banner.image_url}>
          <Link href="/">Home</Link>
          <FontAwesomeIcon icon={faAngleRight} />
          <Link href="/about-us">{ToCap(router.pathname)}</Link>
        </BannerLink>
      ) : null}
      {about_us_api.about_us ? <About data={about_us_api.about_us} /> : null}
      {about_us_api.vision ? <About_vision data={about_us_api.vision} /> : null}
      {about_us_api.mission ? (
        <About_mission data={about_us_api.mission} />
      ) : null}
      {about_us_api.core_values ? (
        <div className={styles.core__values}>
          <Title cap>Core Values</Title>
          <div className={styles.core__values_content}>
            {about_us_api.core_values.map((item, i) => {
              return (
                <div className={styles._core_values__item} key={item.id}>
                  <div className={styles.__core_val_img}>
                    <ImageComp imageUrl={item.image_url} />
                  </div>
                  <div>{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      {about_us_api.management_team ? (
        <About_management data={about_us_api.management_team} />
      ) : null}
    </Layout>
  );
};
export default AboutUs;
// export const getServerSideProps = async () => {
//   const res = await postData(`about-us-page`);
//   const apiservice = await res;
//   return {
//     props: {
//       about_us_api: apiservice.data,
//     },
//   };
// };
