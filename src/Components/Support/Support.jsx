import React from 'react';
import './Support.css'
import { Link } from 'react-router-dom';

const Support = () => {
    return (
        <div className='sport'>
            <div className='sup'><h2>ACN SUPPORT CENTER</h2></div>
            <div className='formss'>
                <form action="/search" method="get">
                    <input type="text" placeholder="Search..." name="q" />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div>
                <div className="box22">
                    <img src="https://i.postimg.cc/DZfv5PNw/Capture.png" alt="" />
                    <h3>Knowledge Base</h3>
                    <p>Browse through our collection of articles, user guides and FAQs.</p>
                </div>
                <div className="box22">
                    <img src="https://i.postimg.cc/fTk4zTpy/Capture.png" alt="" />
                    <h3>Tickets</h3>
                    <p>View your previous tickets; know their statuses and solutions.</p>
                </div>
                <div className="box22">
                    <h3>Still can’t find an answer?</h3>
                    <p>Send us a ticket and we will get back to you.</p>
                    <Link to='/suport'> <button className='buttt'>Submit a ticket</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Support;