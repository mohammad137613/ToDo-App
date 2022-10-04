import React, { useEffect, useState } from "react"
import './ToDo.css'
import CreateTask from '../CreateTask/CreateTask'
import TasksList from '../TasksList/TasksList'
import Filters from '../Filters/Filters'
import fileTasks from '../../Tasks.json'

const ToDo = ()=>{
  const [filter, setFilter] = useState('all')
  const [numOfItems, setNumOfItems] = useState(0)
  const [tasks, setTasks] = useState([])
  const [refreshed, setRefreshed] = useState(0)

  useEffect(()=>{
    let localTasks = localStorage.getItem('tasks') 
    if(localTasks){
      console.log('locals')
      localTasks=JSON.parse(localTasks)
      setTasks(localTasks)
    }
    else{
      setTasks(fileTasks)
    }
  },[])


  useEffect(()=>{
    if (filter==='all'){
      setNumOfItems(tasks.length)
    }
    else{
      let sum=0
      for (let i = 0; i < tasks.length; i++) { 
      if (tasks[i].status===filter){
        sum=sum+1
      }
    }
    setNumOfItems(sum)
    }
    
  }, [filter, tasks])


  useEffect(()=>{
    if (refreshed!==0){
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    
  }, [refreshed, tasks])


  const changeFilter = (newFilter)=>{
    setFilter(newFilter)
  }

  const addTask = (newTask)=>{
    setTasks([newTask, ...tasks])
    setRefreshed(refreshed+1)
  }

  const deleteTask = (taskId)=>{
    
    let index = tasks.findIndex(task=>task.id === taskId)
    let newTasks = tasks
    delete newTasks[index]
    newTasks = newTasks.filter(item => item)
    setTasks(newTasks)
    setRefreshed(refreshed+1)
  }

  const completeTask = (taskId)=>{
    let index = tasks.findIndex(task=>task.id === taskId)
    let newTasks = tasks
    if (newTasks[index].status === 'completed'){
      newTasks[index].status = 'active'
    }
    else{
      newTasks[index].status = 'completed'
    }
    setTasks(newTasks)
    setRefreshed(refreshed+1)
  }

  return(
    <div className="todo">
      <CreateTask addTask={addTask}  />
      <TasksList completeTask={completeTask} tasks={tasks} filter={filter} deleteTask={deleteTask}/>
      <Filters changeFilter={changeFilter} filter={filter} numOfItems={numOfItems}/>
    </div>
  )
  
  
}

export default ToDo