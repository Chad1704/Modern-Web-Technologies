import { useState } from 'react'
import './App.css'

function App() {
  const [singleFile, setSingleFile] = useState(null);
  const [displaySingleFile, setDisplaySingleFile] = useState(null);
  const [displayMessage, setDisplayMessage] = useState("");

  const fetchSingleFile = async() =>{
    try{

    
    const response = await fetch (`http://localhost:8000/fetch/single`);
    const data =  await response.blob(); //extracting file data

    

    const imageURL = URL.createObjectURL(data) //converting data to useable URL on Front End

    setDisplaySingleFile(imageURL);
  
    
  } catch(error){
    setDisplayMessage("ERROR");
    console.log("ERROR");
  }

};

const SaveSingleFile = async(e) =>{
  e.preventDefault();
  try{
    const newFormData = new FormData();
    newFormData.append()('file') //NOT DONE HERE COME BACK TO IT (CHATGPT?)

     const response = await fetch (`http://localhost:8000/save/single`, {
      method: "POST",
      body: SOMETHINGHERE
     });


     if(!response.ok){
      setDisplayMessage("Error uploading your file");
      return;
     }
     setDisplayMessage("file uploaded!");

  } catch (error){

  }
}

  return (
    <>
    {displayMessage}

    <form
    
    onSubmit={SaveSingleFile}>
      <input 
        type='file'
        onChange={(e)=> {setSingleFile(e.target.files[0])}}

      />
      <button type='submit'>upload file</button>

    </form>

    <button
    onClick={fetchSingleFile}
    >
      Fetch a file


      </ button>
      {displaySingleFile && (
        <div>
          <img 
          src={displaySingleFile}
          style={{ maxWidth: "300px"}}/>

        </div>
      )}
     
    </>
  )
}

export default App
