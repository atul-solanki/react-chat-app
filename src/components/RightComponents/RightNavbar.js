import React from 'react';
import { Container, Navbar, Image} from 'react-bootstrap';

/**
 * Component for the right side navbar displaying contact information.
 * @param {string} name - The name of the contact.
 * @param {string} image - The URL of the contact's profile picture.
 * @returns {JSX.Element} - JSX element representing the NavbarRight component.
 */
export default function NavbarRight({ name, image }) {
    return (
        <>
            <Navbar className="right-nav">
                <Container fluid>
                    {/* Navbar brand with contact name and image */}
                    <div className='navbar-brand'>
                        <Image 
                            className="m-1" 
                            src={image} 
                            roundedCircle 
                        />
                        <div className='contact-name'>{name}</div>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}
