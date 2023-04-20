import React, { useEffect, useState } from 'react';
import './Admin.css'

const Admin = () => {
    const [image, setImage] = useState([])
    useEffect(() => {
        const existingData = localStorage.getItem('myData') || '[]';
        const parsedData = JSON.parse(existingData);
        setImage(parsedData)
    }, [])


    const [user, setUser] = useState([])
    useEffect(() => {
        const existingData = localStorage.getItem('userDetles') || '[]';
        const parsedData = JSON.parse(existingData);
        setUser(parsedData)
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
            {
                user.map((img, i) => (
                    <div key={i}>
                        <div className='admin'>
                            <div className='admin-container'>
                                <ol><h1>User Details</h1>
                                    <li>Email :{img.Email}</li>
                                    <li>Acn: {img.Acn}</li>
                                    <li>Name:{img.Name}</li>
                                    <li>Polygon:{img.Polygon}</li>
                                    <li>Refer:{img.Refer}</li>
                                    <li>Talygram:{img.Talygram}</li>
                                    <li>Talygram2:{img.Talygram2}</li>
                                    <li>Tweter:{img.Tweter}</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Admin;