import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PaginationBtn from "../../../components/PaginationBtn";
import { faArrowRight, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ImageComp from "../../../components/ImageComp";
import Title from "../../../components/Title";
import { useRouter } from "next/router";
import { useState } from "react";
import { postData } from "../../../utils/fetchData";
import serviceStyles from "../../../styles/OurService.module.css";
import styles from "../../../styles/Blog.module.css";
import Layout from "../../../Sections/Layout";
import SplitContainer from "../../../components/SplitContainer";
import FilterYear from "../../../components/Blog/FilterYear";
import ListCard from "../../../components/ListCard";

const Blog_blogContainer = (props) => {
  const { data, dataYear, filterYear } = props;

  const router = useRouter();
  const { query, pathname } = router;
  let q = query.page;
  const [data_item, setData] = useState(data);
  const [currentPage, setCurrentPage] = useState(Number(q) ? Number(q) : 1);
  const [itemsPerPgae, setItemPerPgae] = useState(4);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
    router.replace(`blog/?page=${event.target.id} `);
  };
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
    router.replace(`/blog/?page=${currentPage - 1}`);
  };

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
    router.replace(`/blog/?page=${currentPage + 1}`);
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(data_item.length / itemsPerPgae); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPgae;
  const indexOfFirstItem = indexOfLastItem - itemsPerPgae;
  const currentItems = data_item.slice(indexOfFirstItem, indexOfLastItem);

  // console.log(currentItems);
  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };
  const rederPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={`current_num ${currentPage === number && "active"}`}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  if (q > maxPageNumberLimit) {
    setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  } else if (q <= minPageNumberLimit) {
    setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
  }

  if (currentItems.length <= 0)
    return (
      <div className="error_data_page">
        <span>There is no data in {dataYear}</span>
        <button
          onClick={() => {
            router.back();
          }}
        >
          Back
        </button>
      </div>
    );

  return (
    <Layout width={100}>
      {/* <SplitContainer
        left={
          <div
            className={serviceStyles.service_left_container}
            style={{ width: "100%" }}
          >
            <Title cap fs>
              Blog
            </Title>
            <div>
              <p>{filterYear.blogs.description}</p>
            </div>
            <div className={styles.blog_card_container}>
              {currentItems.map((item, i) => {
                return (
                  <div key={i}>
                    <div className={styles.blog_card_content} key={item.id}>
                      <div className={styles.blog_card__img}>
                        <ImageComp imageUrl={item.image_url} />
                      </div>
                      <div className={styles.blog_card__text}>
                        <span>{item.date}</span>
                        <h5>{item.title}</h5>
                        <Link href={`/blog/${item.id}`} passHref>
                          <button className={styles.blog__card__btn}>
                            Read More
                            <FontAwesomeIcon icon={faArrowRight} />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pagination_key">
              {currentPage !== 1 && (
                <PaginationBtn title="Prev" onClick={handlePrevbtn} />
              )}

              <div className={`pagination_number`}>{rederPageNumbers}</div>

              {currentPage !== pages.length && (
                <PaginationBtn title="Next" onClick={handleNextbtn} />
              )}
            </div>
          </div>
        }
        right={<FilterYear data={filterYear} curYear={dataYear} />}
      /> */}
      sdf
    </Layout>
  );
};

export default Blog_blogContainer;
export const getServerSideProps = async (ctx) => {
  const { params } = ctx;
  const { year } = params;

  const res = await postData("blog/year", {
    year: year,
  });
  const api_service = await res;

  const res1 = await postData("blogs-page");
  const filter_year = await res1;
  return {
    props: {
      data: api_service.data,
      dataYear: year,
      filterYear: filter_year.data,
    },
  };
};
