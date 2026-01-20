import React from 'react'
import AppName from './components/AppName.jsx';
import AddItem from './components/AddTodo.jsx';
import TodoItem1 from './components/TodoItem1.jsx';
import TodoItem2 from './components/TodoItem2.jsx';
function App() {
  return (
    <>
      <div className="container mt-5">
        <AppName></AppName>

        <AddItem></AddItem>
        {/* Todo List */}
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>

      </div>
    </>
  )
}

export default App
