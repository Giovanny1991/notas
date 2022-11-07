import React from "react";
// import { TodoItem } from "./TodoItem";

function TodoList(props) {

    return (
        <>
        <section className="section">
         <ul>
            {props.children}
         </ul>
         </section>
        </>
    );

}
export { TodoList };