import React, { useEffect, useState} from "react";
import axios from 'axios'
import './App.css';

function App() {
  const[findzip,getzip ] = useState("")
  const [data,setdata]=useState([])

  function handle (e) {
    e.preventDefault()
    axios.get("http://ctp-zip-api.herokuapp.com/zip/" + findzip).then((pos) => {
      setdata(pos.data)
    

 })
}


const Change = (e) => {
  e.preventDefault();
  getzip(e.target.value)
console.log(e.target.value)


}


 useEffect(() => {
  }, [])

  return (
    <div className="App">
      <h1>ZIP CODES</h1>
      <p> Enter the zip to access the city locations </p>
      <form onSubmit={handle}>
  <label>
    Zip :
    <input type="text" name="name" onChange={Change} />
  </label>
  <input type="submit" value="Submit" />
</form>

      {data.map((element) => {
        return(
        
        <ul className="city">

        <li>{element.City} </li>
        <li>{element.State} </li>
        <li>{element.Location} </li>
        </ul>
        
      )})}

     {/*<button onClick={getdata}>Enter zip</button>*/}
    </div>
  );
}

export default App;
