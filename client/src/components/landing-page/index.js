import dog from '../../assets/images/dog-cartoon.png'
import css from './landing.css'
import Footer from '../footer';
import Header from '../header';
import Join from '../join';

function LandingPage() {
    return (
        <>
        <div id="landing-container">
          
                <div className="text-container">
                    <h4 id="working-app" className="text">Parenting is hard. 
                   
              
                    </h4>
                    < br />
                    <h5 className="text">
                    You don't have to do it alone.. < br />
                    Connect with other parents for a virtual coffee!< br />
                       </h5>
                       <h5>
                        

                       </h5>
                     
                </div>
              
               
                
          
            
            <div style={{width:"100%"}}>
                < Join />
                </div>
          
            <div>
            </div>
            </div>
                {/* < Footer /> */}
        
        
        </>
    )
}

export default LandingPage;