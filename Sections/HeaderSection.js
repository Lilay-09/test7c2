import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";

import {
  faSearch,
  faBars,
  faFlag,
  faCaretDown,
  faXmark,
  faPhone,
  faMobile,
  faMobilePhone,
  faMobileAndroid,
  faMobileAndroidAlt,
  faEnvelope,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "../components/SideBar";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ActiveLink from "../components/ActiveLink";
import { useRouter } from "next/router";
import { postData } from "../utils/fetchData";
import axios from "axios";
import ImageComp from "../components/ImageComp";

export const HeaderSection = ({ title }) => {
  const router = useRouter();
  const menuRef = useRef(null);
  const menuBodyRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const [data, setData] = useState([]);
  const [getMedia, setMedia] = useState([]);
  const [contact, setContact] = useState([]);
  const [com, setCom] = useState([]);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleImageError = (event) => {
    event.target.src = "/images/banner2.png";
  };

  useEffect(() => {
    axios
      .post(`http://127.0.0.1:8000/api/our-services/limit`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .post(`http://127.0.0.1:8000/api/social-media/list`)
      .then((res) => {
        setMedia(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(`http://127.0.0.1:8000/api/contact-us/list`)
      .then((res) => {
        setContact(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(`http://127.0.0.1:8000/api/company-profile/list`)
      .then((res) => {
        setCom(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (
        !menuRef.current.contains(e.target) &&
        !menuBodyRef.current.contains(e.target)
      ) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler, true);
    document.addEventListener("mousedown", handler, true);
    return () => {
      document.removeEventListener("mousedown", handler, true);
      document.removeEventListener("mousedown", handler, true);
    };
  });

  return (
    <>
      <div>
        <Head>
          <title>{title}</title>
          {/* add logo */}
          <link
            rel="icon"
            href={com.image_url ? com.image_url : "/images/banner2.png"}
          />
        </Head>
        <div className={styles.top_nav__}>
          <div className={styles.top_nav__left}>
            <div className={styles.lef__nav_phone}>
              <FontAwesomeIcon icon={faMobileAndroidAlt} />
              {contact.phone_number}
            </div>
            {/* <div className={styles.lef__nav_mail}>
              <FontAwesomeIcon icon={faEnvelope} />
              Web Mail
            </div> */}
          </div>
          <div className={styles.top_nav__right}>
            <div className={styles.top_nav__lnk}>
              {getMedia.map((item, i) => {
                return (
                  <Link
                    className={styles.top_nav_lnk_circle_avatar}
                    key={item.id}
                    href={item.url}
                    passHref
                    target="_blank"
                  >
                    <ImageComp imageUrl={item.image_url} />
                  </Link>
                );
              })}
            </div>
            <div className={styles.nav__bar_contact_us}>
              <button
                className={styles.nav__bar_contact_us_btn}
                onClick={() => {
                  router.push("/contact-us");
                }}
              >
                Contact us
              </button>
            </div>
          </div>
        </div>

        <div className={styles.nav__bar}>
          <div className={styles.nav__bar_logo}>
            <div
              className={styles.nav_bar_logo_avatar}
              onClick={() => {
                router.push("/");
              }}
            >
              <ImageComp imageUrl={com.image_url} />
              {/* <ImageComp imageUrl="/images/logo.jpg" /> */}
            </div>
          </div>
          <div className={styles.nav__bar_mid_lnk}>
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/about-us">About Us</ActiveLink>
            <ActiveLink href={`/our-service/${data.id}`}>
              Our Service
            </ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <ActiveLink href="/partner">Partner</ActiveLink>
            <ActiveLink href="/join-us">Join Us</ActiveLink>
          </div>

          <div className="responsive__lnk">
            <div className="menubar" ref={menuRef} onClick={handleOpenMenu}>
              <FontAwesomeIcon icon={openMenu ? faXmark : faBars} />
            </div>
          </div>
        </div>
      </div>
      <div className={`menu__bar ${openMenu && "active"}`} ref={menuBodyRef}>
        <div className="menu__bar__body_left">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/about-us">About Us</ActiveLink>
          <ActiveLink href={`/our-service/${data.id}`}>Our Service</ActiveLink>
          <ActiveLink href="/blog">Blog</ActiveLink>
          <ActiveLink href="/partner">Partner</ActiveLink>
          <ActiveLink href="/join-us">Join Us</ActiveLink>
          <ActiveLink href="/contact-us">Contact Us</ActiveLink>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
