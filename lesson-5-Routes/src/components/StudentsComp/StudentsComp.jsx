import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AboutComp from "../AboutComp/AboutComp";
// const students = [
//   {
//     id: 1,
//     name: "Сергей",
//     age: 15,
//     stat: "Отличник",
//     courser: "JavaScript, C++, C#, Java, Ruby",
//     usp: "5+",
//   },
//   {
//     name: "Максим",
//     age: 15,
//     stat: "Отличник",
//     courser: "JavaScript, C++, C#, Java, Ruby",
//     usp: "5+",
//   },
//   {
//     name: "Иван",
//     age: 15,
//     stat: "Отличник",
//     courser: "JavaScript, C++, C#, Java, Ruby",
//     usp: "5+",
//   },
//   {
//     name: "Анатолий",
//     age: 15,
//     stat: "Отличник",
//     courser: "JavaScript, C++, C#, Java, Ruby",
//     usp: "5+",
//   },
//   {
//     name: "Абыл",
//     age: 15,
//     stat: "Отличник",
//     courser: "JavaScript, C++, C#, Java, Ruby",
//     usp: "5+",
//   },
// ];
const StudentsComp = () => {
  return (
    <>
      <Link to="/about/1">Серега 15 лет</Link> <br />
      <Link to="/about/2">Максим 16 лет</Link> <br />
      <Link to="/about/3">Иван 25 лет</Link> <br />
      <Link to="/about/4">Анатолий 30 лет</Link> <br />
      <Link to="/about/5">Абыл 15 лет</Link>
    </>
  );
};

export default StudentsComp;
