import React from "react";
import styles from "./ViewComp.module.css";
const ViewComp = ({ list }) => {
  return (
    <div>
      {/* {console.log(props.title)} */}
      <ul className={styles.table}>
        <li>{list.name}</li>
        <li>{list.opentime}</li>
        <li>{list.closetime}</li>
        <li>{list.distance}</li>
        <li>{list.special}</li>
      </ul>
    </div>
  );
};

export default ViewComp;
