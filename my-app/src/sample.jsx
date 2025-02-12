import {getDatabase,set,ref} from 'firebase/database'
import React from 'react'
import { app } from './component/FireBase/FireBase'

let db=getDatabase(app);
const putdata=()=>{
    set(ref(db,"username/vinay"),{
        id:1,name:"vinay"
    })
}

export default function Sample() {
  return (
    <><p>clicking</p>
    <button onClick={putdata}>clickme</button></>
    
  )
}
