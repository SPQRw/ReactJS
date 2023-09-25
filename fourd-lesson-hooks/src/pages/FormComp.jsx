import React from "react";

const publication1 = {
  title: "",
  text: "",
};
const FormComp = ({ publication, preview }) => {
  const Timer = () => {
    setTimeout(() => {
      (publication.title = "qwe"), (publication.text = "rfe");
    }, 1000);
  };

  return (
    <div>
      {publication.title.length !== 0 ? (
        <h1>
          {(publication1.title = publication.title)}
          {(publication1.text = publication.text)}
        </h1>
      ) : (
        <h1>
          {(publication1.title = preview.title)}
          {(publication1.text = preview.text)}
        </h1>
      )}
      <button onClick={Timer()}>Change</button>
    </div>
  );
};

export default FormComp;
