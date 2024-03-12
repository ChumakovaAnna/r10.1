import React from 'react';
import { useState } from 'react';
import Form from './components/Form';
import ServicesList from './components/List';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/actionsCreator';
import Button from 'react-bootstrap/Button';

function App() {
  const todoList = useSelector((state) => state.operationsReducer);
  const dispatch = useDispatch();

  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState('');
  
  const handleEditClick = (todo) => { 
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  const cancelUpdate = (todo) => { 
    setEditFormVisibility(false);
  };

  return (
    <div className="App wrapper">
      <h1 className='text-start'>Список дел</h1>
      <Form
        editFormVisibility={editFormVisibility}
        editTodo = {editTodo}
        cancelUpdate = {cancelUpdate}
      ></Form>
      <ServicesList
        editFormVisibility={editFormVisibility}
        handleEditClick={handleEditClick}
      ></ServicesList>
      {todoList.length > 1 && (
        // <button
        //   className='btn btn-danger btn-md delele-all'
        //   onClick={() => dispatch(deleteAll())}
        // >удалить все</button>
        <Button variant="outline-danger" size='sm' onClick={() => dispatch(deleteAll())}>Очистить список</Button>
      )}
    </div>
  );
}

export default App;