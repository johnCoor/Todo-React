import React, { Children, useState } from "react";
import "./TodoItem.css"
import { AiOutlineEdit } from "react-icons/ai";
import { BsFillXCircleFill } from "react-icons/bs";
function TodoItem(props){

    




    const onCheck = () => {
        // alert("has completado la Tarea de " + props.text)
            
    }

    const onDelet = () => {
            alert("has Eliminado la Tarea de " + props.text)
    }



    return (
        <li className="TodoItem">
            <span
             className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
             onClick={props. willComplet}
             >
                <AiOutlineEdit/>
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{ props.text }</p>
            <span  
            className="Icon Icon-delete"
            onClick={props.onDeletElement}
            >
                <BsFillXCircleFill/>
            </span>
        </li>
    );
}

export { TodoItem }