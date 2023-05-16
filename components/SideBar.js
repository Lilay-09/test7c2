import React from "react";
import styles from "../styles/SideBar.module.css";
import ActiveLink from "./ActiveLink";
const SideBar = ({ ref, openMenu }) => {
  return (
    <div className={`${styles.sidebar_menu} ${openMenu && styles.active}`}>
      <div className={styles.sidebar_lists} ref={ref}>
        <ActiveLink href="/" color="black">
          Home
        </ActiveLink>
        <ActiveLink href="/product" color="black">
          Product
        </ActiveLink>
        <ActiveLink href="/blog" color="black">
          Blog
        </ActiveLink>
        <ActiveLink href="/clients" color="black">
          Clients
        </ActiveLink>
        <ActiveLink href="/join-us" color="black">
          Join Us
        </ActiveLink>
        <ActiveLink href="/about-us" color="black">
          About Us
        </ActiveLink>
        <ActiveLink href="/contact-us" color="black">
          Contact Us
        </ActiveLink>
      </div>
    </div>
  );
};

export default SideBar;
