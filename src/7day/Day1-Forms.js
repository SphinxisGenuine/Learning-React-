import { useState } from "react";

function FormsV1(){
    
  //v1
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [errors,setErrors]=useState({
  name:"",
  email:"",
  password:"" 

})
const [touched, setTouched] = useState({
  name: false,
  email: false,
  password: false
});

function handleSubmit(e){
  e.preventDefault()
  
  if(errors.name||errors.email||errors.password){
    return 
  }
  console.log(name, email, password);
}
function handleNameChange(e){  
let value =e.target.value
  setName(value)
  setTouched(p => ({ ...p, name: true }));

if(value.length<3){
  setErrors((p)=>({...p,name:"Name Cannot be less thann 3 character"}))
}
else setErrors((p)=>({...p,name:""}))
   
}
function handleEmailChange(e){  
let value =e.target.value
  setEmail(value)
  setTouched(p => ({ ...p, email: true }));

if(!value.includes(".")||!value.includes("@")){
  setErrors((p)=>({...p,email:"Email Should Contain @ and ."}))
}
else setErrors((p)=>({...p,email:""}))
   
}
function handlePasswordChange(e){  
let value =e.target.value
  setPassword(value)
  setTouched(p => ({ ...p, password: true }));

if(value.length<6){
  setErrors((p)=>({...p,password:"Password Cannot be less thann 6 character"}))
}
else setErrors((p)=>({...p,password:""}))
   
}
return<>
<form onSubmit={handleSubmit}>
<input type="text" value={name} onChange={handleNameChange} placeholder="name"></input>
{touched.name&&errors.name&&<p>{errors.name}</p>}
<input type="text" value={email} onChange={handleEmailChange} placeholder="email"></input>
{touched.email&&errors.email&&<p>{errors.email}</p>}
<input type= "password" value={password} onChange={handlePasswordChange} placeholder="password"></input><br/>
{touched.password&&errors.password&&<p>{errors.password}</p>}
<button type="submit">Submit</button>
</form>

</>
}