
import tummy from '../../assets/images/tummy.jpg'
import play from '../../assets/images/bed.jpg'
import water from '../../assets/images/water.jpg'
import css from './style.css'
import Footer from '../footer'
import { Link } from 'react-router-dom'
import React from 'react'
function Sixmonths() {
    return ( <>


            <h3 style={{
                textAlign: "center",
                paddingBottom: "20px",
                paddingBottom: "20px"
            }}>Young Infants</h3>

        
            <section id="six-month-container">
          
          
                <div id="text-image">

                <ul style={{width:"15%",height:"fit-content",
            alignSelf:"center",
            marginRight:"20px"}} id="activity-list">

                
                    <Link to="/one-three">1-3 Years</Link>  < br /> < br />
                    <Link to="/three">3+ Years</Link>  < br /> < br />



                </ul>
                    <h4 style={{
                        width: "50%",
                        alignSelf: "center",
                        color: "black",
                        fontWeight: "lighter"
                    }}>
                        At this age it is very important to strengthen
                        core and neck muscles, as that will be the foundation
                        for sitting,
                        crawling, walking and will help improve motor skills.
                    </h4>
                    < img style={{
                        width: "400px",
                        borderRadius: "20px",
                        marginLeft: "20px"
                    }}
                        src={tummy} alt="baby doing tummy time" />
                </div>
                <h4 style={{
                    textAlign: "center",
                    paddingTop: "20px"
                }}>Tips and Tricks</h4>
                <div id="image">

                    < img style={{
                        width: "400px", borderRadius: "20px",
                        marginRight: "20px"
                    }}
                        src={play} alt="baby doing tummy time" />

                    <h4 style={{

                        width: "50%", alignSelf: "center",
                        color: "black",
                        fontWeight: "lighter"
                    }}>
                        Some tips and tricks for making tummy time more enjoyable
                        for baby is reading books, listening to songs and traveling tummy time.
                        To do traveling tummy time, simply place baby facing down on your
                        arms and walk around the house, telling baby a story, singing on
                        simply describe what you see.
                    </h4>
                </div>


                <h4 style={{
                    textAlign: "center",
                    paddingTop: "20px",
                    paddingBottom: "20px"
                }}>Tummy Time and Water</h4>
                <div id="text-image">
                    <h4 style={{
                        width: "50%",
                        alignSelf: "center",
                        color: "black",
                        fontWeight: "lighter"
                    }}>
                        Babies love water!
                        Put water on a baking sheet with baby's favorite toys and
                        let them have fun!
                    </h4>
                    < img style={{
                        width: "400px",
                        borderRadius: "20px",
                        marginLeft: "20px"
                    }}
                        src={water} alt="baby doing tummy time" />
                </div>
            </section>
            < Footer />
        </>
    )
}

export default Sixmonths;