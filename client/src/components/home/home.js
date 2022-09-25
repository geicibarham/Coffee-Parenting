import Carousell from '../landing-page/index'
import Footer from '../footer';
import './home.css'
import { Link } from "react-router-dom";
import React from 'react';
import 'animate.css';
const Home = () => {
    return (
        <>
            < Carousell />
            < div className='middle animate__animated  animate__backInLeft'>
           
                <Link to='/main'>
                    <button className='btn__landing'>Guest</button>
                </Link>
                <Link to="/join">
                <button className='btn__landing'>Join</button>
                </Link>
                <Link to="/login">
                <button className='btn__landing'>Login</button>
                </Link>
           


            </div>

            < Footer />
        </>
    )
}

export default Home;