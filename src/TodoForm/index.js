import React from "react"
import { TodoContext } from "../TodoContext"
import "./TodoForm.css"


function TodoForm() {

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)
    const [newValue, setNewValue] = React.useState(" ")

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        console.log(event.target.value)
        setNewValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newValue)
        setOpenModal(false)
    }

    return(
       <form onSubmit={onSubmit}>
            <label>Agrega una Nueva Tarea</label>
            <textarea 
                 placeholder="Escribe las Tareas que quieres agendar"
                onChange={onChange}
                required
            />

            <div className="TodoForm-buttonContainer">
                <button
                className="TodoForm-button TodoForm-button-add"
                type="button"
                onClick={onCancel}
                >
                    cancelar
                </button>
                
                <button
                className="TodoForm-button TodoForm-button-cancel "
                type="submit"
                >
                    Añadir
                </button>
            </div>
       </form>
    )
}

export { TodoForm } 