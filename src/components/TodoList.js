import React from "react";
//Import Components
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos}) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo todo={todo} todos={todos} setTodos={setTodos} text={todo.text} key={todo.id} completed={todo.completed}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;