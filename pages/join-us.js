import React from "react";
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

const JoinUs = (props) => {
  const router = useRouter();
  const { joinUsApi } = props;
  return (
    <Layout join_us title={router.pathname}>
      <BannerLink img={joinUsApi.banner.image_url}>
        <Link href="/">Home</Link>
        <FontAwesomeIcon icon={faAngleRight} />
        <Link href="/join-us">{ToCap(router.pathname)}</Link>
      </BannerLink>
      <HalfSplit
        title={"Membership Benifits"}
        left={<Join_membership data={joinUsApi.join_us} />}
        opposite
        right={
          <div className={styles.membership__benifits_img}>
            <Image
              src={joinUsApi.join_us.image_url}
              width={3000}
              height={3000}
              alt="client"
              priority
            />
          </div>
        }
      />
    </Layout>
  );
};

export default JoinUs;
export const getServerSideProps = async () => {
  const res = await postData(`join-us-page`);
  const apiservice = await res;
  return {
    props: {
      joinUsApi: apiservice.data,
    },
  };
};
