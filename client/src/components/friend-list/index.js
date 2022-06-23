import React, { useState, useEffect } from 'react';
import girlNames from '../../data.json'
import boyNames from '../../data.boys.json'
import neutralNames from '../../data.neutral.json'
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
  function getRandomboys() {
    let randomElement = boyNames[Math.floor(Math.random() * boyNames.length)];
    console.log(randomElement)
    setrandomElement(randomElement)
    setMeaning(randomElement.meaning)
  }
  function getRandomneutral() {
    let randomElement = neutralNames[Math.floor(Math.random() * neutralNames.length)];
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
            <img style={{ height: "30px" }} src={girl} />
          </button>

          <button id="boy" onClick={getRandomboys}
            className="btn btn-info button-style">Boys
            <img alt="boy icon" style={{
              height: "30px",
              paddingLeft: "5px"
            }} src={boy} /></button>

          <button id="neutral" onClick={getRandomneutral}
            className="btn btn-info button-style">Neutral
            <img style={{ height: "30px" }} alt="neutral icon"
              src={neutral} />
          </button>
        </div>

        <div className='outer-container'>
          <div className='name-container'>
            <h1>{randomElement.name}</h1> <br />

          </div>
          <div className='meaning-container'>
            <p style={{ width: "50%", textAlign: "center" }}> {meaning}</p>
          </div>

        </div>
      </div>
    </>

  );
}

export default Names;