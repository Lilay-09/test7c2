import React, { useEffect, useState } from "react";
import Layout from "../../Sections/Layout";
import SplitContainer from "../../components/SplitContainer";
import BannerLink from "../../components/BannerLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { postData } from "../../utils/fetchData";
import { faAngleRight, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { ToCap } from "../../utils/ToCapitalize";
import styles from "../../styles/Blog.module.css";
import { useRouter } from "next/router";
import Title from "../../components/Title";
import Image from "next/image";
import FilterYear from "../../components/Blog/FilterYear";
import ListCard from "../../components/ListCard";
import ImageComp from "../../components/ImageComp";

const BlogDetails = (props) => {
  // const { blogs_api, blog_details } = props;
  const [blogs_api, setBlogAPI] = useState([]);
  const [blog_details, setBlogDetails] = useState([]);
  const router = useRouter();
  let { id } = router.query;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await postData("blogs-page");
        const json = await response;
        setBlogAPI(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    const fetchBlogDetails = async () => {
      try {
        const response = await postData("blogs-page-details", { id: id });
        const json = await response;
        setBlogDetails(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBlogDetails();
  }, [id]);

  return (
    <Layout>
      {blogs_api.banner ? (
        <BannerLink img={blogs_api.banner.image_url}>
          <Link href="/">Home</Link>
          <FontAwesomeIcon icon={faAngleRight} />
          <Link href="/blog">Blog</Link>
        </BannerLink>
      ) : null}
      <SplitContainer
        left={
          <div className={styles.blog_details_container}>
            {blogs_api.blogs ? (
              <Title cap>{blogs_api.blogs.title}</Title>
            ) : null}

            {blog_details.title ? (
              <div className={styles.blog_details_desc}>
                <p>{blog_details.title}</p>
              </div>
            ) : null}
            {blog_details.date ? (
              <div className="d-flex gap-1 align-items-center">
                <FontAwesomeIcon icon={faCalendarDay} color="#EF7832" />
                {blog_details.date}
              </div>
            ) : null}
            {blog_details.image_url ? (
              <div className={styles.blog_details_img}>
                <ImageComp imageUrl={blog_details.image_url} />
              </div>
            ) : null}
            {
              <div>
                <p>{blog_details.description}</p>
              </div>
            }
          </div>
        }
        right={
          <div className={styles.blog_dt__right}>
            {blogs_api.filter_year ? <FilterYear data={blogs_api} /> : null}
            {blogs_api.blogs ? (
              <ListCard title={"Related Post"}>
                {blogs_api.blogs.sub_list.slice(0, 3).map((item, i) => {
                  return (
                    <div className={styles.related__post} key={item.id}>
                      <Link
                        className={styles.related__post_img}
                        href={`${item.id}`}
                        passHref
                      >
                        <ImageComp imageUrl={item.image_url} />
                      </Link>
                      <div className={styles.related__post_content}>
                        <span>{item.title}</span>
                        <div className="d-flex gap-1 align-items-center">
                          <FontAwesomeIcon
                            icon={faCalendarDay}
                            color="#EF7832"
                          />
                          {item.date}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </ListCard>
            ) : null}
          </div>
        }
      />
    </Layout>
  );
};

export default BlogDetails;

// export const getServerSideProps = async (ctx) => {
//   const { params } = ctx;
//   const { id } = params;
//   const res = await postData("blogs-page");
//   const res_details = await postData("blogs-page-details", { id: id });
//   const api_service = await res;
//   return {
//     props: {
//       blogs_api: api_service.data,
//       blog_details: res_details.data,
//     },
//   };
// };
