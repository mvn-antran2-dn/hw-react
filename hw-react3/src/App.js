import './App.css';
import React from 'react';
import SubmitForm from './Form/formsubmit';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import UserList from './userList/userList';

export default function App()  {
  return (
    <div className='App'>
      <SubmitForm />
      <ToastContainer
      position="top-center"
      autoClose={3000}
    />
    <UserList/>
    </div>
  );
}


