import React from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './homepage/HomePage';
import TodoListPage from './todoListPage/TodoListPage';
import LoginPage from './loginPage/LoginPage';
import TodoCreateForm from './todoManagementPage/TodoCreateForm';

function App() {
  const history = useNavigate();
  return (
    <>
      <button onClick={() => history(-1)}>Go back</button>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/list" element={<TodoListPage />}></Route>
        <Route path="/signin" element={<LoginPage />}></Route>
        <Route path="/todo/create" element={<TodoCreateForm />}></Route>
      </Routes>
    </>
  );
}

export default App;
