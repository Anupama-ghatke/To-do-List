import React, { useState } from "react";

const Input = ({setTask,Task}) => {
    const [Data,setData] = useState("")

    const handleAddTask =() =>{
        const temp =[ ...Task, Data]
        setTask(temp)
        setData("")
    }

    return(
        <div>
            <input placeholder="Input" onChange={event => setData(event.target.value)} value={Data} />
            <button onClick={handleAddTask} >Add Task</button>
        </div>
    )
}

export default Input;