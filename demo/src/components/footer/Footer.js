import React from 'react';
import '../../styles.css';

export default function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer className='footer' data-testid='footer'>
            <p className='footer-text' data-testid='footer-text'>
                © {currentYear} AJ Levinson, All rights reserved.
            </p>
        </footer>
    );
}