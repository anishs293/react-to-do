import React from "react"
import Tooltip from '@material-ui/core/Tooltip';

const ToDoLists = (props) =>{
  return  (
        <>
        <div className='todo_style'>
        <Tooltip title="Trash">        
        <i 
        className="fa fa-times" 
        aria-hidden="true" 
        onClick={()=>{
            props.onSelect(props.id)
        }}
        />
        </Tooltip>
         <li>{props.text}</li>
         </div>
         </>
         );
};

export default ToDoLists;