import ItemComp from "./pages/ItemComp";
import KorzComp from "./pages/KorzComp";
import styles from "./App.module.css";
function App() {
  const Item = () => {};
  const Korz = () => {};
  // {
  //   condition && (content = <ItemComp />);
  // }
  // {
  //   condition2 && (content = <KorzComp />);
  // }
  return (
    <>
      <nav>
        <button onClick={Item}>Items</button>
        <button onClick={Korz}>Korzina</button>
      </nav>
      <div className={styles.item}>
        <ItemComp />
      </div>
      <div
        style={{
          display: "none",
        }}
      >
        <KorzComp />
      </div>
    </>
  );
}

export default App;
