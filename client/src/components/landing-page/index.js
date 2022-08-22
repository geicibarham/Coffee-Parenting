import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import './landing.css'
function Carousell(props) {
    const items = [
        {

            description: 'Parenting is hard! You dont have to do it alone. Connect with other parents for a virtual coffee!',
            className: 'image__1'
        },
        {

            description: 'Because we know parenting comes with a lot of reading, ' +
                'we provide sources with information for different age groups!',
            className: 'image__2'
        },
        {


            className: 'image__3',
            description: 'Expecting? Here you can generate and save random baby names!'
        },
    ];


    return (
        <Carousel
            fullHeightHover={false}
            navButtonsAlwaysVisible={true}

            autoPlay={false}>

            {

                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}


function Item(props) {
    return (
        <>

            <Paper className={props.item.className}>
                <div style={{ width: "30%", display: 'flex' }}>
                    <h6>{props.item.description} </h6>
                </div>
            </Paper>


        </>

    )


}
export default Carousell;