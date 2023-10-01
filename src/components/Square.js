import React from 'react'

const Square = ({ colorValue, hexValue, isDarkText }) => {

    return (
        <div>
            <div className='card w-25 h-25 position-absolute top-50 start-50 translate-middle mx-auto'
                style={{ backgroundColor: colorValue, color: isDarkText ? "#000" : "#fff" }} >
            
            <p className='position-absolute top-50 start-50 translate-middle'>{colorValue?colorValue:"Empty Value"}</p>
            <p className='position-absolute top-50 start-50 translate-middle mt-4'>{hexValue?hexValue:null}</p>
            </div>
            
        </div>
    )
}
 Square.defaultProps ={
    colorValue:"Empty Color Value"
 }

export default Square