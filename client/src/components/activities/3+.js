
import css from './style.css'
import Footer from '../footer'
import { Link } from 'react-router-dom'
import kid from '../../assets/images/child-walking.jpg'
import toddler from '../../assets/images/toddler.jpg'
import rainbow from '../../assets/images/rainbow.jpg'
import block from '../../assets/images/blocks.jpg'

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
                }}>Rainbow Spaghetti</h4>
                <div id="text-image">

                    < img style={{
                        width: "400px",
                        borderRadius: "20px",
                        marginRight: "20px"
                    }}
                        src={rainbow} alt="rainbow spaghetti" />
                    <h4 style={{
                        width: "50%",
                        alignSelf: "center",
                        color: "black",
                        fontWeight: "lighter"
                    }}>
                        Sensory activities are a great way to foster independent play,
                        enhance fine motor skills and self-confidence.
                        If You choose to create memories with your little one by
                        using Sensory Activities, make sure the materials
                        are eatable. It is a lot likely they will try and explore with their mouths!
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
                        Some tips and tricks for handling meltdowns and tantrums
                        are: < br /> < br />
                        ✔️Consistent schedule: Offering a consistent schedule
                        ensures their needs are being met, as far as eating,
                        sleeping, playtime, etc. Children tend to thrive with predictability
                        and set rules.< br /> < br />
                        ✔️Outdoor time: Take them outside! The sun helps
                        regulate their circadian rhythm and get that energy out! < br />
                        < br />

                        ✔️ Offer choices with limits. Offering choices within limits
                        helps toddlers express opinions and have control over daily tasks.

                        < br />
                        < br />


                    </h4>
                    <div>
                        < img style={{
                            width: "400px", borderRadius: "20px",
                            marginRight: "20px",
                            float: "right"
                        }}
                            src={toddler} alt="toddler climbing  stairs" />
                    </div>

                </div>
            </section>
            < Footer />
        </>
    )
}

export default Three;