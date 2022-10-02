
import css from './style.css'
import Footer from '../footer'
import { Link } from 'react-router-dom'
import draw from '../../assets/images/draw.jpg'
import toddler from '../../assets/images/toddler.jpg'
import block from '../../assets/images/blocks.jpg'
import outdoor from '../../assets/images/outdoor.jpg'
import React from 'react'
import './3+.css'
function Three() {
    return (


        <>


            <h5>3+ Years</h5>

            <h5>Open Ended Toys </h5>
            <section id="six-month-container">


                <div id="first_container">

                    <ul id="activity-list">


                        <Link to="/sixmonths">0-6 Months</Link>  < br /> < br />
                        <Link to="/one-three">1-3 Years</Link>  < br /> < br />



                    </ul>



                    <span style={{ fontSize: "15px",
                textAlign:"center"}}>
                        As your toddler grows, you will notice a much more understanding child that is more
                        used to the routine and family rules.
                        With a broader vocabulary, your child is now able to better communicate their needs.
                        Open-ended toys can be used in different ways, depending on the child's imagination, desire,
                        and creativity.
                        Open-ended toys work fine, gross, large, and cognitive skills. Some examples of open-ended toys are
                        blocks, cars, magnetic tiles, costumes, and our favorite: Cardboard Boxes.
                    </span>


                    < img style={{
                  width: "330px",
                        borderRadius: "20px",

                    }}
                        src={block} alt="kid playing with blocks" />
                </div>



                <h5>Quiet Time</h5>
                <div id="second__row">

                    < img style={{
                        width: "330px",
                        borderRadius: "20px",
                        marginLeft:"10px"
                       
                    }}
                        src={draw} alt="kids drawing" />
                    <span style={{ fontSize: "15px" ,
                    alignSelf:"center",
                    width:"80%",textAlign:"center"
                    }}>
                        Quiet time is a period in the afternoon where children play independently, with low-key activities,
                        it enhances self-confidence, and creativity and gives parents a chance to drink their coffee without
                        being asked "but why" 100 times.  < br />
                        If your child is transitioning from naps, (we have all been there), quiet time can be helpful to recuperate and
                        recharge a little bit. < br />
                        We recommend starting with 15 minutes and increasing the time gradually. For low-key activities, you can
                        have sensory bins set up, coloring books, stickers, and blocks.

                    </span>

                </div>

                <h5>Tips and Tricks</h5>
                <div className='last-row'>

                    <span
                    style={{fontSize:"15px",
                    textAlign:"center",
                    }}>

                        ✔️Teach responsibility in small steps, starting with simple things like picking up their toys.< br /> < br />
                        ✔️Outdoor time is still important as sunlight helps produde adequate levels of vitamin D
                        which is essential for bone development and growth.
                        < br />
                        < br />

                        ✔️ Limit screen time, as that can lead to irregular sleep, impaired academic performance and behavioral problems.


                        < br />
                        < br />


                    </span>
                   
                        < img style={{
                            width: "330px",
                             borderRadius: "20px",
                            marginLeft: "20px",
                            marginBottom:"20px"
                           
                        }}
                            src={outdoor} alt="toddler climbing  stairs" />


                </div>
            </section>
            < Footer />
        </>
    )
}

export default Three;