import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoLoadingSkeleton} from "../TodoLoading"


    function AppUI() {
      
      const { 
        error, 
        loading,
        completeTodos,
        DeletTodos,
        filerElements,
        openModal,
        setOpenModal, 
      } = React.useContext(TodoContext)

    return(
        <React.Fragment>
        <TodoCounter />
        <TodoSearch/>
         
             <TodoList>
               {error && <p>Losiento! Hubo un error intente más tarde</p>}
               {loading && <TodoLoadingSkeleton>Espere un momento....</TodoLoadingSkeleton>}
               {(!loading && !filerElements.length) && <p>Crea tú primer TODO!</p>}

              { filerElements.map(todo => (
                <TodoItem
                 key={todo.text} 
                 text={todo.text}
                 completed={todo.completed}
                 willComplet={() => completeTodos(todo.text)}
                 onDeletElement={() => DeletTodos(todo.text)}
                 />
              ))}
         </TodoList>
          {!!openModal && (
    
          <Modal>
             <TodoForm />
         </Modal>
          )}
          
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
    )
}

export {AppUI};