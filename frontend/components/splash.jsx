import React from 'react'
import SignUpForm from './session/signup_form_container'
import LogInForm from './session/login_from_container'

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: 'Sign Up',
            location: this.getLocation(),
            cityArray: [['Boston', 42.3601, -71.0589],['Portland', 43.6591, -70.2568]]
        }
        this.changeForm = this.changeForm.bind(this)
        this.getLocation = this.getLocation.bind(this)
        this.showPosition = this.showPosition.bind(this)
    }

    changeForm() {
        let newForm = this.state.form === "Sign in" ? 'Sign Up' : 'Sign in'
        this.setState({form: newForm})
      }

      

    showPosition(position) {
            var x = document.getElementById("demo");
              x.innerHTML = position.coords.latitude +
               '&nbsp' + position.coords.longitude;
              
            function deg2rad(degrees){
                radians = degrees * (Math.PI/180);
                return radians;
                }
                
            function Haversine(lat1,lon1,lat2,lon2) {
                  deltaLat = lat2 - lat1 ;
                  deltaLon = lon2 - lon1 ;
                  earthRadius = 3959; // in miles 6371 in meters.
                  alpha    = deltaLat/2;
                  beta     = deltaLon/2;
                  a        = Math.sin(deg2rad(alpha)) * Math.sin(deg2rad(alpha)) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(deg2rad(beta)) * Math.sin(deg2rad(beta)) ;
                  c        = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                  distance =  earthRadius * c;
                  return distance.toFixed(2);
            }
    
    
    
    
    
    
            }




    getLocation() {
            
             if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
    }


    render() {
        
        let form = (this.state.form === 'Sign Up' ?  <SignUpForm/> : <LogInForm/>)
        let formChangeButton = (this.state.form === 'Sign Up' ?  ' sign into your account' : ' create an account')
        return (
            <div id='splash'>
                <div id='splash-contents'>
                    <button onClick={this.getLocation()}>Try It</button>
                    <div id="demo"></div>
                    {/* <img src="" alt="" id="splash-image"/>
                    <p id='splash-quote'>Everything I learned, I learned from the movies."
                    - Audrey Hepburn </p>
                    <div id='splash-form'>
                        <header>
                            <h2 id='form-title'>{this.state.form}</h2>
                            <div className='session-header-sub'>
                            or&nbsp;<p id='change-form' onClick={this.changeForm}> {formChangeButton}</p>
                            </div>
                        </header>
                        {form}
                    </div> */}
                    {/* <img id='citgo' src={window.citgo} /> */}
                </div>
            </div>
        )
    }

}
export default Splash;