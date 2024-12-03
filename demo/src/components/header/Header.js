import React from 'react';
import '../../styles.css';

export default function Header(){
    return (
        <div className='header' data-testid='header'>
            <div className='header-child'>
                <img className='logo' src='../wireless-sensor.png' alt="react-sensor-stream" data-testid='header-logo'/>
            </div>
            <div className='header-child'>
                <h2 className='app-subtitle'>Sensor Demo Data</h2>
            </div>
        </div>
    );
}