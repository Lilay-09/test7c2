import React from "react";
import styles from "../../styles/JoinUs.module.css";

const Join_membership = ({ data }) => {
  return (
    <div className={styles.membership__benifits}>
      {data.sub_list.map((item, i) => {
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
      {/* <div>
        <h4>Private Access</h4>
        <div className={styles.private_acesss_ls}>
          <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        </div>
      </div>
      <div>
        <h4>Exclusive network</h4>
        <div className={styles.private_acesss_ls}>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident
          </p>
        </div>
      </div>
      <div>
        <h4>INTERNATIONAL LIAISON</h4>
        <div className={styles.private_acesss_ls}>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident
          </p>
        </div>
      </div>
      <div>
        <h4>MEMBERS BENEFITS</h4>
        <div className={styles.private_acesss_ls}>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Join_membership;
