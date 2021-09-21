
import React from 'react';
//import formatDate from '../helpers/format-date';
//import formatType from '../helpers/format-type';
import PaymentsFormSearch from '../components/PaymentsCard.js';

const PaymentsCard = ({payments}) => {

    return (
        <div className="container"> 
            <div className="row">
                <PaymentsFormSearch></PaymentsFormSearch>
            </div>
        <div className="row">
        {
            payments.map(payment => (
                <div key={payment._id} className="col-6 col-sm-4">
                    <div className="card text-white bg-secondary mb-3">
                        <div className="card-header"><a href={`Payments/${payment._id}`}>Client ? {payment.date} / {payment.price}</a></div>
                        <div className="card-body">
                            {/*<h4 className="card-title">Secondary card title</h4>*/}
                            <p className="card-text">
                                <span>Commande</span><br/>
                                <span>Total</span><br/>
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
  
export default PaymentsCard;