import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb.js';
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ClientCard from '../components/ClientsCard'

function Clients() {
  const [url, setUrl] = useState("http://localhost:5000/api/clients")
  const fetchClients = () => fetch(url).then((res) => res.json());

  const { isLoading, error, data, isFetching } = useQuery(["user", { url }], fetchClients);

  const sortByAlpha = () => {
    setUrl("http://localhost:5000/api/clients/?limit=2");
  }

  const sortBySession = () => {
    setUrl("http://localhost:5000/api/clients/?limit=1");
  }
  
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
      <div className="container"> 
        <div className="neuro-btn-list">
        <button type="button" className="btn btn-primary neuro-btn" onClick={ sortByAlpha}>Alphabéthique</button>
            <button type="button" className="btn btn-primary neuro-btn" onClick={ sortBySession}>Rendez-vous</button>
        </div>
        <div className="row">
        {
            data.data.data.map(client => (
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
      <div>{isFetching ? "Updating..." : ""}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

export default Clients;