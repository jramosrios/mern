import React, { useState } from "react";

const Form = (props) => {
    const { dos, setDos } = props
    const [newDoItem, setNewDoItem] = useState("");
    const handelDoSubmit = (e) => {
        e.preventDefault();

        if (newDoItem.length === 0) {
            return;
        }
        const doItem = {
            text: newDoItem,
            done: false
        }
        setDos([...dos, doItem])
        //set input box to be an empty box when submiting
        setNewDoItem("");

        // const newDo = { newDoItem };
    }
    const handleDoItem = (e) => {
        setNewDoItem(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handelDoSubmit}>
                <input onChange={handleDoItem} value={newDoItem} type="text" />
                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}
export default Form