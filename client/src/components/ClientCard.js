
import React from 'react';
//import formatDate from '../helpers/format-date';
//import formatType from '../helpers/format-type';

const ClientCard = ({client}) => {

    return (
        <div className="col-6 col-sm-4">
            <div className="card text-white bg-secondary mb-3">
                <div className="card-header"><a href={`clients/${client.slug}`}>{client._name}</a></div>
                <div className="card-body">
                    {/*<h4 className="card-title">Secondary card title</h4>*/}
                    <p className="card-text">
                        <span>rdv: prochain rdv</span>
                        <span>rdv: dernier rdv<span className="badge bg-primary rounded-pill">2/4</span></span>
                        <span>status paiment</span>
                        <span>commande en cours</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
  
export default ClientCard;