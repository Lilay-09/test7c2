import React, { useEffect, useState } from "react";
import Layout from "../Sections/Layout";
import HalfSplit from "../components/HalfSplit";
import styles from "../styles/JoinUs.module.css";
import Image from "next/image";
import Join_membership from "../components/JoinUs/MemberShip";
import { useRouter } from "next/router";
import BannerLink from "../components/BannerLink";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ToCap } from "../utils/ToCapitalize";
import { postData } from "../utils/fetchData";
import ImageComp from "../components/ImageComp";

const JoinUs = (props) => {
  const router = useRouter();
  const [joinUsApi, setJoinUsApi] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await postData("join-us-page");
        const json = await response;
        setJoinUsApi(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  });

  return (
    <Layout join_us>
      {joinUsApi.banner ? (
        <BannerLink img={joinUsApi.banner.image_url}>
          <Link href="/">Home</Link>
          <FontAwesomeIcon icon={faAngleRight} />
          <Link href="/join-us">{ToCap(router.pathname)}</Link>
        </BannerLink>
      ) : null}

      <HalfSplit
        title={"Membership Benifits"}
        left={
          joinUsApi.join_us ? (
            <Join_membership data={joinUsApi.join_us} />
          ) : null
        }
        opposite
        right={
          joinUsApi.join_img ? (
            <div className={styles.membership__benifits_img}>
              <ImageComp imageUrl={joinUsApi.join_img.image_url} />
            </div>
          ) : null
        }
      />
    </Layout>
  );
};

export default JoinUs;
// export const getServerSideProps = async () => {
//   const res1 = await postData("join-us-page");
//   const api_service = await res1;

//   return {
//     props: {
//       joinUsApi: api_service.data,
//     },
//   };
// };
