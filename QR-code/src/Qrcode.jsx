import React, { useState } from 'react'
import myimage from './assets/code.png'
// import qrimage from './assets/qr-code.jpg'

function Qrcode() {

  const[img,setimg] = useState(`https://api.qrserver.com/v1/create-qr-code/?
   size=150x150&data=aksk`);

  const[loading,setLoading] = useState(false);

  const [qrData, setQrData] = useState("");

  const [qrsize,SetQrSize] = useState("");

async function generateQR() {
   
  setLoading(true)
  try{
   const url = `https://api.qrserver.com/v1/create-qr-code/?
   size=${qrsize}&data=${qrData}`;
   
   setimg(url);

  } catch(error){

 console.error("Error generating QR code",error)

} finally{

  setLoading(false);
}
}
function downloadQr(){

  fetch(img)
    .then((response) => response.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });


}

  

  

 
  return (
    
    <div className="app-container">
    
      <h1>QR Code Generator</h1>
    
    {img && <img src={img} className='qr-image'/>}     
     
    {loading && <p>please wait...</p>}
      
      <div>
        <label htmlFor='dataInput' className='input-label'>
          Data for QR code:
        </label>

      <input type='text' value={qrData} id='dataInput' onChange={(e) => setQrData(e.target.value)}></input>

      <label htmlFor='sizeInput' className='input-label'>
        Image size  :
      </label>
     <input type='text' value={qrsize} id='sizeInput' onChange={(e) => SetQrSize(e.target.value)}></input>

      <button className='generateb' onClick={generateQR} disabled={loading}>Generate QR Code</button>
      <button className='downloadb' onClick={downloadQr}>Download QR code</button> 
      </div>
 
    

    </div>
  )
}

export default Qrcode
