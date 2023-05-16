import React from "react";
import Layout from "../../Sections/Layout";
import SplitContainer from "../../components/SplitContainer";
import Blog_blogContainer from "../../components/Blog/Blog";
import FilterYear from "../../components/Blog/FilterYear";
import BannerLink from "../../components/BannerLink";
import Link from "next/link";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { ToCap } from "../../utils/ToCapitalize";
import { postData } from "../../utils/fetchData";

const Blog = (props) => {
  const { blogs_api } = props;
  const router = useRouter();

  return (
    <Layout title={router.pathname}>
      <BannerLink img={blogs_api.banner.image_url}>
        <Link href="/">Home</Link>
        <FontAwesomeIcon icon={faAngleRight} />
        <Link href="/blog">{ToCap(router.pathname)}</Link>
      </BannerLink>
      <SplitContainer
        left={<Blog_blogContainer data={blogs_api.blogs} />}
        right={<FilterYear />}
      />
    </Layout>
  );
};

export default Blog;
export const getServerSideProps = async () => {
  const res = await postData("blogs-page");
  const api_service = await res;
  return {
    props: {
      blogs_api: api_service.data,
    },
  };
};
