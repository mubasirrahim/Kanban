import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {DragDropContext } from "react-beautiful-dnd"

function Container({socket}) {
  const [tasks, setTasks] = useState({});

useEffect(() => {
  const getData=  async()=>{
    try{
      const data = await fetch("http://localhost:5000/api");
      const json= await data.json();
      console.log(json);
    } catch (error){
      console.error(error);
    }
  }
 getData();
  
}, []);

const handleDragEnd=()=>{

}


  return (
    <div className="container">
      <DragDropContext onDragEnd={handleDragEnd}>
      <div className="pending__wrapper">
        <div className="pending__items">
          <p>Debug the Notification center</p>
          <p className='comment'>
            <Link to="/comments">2 comments</Link>
          </p>
        </div>
      </div>
    
      <div className="ongoing__wrapper">
        <div className="ongoing__items">
          <p>Ongoing Tasks</p>
          <p className='comment'>
            <Link to="/comments">2 comments</Link>
          </p>
        </div>
      </div>
      <div className="completed__wrapper">
        <div className="completed__items">
          <p>Completed Tasks</p>
          <p className='comment'>
            <Link to="/comments">2 comments</Link>
          </p>
        </div>
      </div>
      </DragDropContext>
    </div>
 
    
  )
}

export default Container