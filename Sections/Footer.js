import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../styles/Footer.module.css";
import headStyles from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import ImageComp from "../components/ImageComp";

const Footer = () => {
  const [getMedia, setMedia] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const media = await fetch(
        `https://admin.7c-kh.com/api/social-media/list`,
        {
          method: "POST",
        }
      );
      const social_media = await media.json();
      setMedia(social_media.data);
    };
    fetchData();
  }, []);

  return (
    <footer className={styles.footer_container}>
      <div className={styles.about__company}>
        <div className={styles.footer__logo}>
          <Image
            src="/images/logo.jpg"
            width={300}
            height={300}
            alt="logo"
            priority
          />
        </div>
        <div className={styles.footer__details}>
          <span>
            7C is a small-sized animal feed production enterprise, registered
            with the Ministry of Industry, Science, Technology & Innovation on
            Feb 09, 2022.
          </span>

          <div>
            <p>Phone: +1 5589 55488 55</p>
            <p>Email: info@example.com</p>
          </div>
          <div>
            <p>©Copyright 2023 SevenC, All Rights Reserved</p>
          </div>
        </div>
      </div>
      <div className={styles.useful__lnk}>
        <div className={styles.footer_title}>
          <h3>Useful Link</h3>
        </div>
        <div className={styles.useful__lnk__mnu}>
          <div className={styles.lnk}>
            <FontAwesomeIcon icon={faAngleRight} className={styles.arrw} />
            <Link href="/">Home</Link>
          </div>
          <div className={styles.lnk}>
            <FontAwesomeIcon icon={faAngleRight} className={styles.arrw} />
            <Link href="/">About us</Link>
          </div>
          <div className={styles.lnk}>
            <FontAwesomeIcon icon={faAngleRight} className={styles.arrw} />
            <Link href="/">Our Service</Link>
          </div>
          <div className={styles.lnk}>
            <FontAwesomeIcon icon={faAngleRight} className={styles.arrw} />
            <Link href="/">Blog</Link>
          </div>
          <div className={styles.lnk}>
            <FontAwesomeIcon icon={faAngleRight} className={styles.arrw} />
            <Link href="/">Join Us</Link>
          </div>
          <div className={styles.lnk}>
            <FontAwesomeIcon icon={faAngleRight} className={styles.arrw} />
            <Link href="/">Privacy policy</Link>
          </div>
        </div>
      </div>
      <div className={styles.useful__lnk}>
        <div className={styles.footer_title}>
          <h3>Our Services</h3>
        </div>
        <div className={styles.useful__lnk__mnu}>
          <div className={styles.lnk}>
            <FontAwesomeIcon icon={faAngleRight} className={styles.arrw} />
            <Link href="/">Raw Material</Link>
          </div>
          <div className={styles.lnk}>
            <FontAwesomeIcon icon={faAngleRight} className={styles.arrw} />
            <Link href="/">Manufaturing</Link>
          </div>
          <div className={styles.lnk}>
            <FontAwesomeIcon icon={faAngleRight} className={styles.arrw} />
            <Link href="/">Feed</Link>
          </div>
          <div className={styles.lnk}>
            <FontAwesomeIcon icon={faAngleRight} className={styles.arrw} />
            <Link href="/">Farm</Link>
          </div>
          <div className={styles.lnk}>
            <FontAwesomeIcon icon={faAngleRight} className={styles.arrw} />
            <Link href="/">Profuct</Link>
          </div>
          <div className={styles.lnk}>
            <FontAwesomeIcon icon={faAngleRight} className={styles.arrw} />
            <Link href="/">Shop</Link>
          </div>
        </div>
      </div>
      <div className={styles.useful__lnk}>
        <div className={styles.footer_title}>
          <h3>Contact Info</h3>
        </div>
        <div className={styles.useful__lnk__mnu_}>
          <p>Cras fermentum odio eu feugiat lide par naso tierra videa</p>
          <div className={headStyles.top_nav__lnk}>
            {getMedia.map((item, i) => {
              return (
                <Link
                  className={headStyles.top_nav_lnk_circle_avatar}
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
        </div>
      </div>
    </footer>
  );
};
export default Footer;
