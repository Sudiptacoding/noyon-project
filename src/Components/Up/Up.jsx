import React from 'react';
import { Link } from 'react-router-dom';

const Up = () => {
    return (
        <div style={{display:'flex' , alignItems:'center' , justifyContent:'center' , width:'100%' , height:'100vh'}}>
         <Link to='https://docs.google.com/forms/d/e/1FAIpQLSeKwX_KMBRVtqROc2JDvZ03WY_VfwtsfOrDH9zzgpKa98LKIg/viewform'><button>complete KYC verification</button></Link>
        </div>
    );
};

export default Up;