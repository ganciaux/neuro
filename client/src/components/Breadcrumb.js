
import React from 'react';

const Breadcrumb = ({breadcrumb}) => {

    return (
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/"><img className="neuro-icon" src="/images/home.png" alt="Tableau de bord"/></a></li>
            {breadcrumb.map((item, index) => (
                <li key={index} className="breadcrumb-item">{item}</li>
            ))}
        </ol>
    );
}

export default Breadcrumb;
