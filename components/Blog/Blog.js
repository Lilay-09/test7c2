import React from "react";
import Title from "../Title";
import serviceStyles from "../../styles/OurService.module.css";
import styles from "../../styles/Blog.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import PaginationBtn from "../PaginationBtn";
import { useState } from "react";
import ImageComp from "../ImageComp";
const Blog_blogContainer = ({ data }) => {
  const cards = [{ i: 1 }, { i: 1 }];
  const router = useRouter();
  const { query, pathname } = router;
  let q = query.page;

  const [data_item, setData] = useState(data.sub_list);
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
  if (data.sub_list.length <= 0) return <div>Page Under Development</div>;
  return (
    <div
      className={serviceStyles.service_left_container}
      style={{ width: "100%" }}
    >
      <Title cap fs>
        Blog
      </Title>
      <div>
        <p>{data.description}</p>
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
    // <div
    //   className={serviceStyles.service_left_container}
    //   style={{ width: "100%" }}
    // >
    //   <Title cap fs>
    //     Blog
    //   </Title>
    //   <div>
    //     <p>
    //       The below screenshot shows the performance calculations performed by
    //       Chrome on a site I work on which has a gallery of about 100 images.
    //       The left-hand side shows the calculations when width and height are
    //       provided, and on the right when they are not.
    //     </p>
    //   </div>
    //   <div className={styles.blog_card_container}>
    //     {cards.map((item, i) => {
    //       return (
    //         <div className={styles.blog_card_content} key={i}>
    //           <div className={styles.blog_card__img}>
    //             <Image
    //               src="/images/farm1.png"
    //               width={3000}
    //               height={3000}
    //               alt="client"
    //               priority
    //             />
    //           </div>
    //           <div className={styles.blog_card__text}>
    //             <span>Tue, Septem 15</span>
    //             <h5>
    //               Eum ad dolor et. Autem autfugiatdebitisvoluptat consequuntur
    //               sit
    //             </h5>
    //             <button className={styles.blog__card__btn}>
    //               Read More
    //               <FontAwesomeIcon icon={faArrowRight} />
    //             </button>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Blog_blogContainer;
