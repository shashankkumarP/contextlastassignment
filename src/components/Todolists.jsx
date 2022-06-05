import React from 'react'
import { useContext } from 'react'
import { Inputcontext } from '../context/Inputcontext'
// import { Todo } from './Todo'
import {v4 as uuidv4} from "uuid"
// import { Display } from '../context/Display'
import { useEffect } from 'react'
import { useState } from 'react'

export const Todolists = () => {
    let {todos,dispatch} = useContext(Inputcontext)
    // let {update} = useContext(Display);
    let handletogle = useState(false);
    // console.log(todos)
    let handlecut = (e)=>{
        // let a = e.target.id
        // console.log(e)
        dispatch({type:"Delete",payload:e})
    }
   
  return (
    <div>
        {todos.map((l)=>(
            <div key={l.id} style={{display:"flex",gap:"20px",justifyContent:"center"}}>
                <input type="checkbox"   style={{marginTop:"20px"}}/>
                <h1>{l.name}</h1>
                <button onClick={()=>{handlecut(l.id)}}>X</button>
            </div>
          
        ))}
      
    </div>
  )
}
