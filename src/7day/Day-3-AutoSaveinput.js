function useDebounce(val){
const [debouncedVal,setDebouncedVal]=useState(val);
useEffect(()=>{
const id=setTimeout(() => {
  setDebouncedVal(val);
}, 1000);

  return ()=>{clearTimeout(id);}
},[val  ])//no dependency

return  debouncedVal;
}
function Main(){
const [inptval,setInptval]=useState("")
let debouncedval=useDebounce(inptval);

useEffect(()=>{console.log("Saved:",debouncedval)},[debouncedval])
const isSaving= inptval!==debouncedval;
function onChangeHandler(e){

  setInptval(e.target.value);
}
  return<>
  <textarea value={inptval} onChange={onChangeHandler} rows={3} cols={50}></textarea>
  {debouncedval}
  {isSaving&&<p>Savingg.....</p>}
  </>
}
export default Main;