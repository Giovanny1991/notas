import React from "react";

function TodoSearch({valor,setValor}) {

    const onChangeinput = (eve) => {
        setValor(eve.target.value);
    }

    return (
        <>
            <input onChange={onChangeinput} className="search" type="text" placeholder="Buscar..." />
            {/* <p >{valor}</p> */}
        </>
    );

}
export { TodoSearch };