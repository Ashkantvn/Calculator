

function App() {

  const operators = ["DEL" , "-" , "+" , "/"];
  const mappedOperators = operators.map(operator =>{
    return <button key={operator}>{operator}</button>
  })

  const numbers = ["1","2","3","4","5","6","7","8","9",".","0" ,"="];
  const mappedNumbers = numbers.map(number=>{
    return<button key={number}>{number}</button>
  })

  return (
    <div className="calculator">
      <div className="render">
        <span>(0)</span>
        <span>0</span>
      </div>
      <div className="operators">
        {mappedOperators}
      </div>
      <div className="numbers">
        {mappedNumbers}
      </div>
    </div>
  );
}

export default App;
