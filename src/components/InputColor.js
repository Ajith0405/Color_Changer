import React from 'react'
import colorNames from 'colornames'

const InputColor = ({colorValue,setColorValue,setHexValue,isDarkText,setIsDarkText}) => {
  return (
    <div>
        <form>
            <input className='form-control w-25'  style={{position:'absolute',top:'65vh', left:'37.5vw'}}
            type='text'
            placeholder='Enter color name'
            required
            value={colorValue}
             onChange={(e)=>{
                setColorValue(e.target.value);
                setHexValue(colorNames(e.target.value));
                
            }} ></input>
            <button  className='btn btn-primary'
            style={{position:'absolute',top:'71vh', left:'37.5vw'}}
            type='button'
            onClick={()=>setIsDarkText(!isDarkText)}>
                Toggle Text Color
            </button>
        </form>
    </div>
  )
}

export default InputColor