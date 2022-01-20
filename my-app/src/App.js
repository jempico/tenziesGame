import {useState} from "react";
import Dice from "./components/dice/Dice";
import RollBtn from "./components/rollBtn/RollBtn";


function App() {
  function generateNewDice() {
    let dices = [];
    for (let i=0; i<10; i++) {
      dices.push(Math.floor(Math.random() * 6));
    }
    return dices;
  }
 
  const [allDices, setAllDices] = useState(generateNewDice())
  const newDices = allDices.map(num => { return <Dice value={num}/>})

  function setNewDices() {
    setAllDices(generateNewDice());
  }

  return (
    <main className="main_container">
    <div className="inner_container">
        <h1 className="title">Tenzies</h1>
        <p className="desc">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="numbers">
          {newDices}
        </div>
        <RollBtn
          handleClick={setNewDices}/>
    </div>
</main>
  )
}

export default App;
