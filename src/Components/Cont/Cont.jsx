import React from 'react';
import './Cont.css'
import { Link } from 'react-router-dom';

const Cont = () => {
    return (
        <div className='cont'>
            <h3>ACN Tokenomics</h3>
            <Link to='https://polygonscan.com/address/0x8E2Ab8a0A669A69921CDB2ACf5730ACd9089f316'><button>Polygon Contract Address</button></Link>
            <div className='bf-con'>
                <div>
                    <h1>MAX SUPPLY</h1>
                    <h2>10,000,000,000 ACN</h2>
                </div>
                <div>
                    <h1>TOTAL SUPPLY</h1>
                    <h2>1,956,441,580 ACN</h2>
                </div>
                <div>
                    <h1>BEP-20 CONTRACT</h1>
                    <h2>0x8E2Ab8a0A669A69921CDB2A <br /> Cf5730ACd9089f316</h2>
                </div>
                <div>
                    <h1>SMART CONTRACT AUDIT</h1>
                    <h2>Solidity Finance</h2>
                </div>
                <div>
                    <h1>PLANNED LISTING</h1>
                    <h2>MEXC , Bibox & QuickSwap</h2>
                </div>
                <div>
                    <h1>TARGETED LISTING PRICE</h1>
                    <h2>$ 0.0001</h2>
                </div>

            </div>
        </div>
    );
};

export default Cont;