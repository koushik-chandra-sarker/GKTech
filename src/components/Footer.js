import React from 'react';
const date = new Date().getFullYear()
const Footer = () => {
    return (
        <>
            <footer className='bg-dark text-center blockquote-footer mb-0 '>
                <p>&copy; {date} GKTech. All Rights Reserved | Terms and Condition </p>
            </footer>
        </>
    );
};

export default Footer;