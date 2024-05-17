import { useState } from 'react';
import './App.css';
import usePasswordGenerator from './hooks/use-password-generator';
import PasswordStrengthChecker from "./component/strengthChecker";

function App() {
  const [length, setLength] = useState(4);
  const [checkBoxData, setCheckBoxData] = useState([
  { title:"Include Uppercase Letter", state: true },
  { title:"Include Lowercase Letter", state: true },
  { title:"Include Numbers", state: true },
  { title:"Include Symbols", state: true }
]);
const [copied, setCopied] = useState(false);

const handleCheckBoxChange = (i) => {
  const updatedCheckBoxData = [...checkBoxData]
  updatedCheckBoxData[i].state = !updatedCheckBoxData[i].state
  setCheckBoxData(updatedCheckBoxData);
 }
 
 const handleCopy = () =>{
  navigator.clipboard.writeText(password);
  setCopied(true);

  setTimeout(()=>{
    setCopied(false);
  }, 1000);
 }

const {password, error, generatePassword} = usePasswordGenerator();
  return (
  <>
   <div className='mainContainer'>
    <h1>Amazing Password Generator</h1>
     <div className="container">
      {/* password text and copy */}
      {password && <div className='header'>
        <div className='title'>
          {password}
        </div>
        <button className='copyBtn' onClick={handleCopy}>{copied ? "Copied": "Copy"}</button>
      </div>}
      {/* character length */}
      <div className='charLength'>
        <span className=''>
          <label>Character Length</label> 
          <label>{length}</label> 
        </span>
        <input 
        type='range'
        min={"4"}
        max={"20"}
        value={length}
        onChange={(e)=> setLength(e.target.value)}
        className='range'
        />
      </div>
      {/* Check box */}
      <div className='checkboxes'>
        {checkBoxData.map((checkbox, index)=>{
          return <label key={index}>
          <input
            type='checkbox'
            checked={checkbox.state}
            onChange={() => handleCheckBoxChange(index)}
          />
          {checkbox.title}
        </label>;
        })}
      </div>

      {/* Strength */}
      <PasswordStrengthChecker password={password}/>

      {/* Error message */}
      {error && <div className='error'>{error}</div>}
      {/* Generate button */}
      <button className='generateBtn' onClick={() => generatePassword(checkBoxData, length)}>Generate Password</button>
    </div>
   </div></>
  );
}

export default App;
