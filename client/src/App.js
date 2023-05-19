import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import UpdateEmp from './pages/UpdateEmp';

function App() {
  return (
  <BrowserRouter>
  <div className='App'>
      <ToastContainer position='top-center' /> 
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/addrecord" Component={AddEdit} />
      <Route path="/update/:id"  Component={UpdateEmp} />
      </Routes>
    </div>
  </BrowserRouter>
    
  );
}
export default App;
/*function App() {
const [id,setId] = useState(0)
const [firstname,setFirstName] = useState("")
const [lastname,setLastName] = useState("")
const [location,setLocation] = useState("")
const [email,setEmail] = useState("")
const [dob,setDob] = useState("")
const [education,setEducation] = useState("")


const addEmployee = () => {
  axios.post('http://localhost:3001/create',{
   firstname:firstname,
   lastname:lastname,
   location:location,
   email:email,
   dob: dob,
   education:education
  }).then(()=>console.log('success'))
}

const getEmployee = () => {
  axios.get('http://localhost:3001/employees').then((response) =>{
  console.log(response.data)
})
}
  return (
   
    <>
    <div className="information">
    <button onClick={getEmployee} class="button"> &larr;</button>
     <form onSubmit={addEmployee}>
     
      <label class="label">First Name</label>
      <label class="label1"> : </label>
      <input type="text" name="firstname"  onChange={(e)=> setFirstName (e.target.value)} />
      <label class="label fna">Last Name</label>
      <label class="label1"> : </label>
      <input type="text" name="lastname" class="fna" onChange={(e)=> setLastName (e.target.value)} /><br></br>
      <label class="label">Location</label>
      <label class="label1"> : </label>
      <input type="text" name="location" onChange={(e)=> setLocation (e.target.value)} /><br></br>
     <label class="label">email</label>
     <label class="label1"> : </label>
      <input type="text" name="email" onChange={(e)=> setEmail (e.target.value)} /><br></br>
      <label class="label">DOB</label>
      <label class="label1"> : </label>
      <input type="text" name="dob" onChange={(e)=> setDob (e.target.value)} /><br></br>
      <label class="label">Education</label>
      <label class="label1"> : </label>
      <input type="text" name="education" onChange={(e)=> setEducation (e.target.value)} /><br></br>
      <div class="textd"><label class="label">About :</label>
      <label class="label1"> </label>
      <textarea class="textarea" ></textarea><br></br></div>
      <button type="submit" class="button1">Submit</button>
     </form>
    </div>
   

    </>
  );
}*/

 

