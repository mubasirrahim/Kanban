import React from 'react'
import Nav from './Nav'
import AddTask from '../AddTask'
import TaskContainer from "./TaskContainer"

import io from "socket.io-client"

const socket= io.connect("http://127.0.0.1:5173")

function Task() {
  return (
   <>
   <Nav/>
   <AddTask socket={socket}/>
   <TaskContainer socket={socket}/>
   </>
  )
}

export default Task