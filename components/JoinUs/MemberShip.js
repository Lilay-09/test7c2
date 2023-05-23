import React from "react";
import styles from "../../styles/JoinUs.module.css";

const Join_membership = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.membership__benifits}>
      {data.map((item, i) => {
        return (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <div className={styles.private_acesss_ls}>
              {item.sub_list.map((item, i) => {
                return <p key={item.id}>{item.description}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Join_membership;
