import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoBusqueda.css"

function TodoSearch() {

    const { searchValue ,setSearchValue } = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return [
        <input
             className="TodoBusqueda" 
             placeholder='Busca tu Tarea Aqui'
             value={searchValue}
             key={onSearchValueChange}
             onChange={onSearchValueChange}
        />,
        
    ]
}


export { TodoSearch }