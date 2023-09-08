import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'


function App() {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  
 useEffect(async()=>{
  try {
    var todos1=await axios.get('http://localhost:9000/api/todo/todos')
    setTodos(todos1.data)
  } catch (error) {
   console.log(error.message);
  }


 },[])

  const addTodo = async(e) => {
    e.preventDefault();
    const newTodo = e.target.todo.value;
    try {
     const axiosotdo = await axios.post('http://localhost:9000/api/todo/todos',{
        "todo":newTodo
      })
      console.log(axiosotdo);
    } catch (error) {
      alert(error.message)
    }
    
    // if (newTodo.trim() !== '') {
    //   setTodos([...todos, { task: newTodo }]);
    //   e.target.todo.value = '';
    // }
  }

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  const editTodo = (index) => {
    setEditingIndex(index);
  };

  const handleEditChange = (e, index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, task: e.target.value } : todo
    );
    setTodos(updatedTodos);
  };

  const handleKeyPress = (e, index) => {
    if (e.key === 'Enter') {
      saveEditedTodo(index, e.target.value);
    }
  };

  const saveEditedTodo = (index, updatedTask) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, task: updatedTask } : todo
    );
    setTodos(updatedTodos);
    setEditingIndex(-1); 
  }

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <form onSubmit={addTodo}>
        <input placeholder="enter here" id='todo' type="text" />
        <button type='submit'>ADD</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li >
            {editingIndex === index ? (
              <div className="edit-save-container">
                <input
                  type="text"
                  value={todo.task}
                  onChange={(e) => handleEditChange(e, index)}
                  onSubmit={() => saveEditedTodo(index, todo.task)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                />
                <button className="save" onClick={() => saveEditedTodo(index, todo.task)}>Save</button>
              </div>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div>
        {todo.Todo}
    </div>

    <button className="edit" onClick={() => editTodo(index)}>Edit</button>
</div>

            )}
            <button className="delete" onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
