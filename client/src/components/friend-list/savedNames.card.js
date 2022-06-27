import React, { useState, useEffect } from 'react';



function SavedNamescard({ items,
    nameLocal,
    name }) {
    // console.log(items);
    console.log(name);

    return (

        <>

            <div key={nameLocal.meaning}
                className="card mb-3">


                <p style={{ color: "black" }}>
                    {name}
                </p>


            </div>
        </>
    )




}

export default SavedNamescard;