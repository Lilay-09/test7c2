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
import { postData } from "../../utils/fetchData";
const ContactUs = (props) => {
  const router = useRouter();
  const { banner, contact_us } = props;
  return (
    <Layout join_us title={router.pathname}>
      <BannerLink img={banner.image_url}>
        <Link href="/">Home</Link>
        <FontAwesomeIcon icon={faAngleRight} />
        <Link href="/contact-us">{ToCap(router.pathname)}</Link>
      </BannerLink>
      <div className={styles.contact__us_map}>
        <div style={{ marginBottom: "3vw" }}>
          <Title cap>Contact us</Title>
        </div>
        <Google_map src={contact_us.map_url} />
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
            <p>{contact_us.address}</p>
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
            <p>{contact_us.email}</p>
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
            <p>{contact_us.phone_number}</p>
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
            <p>{contact_us.open_hours}</p>
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
export const getServerSideProps = async () => {
  const res = await postData(`contact-us-banner/get`);
  const res1 = await postData(`contact-us/list`);
  const apiservice = await res;
  const contact = await res1;
  return {
    props: {
      banner: apiservice.data,
      contact_us: contact.data,
    },
  };
};