import React, { Component } from 'react';

const SPEED = 0.003 / Math.PI;
const FRAMES = 10;

class Clock extends Component {
    faceRef = React.createRef();
    arcGroupRef = React.createRef();
    clockHandRef = React.createRef();
    frame = null;
    hitCounter = 0;
    rotation = 0;
    t0 = Date.now();
    arcs = [];

    animate = () => {

    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Clock;