import React, { useEffect } from "react";
import Layout from "../../Sections/Layout";
import BannerLink from "../../components/BannerLink";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Partner__comp from "../../components/Partner/Partner";
import { useRouter } from "next/router";
import { ToCap } from "../../utils/ToCapitalize";
import { postData } from "../../utils/fetchData";
import Partner_investment from "../../components/Partner/Investment_ServiceProvider";
import { useState } from "react";

const Partner = (props) => {
  const [partnerApi, setPartnerAPI] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.API_URL}/api/partner-page`,
          {
            method: "POST",
          }
        );
        const json = await response.json();
        setPartnerAPI(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      {partnerApi.banner ? (
        <BannerLink img={partnerApi.banner.image_url}>
          <Link href="/">Home</Link>
          <FontAwesomeIcon icon={faAngleRight} />
          <Link href="/partner">{ToCap(router.pathname)}</Link>
        </BannerLink>
      ) : null}
      {partnerApi.partner ? <Partner__comp data={partnerApi.partner} /> : null}
      {partnerApi.investment && partnerApi.service_provider ? (
        <Partner_investment
          d1={partnerApi.investment}
          d2={partnerApi.service_provider}
        />
      ) : null}
    </Layout>
  );
};

export default Partner;
// export const getServerSideProps = async () => {
//   const res = await postData(`partner-page`);
//   const apiservice = await res;
//   return {
//     props: {
//       partnerApi: apiservice.data,
//     },
//   };
// };
