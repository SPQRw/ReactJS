import { useState } from "react"
import "../../assets/styles/global.css"
import {list as listData} from "./list.data.js"
import CreateList from "./pages/CreateList/CreateList"
import ToDoList from "./pages/TodoList/ToDoList"
const App = () => {
  const [list, setList]=useState(listData)
  console.log(list)

  return (
    <div>
      <CreateList setList={setList}/>
      <h1>To Do List:</h1>
      <div>
        {list.length ? (
          list.map(list => <ToDoList key={list.id} list=
         {list}/>)
        ) : (
        <p>NO LIST</p>
      )}
      </div>
    </div>
  )
}

export default App