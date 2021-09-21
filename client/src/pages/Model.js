import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb.js';
import Loading from '../components/Loading.js';
import ClientsCard from '../components/ClientsCard.js';
import PaymentsCard from '../components/PaymentsCard.js';
import NeuroServices from '../services/NeuroServices';
import PageNotFound from './PageNotFound.js';

const Model = ({model, label}) => {

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
          <div className="neuro-top-margin" >
            <Breadcrumb breadcrumb={[label]}/>
              {
                { 'clients': <ClientsCard clients={items}/>,
                'payments': <PaymentsCard payments={items}/>,
                'sessions': <div>Sessions todo</div>
                }[model] || <PageNotFound/>
              }
          </div>
        );
    }

   
}

export default Model;