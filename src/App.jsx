import { useEffect, useRef, useState } from "react";

  function useDebounce(func,delay) {
  let id=useRef(null);
  const fn =()=>{
    clearTimeout(id.current)
id.current=setTimeout(func,delay);
  }
  return fn;
}


function App() {
  
const [saving,setsaving]=useState(false)
function AutoSave(){
setsaving(true);
fetch("ebtbrtteeebtbe").finally(()=>(setsaving(false)))
}



const debouncefnc=useDebounce(AutoSave,2000);


  return <>

<textarea onChange={debouncefnc} name ="inptBox" rows={3} cols={50}> </textarea>
{saving&&<p>Saving..</p>}   

</>}

export default App;


