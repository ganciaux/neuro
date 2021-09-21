import React from 'react';
import Breadcrumb from '../components/Breadcrumb.js';

const PageNotFound = () => {
  
  return (
    <div className="neuro-page-top-margin" >
      <Breadcrumb breadcrumb={['Erreur']}/>
      <h1>Hey, cette page n'existe pas !</h1> 
    </div>
  );
}
  
export default PageNotFound;