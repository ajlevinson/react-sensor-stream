import React from 'react';
import "./styles.css";
import "./App.css";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SensorGrid from "./components/sensorgrid/SensorGrid";

function App() {

    return (
        <div className="App">
            <div className="container">
                <Header/>
            </div>
            <SensorGrid/>
            <div>
                <Footer/>
            </div>
        </div>

    )
}

export default App;