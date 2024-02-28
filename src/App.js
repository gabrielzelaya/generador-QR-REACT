import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function App() {
  const [qrData, setQrData] = useState('');

  const handleChange = (e) => {
    setQrData(e.target.value);
  };

  return (
    <div className="App">
      <h1>Generador de códigos QR</h1>
      <input
        type="text"
        placeholder="Ingresa el texto para generar el código QR"
        value={qrData}
        onChange={handleChange}
      />
      <br />
      {qrData && <QRCode value={qrData} />}
    </div>
  );
}

export default App;
