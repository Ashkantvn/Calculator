

function App() {
  return (
    <div className="calculator">
      <div className="render">
        <span>(0)</span>
        <span>0</span>
      </div>
      <div className="operators">
        <button>DEL</button>
        <button>-</button>
        <button>+</button>
        <button>/</button>
      </div>
      <div className="numbers">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>.</button>
        <button>0</button>
        <button>=</button>
      </div>
    </div>
  );
}

export default App;
