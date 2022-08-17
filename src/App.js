import React, { useState, useEffect } from 'react';
import './App.css';


//Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {
  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Use Effect RUN ONCE
  useEffect(() => {
    //get local storage
    const getLocalTodos = () => {
      if(localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      }
      else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
        //setTodos(JSON.parse(localStorage.getItem("todos")));
      }
    };

    getLocalTodos();
  }, []);

  //Use Effect
  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    //Save to Local
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <div>DevEd Todo List Project</div>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
