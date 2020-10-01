import React from 'react'
import SignUpForm from './session/signup_form_container'
import LogInForm from './session/login_from_container'

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: 'Sign Up'
        }
        this.changeForm = this.changeForm.bind(this)
    }

    changeForm() {
        let newForm = this.state.form === "Sign in" ? 'Sign Up' : 'Sign in'
        this.setState({form: newForm})
      }



    render() {
        
        let form = (this.state.form === 'Sign Up' ?  <SignUpForm/> : <LogInForm/>)
        let formChangeButton = (this.state.form === 'Sign Up' ?  ' sign into your account' : ' create an account')
        return (
            <div id='splash'>
                <div id='splash-contents'>
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
                    </div>
                </div>
            </div>
        )
    }

}
export default Splash;