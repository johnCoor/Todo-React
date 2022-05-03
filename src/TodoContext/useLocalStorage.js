import React from "react"

function useLocalStorage(itemName,initialValue) {
    const [error, setError] = React.useState(false)
    const [loading,setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue) //aqui gardaremos la data 
    //que el usuario garde ya sea string o Arreglo
  
    React.useEffect(() => {
      setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        /////////////////////// parseTodo Tendra su valor en el (else) al parsear las TODOS que ya exisye
                              ///// sino el usuario tendra que crearlas y luego se pasa al (ELSE) 
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue; //aqui es Undefined por el momento
        } else {
          parsedItem = JSON.parse(localStorageItem) // aqui almacena el valor
        }
        setItem(parsedItem);
        setLoading(false)
      } catch(error) {
          setError(error)
        }
      },2000)
    })
  
    
  
      const saveItem = (newItem) => {
        try {
          // PERSISTENCIA DE DATOS: ya almacenada las TODOS si las eliminamos queremos esa vercion que 
          //quedo en
          // nuestras TODOS que previamente se almacenaron,  en algun momento esas TODOS tendran que
           //eliminarlas
          // o hacerles chek, queremos tener esos cambios.
          // Pus esta porcio de codigo se encargara de eso , tomando el estado de chequear o 
         // eliminar(X,  √) las TODOS y la actualizarem
          //en el espacio donde almacenamos las TODOS ("TODOS_V1")
          const stringifiedItem = JSON.stringify(newItem);
          localStorage.setItem(itemName, stringifiedItem);
          setItem(newItem);
      } catch (error) {
        setError(error)
      }
    }
  
      return  {
        item,
        saveItem,
        loading,
        error,
      }
  
  }

  export { useLocalStorage }