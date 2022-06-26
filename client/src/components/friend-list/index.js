import React, { useState, useEffect } from 'react';
import girlNames from '../../data.json'
import boyNames from '../../data.boys.json'
import neutralNames from '../../data.neutral.json'
import css from './name.css'
import baby from '../../assets/images/baby.png'
import girl from '../../assets/images/girl.png'
import boy from '../../assets/images/boy.png'
import neutral from '../../assets/images/neutral.png'
import SavedNames from './savedNames';

function Names(savedNameObj) {

  const [randomElement, setrandomElement] =
    useState('');

  const [meaning, setMeaning] =
    useState('');

  // const [namesArray, setNamesarray] =
  //   useState()

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const items = JSON.parse
  //     (localStorage.getItem('name'));
  //   if (items) {
  //     setItems(items);
  //   }
  // }, []);

  function getRandom() {
    let randomElement = girlNames[Math.floor(Math.random() * girlNames.length)];
    setrandomElement(randomElement)
    setMeaning(randomElement.meaning)
  }
  function getRandomboys() {
    let randomElement = boyNames[Math.floor(Math.random() * boyNames.length)];
    setrandomElement(randomElement)
    setMeaning(randomElement.meaning)
  }
  function getRandomneutral() {
    let randomElement = neutralNames[Math.floor(Math.random() * neutralNames.length)];
    setrandomElement(randomElement)
    setMeaning(randomElement.meaning)

  }

  function save() {
    let savedName = randomElement;
    // create array to store items on local storage
    let namesArray = [];
    // check to see if there is anything on local storage
    if (localStorage.getItem('name')) {
      namesArray = JSON.parse(
        localStorage.getItem('name')
      )
    }
    if (savedName) {
      namesArray.push(savedName)
    }

    console.log(namesArray.length)
    console.log(savedNameObj)
    localStorage.setItem("name", JSON.stringify
      (namesArray))
    // setNamesarray(namesArray)

    // console.log(namesArray)
    console.log(namesArray)
  }
  // create function to retrieve data from local storage
  // this function will also set the state
 
  return (
    <>


      {/* {!namesArray &&
        'no names saved'
      } */}

      <div
        className="App">
          < SavedNames />
        {/* <div style={{ width: "10%" }}>

          {
            items &&
            items.map((nameLocal) => (
              <div key={nameLocal.meaning}
                className="card mb-3">


                <p style={{ color: "black" }}>
                  {nameLocal.name}
                </p>
              </div>
            ))}
        </div> */}
        <h4 style={{ marginTop: "10px" }}>
          Generate Random Baby Name
          <img style={{ height: "60px" }}

            src={baby} alt="baby stroller icon" />
        </h4>

        <div className='button-container'>
          <button id="girl"
            onClick={getRandom} className="btn btn-info 
            button-style">Girls
            <img alt="girl-icon" style={{ height: "30px" }} src={girl} />
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

            <h1>{randomElement.name}
              {randomElement && <button id="save"
                style={{
                  color: "red",
                  border: "none", backgroundColor: "white",
                  fontSize: "35px",
                  marginLeft: "15px"

                }}
                onClick={save}>
                &#9829;</button>}
            </h1> <br />


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