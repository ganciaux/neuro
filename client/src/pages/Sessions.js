import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb.js';
import Loading from '../components/Loading.js';

const Model = ({title, model}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:5000/api/sessions`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.data.data);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    if (error) {
      return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
      return <Loading/>;
  } else {
      return (
        <div className="neuro-page-top-margin" >
          <Breadcrumb breadcrumb={['Rendez-vous']}/>
          <div className="container"> 
            <div className="row">
                {items.map(item => (
                <div key={item._id}>
                    {item.date}
                </div>
                ))}
            </div>
          </div>
        </div>
        );
    }
}

export default Model;