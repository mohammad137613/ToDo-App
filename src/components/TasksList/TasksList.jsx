import React from "react"
import './TasksList.css'
import TaskItem from '../TaskItem/TaskItem'

const TasksList = ({completeTask, tasks, filter, deleteTask})=>{
  
  return(
    <div className="tasks-list">
     
      {tasks.map((item)=>{
        if (filter === 'all' || item.status === filter) {
          return(
            <TaskItem completeTask={completeTask} deleteTask={deleteTask} task={item} key={item.id}/>
          )
        }

        return null
        
      })}
    </div>
  )
}

export default TasksList