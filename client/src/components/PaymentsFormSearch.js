
import React from 'react';
//import formatDate from '../helpers/format-date';
//import formatType from '../helpers/format-type';

const PaymentsFormSearch = () => {

    return (
        <form className="form-inline">
            <div className="form-group mb-2">
                <label for="clientName" className="sr-only">Email</label>
                <input type="text" readonly className="form-control-plaintext" id="clientName" value=""/>
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" className="sr-only">Password</label>
                <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Chercher</button>
        </form>
    );
}
  
export default PaymentsFormSearch;