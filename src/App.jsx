import { useEffect, useRef, useState } from "react";



  export default App;


  // function useDebounce(value){ 
  // const [debouncedVal,setDebouncedVal]=useState(value);
  // useEffect(()=>{
  // const handler =setTimeout(() => {
  //   setDebouncedVal(value)
  // }, 3000);

  // return ()=>{clearTimeout(handler);}
  // },[value])
  // return debouncedVal
  // }
  // function App() {
  //   const [inptvalue,setinptvalue]=useState("");
    
  //   const debouncedval=useDebounce(inptvalue);
  // const saving = inptvalue !== debouncedval;
  // function onChangeHandler(e){
  //     setinptvalue(e.target.value);
  //   }




  //   return <>
  // <textarea value={inptvalue} onChange={onChangeHandler} rows={3} cols={50}></textarea>
  // {saving&&<>savingg</>}
  // </>}
