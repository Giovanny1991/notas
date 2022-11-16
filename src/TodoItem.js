import React from "react";

function TodoItem(props) {

    return (
        <>
           <li>
           <i class='bx bx-task'></i>

            <span className="item">{props.text}</span>
            
            <i class='bx bxs-trash'></i>
           </li>
        </>
    );

}
export { TodoItem };