function App() {
  return (
    <main className="main_container">
    <div className="inner_container">
        <h1 className="title">Tenzies</h1>
        <p className="desc">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="numbers">
        <div className="block">1</div>
        <div className="block">2</div>
        <div className="block">3</div>
        <div className="block">4</div>
        <div className="block">5</div>
        <div className="block">6</div>
        <div className="block">7</div>
        <div className="block">8</div>
        <div className="block">9</div>
        <div className="block">10</div>
        </div>
        <button className="btn">Roll</button>
    </div>
</main>
  )
}

export default App;
