import React, { useEffect } from "react"
import './Filters.css'
import { useRef } from "react"

const Filters = ({changeFilter, filter, numOfItems})=>{

  const allFilter = useRef();
  const activeFilter = useRef();
  const completedFilter = useRef();

  useEffect(()=>{
    if (filter==='all'){
      allFilter.current.className='active'
      completedFilter.current.className=''
      activeFilter.current.className=''
    }
    else if(filter==='completed'){
      allFilter.current.className=''
      completedFilter.current.className='active'
      activeFilter.current.className=''
    }
    else if(filter==='active'){
      allFilter.current.className=''
      completedFilter.current.className=''
      activeFilter.current.className='active'
    }
  }, [filter])

  return(
    <div className="filters">
      <div className="num-of-items">{numOfItems} Items</div>
      <div className="filter-buttons">
        <button onClick={()=>{changeFilter('all')}} ref={allFilter}>All</button>
        <button onClick={()=>{changeFilter('active')}} ref={activeFilter}>Active</button>
        <button onClick={()=>{changeFilter('completed')}} ref={completedFilter}>Completed</button>
      </div>
    </div>
  )
}

export default Filters