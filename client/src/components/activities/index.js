import react from 'react'
import css from './style.css'
import play from '../../assets/images/play.jpg'
import { Link } from 'react-router-dom'
import Footer from '../footer'
function Activities() {
    return (
        <>
            <section id="activity-container">
                <div>
                    <h3 style={{ textAlign: "center", paddingTop: "10px" }}>
                        Create Memories!</h3>

                </div>



                <div id="container">
                    <ul id="activity-list">

                        <Link to="/sixmonths">0-6 Months</Link> < br /> < br />
                        <Link to="/main">1-3 Years</Link>  < br /> < br />
                        <Link to="/main">3+ Years</Link>  < br /> < br />



                    </ul>

                    <p style={{ width: "70%", lineHeight: "40px", margin: "auto" }}>
                        On the very days of our childhood, we still remember the cookies baked by mommy, daddy, or grandma.
                        We can almost smell the dinner being cooked while we ran around the house, and we can almost feel
                        the tickles from daddy or grandpa. < br />
                        Creating great memories fosters connection and boosts development and we are here to help.
                        Check our list of activities and have fun!
                        On a personal note, we would like to tell you how great of a parent you are, for caring, for loving your children
                        and doing what is best for them.
                    </p>
                </div>

                <img style={{
                    width: "500px", marginRight: "10px",
                    borderRadius: "20px",
                    float: "right",
                    paddingBottom: "40px"
                }}
                    src={play} alt="child exploring outside" />
            </section>

            <Footer />
        </>
    )
}

export default Activities