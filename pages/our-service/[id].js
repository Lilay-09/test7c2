import React, { useEffect } from "react";
import Layout from "../../Sections/Layout";
import BannerLink from "../../components/BannerLink";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/OurService.module.css";
import Title from "../../components/Title";
import ListCard from "../../components/ListCard";
import { useRouter } from "next/router";
import { ToCap } from "../../utils/ToCapitalize";
import { useState } from "react";
import BodyActiveLink from "../../components/BodyActiveLink";
import SplitContainer from "../../components/SplitContainer";
import { postData } from "../../utils/fetchData";
import Image from "next/image";
import ImageComp from "../../components/ImageComp";
const OurService = (props) => {
  // const { services_lst, ourServices } = props;
  const [services_lst, setServiceLst] = useState([]);
  const [ourServices, setOurServices] = useState([]);
  const router = useRouter();
  let { id } = router.query;
  useEffect(() => {
    const fetchDataBanner = async () => {
      try {
        const response = await fetch(
          `${process.env.API_URL}/api/our-services-page`,
          {
            method: "POST",
          }
        );
        const json = await response.json();
        setServiceLst(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchServiceitems = async () => {
      try {
        const response = await fetch(
          `${process.env.API_URL}/api/our-services/front/details`,
          {
            method: "POST",
            body: JSON.stringify({ id: id }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const json = await response.json();
        setOurServices(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchServiceitems();
    fetchDataBanner();
  }, [id]);
  console.log(ourServices);
  // const route = router.asPath.replace(router.asPath.slice(0, 13), "");
  return (
    <Layout>
      {services_lst.banner ? (
        <BannerLink img={services_lst.banner.image_url}>
          <Link href="/">Home</Link>
          <FontAwesomeIcon icon={faAngleRight} />
          {<Link href={`/our-service/${id}`}>Our Service</Link>}
          <FontAwesomeIcon icon={faAngleRight} />
          <Link href={`/our-service/${ourServices.id}`}>
            {ourServices.title}
          </Link>
        </BannerLink>
      ) : null}
      <SplitContainer
        left={
          <div className={styles.services__container}>
            {ourServices[0] ? (
              <Title cap fs>
                {ourServices[0].title}
              </Title>
            ) : null}
            {ourServices[0] ? (
              <div>
                <p>{ourServices[0].video_text}</p>
              </div>
            ) : null}
            {ourServices[0] ? (
              <div className={styles.feed_video}>
                {console.log(ourServices[0].video_url)}
                <iframe
                  width="100%"
                  height="100%"
                  src={`${ourServices[0]?.video_url}`}
                  allowFullScreen
                ></iframe>
              </div>
            ) : null}
            {ourServices[0] ? (
              <div>
                <p>{ourServices[0].description}</p>
              </div>
            ) : null}
            {ourServices[0] ? (
              <div className={styles.feed_video}>
                <ImageComp imageUrl={ourServices[0].image_url} />
              </div>
            ) : null}
          </div>
        }
        right={
          <>
            <Title cap fs>
              Related Products
            </Title>
            {services_lst.services_lists ? (
              <ListCard title="Services">
                {services_lst.services_lists.map((item, i) => {
                  return (
                    <BodyActiveLink
                      href={`/our-service/${item.id}`}
                      key={item.id}
                    >
                      <FontAwesomeIcon icon={faCaretRight} />
                      <span>{item.title}</span>
                    </BodyActiveLink>
                  );
                })}
              </ListCard>
            ) : null}
          </>
        }
      />
    </Layout>
  );
};

export default OurService;
