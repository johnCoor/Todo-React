import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css"
import Skeleton from 'react-loading-skeleton'

function TodoCounter(){
   

    const {  totalTodos, compledTotal } = React.useContext(TodoContext)
    return(
        <h2 className="TodoCounter" >Has completado {compledTotal} de { totalTodos} TODOSs</h2>
    )

    }


export { TodoCounter }