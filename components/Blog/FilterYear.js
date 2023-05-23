import React, { useEffect, useState } from "react";
import ListCard from "../ListCard";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const FilterYear = ({ data, curYear }) => {
  const router = useRouter();

  return (
    <div style={{ marginTop: "5vw" }}>
      <ListCard title={"Filter News By Year"}>
        {data.filter_year.map((item, i) => {
          return (
            <a
              href={`/blog/year/${Number(item)}`}
              key={i}
              className={`nav-link ${curYear === item ? "add_active" : null}`}
            >
              <FontAwesomeIcon icon={faCaretRight} />
              <span>{item.year}</span>
            </a>
          );
        })}
      </ListCard>
    </div>
  );
};

export default FilterYear;
