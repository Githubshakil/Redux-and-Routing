import One from "./assets/components/one";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, devide, increment, multiply } from "./assets/slices/counter/counterSlice";

function App() {
  
  const dispatch = useDispatch()
  return (
    <>
      <One />
    <button onClick={()=> dispatch(increment())}>+</button>
    <button onClick={()=> dispatch(decrement())}>-</button>
    <button onClick={()=> dispatch(multiply())}>X</button>
    <button onClick={()=> dispatch(devide())}>/</button>
    </>
  )
}

export default App
