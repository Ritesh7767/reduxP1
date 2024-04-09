import {useSelector, useDispatch} from "react-redux"
import { ADD, SUB } from './CoutnerSlice'

function App() {

  let counter = useSelector(store => store)

  let dispatch = useDispatch() 

  return (
    <>
      <button onClick={() => dispatch({type : SUB})}>Sub</button>
      <h1>Counter value :- {counter.value}</h1>
      <button onClick={() => dispatch({type : ADD})}>Add</button>
    </>
  )
}

export default App
