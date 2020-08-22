import React, { useState } from 'react';
import ToDoLists from "./ToDoLists";
import "./index.css";
import Tooltip from '@material-ui/core/Tooltip';

const App=()=> {
const [list,setList]=useState("");
const [items,setItems]=useState([]);



const thoughts = (e)=>{ 
  setList(e.target.value)
}

const Click =()=>{
  setItems((olditems)=>{
    return [...olditems,list]
  });
  setList("");
};

const deleteItem =(id)=>{
setItems((olditems)=>{
  return olditems.filter((arrElem,index)=>{
return index !== id; 
  })
})};

return(
<>
<div className="main_container">
<div className="center_div">
<br/>
<h1>To-Do List</h1>
<br/>
<input type="text" placeholder="Add your thought ☁️" onChange={thoughts} value={list}/>
<Tooltip title="Add">
<button onClick={Click}>
+
</button>
</Tooltip>
<ol>{items.map((itemval,index)=>{
    return(
    <ToDoLists 
    key={index} 
    id={index} 
    text={itemval} 
    onSelect ={deleteItem} 
    />
    );
  })}
</ol>
</div>
</div>
</>
)}

export default App;
