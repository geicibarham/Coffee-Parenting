import dog from '../../assets/images/dog-cartoon.png'
import css from './landing.css'
import Footer from '../footer';
import Header from '../header';


function LandingPage() {
    return (
        <>
        
            <section id="dog-container">
                <div className="text-container">
                    <h3 id="working-app" className="text">Parenting is hard. < br />
                  
                    </h3>
                    <h4 className="text">You don't have to do it  alone! <br />
                    
                       </h4>
                </div>
                {/* <img id="dog" style={{ height: "400px" ,width:"500px"}} src={dog} alt="cute dog with glasses" /> */}
            </section>
            {/* <div>
                < Footer />
            </div> */}
        </>
    )
}

export default LandingPage;