import React from "react";
import Layout from "../../Sections/Layout";
import BannerLink from "../../components/BannerLink";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Contact.module.css";
import Google_map from "../../components/Google_map";
import Title from "../../components/Title";
import { useRouter } from "next/router";
import { ToCap } from "../../utils/ToCapitalize";
import Image from "next/image";
const ContactUs = () => {
  const router = useRouter();

  return (
    <Layout join_us title={router.pathname}>
      <BannerLink
        img={"https://admin.7c-kh.com/uploads/public/1_data/about_us/images/"}
      >
        <Link href="/">Home</Link>
        <FontAwesomeIcon icon={faAngleRight} />
        <Link href="/contact-us">{ToCap(router.pathname)}</Link>
      </BannerLink>
      <div className={styles.contact__us_map}>
        <div style={{ marginBottom: "3vw" }}>
          <Title cap>Contact us</Title>
        </div>
        <Google_map />
      </div>
      <div className={styles.contact__via_any}>
        <div className={styles.contact__thing}>
          <div className={styles.contact_logo}>
            <Image
              src={`/images/${"address.png"}`}
              width={200}
              height={200}
              alt={""}
              priority
            />
          </div>
          <div className={styles.contact_text}>
            <span>Address</span>
            <p>A108 Adam Street, Phnom Peng, NY 535022</p>
          </div>
        </div>
        <div className={styles.contact__thing}>
          <div className={styles.contact_logo}>
            <Image
              src={`/images/${"mail1.png"}`}
              width={200}
              height={200}
              alt={""}
              priority
            />
          </div>
          <div className={styles.contact_text}>
            <span>Email Us</span>
            <p>contact@example.com</p>
          </div>
        </div>
        <div className={styles.contact__thing}>
          <div className={styles.contact_logo}>
            <Image
              src={`/images/${"phone.png"}`}
              width={200}
              height={200}
              alt={""}
              priority
            />
          </div>
          <div className={styles.contact_text}>
            <span>Call Us</span>
            <p>108 535022</p>
          </div>
        </div>
        <div className={styles.contact__thing}>
          <div className={styles.contact_logo}>
            <Image
              src={`/images/${"share.png"}`}
              width={200}
              height={200}
              alt={"mail1.png"}
              priority
            />
          </div>
          <div className={styles.contact_text}>
            <span>Opening Hours</span>
            <p>Mon-Sat: 11Am - 23PM; Sunday:Closed</p>
          </div>
        </div>
      </div>

      <form className={styles.form__msg}>
        <div className={styles.name__email}>
          <div>
            <input type="text" placeholder="Your Name" />
          </div>
          <div>
            <input type="text" placeholder="Your Email" />
          </div>
        </div>
        <div className={styles._subject}>
          <input type="text" placeholder="Subject" />
        </div>
        <div className={styles.msg__text}>
          <textarea placeholder="Message"></textarea>
        </div>

        <div className={styles.btn__send_msg}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </Layout>
  );
};

export default ContactUs;
