import { useReducer } from "react";



const ACTIONS ={
  ADD_DIGIT:"add_digit",
  MATH:"math",
  DELETE:"delete",
  RESULT:"result"
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


    case ACTIONS.DELETE:
      return{...state , first_number:"0" , second_number:"0" , operator:""};
      
      
      
    case ACTIONS.MATH:
        if (state.second_number==="0") {
          return{...state,  second_number:state.first_number , first_number:"0",operator:action.payload.operator};
        }else if (state.operator!==""){
          return{...state,operator:action.payload.operator};
        }
    
    
    case ACTIONS.RESULT:
        if (state.operator === "+") {
          return{...state , second_number:`${Number(state.first_number) + Number(state.second_number)}` , first_number:"0"}
        }else if (state.operator === "-") {
          return{...state , second_number:`${ Number(state.second_number)- Number(state.first_number) }` , first_number:"0"}
        }else if (state.operator === "/") {
          return{...state , second_number:`${Number(state.second_number) / Number(state.first_number)}` , first_number:"0"}
        }

        
    default:
        throw Error();
  }

}


/////app component
function App() {
  const [state, dispatch] = useReducer(reducer, {first_number:'0',second_number:'0',operator:""})

  ///////operators of calculator
  const handleOperatorInput=(e)=>{
    if (e.target.textContent==="DEL") {
      dispatch({type:ACTIONS.DELETE});
    } else {
      dispatch({type:ACTIONS.MATH , payload:{operator:e.target.textContent}});
    }
  }
  const operators = ["DEL" , "-" , "+" , "/"];
  const mappedOperators = operators.map(operator =>{
    return <button onClick={handleOperatorInput} key={operator}>{operator}</button>
  })


  //////numbers of calculator
  const handleNumbersInput = (e)=>{
    if (e.target.textContent==="=") {
      dispatch({type : ACTIONS.RESULT})
    } else {
      dispatch({type:ACTIONS.ADD_DIGIT ,payload:{digit:`${e.target.textContent}`}});
    }
  }
  const numbers = ["1","2","3","4","5","6","7","8","9",".","0" ,"="];
  const mappedNumbers = numbers.map(number=>{
    return<button onClick={handleNumbersInput} key={number}>{number}</button>
  })

  return (
    <div className="calculator">
      <div className="render">
        <span>({state.second_number})</span>
        <span>{state.operator + state.first_number}</span>
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
