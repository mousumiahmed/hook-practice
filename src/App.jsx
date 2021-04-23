import React, { Component } from 'react'
import Header from "./components/Header.jsx";
import Task from './components/Task.jsx';
import AddTask from "./components/AddTask.jsx";
import { useState, useEffect } from 'react';

const App=()=> {
  const [showadd,setShowAdd] = useState(false)
  const [tasks,setTasks] = useState([]);

  useEffect(()=>{
    const fatchtask = async()=>{
      const res=await fetch('http://localhost:5000/tasks')
      const data= await res.json();
      setTasks(data)
    }
    fatchtask()
  },[])

  const onAdd=async(task)=>{

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])
    //const id=Math.floor(Math.random()*10000)+1
   // const newTask ={id, ...ta}
    //setTasks([...tasks,data])

}
 
  const onDelete=async(id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
    setTasks(tasks.filter((task)=>task.id !==id))
}

const onDobbleClickToggle=(id)=>{

setTasks(tasks.map((val)=>{
  if(val.id===id){
    val.remainder=!val.remainder
    //return val;
  }
  return val;
}))


    //?{...tasks,tasks.remainder:!tasks.remainder}:tasks)
  //setTasks(tasks.map((task)=>task.id ==id)?{...tasks,remainder:!tasks.remainder}:tasks)

}
    return (
      <div className='container'>
        <Header onAdd={()=>setShowAdd(!showadd)} showaddvalue={showadd}/>
        {showadd && <AddTask onAdd={onAdd}/>}
        <Task task={tasks} onDelete={onDelete} ondobbleClick={onDobbleClickToggle}/>
      </div>
    )
  }

export default App

