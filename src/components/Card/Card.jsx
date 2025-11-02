import React from 'react';

const Card = ({ title, children }) => (
    <div className="card">
        <h2>{title}</h2>
        <div className="card-content">
            {children}
        </div>
    </div>
);

export default Card;