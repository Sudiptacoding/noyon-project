import React, { useEffect, useState } from 'react';

const Admin = () => {
    const [admin, setAdmin] = useState([])
    useEffect(() => {
        fetch('https://shy-pear-bighorn-sheep-coat.cyclic.app/alluser')
            .then(req => req.json())
            .then(data => {
                setAdmin(data)
            })
    }, [])
    return (
        <div>
            {
                admin.map((data, i) => (
                    <div key={i}>
                        <div><h1>{data.Date}</h1></div>
                        <div><img src={data.Fonturl} alt="" /></div>
                        <div><img src={data.Backurl} alt="" /></div>
                        <div><img src={data.Fullurl} alt="" /></div>
                        <div><h4>{data.Acn}</h4></div>
                        <div><h4>{data.Email}</h4></div>
                        <div><h4>{data.Name}</h4></div>
                        <div><h4>{data.Polygon}</h4></div>
                        <div><h4>{data.Talygram}</h4></div>
                        <div><h4>{data.Talygram2}</h4></div>
                        <div><h4>{data.Tweter}</h4></div>
                    </div>
                ))
            }
        </div>
    );
};

export default Admin;