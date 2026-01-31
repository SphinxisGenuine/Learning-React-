function References(){
  const inptref=useRef()
  const Count=useRef(0)
  Count.current=Count.current+1
  useEffect(()=>{
    inptref.current.focus()
  },[])
  function focusHandler(){
    inptref.current.focus()
  }
  return <>
<input ref={inptref} placeholder="enter Your name"></input>
<button onClick={focusHandler}>Focus</button>
  {Count.current}
  </>
}