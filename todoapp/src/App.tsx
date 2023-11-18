import React from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './homepage/HomePage';
import TodoListPage from './todoListPage/TodoListPage';
import LoginPage from './loginPage/LoginPage';
import TodoCreateForm from './todoManagementPage/TodoCreateForm';
import PrivateRoutes from './utils/PrivateRoutes';
import { useAppSelector } from './state/app.hooks';

function App() {
  const history = useNavigate();
  // Use store
  const auth = useAppSelector((state) => state.auth.payload);
  return (
    <>
      <button onClick={() => history(-1)}>Go back</button>
      <Routes>
        <Route element={<PrivateRoutes user={auth} />}>
          <Route path="/todo/create" element={<TodoCreateForm />}></Route>
        </Route>


        <Route path="/" element={<HomePage />}></Route>
        <Route path="/list" element={<TodoListPage />}></Route>
        <Route path="/signin" element={<LoginPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
