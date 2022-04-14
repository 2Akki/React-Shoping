

import React from 'react'

 class EventDemoComponent extends React.Component {
    constructor(props) {
        super()
        this.state = {
            msg:"Click"
        }
        this.InsertClick = this.InsertClick.bind(this)
    }
    InsertClick(){
       this.setState({
           msg:"Record inserted"
    })
        
    }
    render() {
        
        return (
            <div className="container-fluid">
                <h2>Event Demo </h2>
                <button onClick={this.InsertClick}>Insert</button>
                <p>{this.state.msg}</p>
            </div>
        )
    }
}

export default EventDemoComponent
