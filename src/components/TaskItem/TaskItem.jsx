import React from "react"
import './TaskItem.css'
import { FaTrashAlt } from "react-icons/fa";

const TaskItem = ({task, deleteTask, completeTask})=>{
  return(
    <div className="task-item">
      <div className="task-checkbox">
        <input type='checkbox' onChange={()=>{completeTask(task.id)}} checked={task.status==='active'? '' : 'checked'}/>
      </div>

      <div className="task-title">
        {task.title}
      </div>

      <div className="tesk-delete">
        <button onClick={()=>{deleteTask(task.id)}}><FaTrashAlt /></button>
      </div>      
    </div>
  )
}

export default TaskItem