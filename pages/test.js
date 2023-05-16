import React from "react";
import { postData } from "../utils/fetchData";
import { useEffect } from "react";

const Test = (props) => {
  return <div>Test</div>;
};

export default Test;
export const getServerSideProps = async () => {
  const res = await postData(`home-page`);
  const apiservice = await res;
  return {
    props: {
      homeapi: apiservice.data === null ? "" : apiservice.data,
    },
  };
};
