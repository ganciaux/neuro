import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb.js';
import Loading from '../components/Loading.js';
import NeuroServices from '../services/NeuroServices';

const Payments = ({title, model}) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    NeuroServices.getModelList(model)
    .then((result) => {
      setIsLoaded(true);
      setItems(result.data.data);
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    });
  }, [model]);
  
  if (error) {
      return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
      return <Loading/>;
  } else {
      return (
        <div className="neuro-page-top-margin" >
          <Breadcrumb breadcrumb={['Paiements']}/>
          <div className="container"> 
            <div className="row">
                {items.map(item => (
                <div key={item._id}>
                    {item.date} {item.price}
                </div>
                ))}
            </div>
          </div>
        </div>
        );
    }
}

export default Payments;