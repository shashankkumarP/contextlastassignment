import React from 'react'
import { useState } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react'

export const Inputcontext = createContext();
let reducer = (todos,{type,payload})=>{
    switch(type)
    {
        case "Add" :{
            return [...todos,payload]
        }
        case "Delete":{
            let tod = todos.filter((l)=>l.id !== payload)
            todos = [...tod];
            return todos
        }
       
    }
}
export const InputProvider = ({children})=>{
    let [input,setInput] = useState("")
    let setinput = (e)=>{
        setInput(e.target.vlaue);
    }
    
    let [todos,dispatch] = useReducer(reducer,[]);

    return <Inputcontext.Provider value={{todos,dispatch,input,setInput}} >{children}</Inputcontext.Provider>
}
