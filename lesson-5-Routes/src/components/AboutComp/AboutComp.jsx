import React from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";
const AboutComp = () => {
  const params = useParams();

  console.log(params);
  const students = [
    {
      id: 1,
      name: "Сергей",
      age: 15,
      stat: "Отличник",
      courser: "JavaScript, C++, C#, Java, Ruby",
      usp: "5+",
    },
    {
      id: 2,
      name: "Максим",
      age: 15,
      stat: "Троечник",
      courser: "JavaScript",
      usp: "3+",
    },
    {
      id: 3,
      name: "Иван",
      age: 15,
      stat: "Ударник",
      courser: "JavaScript, C++, Ruby",
      usp: "4",
    },
    {
      id: 4,
      name: "Анатолий",
      age: 15,
      stat: "Отличник",
      courser: "JavaScript, C++, C#, Java, Ruby",
      usp: "5+",
    },
    {
      id: 5,
      name: "Абыл",
      age: 15,
      stat: "Двоечник",
      courser: "Не прошел",
      usp: "5+",
    },
  ];
  const Obj = (num) => {
    return (
      <ul>
        <li>{students[num].name}</li>
        <li>{students[num].age}</li>
        <li>{students[num].stat}</li>
        <li>{students[num].courser}</li>
        <li>{students[num].usp}</li>
      </ul>
    );
  };
  return (
    <div>
      {console.log()}
      <h2>userId is 👉️ {params.aboutId}</h2>
      {params.aboutId ? Obj(params.aboutId - 1) : "wewe"}
    </div>
  );
};

export default AboutComp;
