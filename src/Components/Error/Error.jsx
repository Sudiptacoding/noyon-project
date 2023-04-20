import React from 'react';

const Error = () => {
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'white' }}>
            <h1>404</h1>
            <p>Page not found</p><br />
            <p>Too much traffic</p>
            <p>Please ty again later</p>

        </div>
    );
};

export default Error;