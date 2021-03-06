
import css from './style.css'
import Footer from '../footer'
import { Link } from 'react-router-dom'
import kid from '../../assets/images/child-walking.jpg'
import toddler from '../../assets/images/toddler.jpg'
import rainbow from '../../assets/images/rainbow.jpg'

function OneThree() {
    return (


        <>


            <h3 style={{
                textAlign: "center",
                paddingBottom: "20px",
                paddingBottom: "20px"
            }}>Young Toddlers</h3>


            <section id="six-month-container">


                <div id="text-image">

                    <ul style={{
                        width: "15%", height: "fit-content",
                        alignSelf: "center",
                        marginRight: "20px"
                    }} id="activity-list">


                        <Link to="/sixmonths">0-6 Months</Link>  < br /> < br />
                        <Link to="/three">3+ Years</Link>  < br /> < br />



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
                        }}>Child Led Walks</h4>
                        Once little ones start walking, that is all they want to do.
                        Young Toddlers have a desire for practicing their newly
                        developed skills and as parents, we can offer them as much time
                        possible to do that.
                        Following the child's lead is essential for child-led walks.
                        As your toddler becomes more independent, you can support their interests
                        by giving them space to explore and discover on their own.
                        Adults tend to have a destination in mind when walking, while children live
                        in the present moment. When adults impose their pace upon their children, the little ones
                        tire out quickly and ask to be carried. But when toddlers walk on their own initiative,
                        they cover quite a lot of ground.
                        Child-led walks are fun and promote independence and freedom.


                    </p>
                    < img style={{
                        width: "400px",
                        borderRadius: "20px",
                        marginLeft: "10px"
                    }}
                        src={kid} alt="baby leading walk" />
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
                            ??????Consistent schedule: Offering a consistent schedule
                            ensures their needs are being met, as far as eating,
                            sleeping, playtime, etc. Children tend to thrive with predictability
                            and set rules.< br /> < br />
                            ??????Outdoor time: Take them outside! The sun helps
                            regulate their circadian rhythm and get that energy out! < br />
                            < br />

                            ?????? Offer choices with limits. Offering choices within limits
                            helps toddlers express opinions and have control over daily tasks.

                            < br />
                            < br />
                      

                        </h4>
                        <div>
                            < img style={{
                                width: "400px", borderRadius: "20px",
                                marginRight: "20px",
                                float:"right"
                            }}
                                src={toddler} alt="toddler climbing  stairs" />
                            </div>
                    
                </div>
            </section>
            < Footer />
        </>
    )
}

export default OneThree;