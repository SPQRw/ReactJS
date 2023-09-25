import ExampleComp from "./pages/ExampleComp";
import FormComp from "./pages/FormComp";

function App() {
  const publication = {
    title: "",
    text: "",
  };
  const preview = {
    title: "zxc",
    text: "zxc",
  };

  // const condition = true;
  // const condition2 = false;
  const mode = "gallery";
  let content;
  // {
  //   condition && (content = <ExampleComp text="example 1" />);
  // }
  // {
  //   condition2 && (content = <ExampleComp text="example 2" />);
  // }
  switch (mode) {
    case "gallery":
      content = <ExampleComp text="gallery" />;
  }
  return (
    <>
      <FormComp publication={publication} preview={preview}></FormComp>
      {/* 
      {condition ? (
        <ExampleComp text="Example" />
      ) : (
        <ExampleComp text="Example 2" />
      )} */}
      {/* 
      {condition && <ExampleComp text="example 1" />}
      {condition2 && <ExampleComp text="example 2" />} */}
      {content}
    </>
  );
}

export default App;
