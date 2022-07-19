import { useReducer } from "react";



const ACTIONS ={
  ADD_DIGIT:"add_digit",
}

const reducer = (state ,action)=>{
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      if (action.payload.digit === '0' && state.first_number==='0'){
        return state;
      }if (action.payload.digit !== '0' && state.first_number==='0'){
        return {...state , first_number:action.payload.digit};
      }else if(action.payload.digit === '.' && state.first_number.includes('.')){
        return state;
      }else if (action.payload.digit === '='){
        return state;
      }else{
        return {...state , first_number:state.first_number + action.payload.digit};
      }
    default:
      throw Error();
  }

}


/////app component
function App() {
  const [state, dispatch] = useReducer(reducer, {first_number:'0'})

  ///////operators of calculator
  const operators = ["DEL" , "-" , "+" , "/"];
  const mappedOperators = operators.map(operator =>{
    return <button key={operator}>{operator}</button>
  })


  //////numbers of calculator
  const handleNumbersInput = (e)=>{
    dispatch({type:ACTIONS.ADD_DIGIT ,payload:{digit:`${e.target.textContent}`}});
  }
  const numbers = ["1","2","3","4","5","6","7","8","9",".","0" ,"="];
  const mappedNumbers = numbers.map(number=>{
    return<button onClick={handleNumbersInput} key={number}>{number}</button>
  })

  return (
    <div className="calculator">
      <div className="render">
        <span>(0)</span>
        <span>{state.first_number}</span>
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
