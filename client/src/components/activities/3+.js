
import css from './style.css'
import Footer from '../footer'
import { Link } from 'react-router-dom'
import draw from '../../assets/images/draw.jpg'
import toddler from '../../assets/images/toddler.jpg'
import block from '../../assets/images/blocks.jpg'
import outdoor from '../../assets/images/outdoor.jpg'

function Three() {
    return (


        <>


            <h3 style={{
                textAlign: "center",
                paddingBottom: "20px",
                paddingBottom: "20px"
            }}>3+ Years</h3>


            <section id="six-month-container">


                <div id="text-image">

                    <ul style={{
                        width: "15%", height: "fit-content",
                        alignSelf: "center",
                        marginRight: "20px"
                    }} id="activity-list">


                        <Link to="/sixmonths">0-6 Months</Link>  < br /> < br />
                        <Link to="/one-three">1-3 Years</Link>  < br /> < br />



                    </ul>


                    < br />
                    < br />
                    <p style={{
                        alignSelf: "center",
                        width: "50%"
                    }}>
                        <h4 style={{
                            textAlign: "center",
                            paddingTop: "20px"
                        }}>Open Ended Toys</h4>
                        As your toddler grows, you will notice a much more understanding child that is more
                        used to the routine and family rules.
                        With a broader vocabulary, your child is now able to better communicate their needs.
                        Open-ended toys can be used in different ways, depending on the child's imagination, desire,
                        and creativity.
                        Open-ended toys work fine, gross, large, and cognitive skills. Some examples of open-ended toys are
                        blocks, cars, magnetic tiles, costumes, and our favorite: Cardboard Boxes.


                    </p>
                    < img style={{
                        width: "400px",
                        borderRadius: "20px",
                        marginLeft: "10px"
                    }}
                        src={block} alt="kid playing with blocks" />
                </div>



                <h4 style={{
                    textAlign: "center",
                    paddingTop: "20px",
                    paddingBottom: "20px"
                }}>Quiet Time</h4>
                <div id="text-image">

                    < img style={{
                        width: "400px",
                        borderRadius: "20px",
                        marginRight: "20px"
                    }}
                        src={draw} alt="kids drawing" />
                    <h4 style={{
                        width: "50%",
                        alignSelf: "center",
                        color: "black",
                        fontWeight: "lighter"
                    }}>
                        Quiet time is a period in the afternoon where children play independently, with low-key activities,
                        it enhances self-confidence, and creativity and gives parents a chance to drink their coffee without
                        being asked "but why" 100 times.  < br />
                        If your child is transitioning from naps, (we have all been there), quiet time can be helpful to recuperate and 
                        recharge a little bit. < br />
                        We recommend starting with 15 minutes and increasing the time gradually. For low-key activities, you can 
                        have sensory bins set up, coloring books, stickers, and blocks.

                    </h4>

                </div>

                <h4 style={{
                    textAlign: "center",
                    paddingTop: "20px"
                }}>Tips and Tricks</h4>
                <div className='tips'>




                    <h4 style={{

                        width: "50%", alignSelf: "center",
                        color: "black",
                        fontWeight: "lighter"
                    }}>
                      
                        ✔️Teach responsibility in small steps, starting with simple things like picking up their toys.< br /> < br />
                        ✔️Outdoor time is still important as sunlight helps produde adequate levels of vitamin D
                        which is essential for bone development and growth.
                        < br />
                        < br />

                        ✔️ Limit screen time, as that can lead to irregular sleep, impaired academic performance and behavioral problems.
                        

                        < br />
                        < br />


                    </h4>
                    <div>
                        < img style={{
                            width: "400px", borderRadius: "20px",
                            marginLeft: "20px",
                            float: "right"
                        }}
                            src={outdoor} alt="toddler climbing  stairs" />
                    </div>

                </div>
            </section>
            < Footer />
        </>
    )
}

export default Three;