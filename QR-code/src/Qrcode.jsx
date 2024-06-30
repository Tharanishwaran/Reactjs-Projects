import React from 'react'
import myimage from './assets/imageDesert.jpg'

function Qrcode() {
 
    return (
    <div className="app-container">
      <h1>QR Code Generator</h1>
      <img src={myimage} height={300} width={350} className='qr-image'></img>
      <div>
        <label htmlFor='dataInput' className='input-label'>
          Data for QR code:
        </label>

      <input type='text' id='dataInput'></input>

      <label htmlFor='sizeInput' className='input-label'>
        Image size  :
      </label>
     <input type='text' id='sizeInput'></input>

      <button className='generateb'>Generate QR Code</button>
      <button className='downloadb'>Download QR code</button> 
      </div>
 
    

    </div>
  )
}

export default Qrcode
