// Contexts api solves prop drilling  import { createContext, useContext, useState } from "react";

const counterContext=createContext();
function ContextApi() {
const [count,setCount]=useState(0);

return <>
<counterContext.Provider value={{
   count:count,
   setCount:setCount
}}> 

<Level1></Level1>
</counterContext.Provider>

</>
}

function Level1(){

  return<>
<Level2 ></Level2>
  </>
}
function Level2(){
  
  return<>
<Level3 ></Level3>
  </>
}
function Level3(){

  return<>
<Level4 ></Level4>
  </>
}
function Level4(){
  const {count,setCount} =useContext(counterContext);
function handler(){
  setCount(p=>p+1);
}
  return<>
{count} 
<button onClick={handler}>Increase</button>
  </>
}




