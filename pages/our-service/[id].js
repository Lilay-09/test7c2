import React from "react";
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
  const { services_lst, ourServices } = props;

  const router = useRouter();
  // const route = router.asPath.replace(router.asPath.slice(0, 13), "");
  return (
    <Layout>
      <BannerLink img={services_lst.banner.image_url}>
        <Link href="/">Home</Link>
        <FontAwesomeIcon icon={faAngleRight} />
        <Link href={`/our-service/${ourServices.id}`}>Our Service</Link>
        <FontAwesomeIcon icon={faAngleRight} />
        <Link href={`/our-service/${ourServices.id}`}>{ourServices.title}</Link>
      </BannerLink>
      <SplitContainer
        left={
          <div className={styles.services__container}>
            <Title cap fs>
              {ourServices.title}
            </Title>
            <div>
              <p>{ourServices.video_text}</p>
            </div>
            <div className={styles.feed_video}>
              {ourServices.video_url !== null && (
                <iframe
                  width="100%"
                  height="100%"
                  src={`${ourServices.video_url}`}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              )}
            </div>
            <div>
              <p>{ourServices.description}</p>
            </div>
            <div className={styles.feed_video}>
              <ImageComp imageUrl={ourServices.image_url} />
            </div>
          </div>
        }
        right={
          <>
            <Title cap fs>
              Related Products
            </Title>
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
          </>
        }
      />
    </Layout>
  );
};

export default OurService;
export const getServerSideProps = async (context) => {
  const { params } = context;
  const { id } = params;
  const res = await postData(`our-services/front/details`, { id: id });
  const res_banner = await postData("our-services-page");
  const apiservice = await res;
  return {
    props: {
      ourServices: apiservice.data[0] ? apiservice.data[0] : apiservice.data,
      services_lst: res_banner.data,
    },
  };
};
