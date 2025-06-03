import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
   const [msg, setMsg] = useState("");
  const handleButton = async() =>{
    const response = await fetch("http://localhost:8000/data")

      const data = await response.json();
  console.log(data);
  console.log("TE999ST")
  }



  const handleRegistration = async (e) => {
  e.preventDefault();

  const submission = { email, password, name };

  try {
    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // ✅ must be correct
      body: JSON.stringify(submission),               // ✅ must be stringified
    });

    const result = await response.json();             // ✅ must use await

    if (!response.ok) {
      setMsg("ERROR ERROR YOU FUCKED UP!");
    } else {
      setMsg(result.msg); // ✅ result.msg not null if backend returns it
    }
  } catch (err) {
    console.error("Error parsing JSON or making request:", err);
    setMsg("Something went wrong");
  }
};



  return (
    <>
   
     <button onClick={handleButton}> CLICK ME</button>
     <form onSubmit={handleRegistration}>

            <input
      
      type='text'
      placeholder='Enter name Here:'
      value={name}
      onChange={(e)=> setName(e.target.value)}
      required

      />
      <input
      
      type='pass'
      placeholder='Enter Password Here:'
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      required

      />
            <input
      
      type='email'
      placeholder='Enter Email Here:'
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
      required

      />

      <button type='submit'> Register </button>
     </form>
    </>
  )
}


export default App
