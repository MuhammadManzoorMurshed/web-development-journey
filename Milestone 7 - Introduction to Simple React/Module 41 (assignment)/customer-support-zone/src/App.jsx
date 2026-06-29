import React, { useState } from 'react'
import {ToastContainer} from 'react-toastify'
import './App.css'
import CustomerTickets from './components/customer-tickets/CustomerTickets'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

const fetchTasks = async () => {
  const response = await fetch('./Tasks.json');
  const tasks = response.json();

  return tasks;
}

const tasksPromise = fetchTasks();

function App() {
  const [pendingTasksNumber, setPendingTasksNumber] = useState(0);
  const [resolvedTasksNumber, setResolvedTasksNumber] = useState(0);

  const handlePendingTasksNumber = (totalPendingTasks) => {
    setPendingTasksNumber(totalPendingTasks);
  }

  const handleResolvedTasksNumber = (totalResolvedTasks) => {
    setResolvedTasksNumber(totalResolvedTasks);
  }

  return (
    <>
      <Navbar></Navbar>

      <div className='bg-[#F5F5F5] py-20'>
        <Hero pendingTasksNumber={pendingTasksNumber} resolvedTasksNumber={resolvedTasksNumber}></Hero>
        <CustomerTickets tasksPromise={tasksPromise} handlePendingTasksNumber={handlePendingTasksNumber} handleResolvedTasksNumber={handleResolvedTasksNumber}></CustomerTickets>
      </div>

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
