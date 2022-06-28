import React, { useState, useEffect } from 'react';
import css from './name.css'
import trash from '../../assets/images/trash.png'

function SavedNames() {

    const [items, setItems] = React.useState(
        JSON.parse(localStorage.getItem('name'))
    );

    function clear () {
        localStorage.clear()
      }
    useEffect(() => {
        const items = JSON.parse
            (localStorage.getItem('name'));
        // let itemslength = items.length
        setItems(items);
    }, []);



    return (


        <div style={{width:"30%", textAlign:"center",
        justifyContent:"center",
         marginTop:"30px"}}class="card">
            <div style={{color:"white"}} class="card-header">
               Saved Names

               {items &&
              <img id="trash"onClick={clear}style={{height:"30px"}}
               src={trash} alt="icon for trash can"/>
           
               
            }
            </div>
            {/* <div style={{ width: "10%" }}> */}
            {!items &&
                'No names yet'
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