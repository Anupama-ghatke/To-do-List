import './App.css';
import { useState } from 'react';
import List from './components/list/list.component';
import Input from './components/input/input.component';

function App() {
  const [Task , setTask] = useState([])
  console.log(Task)
  return (

    <div className="App">
      <div className='list-container'>
        <List Task={Task} />
      </div>

      <div className='input-container'>
        <Input setTask ={setTask} Task={Task} />
      </div>
    </div>
  );
}

export default App;
