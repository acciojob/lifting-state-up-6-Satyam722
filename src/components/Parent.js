import React,{useState} from 'react'
import Child from './Child'


const Parent = () =>{
  
    let[todos,setTodos] = useState([
        {text:'Learn React',completed:false},
        // {text:'Build a React app',completed:false},
        // {text:'Deploy the React app',completed:true}
    ])
    // console.log(todos);
     const handleComplete = (index) =>{
        
        let updateTodos = todos.map((val,i)=>(
            i===index ? {...val,completed:true} : val
        ))
        setTodos(updateTodos);
     }

    return(
        <div>

            <h1>Parent Component</h1>

         <Child
         handleComplete = {handleComplete}
         value={todos}
         ></Child>

        </div>
    )
}


export default Parent;
