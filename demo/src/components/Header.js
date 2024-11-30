import React from 'react';
import '../styles.css';

export default function Header(){
    return (
        <div className='header'>
            <img className='logo' src='../wireless-sensor.png' alt="react-sensor-stream" />
            <h2 className='app-subtitle'>Sensor Demo Data</h2>
        </div>
    );
}