function FormV2(){
    
const[form,setForm]= useState({
  name:"",
  email:"",
  password:""
})

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

function handleSubmit(e) {
  e.preventDefault();

  const newErrors = validate(form);
  setErrors(newErrors);

  const hasErrors = Object.values(newErrors).some(err => err !== "");

  if (hasErrors) return;

  console.log(form.name, form.email, form.password);
}
function handleChange(e){
  const {value,name}=e.target;
  const nextForm = {
    ...form,
    [name]: value
  };
  setForm(nextForm)
  setTouched((p)=>({...p,[name]:true}))
  const newErr=validate(nextForm);
  setErrors(newErr)
}
function validate(form){
 return{
  name:form.name.length<3?"name must be atlleast 3 letters":"",
  email: !form.email.includes("@") || !form.email.includes(".") ? "Email must be valid" : "",
  password: form.password.length < 6 ? "Password must be at least 6 characters" : ""
  

 }
}
return<>
<form onSubmit={handleSubmit}>
<input type="text" name="name" value={form.name} onChange={handleChange} placeholder="name"></input>
{touched.name&&errors.name&&<p>{errors.name}</p>}
<input type="text" name="email" value={form.email} onChange={handleChange} placeholder="email"></input>
{touched.email&&errors.email&&<p>{errors.email}</p>}
<input type= "password" name="password" value={form.password} onChange={handleChange} placeholder="password"></input><br/>
{touched.password&&errors.password&&<p>{errors.password}</p>}
<button type="submit">Submit</button>
</form>
</>

}