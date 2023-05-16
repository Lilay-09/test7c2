import Head from "next/head";
import React from "react";
import HeaderSection from "./HeaderSection";
import Footer from "./Footer";
import JoinUs from "../components/Home/JoinUs";

const Layout = ({ children, title, width, gap, mbt, gap0, join_us }) => {
  const styles = {
    display: "flex",
    width: `${width}%`,
    margin: `${mbt ? "2" : "0"}rem auto`,
    flexFlow: "column",
    gap: `${gap ? `${gap}` : gap0 ? "0" : "4"}rem`,
    position: "relative",
  };
  return (
    <div>
      <HeaderSection
        title={
          title
            ? `SevenC ~ ${title.replace("-", " ").substring(1).toUpperCase()}`
            : "SevenC"
        }
      />
      <div>{children}</div>
      {!join_us && <JoinUs />}
      <Footer />
    </div>
  );
};

export default Layout;
