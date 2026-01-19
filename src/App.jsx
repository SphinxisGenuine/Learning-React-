import { useState } from "react"
//v1
function App() {
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [errors,setErrors]=useState({
  name:"",
  email:"",
  password:""

})
function HandleSubmit(e){
  e.preventDefault()
  
  console.log(name, email, password);

}
function HandleNameChange(e){  
let Name =e.target.value
  setName(Name)
if(Name.length<3){
  setErrors((p)=>({...p,name:"Name Cannot be less thann 3 character"}))
}
else setErrors((p)=>({...p,name:""}))
   
}
function HandleEmailChange(e){  
let Email =e.target.value
  setEmail(Email)
if(!Email.includes(".")||!Email.includes("@")){
  setErrors((p)=>({...p,email:"Email Should Contain @ and ."}))
}
else setErrors((p)=>({...p,email:""}))
   
}

function HandlePassworChange(e){  
let Password =e.target.value
  setPassword(Password)
if(Password.length<6){
  setErrors((p)=>({...p,password:"Password Cannot be less thann 6 character"}))
}
else setErrors((p)=>({...p,password:""}))
   
}
return<>
<form onSubmit={HandleSubmit}>
<input type="text" value={name} onChange={HandleNameChange} placeholder="name"></input>
{errors.name&&<p>{errors.name}</p>}
<input type="text" value={email} onChange={HandleEmailChange} placeholder="email"></input>
{errors.email&&<p>{errors.email}</p>}
<input type= "password" value={password} onChange={HandlePassworChange} placeholder="password"></input><br/>
{errors.password&&<p>{errors.password}</p>}
<button type="submit">Submit</button>
</form>

</>
}

export default App
