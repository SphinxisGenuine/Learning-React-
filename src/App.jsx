import { useRef,useState } from "react"

function App() {
//Counter with increment/decrement 
//  Theme toggle (light/dark) 
//  Disable decrement below 0

//---Constraints 
// No global state 
//  No Context 
//  No libraries
console.log("App is rendered")
const [count,setCount]=useState(0);
const [isLight,setIsLight]=useState(true);
const renderCount = useRef(0);
renderCount.current++;
console.log("Render count:", renderCount.current);

function increaseCount(){
setCount(p=>p+1)
}
  function decrseaseCount(){
  setCount((p)=>{
    if (p<=0){
    return p
    } 
    else return p-1
       })
}
function handleThemeToggle(){
  setIsLight(p=>!p)
}
return(
  <div style={{backgroundColor:isLight?"#f3f4f6":"#1f2937",color:isLight?"#1f2937":"#f3f4f6"}} >
  <h1>{count}</h1><br/>
<button onClick={increaseCount} >Increase</button>
<button onClick={decrseaseCount} >Decrease</button>
<button onClick={handleThemeToggle} >ToggleMode</button>
  </div>
)
}

export default App
