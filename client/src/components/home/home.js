import Carousell from '../landing-page/index'
import Footer from '../footer';
import './home.css'
import { Link } from "react-router-dom";
import React from 'react';

const Home = () => {
    return (
        <>
            < Carousell />
            < div className='middle'>

                <Link to='/main'>
                    <button className='btn__landing'>Guest</button>
                </Link>
                <button className='btn__landing'>Join</button>
                <button className='btn__landing'>Login</button>


            </div>

            < Footer />
        </>
    )
}

export default Home;