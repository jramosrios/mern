import React, { useState } from "react";

const Display = (props) => {
    const { dos, setDos } = props

    const deleteDo = (newDoItem) => {
        const updatedToDoList = dos.filter((d) => newDoItem !== d)
        setDos(updatedToDoList)
    }
    const handleCompletion = (newDoItem) => {
        const completedToDo = dos.map((d) => {
            if (newDoItem === d) {
                d.done = !d.done
            }
            return d;
        })
        setDos(completedToDo)
    }
    return (
        <div>
            {
                dos.map((d, idx) => {
                    const todoClass = [];
                    if (d.done) {
                        todoClass.push('completedDo')
                    }
                    return (
                        <div key={idx}>
                            <span className={todoClass.join("")} >{d.text}</span>
                            <input onChange={() => handleCompletion(d)} defaultChecked={d.done} type="checkbox" name='done' />
                            <button onClick={() => deleteDo(d)}>Delete</button>
                        </div>
                    )
                })
            }
        </div >
    )
}
export default Display;