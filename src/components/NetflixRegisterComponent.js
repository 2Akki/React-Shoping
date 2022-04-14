import React, { Component } from 'react'

export class NetflixRegisterComponent extends Component {
   title ="Ready to watch? Enter your email to create or restart your membership."

    render() {
        return (
            <div className="d-flex bg-dark p-4 justify-content-center align-items-center mt-4">
                <div >
                    <p className="text-white">{this.title}</p>  
                    <div className="input-group input-group-lg">
                    <input type="email" placeholder="your email adress" className="form-control"></input>
                    <button className="btn btn-danger">
                        Get Started
                        <span class="bi bi-chevron-right"></span>
                    </button>
                    </div>

                </div>  
            </div>
        )
    }
}

export default NetflixRegisterComponent

