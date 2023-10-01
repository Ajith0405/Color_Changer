import { useState } from 'react';
import './App.css';
import Square from './components/Square';
import InputColor from './components/InputColor';
function App() {
  const [colorValue,setColorValue] = useState('')
  const [hexValue,setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (

    <div className="App">
      <Square 
        colorValue={colorValue}
        hexValue = {hexValue} 
        isDarkText = {isDarkText}
      />
      <InputColor
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText = {isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>

  );
}

export default App;
