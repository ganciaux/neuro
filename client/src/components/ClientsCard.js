
import React from 'react';
//import formatDate from '../helpers/format-date';
//import formatType from '../helpers/format-type';

const ClientsCard = ({clients}) => {

    return (
        <div className="container"> 
            <div className="neuro-btn-list">
                    <button type="button" className="btn btn-primary neuro-btn">Alphabéthique</button>
                    <button type="button" className="btn btn-primary neuro-btn">Rendez-vous</button>
            </div>
        <div className="row">
        {
            clients.map(client => (
                <div key={client._id} className="col-6 col-sm-4">
                    <div className="card text-white bg-secondary mb-3">
                        <div className="card-header"><a href={`clients/${client.slug}`}>{client._name}</a></div>
                        <div className="card-body">
                            {/*<h4 className="card-title">Secondary card title</h4>*/}
                            <p className="card-text">
                                <span>rdv: prochain rdv</span><br/>
                                <span>rdv: dernier rdv <span className="badge bg-primary rounded-pill">2/4</span></span><br/>
                                <span>status paiment</span><br/>
                                <span>commande en cours</span><br/>
                            </p>
                        </div>
                    </div>
                </div>)
            )
        }
                      </div>
            </div>
    );
}
  
export default ClientsCard;