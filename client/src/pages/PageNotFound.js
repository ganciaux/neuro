import React from 'react';
import { Link } from 'react-router-dom';
  
const PageNotFound = () => {
  
  return (
    <div className="neuro-page-top-margin" >
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active">Erreur</li>
        </ol>
      <h1>Hey, cette page n'existe pas !</h1> 
      <Link to="/">
        Retourner à l'accueil
      </Link>
    </div>
  );
}
  
export default PageNotFound;