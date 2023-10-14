import './App.css';
import {useState} from "react";
function App() {
  const [dob, setDob] = useState(null);
  const[age, setAge] = useState(0);

  const handleClick = () => {
    var present_y = parseInt(new Date().getUTCFullYear())
    var present_m = parseInt(new Date().getMonth());
    var dob_y = parseInt(String(dob).split('-')[0]);
    var dob_m = parseInt(String(dob).split('-')[1]);
    var a = (present_m-dob_m)+((present_y-dob_y)*12);
    setAge(Math.floor(a/12));
  };
  return (
    <div class="container">
      <h1>Age Calculator</h1>
      <h4>Enter your date of birth</h4>
      <input onChange={(e) => setDob(e.target.value)} type="date" name="dob" id="dob" />
      <button onClick={handleClick}>Calculator Age</button>
      <h3>You are {age} years old</h3>
    </div>
  );
}

export default App;
