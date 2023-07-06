import React, { useEffect, useState } from "react";
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
  // const { blogs_api } = props;
  const [blogs_api, setBlogApi] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await postData("blogs-page");
        const json = await response;
        setBlogApi(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout title={router.pathname}>
      {blogs_api.banner ? (
        <BannerLink img={blogs_api.banner.image_url}>
          <Link href="/">Home</Link>
          <FontAwesomeIcon icon={faAngleRight} />
          <Link href="/blog">{ToCap(router.pathname)}</Link>
        </BannerLink>
      ) : null}
      {
        <SplitContainer
          left={
            blogs_api.blogs ? (
              <Blog_blogContainer data={blogs_api.blogs} />
            ) : null
          }
          right={blogs_api.filter_year ? <FilterYear data={blogs_api} /> : null}
        />
      }
    </Layout>
  );
};

export default Blog;
// export const getServerSideProps = async () => {
//   const res = await postData("blogs-page");
//   const api_service = await res;
//   return {
//     props: {
//       blogs_api: api_service.data,
//     },
//   };
// };
