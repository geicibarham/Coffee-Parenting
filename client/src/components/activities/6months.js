
import tummy from '../../assets/images/tummy.jpg'
import play from '../../assets/images/bed.jpg'
import water from '../../assets/images/water.jpg'
import css from './style.css'
import Footer from '../footer'
import { Link } from 'react-router-dom'
import React from 'react'
function Sixmonths() {
    return (<>


        <h1> Young Infants </h1>
        <section id="six-month-container">
            <div id="first_container">

                <ul id="activity-list">


                    <Link to="/one-three">1-3 Years</Link>  < br /> < br />
                    <Link to="/three">3+ Years</Link>  < br /> < br />



                </ul>
                <p className='description'>
                    At this age it is very important to strengthen
                    core and neck muscles, as that will be the foundation
                    for sitting,
                    crawling, walking and will help improve motor skills.
                </p>
                < img id="baby_first_row" style={{
   width: "340px",
                }}
                    src={tummy} alt="baby doing tummy time" />
            </div>

            <h2 className='title'>Tips and Tricks</h2>
            <div id="second_row">

                < img style={{
                        width: "340px", borderRadius: "20px",
                    marginBottom: "20px",
                    marginLeft: "10px"
                }}
                    src={play} alt="baby doing tummy time" />

                <p className='description' >
                    Some tips and tricks for making tummy time more enjoyable
                    for baby is reading books, listening to songs and traveling tummy time.
                    To do traveling tummy time, simply place baby facing down on your
                    arms and walk around the house, telling baby a story, singing on
                    simply describe what you see.
                </p>
            </div>


            <h2 className="title">
                Tummy Time and Water</h2>

            <div id="last_row">
                <p className='description'>
                    Babies love water!
                    Put water on a baking sheet with baby's favorite toys and
                    let them have fun!
                </p>
                < img style={{
                    width: "340px",
                    borderRadius: "20px",
                    marginLeft: "20px",
                    marginBottom:"20px"
                }}
                    src={water} alt="baby doing tummy time" />
            </div>
        </section>
        < Footer />
    </>
    )
}

export default Sixmonths;