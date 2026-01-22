//reaonn to help understand contolled inputs and list keeus important '
function  Todoss(){
    // made it using id and then to understand why list existed in first place we have code this again using indexes

  console.log("App render");

  const [todos, setTodos] = useState([
    { id: 1, text: "Go to gym", completed: false },
  ]);
  const [text,setText]=useState("")
  function todoHandler() {
    setTodos((t)=>[
      ...t,
      {
        id: Date.now(),
        text: text,
        completed: false,
      },
    ]);
    setText("")
  }
function todoCompletionHandler(id) {
  setTodos(prev =>
    prev.map(t =>
      t.id === id
        ? { ...t, completed: !t.completed }
        : t
    )
  );
}
function handleInputs(e){
  const text = e.target.value
setText(text)
} 
function deletetodos(i){
 setTodos(prev =>
    prev.filter((_, index) => index !== i)
  );
}
  return <>
  <input name="text" onChange={handleInputs} type="text" value={text}></input>
  <button onClick={todoHandler} >Add Todo</button>
  {todos.map((t,i)=>(<div key={i}>
 <TodoCard  id={t.id} text={t.text} completed={t.completed} ></TodoCard>
 <input onChange={()=>todoCompletionHandler(t.id)} type="checkbox" checked={t.completed} ></input>
 <button onClick={()=>(deletetodos(i))} >Delete</button>
 </div>
  ))}
  </>
}


function TodoCard({id,text,completed}){
return <><br/>
<h1>{text}</h1>
ID-{id}
<br/>status-{completed?"Done":"Pending"}
<br/>
</>
}