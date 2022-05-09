import React, { useState } from "react";
// import ClockFunction from "./components/ClockFunction";
// import Counter from "./components/Counter";
import Sum from "./components/Sum";


export default function App() {
  const[isShown,setIsShown]=useState(true)

  const showHide=()=>{
     setIsShown(!show)
  }
  // useEffect(()=>{
  //    console.log(4)
  //    return
  // })

  return (
    <div>

      {/* <button onClick={showHide}>Show/Hide</button>
     {isShown ? <Counter/> : null}

     =========================
     <ClockFunction/> */}
     <Sum/>
    </div>
  )
}
