import React from "react";
import { useState } from "react";

const FilterComp = ({ list }) => {
  const [filter, setFilter] = useState("");

  const Filter = () => {
    console.log(filter);
    console.log(list);

    list
      .filter((shop) => shop.name.includes(filter))
      .map((val) => {
        console.log(val.id);
      });
  };

  return (
    <div>
      <input
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
        placeholder="Search"
        style={{ marginTop: "20px" }}
      />
      <button onClick={Filter}>Filter</button>
    </div>
  );
};

export default FilterComp;
