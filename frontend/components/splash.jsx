import React from 'react'
import SignUpForm from './session/signup_form_container'
import LogInForm from './session/login_from_container'

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: 'Sign Up',
            location: this.getLocation(),
            cityArray: [['Boston', 42.3601, -71.0589],['Portland', 43.6591, -70.2568],['Miami',25.7617, -80.1918]]
        }
        this.changeForm = this.changeForm.bind(this)
        this.getLocation = this.getLocation.bind(this)
        this.showPosition = this.showPosition.bind(this)
        this.Haversine = this.Haversine.bind(this)
        this.deg2rad = this.deg2rad.bind(this)
    }

    changeForm() {
        let newForm = this.state.form === "Sign in" ? 'Sign Up' : 'Sign in'
        this.setState({form: newForm})
      }

      

    showPosition(position) {
        let currentCity;
        let closestCity;
        let closestCityHaversineNum = 999999999999;

            for(let i=0; i<2; i++){
                currentCity = this.state.cityArray[i];
                console.log(currentCity)
                let distance = this.Haversine(position.coords.latitude,position.coords.longitude, currentCity[1], currentCity[2])
                if (distance < closestCityHaversineNum) {
                    closestCity = currentCity;
                    closestCityHaversineNum = distance
                }
            }
            var x = document.getElementById("demo");
              x.innerHTML = closestCity[0];
    
        }


    deg2rad(degrees){
        let radians = degrees * (Math.PI/180);
        return radians;
        }
                
    Haversine(lat1,lon1,lat2,lon2) {
          let deltaLat = lat2 - lat1 ;
          let deltaLon = lon2 - lon1 ;
          let earthRadius = 3959; // in miles 6371 in meters.
          let alpha    = deltaLat/2;
          let beta     = deltaLon/2;
          let a        = Math.sin(this.deg2rad(alpha)) * Math.sin(this.deg2rad(alpha)) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(this.deg2rad(beta)) * Math.sin(this.deg2rad(beta)) ;
          let c        = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          let distance =  earthRadius * c;
          return distance.toFixed(2);
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