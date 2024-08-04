/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/todos/");
      setTodos(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/todos/", { title: newTodo });
      fetchTodos();
      setNewTodo("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/todos/${id}/`);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const startEditing = (todo) => {
    setEditingTodo(todo.id);
    setEditingTitle(todo.title);
  };

  const updateTodo = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/todos/${editingTodo}/`, {
        title: editingTitle,
      });
      fetchTodos();
      setEditingTodo(null);
      setEditingTitle("");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new Todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingTodo === todo.id ? (
              <div className="edit-todo">
                <input
                  type="text"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                />
                <button onClick={updateTodo}>Save</button>
              </div>
            ) : (
              <div className="delete-todo">
                <div className="title"> {todo.title}</div>
                <div className="edit-delete">
                  <button onClick={() => startEditing(todo)}>Edit</button>
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
