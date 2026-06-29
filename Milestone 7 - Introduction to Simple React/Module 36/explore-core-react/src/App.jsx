
import './App.css';
import ToDo from './Todo';
import Actor from './Actor';
import Singer from './Singer';
import Library from './Library';

function App() {
  // const time = 50;

  const actors = ['Bappa Raj', 'Omar Sunny', 'Salman Shah', 'Jashim', 'Anwar'];

  const singers = [
    {id: 1, name: 'Dr. Mahfuz', age: 68},
    {id: 2, name: 'Tahsan', age: 45},
    {id: 3, name: 'Shuvo Deb', age: 57},
  ]

  const books = [
    {id: 1, name: 'Physics', price: 100},
    {id: 2, name: 'Chemistry', price: 300},
    {id: 3, name: 'Mathematice', price: 200},
    {id: 4, name: 'Biology', price: 500},
  ]

  return (
    <>
      <h1>React Core Concepts</h1>

      <Library books={books}></Library>

      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }

      {
        actors.map(actor => <Actor actor={actor}></Actor>)
      }

      {/* <ToDo
        task="Lean React"
        isDone={true}
        time={time}
      ></ToDo>
      <ToDo task="Revise JavaScript" isDone={false} time={time}></ToDo>
      <ToDo task="Take a Shower" isDone={false} time={time}></ToDo> */}

      {/* <Students name="Manzoor" dept="CSE"></Students>
      <Students name="Murshed" dept="EEE"></Students>
      <Person></Person>
      <Developer name="Mazumdar" tech="JavaScript"></Developer>
      <Developer name="Rajon" tech="Python"></Developer>
      <Player name="Tamim" runs="5000"></Player>
      <Player name="Tamima" runs="300"></Player>
      <Salami event="Rojar Eid" amount="400"></Salami>
      <Salami event="Kurbanir Eid"></Salami> */}
    </>
  )
}

function Students(props) {
  return (
    <div className='student'>
      <p>Name: {props.name}</p>
      <p>Dept.: {props.dept}</p>
    </div>
  )
}

function Person() {
  const age = 17;
  const name = 'Jalil'
  const personStyle = {
    color: 'red',
    textAlign: 'right',
    fontSize: '25px'
  }

  return (
    <p style={personStyle}>I am a person {name} {age}</p>
  )
}

function Developer(props) {
  console.log(props);

  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <p>Playing and Losing</p>
    </div>
  )
}

function Pet() {
  return (
    <p>Cat</p>
  )
}

const { name, runs } = { name: "Manzoor", runs: 35 };

function Player({ name, runs }) {
  return (
    <div className='player'>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

function Salami({ event, amount = 0 }) {
  return (
    <div className='salami'>
      <p>Salami for: {event}</p>
      <p>Amount: {amount}</p>
    </div>
  )
}

export default App
