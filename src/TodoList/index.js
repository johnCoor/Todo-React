import React from "react";
import "./TodoList.css"

function TodoList(props) {

    
    return(
        <section className="list-container">
            <ul className="ul-container">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList }