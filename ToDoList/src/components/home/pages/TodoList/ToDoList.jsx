/* eslint-disable react/prop-types */
import styles from "../../App.module.css";

function ToDoList({ list }) {
  return (
    <div key={list.id} className={styles.item}>
      {/* <div 
        className={styles.image}
        style={{
          backgroundImage:"url(/1.webp)",
        }}
        /> */}
      <div className={styles.info}>
        <ul>
          <li>{list.name}</li>
          <li>{list.todo}</li>
          <li>{list.when}</li>
          <li>{list.intime}</li>
        </ul>
        <button>Read more</button>
      </div>
    </div>
  );
}

export default ToDoList;
