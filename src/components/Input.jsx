import React from 'react'
import {v4 as uuidv4} from "uuid"
import { useContext } from 'react'
import { Inputcontext } from '../context/Inputcontext'
import { useEffect } from 'react'

export const Input = () => {
   let {todos,dispatch,input,setInput} = useContext(Inputcontext);
   useEffect(()=>{
      
    //    console.log(todos)
   },[todos])
   let x1 = {id:uuidv4(),name:input}
   
  return (
    <div>
        <input type="text" onChange={(e)=>{setInput(e.target.value)}} />
        <button onClick={()=>{dispatch({type:"Add",payload:x1})}}>+</button>
    </div>
  )
}
