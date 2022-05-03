import React from "react"
import { useLocalStorage } from "../TodoContext/useLocalStorage"

const TodoContext = React.createContext()

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage("TODOS_V1", [])

      const [searchValue ,setSearchValue] = React.useState(" ")
      const [openModal, setOpenModal] = React.useState(false)
      
      const compledTotal = todos.filter( todo => !!todo.completed).length //!! esto es true , ! este es false
      const totalTodos = todos.length
      let filerElements = []
      if(!searchValue.length >= 1){
        filerElements = todos
      
      } else {
        filerElements = todos.filter(todo => {
          const minusElement = todo.text.toLowerCase()
          const searchText = searchValue.toLowerCase()
          return minusElement.includes(searchText)
        }) 
      }

      const addTodo = (text) => {
        const newList = [...todos]
        newList.push({
          completed: false,
          text,
        })

        saveTodos(newList)
      }


      const completeTodos = (text) => {
        const IndexElement = todos.findIndex(todo => todo.text === text)
        const newList = [...todos]
        newList[IndexElement].completed = true
        saveTodos(newList)
      }
      const DeletTodos = (text) => {
        const IndexElement = todos.findIndex(todo => todo.text === text)
        const newList = [...todos]
        newList.splice(IndexElement, 1)
        saveTodos(newList)
      }
      return(
        <TodoContext.Provider value={{
          addTodo,
          loading,
          error,
          totalTodos,
          compledTotal,
          searchValue,
          setSearchValue,
          filerElements,
          completeTodos,
          DeletTodos,
          openModal,
          setOpenModal,
      }}>
          {props.children}
      </TodoContext.Provider> 
      )
}


<TodoContext.Consumer></TodoContext.Consumer>
export { TodoContext, TodoProvider }