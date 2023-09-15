/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from "react";
import styles from "./CreateList.module.css";
const CreateList = ({ setList }) => {
  const [name, setName] = useState("");
  const [todo, setTodo] = useState("");
  const [when, setWhen] = useState("");
  const [intime, setInTime] = useState("");

  const CreateList = (e) => {
    e.preventDefault();
    console.log({ name, todo, when, intime });
    setList((prev) => [
      ...prev,
      { id: prev.length + 1, name, todo, when, intime },
    ]);
  };

  return (
    <form className={styles.form}>
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        placeholder="ToDo"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <input
        placeholder="When"
        onChange={(e) => setWhen(e.target.value)}
        value={when}
      />
      <input
        placeholder="in Time"
        onChange={(e) => setInTime(e.target.value)}
        value={intime}
      />

      <button className="btn" onClick={(e) => CreateList(e)}>
        Create
      </button>
    </form>
  );
};

export default CreateList;
