import React from "react";
import RecipeItem from "./recipe-item/RecipeItem";
const App = () => {
  return (
    <>
      <RecipeItem
        recipe={{
          id: 1,
          name: "Lazanya",
        }}
      />
      <RecipeItem
        recipe={{
          id: 2,
          name: "Pasta",
        }}
      />
      <RecipeItem
        recipe={{
          id: 3,
          name: "Pizza",
        }}
      />
    </>
  );
};

export default App;
