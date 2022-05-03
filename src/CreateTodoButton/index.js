import React  from "react";
import "./CreateButton.css"

function CreateTodoButton(props) {

    const onClickButton =() => {
        props.setOpenModal(previe => !previe)
    }

    return (
        <button
         className="CreateTodoButton"
         onClick={onClickButton}
         >+</button>
    )
}

export { CreateTodoButton };