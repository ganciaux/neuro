import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb.js';
import Loading from '../components/Loading.js';
import NeuroServices from '../services/NeuroServices';

const ClientsDetails = ({model, match}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);

    useEffect(() => {
      NeuroServices.getModel(model,match.params.id )
      .then((result) => {
        setIsLoaded(true);
        setItem(result.data);
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
            <Breadcrumb breadcrumb={['Patients', 'Details']}/>
            <div>{item._name}</div>
          </div>
        );
    }
}

export default ClientsDetails;