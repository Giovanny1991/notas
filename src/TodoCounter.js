import React from "react";
import './TodoCounter.css'


function TodoCounter({taskTotal,taskPendiente,taskRealizadas}) {


    const holaClic=(msg)=>{

        alert("Soy un H2");
    }


    return (
        <>
            <h1 onClick={holaClic} 
            className="titulo">TIENES  {taskTotal}  TAREAS INGRESADAS</h1>
            <h2> <b>{taskPendiente}</b> LISTAS PENDIENTES Y <b>{taskRealizadas}</b> REALIZADAS </h2>
        </>
    );

}
export {TodoCounter} ;
