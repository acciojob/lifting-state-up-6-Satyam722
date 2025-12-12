import React from 'react'


const Child = ({value, handleComplete }) =>{

    

    return(
        <div>
           
           <h3>Child Component</h3>

            {
                value.map((val,index) =>(
                    <ul>
                       <li key={index}>{val.text}{val.completed===true && " "}
                        {!val.completed &&
                        <button onClick={()=>(
                            handleComplete(index)
                        )}>Complete</button>
                    }
                       </li>

                    </ul>
                ))
            }

        </div>
    )
}


export default Child;
