import React from "react";
import { postData } from "../utils/fetchData";
import { useEffect } from "react";

const Test = (props) => {
  useEffect(() => {
    const myVariable = process.env.API_BASE_1;
    console.log(myVariable);
  }, []);
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
