import React, { useState, useEffect } from 'react';
import css from './name.css'
import trash from '../../assets/images/trash.png'

function SavedNames(props) {

    const items = props.items

    return (
        <div style={{width:"30%", textAlign:"center",
        justifyContent:"center",
         marginTop:"30px"}}class="card">
            <div style={{color:"white"}} class="card-header">
               Saved Names

             
               {items? <img id="trash"onClick={props.clear}style={{height:"30px"}}
               src={trash} alt="icon for trash can"/> : ''}
            </div>
           
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