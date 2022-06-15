
import tummy from '../../assets/images/tummy.jpg'
import play from '../../assets/images/bed.jpg'
import css from './style.css'
import Footer from '../footer'

function Sixmonths() {
    return (
        <>
            <h3 style={{ textAlign: "center" }}>Young Infants</h3>
            <section id="six-month-container">

                <div id="text-image">
                    <h4 style={{ width: "50%", 
                    alignSelf: "center",
                    color:"black",
                    fontWeight:"lighter" }}>
                        At this age it is very important to strengthen
                        core and neck muscles, as that will be the foundation
                        for sitting,
                        crawling, walking and will help improve motor skills.
                    </h4>
                    < img style={{ width: "400px",  borderRadius: "20px" }} 
                    src={tummy} alt="baby doing tummy time" />
                </div>

                <div id="image">
                    < img style={{ width: "400px", borderRadius: "20px" }}
                        src={play} alt="baby doing tummy time" />

                    <h4 style={{
                    
                        width: "50%", alignSelf: "center",
                        color:"black",
                        fontWeight:"lighter"
                    }}>
                        Some tips and tricks for making tummy time more enjoyable
                        for baby is reading books, listening to songs and traveling tummy time.
                        To do traveling tummy time, simply place baby facing down on your
                        arms and walk around the house, telling baby a story, singing on
                        simply describe what you see.
                    </h4>
                </div>
            </section>
            < Footer />
        </>
    )
}

export default Sixmonths;