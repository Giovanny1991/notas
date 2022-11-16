import React from "react";

function TodoItem(props) {

    return (
        <>
        {console.log(props)}
           <li>
            {props.num}
           <button>{props.complete ? <i class='bx bx-task'></i> : <i class='bx bx-task-x'></i>}</button>
            <span className="item">{props.description}</span>
            <button><i class='bx bxs-trash'></i></button>

           </li>
        </>
    );

}
export { TodoItem };