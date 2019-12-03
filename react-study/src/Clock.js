import React, { Component } from 'react';
// import DigitalClock from './Digitalclock';
import Logger from './logger'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleString(),
            counter: 0
        }
        this.updateTime();

    }

    updateTime() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleString(),
                counter: this.state.counter + 1
            })


        }, 1000)
    }



    render() {
        return (

            // {/* <h1>{this.state.currentTime} </h1> */}

            // {/* <DigitalClock time={this.state.currentTime}/>      */}

            <div>
                {

                    (this.state.counter < 2) ?
                        (<Logger time={this.state.currentTime} />) :
                        (<div></div>)
                }

            </div>
        )
    }



}

export default Clock