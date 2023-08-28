import { useState } from 'react'
import './App.css'

 const App =()=> {
  const [count, setCount] = useState(0)

  const incrementCount = ()=>{
    setCount(count+1);
  };

  const decrementCount = () =>{
    setCount(count-1);
  }

  return (
    <>
      {/* button functionality */}
        <button onClick={incrementCount}>
          +
        </button>
        <p>count is {count}</p>
        <button onClick={decrementCount}>
          -
        </button>

    </>
  )
}

export default App
