import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Components/Todo';

function App() {
  const title = "this is simple"
  const [getData,setGetData] = useState([])
  const handleGetData = (data) =>{
  setGetData(data)
  }
  useEffect(() =>{
    console.log("todo",getData)
  }
  )
  return (
    <div className="App">
      <Todo title = {title} handleGetData = {handleGetData}/>
    </div>
  );
}

export default App;
