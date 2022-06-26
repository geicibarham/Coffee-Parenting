import React, { useState, useEffect } from 'react';



function SavedNames() {

  

    const [items, setItems] = useState([]);
    useEffect(() => {
        const items = JSON.parse
            (localStorage.getItem('name'));
        
            setItems(items);
          
    },[]);

  
    return (
        <div style={{ width: "10%" }}>

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
        </div>
    )




}

export default SavedNames;