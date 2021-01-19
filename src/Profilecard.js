import React from 'react';
import Tilt from 'react-tilt'
import './Profilecard.css'

const Profilecard=({id,FirstName,LastName,CreditCardType,Gender,PhoneNumber,Email,PaymentMethod})=> {
    return (
        <Tilt className="Tilt" options={{ max : 35 }} >
 
        <div className='profilecard Tilt-inner'>
            <img alt='robots' src={`https://picsum.photos/200/200?random=${id}`} />
            <h2>{FirstName} {LastName}</h2>
            <p>Gender: {Gender}</p>
            <p>Tel: {PhoneNumber}</p>
            <p>Email: {Email}</p>
            <p>Credit Card Type: {CreditCardType}</p>
            <p>Payment Method: {PaymentMethod}</p>       
        </div>
        </Tilt>
    
    )
}

export default Profilecard
