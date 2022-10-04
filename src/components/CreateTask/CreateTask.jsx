import React, { useState } from "react"
import './CreateTask.css'
import { useRef } from "react"
import { v4 as uuidv4 } from 'uuid';

const CreateTask = ({addTask, deleteTask})=>{
  const [title, setTitle]=useState('')
  const changeTitle = (event)=>{
    setTitle(event.target.value)
  }


const inputTitle = useRef();

const emptyInput = ()=>{
  inputTitle.current.value=''
}  


const handleSubmit = (event)=>{
  event.preventDefault()
  addTask({"id":uuidv4(), "title":title, "status":"active"})
  emptyInput()
}



  return(
    <div className="create-task">
      <form onSubmit={handleSubmit}>
        <input ref={inputTitle} onChange={changeTitle} type='text' placeholder="Add New Task" />
        
        <button type='submit'>
          Add
        </button>
      </form>
      
    </div>
  )
}

export default CreateTask