import React, { useEffect, useState } from 'react';
import './Admin.css'

const Admin = () => {
    const [image, setImage] = useState([])
    useEffect(() => {
        const existingData = localStorage.getItem('myData') || '[]';
        const parsedData = JSON.parse(existingData);
        setImage(parsedData)
    }, [])
    return (
        <div>
            {
                image.map((img, i) => (
                    <div key={i}>
                        <div className='admin'>
                            <div className='admin-container'>
                                <h1>{img.Date}</h1>
                                <img src={img.Fonturl} alt="" />
                                <img src={img.Backurl} alt="" />
                                <img src={img.Fullurl} alt="" />
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Admin;