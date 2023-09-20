import React from "react";
import { useState } from "react";
import styles from "./AddComp.module.css";
import "../../assets/style/global.css";

const AddComp = ({ setList }) => {
  const [name, setName] = useState("");
  const [opentime, setOpenTime] = useState("");
  const [closetime, setCloseTime] = useState("");
  const [distance, setDistance] = useState("");
  const AddShop = (e) => {
    e.preventDefault();
    console.log({ name, opentime, closetime, distance });
    setList((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name,
        opentime,
        closetime,
        distance,
      },
    ]);
  };
  return (
    <form className={styles.form}>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Name"
      />
      <input
        onChange={(e) => setOpenTime(e.target.value)}
        value={opentime}
        placeholder="Open Time"
      />

      <input
        onChange={(e) => setCloseTime(e.target.value)}
        value={closetime}
        placeholder="Close Time"
      />
      <input
        onChange={(e) => setDistance(e.target.value)}
        value={distance}
        placeholder="Distance"
      />
      <button
        className="btn"
        onClick={(e) => {
          AddShop(e);
        }}
      >
        Add
      </button>
    </form>
  );
};

export default AddComp;
