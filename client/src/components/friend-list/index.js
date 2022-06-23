import React, { useState, useEffect } from 'react';
import girlNames from '../../data.json'
import css from './name.css'
import baby from '../../assets/images/baby.png'
import girl from '../../assets/images/girl.png'
import boy from '../../assets/images/boy.png'
import neutral from '../../assets/images/neutral.png'
function Names() {

  // console.log(girlNames[0].name)
  const [randomElement, setrandomElement] =
    useState('');

    const [meaning, setMeaning] =
    useState('');

  function getRandom() {
    let randomElement = girlNames[Math.floor(Math.random() * girlNames.length)];
    console.log(randomElement)
    setrandomElement(randomElement)
    setMeaning(randomElement.meaning)
  }

  return (
    <>
      <div className="App">
        <h4 style={{ marginTop: "10px" }}>
          Generate Random Baby Name
          <img style={{ height: "60px" }}

            src={baby} alt="baby stroller icon" />
        </h4>


          <div className='button-container'>
            <button id="girl"
            onClick={getRandom} className="btn btn-info 
            button-style">Girls
            <img style={{height:"30px"}}src ={girl}/>
            </button>
            <button id="boy" onClick={getRandom} 
            className="btn btn-info button-style">Boys
             <img alt="boy icon" style={{height:"30px",
             paddingLeft:"5px"
            }}src ={boy}/></button>

            <button id="neutral"onClick={getRandom}
            className="btn btn-info button-style">Neutral
            <img style={{height:"30px"}} alt="neutral icon"
            src={neutral} /></button>
          </div>
          {/* <button onClick={getRandom}>Test</button> */}
          <div className='outer-container'>
          <div className='name-container'>
          <h1>{randomElement.name}</h1> <br/>
          <p style={{textAlign:"center"}}> {meaning}</p>
          </div>

        </div>
      </div>
    </>

  );
}

export default Names;