import React, { useState, useEffect } from 'react';
import girlNames from '../../data.json'

function Test() {

  console.log(girlNames[0].name)
  const [randomElement, setrandomElement] =
    useState('');

  function getRandom() {
    let randomElement = girlNames[Math.floor(Math.random() * girlNames.length)];
    console.log(randomElement.name)
    setrandomElement(randomElement)
  }

  return (
    <>
      <div className="App">
        <h1>Test</h1>
 

        <button onClick={getRandom}>Test</button>
        <h1>{randomElement.name}</h1>
        {/* <h1>{getRandom()}</h1> */}
        {/* {getRandom()} */}
        {/* {
          girlNames.map(name => {
            return (
              <div key="name.id">
                {name.name}
              </div>
            )
          })
        } */}
      </div>
    </>

  );
}

export default Test;