import React from 'react';
import  { AppUI }  from './AppUI';
import './App.css';
import { TodoProvider } from "../TodoContext/index"

// const defaultTodos = [
  // {text: "corta cebolla", completed: false},
  // {text: "Tomar el curso Basico de React", completed: true},
  // {text: "Lorar con la llorona", completed: true},
  // {text: "Lectura por 1 hora", completed: true},
// ]


function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
