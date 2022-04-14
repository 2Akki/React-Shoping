import React from 'react'

const NetflixHeaderComponent = () => {
    return (
        <div>
            <div className="d-flex justify-content-between p-5">
                <div style={{fontSize: '45px',color: 'red'}}>
                    NETFLIX
                </div>
                <div>
                <div className ="input-group">
                    <select className="input-group-text">
                        <option>language</option>
                        <option>English</option>
                        <option>हिंदी</option>
                    </select>
                    <button className="btn btn-danger ms-3">
                    Signin
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NetflixHeaderComponent
