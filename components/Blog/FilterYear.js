import React, { useEffect, useState } from "react";
import ListCard from "../ListCard";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const FilterYear = () => {
  const router = useRouter();
  const [getYear, setYear] = useState();

  return (
    <div style={{ marginTop: "5vw" }}>
      <ListCard title={"Filter News By Year"}>
        <a href={"/blog/year/2022"}>
          <FontAwesomeIcon icon={faCaretRight} />
          <span>2022</span>
        </a>
        <a href={"/blog/year/2023"}>
          <FontAwesomeIcon icon={faCaretRight} />
          <span>2023</span>
        </a>
        <a href={"/blog/year/2024"}>
          <FontAwesomeIcon icon={faCaretRight} />
          <span>2024</span>
        </a>
      </ListCard>
    </div>
  );
};

export default FilterYear;
