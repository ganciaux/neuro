import React, { useEffect, useState } from 'react';
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
    }, []);
  
    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
          <div className="neuro-page-top-margin" >
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active">Paiements</li>
            </ol>
            <ul>
                {items.map(item => (
                <li key={item._id}>
                    {item.date} {item.price}
                </li>
                ))}
            </ul>
        </div>
        
        );
    }

   
}

export default Payments;