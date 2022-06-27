import React, { useState, useEffect } from 'react';
import css from './name.css'


function SavedNames() {

    const [items, setItems] = React.useState(
        JSON.parse(localStorage.getItem('name'))
    );
    useEffect(() => {
        const items = JSON.parse
            (localStorage.getItem('name'));
        // let itemslength = items.length
        setItems(items);
    }, []);



    return (


        <div style={{width:"fit-content"}}class="card">
            <div style={{color:"white"}} class="card-header">
               Saved Names
            </div>
            {/* <div style={{ width: "10%" }}> */}
            {!items &&
                'no names saved'
            }
            {
                items &&
                items.map((nameLocal) => (
                    <div key={nameLocal.meaning}
                      >

                        <div class="card-body">

                            <p class="card-text">
                            {nameLocal.name}
                            </p>
                        </div>


                      
                    </div>
                ))}
        </div>
    )
}

export default SavedNames;