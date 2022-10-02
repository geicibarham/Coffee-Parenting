import React from 'react'
import css from './style.css'
import play from '../../assets/images/play.jpg'
import { Link } from 'react-router-dom'
import Footer from '../footer'
function Activities() {
    return (
        <>
            <h2 style={{
                textAlign: "center",
                paddingTop: "10px"
            }}>
                Create Memories!</h2>
            <section id="outer_container">



                <ul id="activity-list">

                    <Link to="/sixmonths">0-6 Months</Link> < br /> < br />
                    <Link to="/one-three">1-3 Years</Link>  < br /> < br />
                    <Link to="/three">3+ Years</Link>  < br /> < br />

                </ul>


                <p id="description">
                    From the very days of our childhood, we still remember the cookies baked by mom, dad, or grandma.
                    We can almost smell the dinner being cooked while we ran around the house, and we can almost feel
                    the tickles from dad or grandpa. < br /> < br />
                    Creating great memories fosters connection and boosts development and we are here to help.
                    Check our list of activities and have fun!
                    On a personal note, we would like to tell you how great of a parent you are, for caring, for loving your children
                    and doing what is best for them.

                </p>
                <img id="kid_playing" style={{
                    width: "350px",
                    height: "350px",
                    
                    borderRadius: "20px",

                    marginBottom: "40px"
                }}
                    src={play} alt="child exploring outside" />







            </section>
            <Footer />
        </>
    )
}

export default Activities