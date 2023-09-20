import { useState } from "react";
import React from "react";
import AddComp from "./Add/AddComp";
import ViewComp from "./View/ViewComp";
import { list as listData } from "./List";
import "../assets/style/global.css";
import FilterComp from "./Filter/FilterComp";

const App = () => {
  const [list, setList] = useState(listData);
  return (
    <div>
      <AddComp setList={setList}></AddComp>
      {list.map((list) => {
        return <ViewComp key={list.id} list={list} />;
      })}
      <FilterComp key={list.id} list={list}></FilterComp>
    </div>
  );
};

export default App;
