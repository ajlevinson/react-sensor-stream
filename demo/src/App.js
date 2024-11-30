import React from 'react';
import "./styles.css";
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import SensorGrid from "./components/SensorGrid";

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