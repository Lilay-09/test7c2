import React from "react";
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

const Partner = (props) => {
  const { partnerApi } = props;
  const router = useRouter();
  return (
    <Layout>
      {/* <BannerLink img={partnerApi.banner.image_url}>
        <Link href="/">Home</Link>
        <FontAwesomeIcon icon={faAngleRight} />
        <Link href="/partner">{ToCap(router.pathname)}</Link>
      </BannerLink>
      <Partner__comp data={partnerApi.partner} />
      <Partner_investment
        d1={partnerApi.investment}
        d2={partnerApi.service_provider}
      /> */}
      asdfa
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
