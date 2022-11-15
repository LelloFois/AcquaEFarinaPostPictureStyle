import './App.css';
import html2canvas from 'html2canvas';
import PictureLayout from './components/PictureLayout';
import { useState } from 'react';
import { saveAs } from 'file-saver';



function App() {
  const [input, setInput] = useState();

  const imageUpload = (e) => {
    const [file] = e.target.files;
    setInput(URL.createObjectURL(file));
  };

  const getScreenShot = () => {  html2canvas(document.querySelector(".App")).then(canvas => {
   
      // let myImage = canvas.toDataURL("image/png");
      canvas.toBlob(function (blob) {
        saveAs(blob, "testimage.jpg");
    });
      // return window.open(myImage);
  });}


  return (
    <div className="App" id="capture">

      <div className='pic_layout' onClick={getScreenShot}>
        <PictureLayout 
          picture= { input } 
          setPicture= { setInput } 
          imageUpload = { (e) => imageUpload(e) }
        />
      </div>
      
    </div>
  );
}

export default App;
