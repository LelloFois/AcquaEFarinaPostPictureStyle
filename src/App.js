import './App.css';
// import html2canvas from 'html2canvas';
import Form from './components/Form'
import PictureLayout from './components/PictureLayout';
import { useState, useEffect } from 'react';


function App() {
  const [input, setInput] = useState();

  // useEffect(() => {
  //   input()
  // })
  console.log(input)

  return (
    <div className="App">
      <Form setInput= { setInput }/>
      

      <div className='pic_layout'>
        <PictureLayout picture= { input } />
      </div>
      
    </div>
  );
}

export default App;
