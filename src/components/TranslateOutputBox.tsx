import React from 'react'

type props = {
    message: string;
}

const TranslateOutputBox = ({message}) => {

  return (
    <div style={{width:'40vw', height: '20vh', border: '1px solid #7B6F9A', 
    borderRadius: '5px', backgroundColor:'whitesmoke', margin: '0 auto', marginTop: '20px', 
    padding: '20px'}}>
      <p>{message}</p>
    </div>
  )
}

export default TranslateOutputBox
