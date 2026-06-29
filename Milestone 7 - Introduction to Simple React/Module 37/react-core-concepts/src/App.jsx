
import './App.css'
import Counter from './Counter'
import Batsnam  from './Batsman';
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends';
import Posts from './Posts';
import Players from './Players';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json())

const fetchFriends = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  return response.json();
}

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  return response.json();
}

function App() {

  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

  function handleClick() {
    alert("I am clicked");
  }

  const handleClick2 = () => {
    alert("Clicked 2");
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;

    alert(newNum);
  }

  return (
    <>
      <h3>Vite + React</h3>

      <Players></Players>

      {/* <Suspense fallback={<h4>Posts are coming...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      <Suspense fallback={<h3>Friends are comming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Batsnam></Batsnam>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick1() {alert("Clicked 1")}}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      <button onClick={() => { alert("Clicked 3") }}>Click Me</button>

      <button onClick={() => handleAdd5(8)}>Click to add 5</button>
    </>
  )
}

export default App
