import './App.css';
import PlusMinus from '../PlusMinus/PlusMinus';
import TimeNow from '../TimeNow/TimeNow';
import Table from '../Table/Table';
import InputButton from '../InputButton/InputButton';
import NameSurname from '../NameSurname/NameSurname'
import ToDoList from '../ToDoList/ToDoList'
import RockPaperScissors from '../RockPaperScissors/RockPaperScissors'

function App() {
  return (
    <div>
      <PlusMinus />
      <TimeNow />
      <Table />
      <InputButton />
      <NameSurname />
      <ToDoList />
      <RockPaperScissors />
    </div>
  )
}

export default App
